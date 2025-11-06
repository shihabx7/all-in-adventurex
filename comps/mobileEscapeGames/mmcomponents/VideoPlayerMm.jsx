import {  useState,useEffect,useRef } from "react";

export default function VideoPlayerMm({ videoUrl, videoPoster }) {
  const [palyVid,setPlayVid]=useState(false)
  const videoRef = useRef();

  return (
    <div className="w-fullk rounded-lg">
      <video
        ref={videoRef}
        id={"mobile-mystry-video-video"}
        className={
          "w-full  rounded-lg transition-all duration-500 ease-in-out"
        }
        preload="metadata"
        playsInline
        controls
        poster={videoPoster}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
