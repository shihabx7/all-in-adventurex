import { useState, useEffect, useRef } from "react";

export default function EventHeroVideo({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // setVideoUrl(videoData.videoUrl? videoData.videoUrl:"/assets/event-page-v2/birthday/birthday-party-hero-video.mp4")
    setVideoUrl(videoData.videoUrl);
    setLoadVideo(true);
  }, []);

  useEffect(() => {
    videoRef.current.play();
  }, [loadVideo]);
  return (
    <video
      ref={videoRef}
      className={
        "no-fullscreen-vid w-full h-full aspect-video object-cover object-center border-[#CB9442] border-2 sm:border-[4px] border-t-[1px] border-r-[1px] sm:border-t-[2px] sm:border-r-[2px] rounded-[10px] md:rounded-[12px]"
      }
      preload="metadata"
      playsInline
      autoPlay
      loop
      muted
      poster={
        videoData && videoData !== null
          ? videoData.poster.url
          : "/assets/event-page-v2/birthday/birthday-party-hero-video.mp4"
      }
    >
      {/*
       <source src={videoData.video.webmUrl} 
      
        <source
        src={
          videoData && videoData !== null
            ? videoData.videoUrl
            : "/assets/event-page-v2/all-in-adventure-birthday-party-hero-video.mp4"
        }
        type={
          videoData && videoData !== null ? videoData.videoType : "video/mp4"
        }
      />
      type={"video/webm"} />
      */}
      {loadVideo && videoUrl !== null && (
        <source
          src={videoUrl}
          type={
            videoData.videoType && videoData.videoType !== null
              ? videoData.videoType
              : "video/mp4"
          }
        />
      )}
    </video>
  );
}
