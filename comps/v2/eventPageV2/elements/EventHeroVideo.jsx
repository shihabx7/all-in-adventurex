import { useState, useEffect, useRef } from "react";

export default function EventHeroVideo({ videoData }) {
  const heroVideoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoType, setVideoType] = useState(null);
  const [isVideoLoad, setIsVideoLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    const vUrl = videoData.videoUrl
      ? videoData.videoUrl
      : "/assets/event-page-v2/birthday/birthday-party-hero-video.mp4";

    const vType = videoData.videoType ? videoData.videoType : "video/mp4";

    setVideoUrl(vUrl);
    setVideoType(vType);
    setIsVideoLoad(true);
  }, []);

  useEffect(() => {
    heroVideoRef.current.play();
    setIsPlaying(true);
  }, [isVideoLoad]);

  useEffect(() => {
    // Only trigger the delay after the initial render
    if (isPlaying === true) {
      const timer = setTimeout(() => {
        setIsHide(true);
      }, 2000); // 1000 milliseconds = 1 second

      // Clear timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="w-full h-full relative">
      <div className={"w-full h-full absolute  bg-[#090909]"}>
        <img
          className={
            " w-full h-full absolute  objcet-cover object-center transition-opacity duration-500 ease-linear z-40"
          }
          style={{
            opacity: !isHide ? "1" : ".1",
          }}
          src={
            videoData?.poster.url
              ? videoData.poster.url
              : "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg"
          }
          alt="video-poster"
        ></img>
      </div>

      <video
        ref={heroVideoRef}
        className={
          "no-fullscreen-vid event-hero-video w-full h-full  object-cover rounded-[8px] md:rounded-[10px] relative transition-opacity duration-300 ease-linear  z-30"
        }
        preload={"metadata"}
        playsInline
        autoPlay
        loop
        muted
        poster={
          videoData?.poster?.url
            ? videoData.poster.url
            : "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg"
        }
      >
        {isVideoLoad && (
          <source
            src={
              videoData?.videoUrl
                ? videoData.videoUrl
                : "/assets/event-page-v2/birthday/birthday-party-hero-video.mp4"
            }
            type={videoData?.videoType ? videoData.videoType : "video/mp4"}
          />
        )}
      </video>
    </div>
  );
}
