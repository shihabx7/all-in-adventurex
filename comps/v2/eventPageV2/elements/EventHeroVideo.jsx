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
      }, 3000); // 1000 milliseconds = 1 second

      // Clear timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <>
      <div className={"w-full h-full absolute z-20  bg-gray-900"}>
        <img
          className={
            !isHide
              ? "w-full h-full objcet-cover object-center transition-all duration-300 ease-linear opacity-100"
              : "opacity-90 w-full h-full objcet-cover object-center transition-all duration-300 ease-linear"
          }
          src={
            videoData?.poster.url
              ? videoData.poster.url
              : "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg"
          }
          alt="Hero Video Bg Pattern"
        ></img>
      </div>

      <video
        ref={heroVideoRef}
        className={
          "no-fullscreen-vid event-hero-video w-full h-full  object-cover rounded-[8px] md:rounded-[10px] relative   z-30"
        }
        preload={"auto"}
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
         <source src={videoData?.videoUrl? videoData.videoUrl:"/assets/event-page-v2/birthday/birthday-party-hero-video.mp4"} type={"video/mp4"} />
      </video>
    </>
  );
}
