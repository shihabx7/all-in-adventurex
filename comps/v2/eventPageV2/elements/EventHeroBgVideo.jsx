import { useState, useEffect, useRef } from "react";

export default function EventHeroBgVideo({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

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
      {/* <source src={videoData.video.webmUrl} type={"video/webm"} />*/}
      <source
        src={"/assets/all-in-rewards/important-note/important-note-bg.mp4"}
        type={"video/mp4"}
      />
    </video>
  );
}
