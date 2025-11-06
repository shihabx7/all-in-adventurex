import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import SectionTitleCenterDark from "../common/SectionTitleCenterDark";
import PlayMobileGalleryVideo from "./PlayMobileGalleryVideo";
import MobileGalleryThubCarousel from "./MobileGalleryThubCarousel";


export default function MobileEscapeGallery({ sectionData }) {
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
        {/*=======================================Game gallery */}
        <div className="section-bg  mt-6 md:mt-8 xl:mt-10 ">
          <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1210px] 2xl:max-w-[1230px] mx-auto   ">
            {/*=======================================gallery main image*/}
            <div className="bg-[#261B04] rounded-xl px-2 py-3 zm:px-4 zm:py-5 md:px-5 md:py-6 xl:px-6 xl:py-7 ">
              <div className="gallery-img-full-view px-1  rounded-lg">
                {fullViewItem.videoUrl ? (
                  <>
                    <PlayMobileGalleryVideo
                      videoUrl={fullViewItem.videoUrl}
                      videoPoster={fullViewItem.url}
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
              <div className="gallery-img-thumb-carousel mt-3">
                <MobileGalleryThubCarousel
                  imageList={sectionData.galleryImages}
                  setFullViewItem={setFullViewItem}
                />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
