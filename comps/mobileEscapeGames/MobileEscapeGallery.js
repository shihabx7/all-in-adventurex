import { useState, useEffect, useRef } from "react";
import { ImPlay3 } from "react-icons/im";
import { FaRegPlayCircle } from "react-icons/fa";
import SectionTitleCenterDark from "../common/SectionTitleCenterDark";
import PlayMobileGalleryVideo from "./PlayMobileGalleryVideo";
import MobileGalleryThubCarousel from "./MobileGalleryThubCarousel";

export default function MobileEscapeGallery({ sectionData }) {
  const [playVid, setPlayVid] = useState(false);

  const startVid = () => {
    setPlayVid(true);
  };
  return (
    <div className="mbl-game-gallery-section bg-[#FFF9EB]  bg-[url('/assets/mobile-escape-room/paper-text-bg.jpg')] bg-center bg-cover  ">
      <div className=" egg-section  relative py-16 md:py-20 lg:py-28  overflow-hidden  px-3 md:px-4">
        <div className="section-head-lg     ">
          <div className="section-title">
            <SectionTitleCenterDark title={sectionData.sectionTitle} />
          </div>
          {sectionData.sectionSubTitle && (
            <div
              className="text-[#2e2e2e] sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 max-w-[500px] lg:max-w-[700px] mx-auto text-center"
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          )}
        </div>

        <div className="section-bg  mt-6 md:mt-8 xl:mt-10 ">
          {/*======================================= youtubevideo+++ DHCgAgQb0FE +++*/}
          <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1210px] 2xl:max-w-[1230px] mx-auto   ">
            {/*=======================================video screen main image*/}
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
