'use client';
import React, { useEffect, useState, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartComponent from './chart.jsx'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {

  const [message, setMessage] = useState("Loading...");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/Uk28ec4W4sA").then(
      (response) => response.json()
    ).then(
      (data) => { setMessage(data.gratitude); setData(data) }
    )
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-4xl font-bold text-center">{message}</div>
      {data && <ChartComponent fetchedData={data} />}
    </main>
  );
}
