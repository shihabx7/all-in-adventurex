import { useState, useEffect, useRef } from "react";
import VideoPlayerMm from "../mmcomponents/VideoPlayerMm";
import { newUpdateData } from "../../../lib/tempData/mobileEscapeTempData";

export default function VideoSectionMm({ sectionData }) {
  const [fullImage, setFullImage] = useState(sectionData.galleryImages[0]);
  const [fullViewItem, setFullViewItem] = useState(
    sectionData.galleryImages[0]
  );
  const [imageList, setImageList] = useState(sectionData.galleryImages);

  const showFullView = (e, index) => {
    e.preventDefault();
    setFullImage(imageList[index]);
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
        <div className="section-bg  mt-6 md:mt-8 xl:mt-8 ">
          <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1100px] 2xl:max-w-[1160px] mx-auto   ">
            {/*=======================================gallery main image*/}
            <div className="rounded-xl  zm:px-2">
              <div className="gallery-img-full-view  rounded-lg">
                {fullViewItem.videoUrl ? (
                  <>
                    <VideoPlayerMm
                      videoUrl={newUpdateData.videoSectionData.videoUrl}
                      videoPoster={newUpdateData.videoSectionData.url}
                    />
                  </>
                ) : (
                  <img
                    className="rounded-lg transition-all duration-500 ease-in-out"
                    alt={fullViewItem.alt}
                    src={fullViewItem.url}
                  ></img>
                )}
              </div>
              {/*=======================================gallery thumbnail carousel image*/}
              {/*=======================================gallery list image*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
