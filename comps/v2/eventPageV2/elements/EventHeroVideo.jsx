import { useState, useEffect, useRef } from "react";

export default function EventHeroVideo({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setVideoUrl(videoData.videoUrl? videoData.videoUrl:"/assets/event-page-v2/birthday/birthday-party-hero-video.mp4")
    setVideoUrl(videoData.videoUrl);
    setLoadVideo(true);
  }, []);

  useEffect(() => {
    videoRef.current.play();
    setIsLoading(false);
  }, [loadVideo]);
  return (
    <div className="w-full h-full relative">
      <div
        className={"loader  w-full h-full rounded-[8px] md:rounded-[10px] z-20"}
      >
        {isLoading && (
          <img
            className="w-full h-full  object-cover object-center rounded-[8px] md:rounded-[10px] transition-opacity duration-600 ease-in"
            src={
              videoData && videoData !== null
                ? videoData.poster.url
                : "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg"
            }
            alt="hero video poster"
          ></img>
        )}
      </div>
      <div>
        <video
          ref={videoRef}
          className={
            "no-fullscreen-vid absolute top-0 left-0 w-full h-full  object-cover object-center aspect-video  rounded-[8px] md:rounded-[10px] z-30"
          }
          preload="metadata"
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
      </div>
    </div>
  );
}
