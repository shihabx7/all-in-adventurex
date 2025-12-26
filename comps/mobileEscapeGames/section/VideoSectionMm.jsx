import { useState, useEffect, useRef } from "react";
import { ImPlay3 } from "react-icons/im";

export default function VideoSectionMm({ sectionData }) {
  const [playVid, setPlayVid] = useState(false);

  const startVid = () => {
    setPlayVid(true);
  };
  return (
    <div className="mbl-game-gallery-section bg-[#FFF9EB]  bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px]  lg:bg-[400px_400px]  ">
      <div className=" egg-section  relative py-16 md:py-20 lg:py-28  overflow-hidden  px-3 md:px-4">
        <div className="section-head-lg     ">
          <div className="section-title  md:max-w-[720px] lg:max-w-[1000px] mx-auto text-center">
            <h2 className="text-[#CA9342] text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase leading-[1.3]">
              SEE THE EXCITEMENT IN ACTION
            </h2>
          </div>
        </div>
        {/*=======================================Game gallery  /assets/mobile-escape-room/brown-paper-bg.jpg */}
        <div className="section-bg  mt-6 md:mt-8 xl:mt-10 3xl:mt-12 ">
          <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1210px] 2xl:max-w-[1230px] mx-auto   ">
            {/*=======================================video screen main image===================*/}
            <div className="bg-[#121212] game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative">
              {!playVid && (
                <div className="vid-tumb absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="vid-thubb-play relative w-full h-full">
                    <div className="w-full ">
                      <img
                        src={
                          "/assets/mobile-escape-room/gallery/mobile-mystery-thumbnail.jpg"
                        }
                        alt={"all in adventures mobile mystery video trailer"}
                      ></img>
                    </div>
                    {/**=========================================play-btn============*/}
                    <div
                      onClick={(e) => {
                        startVid();
                      }}
                      className="cursor-pointer text-[40px] md:text-[60px] lg:text-[72px] vid-play-btn w-[60px] h-[60px] md:w-[104px] md:h-[104px] lg:w-[116px] lg:h-[116px] rounded-full bg-[#000000] text-red-600 z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                      style={{ margin: "auto" }}
                    >
                      <ImPlay3 className="ml-2" />
                    </div>
                    {/**=========================================play-btn===========*/}
                  </div>
                </div>
              )}
              {/**=========================================youtube Video ====================*/}
              {playVid && (
                <iframe
                  className="absolute w-full h-full top-0 left-0"
                  src={
                    "https://www.youtube.com/embed/DHCgAgQb0FE?autoplay=1&rel=0"
                  }
                  title="Treasure Island 1881 // Reality Escape Game"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
          {/*=======================================Game gallery youtubevideo+++ DHCgAgQb0FE +++*/}
        </div>
      </div>
    </div>
  );
}
