'use client';
import React, { useEffect, useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartComponent from '../components/Chart.jsx'
import Header from '../components/Header.jsx';
import Thumbnail from "@components/Thumbnail.jsx"
import Hero from "@/components/Hero.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {

  const [title, setTitle] = useState("Loading...");
  const [thumbnail, setThumbnail] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [emotions, setEmotions] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/sNMtjs_wQiE").then(
      (response) => response.json()
    ).then(
      (data) => { 
        setTitle(data.title['0'].title); 
        setThumbnail(data.thumbnail['0']);
        setTimeline(data.time);
        setEmotions(data.proportion);
         }
    )
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
