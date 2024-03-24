'use client';
import React, { useEffect, useState, useRef, useContext} from "react";
import { VideoContext } from "@contexts/VideoContext.js";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartComponent from '../components/Chart.jsx'
import Header from '../components/Header.jsx';
import Thumbnail from "@components/Thumbnail.jsx"
import Hero from "@/components/Hero.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("Loading...");
  const [thumbnail, setThumbnail] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [emotions, setEmotions] = useState(null);

  useEffect(() => {
    
  }, []);


  return (
    <main className="">
      <Header />
      <Hero />
      {thumbnail && <Thumbnail src={thumbnail} alt={title} />}
      {emotions && <ChartComponent fetchedData={emotions} />}
    </main>
  );
}
