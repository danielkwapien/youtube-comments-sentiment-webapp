import os
import json
from dotenv import load_dotenv, dotenv_values
from transformers import pipeline
import googleapiclient.discovery
import googleapiclient.errors
import pandas as pd
from bs4 import BeautifulSoup
import re
import nltk
import contractions
import torch
from transformers import AutoTokenizer, AutoConfig, AutoModelForSequenceClassification
from scipy.special import softmax
import numpy as np
from datetime import datetime, timedelta
config = dotenv_values(".env")  # Load values and create a dictionary
os.environ.update(config)

class CommentAnalysis:

    def __init__(self, model_name):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.config = AutoConfig.from_pretrained(model_name)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_name)
        self.data_sentiment = None
        self.data_raw = None
        self.total_comments = 0

    def obtain_sentiment(self, text):
        encoded_text = self.tokenizer(text, return_tensors="pt")
        with torch.no_grad():
            output = self.model(**encoded_text)
            scores = output[0][0].detach().numpy()
            scores = softmax(scores)
            ranking = np.argsort(scores)
            ranking = ranking[::-1]
            emotion = self.config.id2label[ranking[0]]
            if emotion == 'neutral' and ranking[1]>0.01:
                emotion = self.config.id2label[ranking[1]]
            return emotion

    def call_api(self, videoId):
        load_dotenv()
        api_service_name = 'youtube'
        api_version = 'v3'
        key = os.getenv('YOUTUBE_API_KEY')
        
        print(key)

        youtube = googleapiclient.discovery.build(
            api_service_name, api_version, developerKey=key  
        )

        comments = []
        next_page_token = None
        total_comments = 0

        while True:
            request = youtube.commentThreads().list(
                part='snippet',
                videoId=videoId,
                maxResults=100,
                pageToken=next_page_token
            )

            res = request.execute()

        
            for item in res['items']:
                comment = item['snippet']['topLevelComment']['snippet']
                comments.append([
                    comment['authorDisplayName'],
                    comment['publishedAt'],
                    comment['updatedAt'],
                    comment['likeCount'],
                    comment['textDisplay'],
                    comment['likeCount'],
                    #comment['parentId']
                ])
                total_comments += 1  # Count top-level comment
                total_comments += item['snippet'].get('totalReplyCount', 0)
            next_page_token = res.get('nextPageToken')
            print(next_page_token)
            if not next_page_token:
                print("Total comments:", total_comments)
                break

        self.total_comments = total_comments

        self.data_raw = pd.DataFrame(comments, columns=['author', 'published_at', 'updated_at', 'likeCount', 'text', 'likeCount'])
        
        self.data_sentiment = self.data_raw[self.data_raw['text'].str.len()<300].sample(n=200, ignore_index=True)

    def wrangle_text(self, text):
        soup = BeautifulSoup(text, 'html')
        text_without_tags = soup.get_text(separator='\n')
        url_pattern = r'https?://\S+|www\.\S+'
        text_without_urls = re.sub(url_pattern, '', text_without_tags)
        wrangled_text = contractions.fix(text_without_urls)
        return wrangled_text


    def get_sentiment(self):
        self.data_sentiment['wrangled_text'] = self.data_sentiment['text'].apply(self.wrangle_text)
        self.data_sentiment['sentiment'] = self.data_sentiment['wrangled_text'].apply(self.obtain_sentiment)

    def obtain_proportion(self):
        sentiment_proportion = self.data_sentiment['sentiment'].value_counts(normalize=True)
        return sentiment_proportion

    def get_proportion(self):
        self.get_sentiment()
        proportion = self.obtain_proportion()

        total = sum(proportion)
        threshold = 0.015 * total
        grouped_proportions = {}
        others_sum = 0
        for sentiment, value in proportion.items():
            if value < threshold:
                others_sum += value
            else:
                grouped_proportions[sentiment] = value

        if others_sum > 0:
            grouped_proportions['Others'] = others_sum

        proportion_list = [{'name': sentiment, 'value': value} for sentiment, value in grouped_proportions.items()]
        return json.dumps(proportion_list)

    def get_comments_by_date(self):
        timeline = pd.to_datetime(self.data_raw['published_at']).dt.date.value_counts().sort_index()
        timeline.index = timeline.index.astype(str)
        timeline_json = timeline.to_json(orient='index')
        return json.loads(timeline_json)
    
    def date_range(self, start_date, end_date):
        current_date = datetime.strptime(start_date, "%Y-%m-%d")  
        end_date = datetime.strptime(end_date, "%Y-%m-%d")  
        while current_date <= end_date:
            yield current_date.strftime("%Y-%m-%d")  #
            current_date += timedelta(days=1)
    
    def get_timeline(self):
        comments_by_date = {}

        data = self.get_comments_by_date()

        earliest_date = min(data.keys())
        latest_date = max(data.keys())
        for date in self.date_range(earliest_date, latest_date):
            if date not in data:
                comments_by_date[date] = 0
            else:
                comments_by_date[date] = data[date]

        json_response = [{'date': date, 'count': count} for date, count in comments_by_date.items()]

        return json_response
    
    def get_count(self):
        return self.total_comments
    
class ExtractFeatures:

    def __init__(self, videoId):
        self.videoId = videoId
        self.res = None

    def call_api(self):
        load_dotenv()
        api_service_name = 'youtube'
        api_version = 'v3'
        api_key = os.getenv('YOUTUBE_API_KEY')

        youtube = googleapiclient.discovery.build(
            api_service_name, api_version, developerKey = api_key  
        )

        request = youtube.videos().list(
            part='snippet,statistics',
            id=self.videoId
        )

        self.res = request.execute()

    def get_thumbnail(self):
        item = self.res['items'][0]['snippet']['thumbnails']['medium']
        thumbnail  = [{
            'url': item['url'], 'width': item['width'], 'height': item['height']
            }]
        thumbnail = pd.DataFrame(thumbnail, columns=['url', 'width', 'height'])
        thumbnail_json = thumbnail.to_json(orient='index')
        return json.loads(thumbnail_json)

    def get_title(self):
        item = self.res['items'][0]['snippet']['title']
        title = [{
            'title': item
            }]
        title = pd.DataFrame(title, columns=['title'])
        title_json = title.to_json(orient='index')

        return json.loads(title_json) 
    
    def get_views(self):
        views = self.res['items'][0]['statistics']['viewCount']
        return views