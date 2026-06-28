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
    <div
      ref={containerRef}
      onMouseEnter={(e) => playVideoOnHover(e)}
      onMouseLeave={(e) => stopVideoOnClick(e)}
      className="egl-video-box hover:cursor-pointer w-full md:w-[300px] lg:w-[380px] xl:w-[450px] 2xl:w-[476px] aspect-[1/1.25] md:aspect-[470/560] relative group overflow-hidden"
    >
      {/*==================================================game video poster=== */}
      {!isPlaying && (
        <div className="w-full h-full absolute top-0 left-0">
          <img
            className="w-full h-full object-cover object-center "
            src={gameCardData.poster.url}
            alt={
              gameCardData.poster.alt
                ? gameCardData.poster.alt
                : "All in Adventures escape game video"
            }
          ></img>
        </div>
      )}

      {/*================================================== game video poster end=== */}
      {/*================================================== game video */}

      <video
        ref={gameVideoRef}
        className={
          "no-fullscreen-vid w-full h-full object-cover object-center "
        }
        preload={isPlaying ? "metadata" : "none"}
        loop
        playsInline
        muted
        poster={isPlaying ? gameCardData.poster.url : ""}
      >
        {isPlaying && (
          <>
            <source src={gameCardData.video.webmUrl} type={"video/webm"} />
            <source src={gameCardData.video.url} type={"video/mp4"} />
          </>
        )}
      </video>

      {/*==================================================game video end*/}
      {/*================================================== play button */}
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
      {/*================================================== play button */}
    </div>
  );
}
