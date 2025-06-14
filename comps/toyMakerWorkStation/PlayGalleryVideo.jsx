import { useEffect, useRef } from "react";
export default function PlayGalleryVideo({ videoUrl, videoPoster }) {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="w-fullk rounded-lg">
      <video
        ref={videoRef}
        id={"hero-bg-video"}
        className={
          " w-full  rounded-lg transition-all duration-500 ease-in-out"
        }
        preload="metadata"
        playsInline
        controls
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
