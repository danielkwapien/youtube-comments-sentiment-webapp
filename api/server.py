import os
import json
from flask import Flask
from flask import jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from functions import CommentAnalysis, ExtractFeatures


app = Flask(__name__)
api = Api(app)
CORS(app)

parser = reqparse.RequestParser()
parser.add_argument('task')
class Url(Resource):
    
    def get(self, url):
        analyzer = CommentAnalysis("SamLowe/roberta-base-go_emotions")
        analyzer.call_api(url)
        video = ExtractFeatures(url)
        proportion_data = analyzer.get_proportion()
        proportion_json = json.loads(proportion_data)

        date_json = analyzer.get_timeline()

        comment_count = analyzer.get_count()

        video.call_api()
        thumbnail_json = video.get_thumbnail()
        title_json = video.get_title()
        views = video.get_views()

        data_json = {
            'proportion': proportion_json,
            'count': comment_count,
            'time': date_json,
            'thumbnail': thumbnail_json,
            'title': title_json,
            'views': views
        }
        return jsonify(data_json)
    
api.add_resource(Url, '/api/<string:url>')

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT'))