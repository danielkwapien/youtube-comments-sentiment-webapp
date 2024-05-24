import React, { useState, useContext } from "react";
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
    <WavyBackground className="max-w-4xl mx-auto">
    <div className="relative isolate pt-14 dark:bg-black">
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Uncover YouTube Comments
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Analyze youtube comments with ease and understand your {" "}
                <span className="text-indigo-600 dark:text-indigo-500">
                  audience
                </span>
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
      </WavyBackground>
  )
}

export default Hero