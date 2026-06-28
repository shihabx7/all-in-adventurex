import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HomePageHeroVideoBg({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [isloadVideo, setIsLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
   
    setVideoUrl(videoData.video.webmUrl)
    setIsLoadVideo(true);
  }, []);

  useEffect(() => {
    videoRef.current.play();
    setIsPlaying(true);
  }, [isloadVideo]);

  useEffect(() => {
    if (isPlaying === true) {
      const timer = setTimeout(() => {
        setIsHide(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="section-full-screen-bg-video  w-full h-full max-w-screen overflow-hidden relative ">
      <div
        className="w-full h-full absolute top-0 left-0 transition-opacity duration-500 ease-linear"
        style={{
          zIndex: !isHide ? "10" : "1",
        }}
      >
        {/*==============================================
        <Image
          src={
            videoData.videoScreen.url
              ? videoData.videoScreen.url
              : "/assets/home-page/all-in-adventure-hero-video-poster.jpg"
          }
          alt={"bg cover"}
          width={1000}
          height={543}
          preload={false}
          style={{
            opacity: !isHide ? ".9" : ".5",
            objectFit: "cover",
          }}
        />
         <img
          className="w-full h-full object-cover object-center transition-opacity duration-500 ease-linear "
          src={
            videoData.videoScreen.url
              ? videoData.videoScreen.url
              : "/assets/home-page/all-in-adventure-hero-video-poster.jpg"
          }
          alt={"bg cover"}
          style={{
            opacity: !isHide ? ".9" : ".5",
          }}
        ></img>
 ================================================================*/}
      </div>

      <video
        ref={videoRef}
        className={
          "no-fullscreen-vid w-full h-full  object-cover object-center transition-all duration-300 ease-in   relative z-10"
        }
        preload={isloadVideo ? "metadata" : "none"}
        playsInline
        autoPlay
        loop
        muted
        poster={
          videoData.videoScreen.url
            ? videoData.videoScreen.url
            : "/assets/home-page/all-in-adventure-hero-video-poster.jpg"
        }
      >
        {isloadVideo && (
          <>
            <source src={videoData.video.webmUrl} type={"video/webm"} />
            <source src={videoData.video.url} type={"video/mp4"} />
          </>
        )}
      </video>
    </div>
  );
}
