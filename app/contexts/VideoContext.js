// contexts/VideoAnalysisContext.js
import { createContext, useState } from 'react';

const VideoContext = createContext({
  title: '',
  thumbnail: '',
  timeline: [],
  emotions: {},
  isLoading: false,
  analyzeVideo: () => {},
});

export const VideoAnalysisProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [timeline, setTimeline] = useState([]);
  const [emotions, setEmotions] = useState({});
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
    <VideoAnalysisContext.Provider
      value={{
        title,
        thumbnail,
        timeline,
        emotions,
        isLoading,
        analyzeVideo: handleAnalyzeVideo,
      }}
    >
      {children}
    </VideoAnalysisContext.Provider>
  );
};

export default VideoContext;
