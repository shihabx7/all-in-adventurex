import { useState, useEffect, useRef } from "react";

export default function EventHeroVideoV2({ videoData }) {
  const heroVideoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVideoLoad, setIsVideoLoad] = useState(false);
  //const [loadVideo, setLoadVideo] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setVideoUrl(
      videoData.videoUrl
        ? videoData.videoUrl
        : "/assets/event-page-v2/birthday/birthday-party-hero-video.mp4",
    );
    setIsVideoLoad(true);
  }, []);
  useEffect(() => {
    heroVideoRef.current.play();
  }, [isVideoLoad]);
  return (
    <div className="hero-video-auto-play w-full h-full relative">
      <div className="video-poter-bg w-full h-full absolute top-0 left-0 bg-gold rounded-[10px] md:rounded-[13px] border-1 border-l-3 border-b-3 zm:border-2 zm:border-l-4 zm:border-b-4 md:border-[3px] md:border-l-[5px] md:border-b-[5px] lg:border-2 lg:border-l-4 lg:border-b-4 border-gold">
        <img
          className=" w-full h-full object-cover object-center opacity-50 rounded-[8px] md:rounded-[10px]"
          alt={"hero video poster"}
          src={
            videoData?.poster?.url
              ? videoData.poster.url
              : "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg"
          }
        ></img>
      </div>
      <div className=" main-video  w-full h-full absolute top-0 left-0 z-10 rounded-[10px] md:rounded-[13px] border-[1px] border-l-[3px] border-b-[3px] zm:border-2 zm:border-l-[4px] zm:border-b-[4px] md:border-[3px] md:border-l-[5px] md:border-b-[5px] lg:border-2 lg:border-l-4 lg:border-b-4 border-gold ">
        <video
          ref={heroVideoRef}
          className={
            "no-fullscreen-vid event-hero-video w-full h-full  object-cover object-center aspect-video  rounded-[8px] md:rounded-[10px]  z-30"
          }
          preload={isVideoLoad ? "auto" : "none"}
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
          {isVideoLoad && videoUrl !== null && (
            <source
              src={videoData.videoUrl}
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
