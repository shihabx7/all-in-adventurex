import { useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

export default function TestimonialVideo({
  controls,
  setControls,
  itemIndex,
  videoData,
}) {
  const videoRef = useRef(null);

  const toggoleVideo = (e, index) => {
    e.preventDefault();
    if (controls.currentIndex !== index) {
      if (controls.currentVideo !== null && controls.isPlaying) {
        controls.currentVideo.current.pause();
        controls.currentVideo.current.time = 0;
      }
      videoRef.current.play();
      setControls({
        ...controls,
        currentVideo: videoRef,
        isPlaying: true,
        currentIndex: index,
        isShowFull: false,
      });
    } else {
      if (!controls.isPlaying) {
        videoRef.current.play();
        setControls({ ...controls, currentVideo: videoRef, isPlaying: true });
      } else {
        videoRef.current.pause();
        setControls({ ...controls, currentVideo: null, isPlaying: false });
      }
    }
  };
  return (
    <div className="w-full h-full relative group">
      <video
        ref={videoRef}
        id={"rev-video-" + itemIndex}
        className={
          "no-fullscreen-vid w-full h-full  object-cover object-center rounded-[16px]"
        }
        playsInline
        preload="metadata"
        poster={videoData.thumbnail.hasImage ? videoData.thumbnail.url : ""}
      >
        <source src={videoData.videoUrl} type="video/mp4" />
      </video>
      <div className="play-btn w-[48px] h-[48px] absolute top-0 left-0 right-0 bottom-[13%] m-auto  flex justify-center items-center">
        <button
          onClick={(e) => {
            toggoleVideo(e, itemIndex);
          }}
          className="text-[#d9d9d9] hover:text-[#e0bf62] text-[40px] p-4"
        >
          {controls.isPlaying && controls.currentIndex == itemIndex ? (
            <span className="text-[rgba(0,0,0,0.0)] group-hover:text-[#e0bf62] transition-all duration-500 ease-in-out">
              <FaRegPauseCircle />
            </span>
          ) : (
            <span className="drop-shadow-xl/25 group-hover:text-[#e0bf62] transition-all duration-500 ease-in-out">
              <FaRegPlayCircle />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
