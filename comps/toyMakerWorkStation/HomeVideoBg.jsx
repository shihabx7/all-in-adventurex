import { useEffect, useRef } from "react";
export default function HomeVideoBg({ videoBgData }) {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="w-full min-h-[370px] zm:min-h-[380px] sm:min-h-0">
      <video
        ref={videoRef}
        id={"hero-bg-video"}
        className={
          "no-fullscreen-vid w-full min-h-[376px] zm:min-h-[380px] sm:min-h-0 object-cover object-center rounded-lg transition-all duration-500 ease-in-out"
        }
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
        poster={videoBgData.videoScreen.url}
      >
        <source src={videoBgData.videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
