import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function EscapeGameListVideo({
  videoData,
  currentVideoRef,
  setCurrentVideoRef,
}) {
  const gameVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStop, setStop] = useState(false);

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
  return (
    <div
      onMouseEnter={(e) => playVideoOnHover(e)}
      onMouseLeave={(e) => stopVideoOnClick(e)}
      className="egl-video-box hover:cursor-pointer relative group"
    >
      {!isPlaying && (
        <img
          className="w-full absolute left-0 top-0"
          src={videoData.thumbnail}
        ></img>
      )}
      <img></img>
      <video
        ref={gameVideoRef}
        className={"no-fullscreen-vid w-full  object-cover object-center "}
        playsInline
        muted
        preload="metadata"
        poster={videoData.thumbnail}
      >
        <source src={videoData.url} type="video/mp4" />
      </video>
      <div className="absolute bottom-[24px] right-[24px] md:bottom-[30px] md:right-[30px] xl:bottom-[36px] xl:right-[36px]">
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
    </div>
  );
}
