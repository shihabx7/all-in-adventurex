import { useState, useEffect, useRef } from "react";

export default function EventHeroVideo({ videoData }) {
  const heroVideoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  //const [loadVideo, setLoadVideo] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setVideoUrl(videoData.videoUrl? videoData.videoUrl:"/assets/event-page-v2/birthday/birthday-party-hero-video.mp4")
    heroVideoRef.current.play();
  }, []);

  return (
   
      <video
        ref={heroVideoRef}
        className={
          "no-fullscreen-vid event-hero-video w-full h-full  object-cover object-center rounded-[8px] md:rounded-[10px] z-30"
        }
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        poster={
          videoData && videoData !== null
            ? videoData.poster.url
            : "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg"
        }
      >
        <source
          src={videoData.videoUrl}
          type={
            videoData.videoType && videoData.videoType !== null
              ? videoData.videoType
              : "video/mp4"
          }
        />
      </video>

  );
}
