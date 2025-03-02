import React, { useState, useContext } from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Input } from "@components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";
import { VideoContext } from "../app/page.js";
import { WavyBackground } from "@components/ui/wavy-background.jsx";

function Hero() {

    const { isLoading, analyzeVideo } = useContext(VideoContext);
    const [videoUrl, setVideoUrl] = useState("");

    const handleInputChange = (event) => {
        setVideoUrl(event.target.value);
      };

    const handleAnalyzeButtonClick = () => {
        analyzeVideo(videoUrl);
      };

  return (
    <div className="relative isolate pt-14 dark:bg-black">
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Uncover YouTube Comments
              </h1>
              <p className="mt-6 text-lg font-semibold leading-10 dark:text-gray-300">
                Analyze youtube comments with ease and <Highlight>understand your audience</Highlight>.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Input type="text" placeholder="Enter a youtube video link" value={videoUrl} onChange={handleInputChange} />
                <Button onClick={handleAnalyzeButtonClick} disabled={isLoading} >
                    Analyze video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Hero