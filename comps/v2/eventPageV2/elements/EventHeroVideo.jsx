import { useState, useEffect, useRef } from "react";

export default function EventHeroVideo({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <video
      ref={videoRef}
      className={
        "no-fullscreen-vid w-full h-full aspect-video object-cover object-center border-[#CB9442] border-[4px] border-t-[2px] border-r-[2px] rounded-[12px]"
      }
      preload="metadata"
      playsInline
      autoPlay
      loop
      muted
      poster={
        videoData && videoData !== null
          ? videoData.poster.url
          : "/assets/event-page-v2/birthday/birthday-party-hero-video.mp4"
      }
    >
      {/* <source src={videoData.video.webmUrl} type={"video/webm"} />*/}
      <source
        src={
          videoData && videoData !== null
            ? videoData.videoUrl
            : "/assets/event-page-v2/all-in-adventure-birthday-party-hero-video.mp4"
        }
        type={
          videoData && videoData !== null ? videoData.videoType : "video/mp4"
        }
      />
    </video>
  );
}
