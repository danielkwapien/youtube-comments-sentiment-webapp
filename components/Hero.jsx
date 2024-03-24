import React, { useState, useContext } from "react";
import { Input } from "@components/ui/input.jsx";
import { Button } from "@/components/ui/button.jsx";

function Hero() {

    const [isLoading, setIsLoading] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const handleInputChange = (event) => {
        setVideoUrl(event.target.value);
      };

    function extractVideoId(url) {
        // Regular expression to match different YouTube URL formats
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:(?:watch\?v=)?([^#&?]+))/;
        const match = url.match(regex);
      
        return match && match[1];
      }
    
      const analyzeVideo = async (url) => {
        setIsLoading(true);
    
        try {
          const videoId = extractVideoId(videoUrl);
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
    
      }

  return (
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
                <Button onClick={analyzeVideo} disabled={isLoading} >
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