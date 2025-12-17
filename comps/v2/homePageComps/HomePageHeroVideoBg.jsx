import { useState, useEffect, useRef } from "react";
export default function HomePageHeroVideoBg({ videoData }) {
  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);

  //const videoReqUrl = `https://fast.wistia.net/embed/medias/${videoData.video.wistiaMediaId}.json`;

  /* useEffect(() => {
    // Example Wistia JSON URL
  //  console.log("Wistia data :" + videoReqUrl);
    fetch(videoReqUrl)
      .then((res) => res.json())
      .then((data) => {
        // pick highest quality mp4 asset
        const mp4Asset = data.media.assets.find(
          (asset) => asset.type === "hd_mp4_video"
        );
        if (mp4Asset) {
          setVideoUrl(mp4Asset.url);
          videoRef.current.play();
        } else {
          setVideoUrl(videoData.selfUrl);
          videoRef.current.play();
        }
      });
        useEffect(() => {
    videoRef.current.play();
  }, [videoUrl]);
  }, []);*/
  useEffect(() => {
   
    videoRef.current.play();
  }, []);


  return (
    <div className="section-full-screen-bg-video max-w-screen h-full  ">
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
          videoData.videoScreen.url
            ? videoData.videoScreen.url
            : "/assets/home-page/all-in-adventure-hero-video-poster.jpg"
        }
      >
        <source src={videoData.video.webmUrl} type={"video/webm"} />
        <source src={videoData.video.url} type={"video/mp4"} />
      </video>
    </div>
  );
}
