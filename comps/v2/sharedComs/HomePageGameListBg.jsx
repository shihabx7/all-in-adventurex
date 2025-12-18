import { useEffect, useRef } from "react";

export default function HomePageGameListBg({ children }) {
  const compVideoRef = useRef();
  useEffect(() => {
    compVideoRef.current.play();
  }, []);

  return (
    <div className="escape-game-list-section-wrapper bg-[#090909]">
      <div className="dt-section-wrapper pt-20 pb-16 zm:pt-[7.5rem]  md:py-20 lg:py-24 xl:py-28  relative">
        {/*===================================================maze*/}
        <div className="animated-maze-bg w-full absolute top-0 left-0 right-0 mx-auto ">
          {/*==========
          <div className="maze-img relative w-full overflow-hidden hidden">
            <img
              className="w-[100%]  object-cover  object-center scale-105  lg:scale-110"
              saltrc="all in adevntures escape game maze"
              src="/assets/home-page/all-in-adevntures-escape-game-maze.svg"
            ></img>
            <div className="mage-overlay bg-gradient-to-t from-[rgba(9,9,9,1)] from-50%   via-[rgba(9,9,9,.99)]  to-[rgba(9,9,9,.88)] absolute w-full h-full top-0 left-0 z-10"></div>
          </div>
          =========================================maze img*/}
          {/*===================================================video*/}
          <div className="maze-video relative w-full overflow-x-hidden bg-gray-400">
            <video
              ref={compVideoRef}
              className={
                "no-fullscreen-vid w-full object-cover object-center scale-110  md:scale-[1.15] 2xl:scale-[1.2]"
              }
              preload="metadata"
              playsInline
              autoPlay
              loop
              muted
              poster={
                "/assets/home-page/all-in-adventure-escape-room-compass-mystery-poster.jpg"
              }
            >
              <source
                src={
                  "/assets/home-page/all-in-adventures-escape-room-mystery-compass.webm"
                }
                type={"video/webm"}
              />
              <source
                src={
                  "/assets/home-page/all-in-adventures-escape-room-mystery-compass.mp4"
                }
                type={"video/mp4"}
              />
            </video>
            <div className="mage-overlay bg-gradient-to-t from-[rgba(9,9,9,.08)] from-50%   via-[rgba(9,9,9,.35)]  to-[rgba(9,9,9,.66)] absolute w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
        <div className="section-content flex flex-col space-y-16 md:spcae-y-20 lg:space-y-20 xl:space-y-24  relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
}
