import os
import json
from fastapi import FastAPI, Path, Request
from fastapi.responses import JSONResponse 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .functions import CommentAnalysis, ExtractFeatures
import uvicorn

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust based on your frontend origin(s)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model for input validation
class AnalysisData(BaseModel):
    url: str

# Route definition
@app.get("/api/{url}", response_model=AnalysisData)
async def analyze_comments(url: str):
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
    return JSONResponse(content=data_json)

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=os.getenv('PORT', 8000)) 
