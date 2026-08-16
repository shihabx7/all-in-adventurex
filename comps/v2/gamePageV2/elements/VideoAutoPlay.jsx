import { useRef, useState, useEffect } from "react";
import { Suspense } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

export default function VideoAutoPlay({ gameVideo, gamePoster }) {
  const gameVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const vUrl =
      gameVideo && gameVideo.url
        ? gameVideo.url
        : "/assets/escape-games-v2/escape-from-alcatraz/escape-from-alcatraz-game-card.webm";

    setVideoUrl(vUrl);
  }, []);
  useEffect(() => {
    gameVideoRef.current.play();
    setIsPlaying(true);
  }, [videoUrl]);
  {
    /*===================================
  const gameVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStop, setStop] = useState(false);
  // ===================================video control function
  const playVideoOnHover = (e) => {
    e.preventDefault();
    if (currentVideoRef !== null && currentVideoRef !== gameVideoRef) {
      currentVideoRef.current.pause();
      currentVideoRef.current.currentTime = 0;
      setCurrentVideoRef(gameVideoRef);
    }

    gameVideoRef.current.play();
    setIsPlaying(true);

    // setCurrentVideoRef(gameVideoRef);
  };
  const playVideoOnClick = (e) => {
    e.preventDefault();
    if (currentVideoRef !== null && currentVideoRef !== gameVideoRef) {
      currentVideoRef.current.pause();
      currentVideoRef.current.currentTime = 0;
      setCurrentVideoRef(gameVideoRef);
    }

    gameVideoRef.current.play();
    setIsPlaying(true);
  };
  const stopVideoOnClick = (e) => {
    e.preventDefault();

    gameVideoRef.current.pause();
    gameVideoRef.current.currentTime = 0;
    setIsPlaying(false);
  };
  // ===================================video control function end
  // ===============================================stop video on touch out side
  const handleOutsideClick = () => {
    if (isPlaying && gameVideoRef.current) {
      gameVideoRef.current.pause(); // Pause the video
      gameVideoRef.current.currentTime = 0; // Optional: reset playback to the start
      setIsPlaying(false); // Update state to reflect paused status
    }
  };
  const containerRef = useOnClickOutside(handleOutsideClick); 
  ===== */
  }
  // ===============================================stop video on touch out side
  //onTouchEnd={(e) => stopVideoOnClick(e)}  md:w-[300px] lg:w-[380px] xl:w-[450px] 2xl:w-[476px]
  return (
    <div className="egl-video-box hover:cursor-pointer w-full max-w-full aspect-[470/560] relative">
      {/*==================================================game video poster=== 
      {!isPlaying && ( */}
      <div className="w-full h-full absolute top-0 left-0 z-10 ">
        {!isPlaying && (
          <img
            className="w-full h-full object-cover object-center inline-block "
            src={
              gamePoster && gamePoster.url
                ? gamePoster.url
                : "/assets/escape-games-v2/escape-from-alcatraz/escape-from-alcatraz-game-card-poster.jpg"
            }
            alt={
              gamePoster && gamePoster.alt
                ? gamePoster.alt
                : "All in Adventures escape game video"
            }
          ></img>
        )}
      </div>

      {/*================================================= game video poster === */}

      <video
        ref={gameVideoRef}
        className={
          "no-fullscreen-vid bg-transparent w-full h-full object-cover object-center  relative z-20 "
        }
        preload={isPlaying ? "metadata" : "none"}
        loop
        playsInline
        muted
        poster={
          gamePoster && gamePoster.url
            ? gamePoster.url
            : "/assets/escape-games-v2/escape-from-alcatraz/escape-from-alcatraz-game-card-poster.jpg"
        }
      >
        {videoUrl && videoUrl != null && (
          <>
            <source src={videoUrl} type={"video/webm"} />
          </>
        )}
      </video>

      {/*================================================== =================================================game video end*/}
      {/*================================================== play button   <source src={gameCardData.video.url} type={"video/mp4"} />
      <div className="absolute bottom-[26px] right-[24px] md:bottom-[30px] md:right-[30px] xl:bottom-[36px] xl:right-[36px] z-20">
        {isPlaying ? (
          <button
            onClick={(e) => stopVideoOnClick(e)}
            className="text-[18px] xl:text-[20px] flex justify-between items-center  p-3 xl:p-4 text-center bg-red-600 text-[#d9d9d9] rounded-full"
          >
            <span>
              <FaPause />
            </span>
          </button>
        ) : (
          <button
            onClick={(e) => playVideoOnClick(e)}
            className=" text-[18px] xl:text-[20px] flex justify-between items-center p-3 xl:p-4 text-center bg-red-600 text-[#d9d9d9] rounded-full"
          >
            <span>
              <FaPlay />
            </span>
          </button>
        )}
      </div>
      ================================================== play button */}
    </div>
  );
}
