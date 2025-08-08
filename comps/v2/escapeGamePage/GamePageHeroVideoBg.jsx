import { useEffect, useRef } from "react";
export default function GamePageHeroVideoBg({ videoData }) {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="section-full-screen-bg-video max-w-screen h-[78vh] rm:h-[70vh] md:h-[60vh] xl:h-[86vh] bg-black">
      <video
        ref={videoRef}
        id={"hero-bg-video"}
        className={
          "no-fullscreen-vid w-full h-full aspect-video object-cover object-center "
        }
        preload="metadata"
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
        <source
          src={
            videoData.video.url
              ? videoData.video.url
              : "/assets/home-page/all-in-adventure-hero-bg.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
}
