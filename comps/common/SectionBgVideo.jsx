import { useEffect, useRef } from "react";
export default function SectionBgVideo({ videoData }) {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="section-full-screen-bg-video max-w-screen h-[82vh] rm:h-[72vh] md:h-[60vh] xl:h-[86vh] bg-black">
      <video
        ref={videoRef}
        id={"hero-bg-video"}
        className={
          "no-fullscreen-vid w-full h-full aspect-video object-cover object-center "
        }
        preload="none"
        playsInline
        autoPlay
        loop
        muted
        poster={
          videoData.videoScreen.url
            ? videoData.videoScreen.url
            : "/assets/home-page/hero-bg-poster.jpg"
        }
      >
        <source
          src={
            videoData.video.url
              ? videoData.video.url
              : "/assets/home-page/aia-hero-bg.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
}
