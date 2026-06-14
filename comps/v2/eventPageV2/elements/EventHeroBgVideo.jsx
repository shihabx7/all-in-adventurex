import { useState, useEffect, useRef } from "react";

export default function EventHeroBgVideo({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVideoLoad, setIsVideoLoad] = useState(false);

  useEffect(() => {
    // important-note-bg-poster
    setVideoUrl("/assets/all-in-rewards/important-note/important-note-bg.mp4");
    setIsVideoLoad(true);
  }, []);

  useEffect(() => {
    videoRef.current.play();
  }, [isVideoLoad]);
  return (
    <div className="hero-bg-video-play w-full h-full relative">
      <div className="bg-video-poter w-full h-full absolute top-0 left-0">
        <img
          className="w-full h-full object-cover object-center opacity-70"
          alt={"bg poster"}
          src={
            "/assets/all-in-rewards/important-note/important-note-bg-poster.jpg"
          }
        ></img>
      </div>
      <div className="bg-video-poter w-full h-full absolute top-0 left-0 z-10">
        <video
          ref={videoRef}
          className={
            "no-fullscreen-vid w-full h-full aspect-video object-cover object-center "
          }
          preload={isVideoLoad ? "metadata" : "none"}
          playsInline
          autoPlay
          loop
          muted
          poster={
            "/assets/all-in-rewards/important-note/important-note-bg-poster.jpg"
          }
        >
          {/* <source src={videoData.video.webmUrl} type={"video/webm"} />
      
      <source
        src={"/assets/all-in-rewards/important-note/important-note-bg.mp4"}
        type={"video/mp4"}
      />
      
      
      */}
          {isVideoLoad && videoUrl !== null && (
            <source src={videoUrl} type={"video/mp4"} />
          )}
        </video>
      </div>
    </div>
  );
}
