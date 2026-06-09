import { useState, useEffect, useRef } from "react";

export default function EventHeroBgVideo({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // setVideoUrl(videoData.videoUrl? videoData.videoUrl:"/assets/event-page-v2/birthday/birthday-party-hero-video.mp4")
    setVideoUrl("/assets/all-in-rewards/important-note/important-note-bg.mp4");
    setLoadVideo(true);
  }, []);

  useEffect(() => {
    videoRef.current.play();
  }, [loadVideo]);
  return (
    <video
      ref={videoRef}
      className={
        "no-fullscreen-vid w-full h-full aspect-video object-cover object-center "
      }
      preload="metadata"
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
      {loadVideo && videoUrl !== null && (
        <source src={videoUrl} type={"video/mp4"} />
      )}
    </video>
  );
}
