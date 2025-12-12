import { useState, useRef, useEffect } from "react";

const ActivityVideoSelf = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="absolute w-full h-full top-0 left-0">
      <video
        ref={videoRef}
        className={
          "no-fullscreen-vid w-full h-full aspect-video object-cover object-center "
        }
        preload="metadata"
        playsInline
        autoPlay
        controls
        poster={
          "/assets/toymakers-workshop/gallery/toymakers-workshop-youtube-thumbnail.jpg"
        }
      >
        <source
          src={
            "/assets/toymakers-workshop/gallery/toymaker-workshop-youtube.mp4"
          }
          type={"video/mp4"}
        />
      </video>
    </div>
  );
};

export default ActivityVideoSelf;
