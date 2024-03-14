'use client';
import React, { useEffect, useState} from "react";

export default function Home() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home").then(
      (response) => response.json()
    ).then(
      (data) => { setMessage(data.message); }
    );
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-4xl font-bold text-center">{message}</div>
    </main>
  );
}
