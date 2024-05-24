'use client';
import React, { useEffect, useState, useRef, useContext, createContext} from "react";
import axios from 'axios';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartComponent from '@/components/Chart.jsx'
import Header from '../components/Header.jsx';
import Thumbnail from "@components/Thumbnail.jsx"
import Hero from "@components/Hero.jsx";
import EmotionChart from "@/components/EmotionChart.jsx"
import AreaChartHero from "@/components/AreaChart.jsx";
import Dashboard from "@/components/Dashboard.jsx";
import Loading from "@/components/Loading.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export const VideoContext = createContext();

export default function Home() {

  const [title, setTitle] = useState('');
  const [views, setViews] = useState(null);
  const [commentCount, setCommentCount] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [emotions, setEmotions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzeVideo = async (url) => {
    setIsLoading(true);
        try {
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:(?:watch\?v=)?([^#&?]+))/;
            const match = url.match(regex);
            const videoId = match && match[1];
            const response = await fetch(`/api/${videoId}`); 
            const data = await response.json();
            setTitle(data.title['0'].title);
            setViews(data.views);
            setCommentCount(data.count);
            setThumbnail(data.thumbnail['0']);
            setTimeline(data.time);
            setEmotions(data.proportion);  
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
  };

  return (
    <main className="">
      <VideoContext.Provider
      value={{
        title,
        views,
        commentCount,
        thumbnail,
        timeline,
        emotions,
        isLoading,
        analyzeVideo: handleAnalyzeVideo,
      }}
    >
      <Header />
      <Hero />
      {isLoading  && (
        <> 
          {<Loading/>} 
        </>
      )}
      {emotions && !isLoading && <Dashboard />}
      
    </VideoContext.Provider>

      
    </main>
  );
}
