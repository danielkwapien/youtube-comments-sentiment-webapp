'use client';
import React, { useEffect, useState, useRef, useContext, createContext} from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartComponent from '@/components/Chart.jsx'
import Header from '../components/Header.jsx';
import Thumbnail from "@components/Thumbnail.jsx"
import Hero from "@components/Hero.jsx";
import EmotionChart from "@/components/EmotionChart.jsx"
import AreaChartHero from "@/components/AreaChart.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export const VideoContext = createContext();

export default function Home() {

  const [title, setTitle] = useState('');
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
            const response = await fetch(`http://localhost:5000/api/${videoId}`);
            const data = await response.json();
            setTitle(data.title['0'].title);
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
        thumbnail,
        timeline,
        emotions,
        isLoading,
        analyzeVideo: handleAnalyzeVideo,
      }}
    >
      <Header />
      <Hero />
      {thumbnail && <Thumbnail src={thumbnail} alt={title} />}
      {emotions && <EmotionChart/> }
      {timeline && <AreaChartHero/>}
      
    </VideoContext.Provider>

      
    </main>
  );
}
