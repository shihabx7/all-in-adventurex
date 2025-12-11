import { useRef, useState } from "react";
import { Suspense } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

export default function EscapeGameListVideo({
  videoData,
  currentVideoRef,
  setCurrentVideoRef,
  gameCardData,
}) {
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
  // ===============================================stop video on touch out side
  //onTouchEnd={(e) => stopVideoOnClick(e)}
  return (
    <div ref={containerRef}
      onMouseEnter={(e) => playVideoOnHover(e)}
      onMouseLeave={(e) => stopVideoOnClick(e)}
      className="egl-video-box hover:cursor-pointer relative group"
    >
      {/*================================================== game video poster=== */}
      {!isPlaying && (
        <img
          className="w-full absolute left-0 top-0"
          src={gameCardData.poster.url}
          alt={
            gameCardData.poster.alt
              ? gameCardData.poster.alt
              : "All in Adventures escape game video"
          }
        ></img>
      )}
      {/*================================================== game video poster end=== */}
      {/*================================================== game video */}
      <div   className="eg-card-video-container">
        <Suspense fallback={<p>Loading video...</p>}> 
        <video
          ref={gameVideoRef}
          className={
            "no-fullscreen-vid w-full  object-cover object-center "
          }
          preload="metadata"
          loop
          playsInline
          muted
          poster={gameCardData.poster.url}
        >
          <source src={gameCardData.video.webmUrl} type={"video/webm"} />
          <source src={gameCardData.video.url} type={"video/mp4"} />
        </video>
        </Suspense>
      </div>
      {/*==================================================game video end*/}
      {/*================================================== play button */}
      <div className="absolute bottom-[26px] right-[24px] md:bottom-[30px] md:right-[30px] xl:bottom-[36px] xl:right-[36px] z-20">
        {isPlaying ? (
          <button
            onClick={(e) => stopVideoOnClick(e)}
            className="xl:text-[20px] flex justify-between items-center  p-3 xl:p-4 text-center bg-red-600 text-[#d9d9d9] rounded-full"
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
      {/*================================================== play button */}
    </div>
  );
}
