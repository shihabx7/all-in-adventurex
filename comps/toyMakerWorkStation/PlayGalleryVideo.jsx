import { useEffect, useRef } from "react";
export default function PlayGalleryVideo({ videoUrl, videoPoster }) {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="w-full ">
      <video
        ref={videoRef}
        id={"hero-bg-video"}
        className={
          "no-fullscreen-vid w-full h-full aspect-video object-cover object-center rounded-lg transition-all duration-500 ease-in-out"
        }
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
        poster={videoPoster}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
