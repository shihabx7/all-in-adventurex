import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

import SectionTitleCenterDark from "../../sharedComs/SectionTitleCenterDark";
import PlayGalleryVideo from "../PlayGalleryVideo";
import GalleryThumCarousel from "../galleryThumCarousel";

export default function EscapeGameGallerySection({ sectionData }) {
  const [activeItem, setActiveItem] = useState("video");
  const [fullViewItemInfo, setFullViewItemInfo] = useState({
    itemtype: "",
    url: "",
    alt: " ",
    videoScreenUrl: "",
    height: "",
    width: "",
  });
  useEffect(() => {
    let newFullViewItemInfo = {
      itemtype: sectionData.galleryVideo ? "video" : "image",
      url: sectionData.galleryVideo
        ? sectionData.galleryVideo.url
        : sectionData.galleryImages[0].url,
      alt: sectionData.galleryVideo
        ? sectionData.galleryVideo.videoScreen.alt ||
          "All in adventures escape room gallery video"
        : sectionData.galleryImages[0].alt ||
          "All in adventures escape room gallery image",
      videoScreenUrl: sectionData.galleryVideo
        ? sectionData.galleryVideo.videoScreen.url
        : "",
      height: sectionData.galleryVideo
        ? sectionData.galleryVideo.videoScreen.height || ""
        : sectionData.galleryImages[0].height || "",
      width: sectionData.galleryVideo
        ? sectionData.galleryVideo.videoScreen.width || ""
        : sectionData.galleryImages[0].width || "",
    };

    setFullViewItemInfo(newFullViewItemInfo);

    setActiveItem(newFullViewItemInfo.itemtype);
  }, []);

  return (
    <div className="escape-game-gallery-section ">
      <div className=" egg-section  relative   overflow-hidden  px-3 md:px-4">
        <div className="section-head-lg     ">
          <div className="section-title">
            <SectionTitleCenterDark title={sectionData.sectionTitle} />
          </div>
          {sectionData.sectionSubTitle && (
            <div
              className="text-[#E5E7EB] sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 max-w-[500px] md:max-w-[700px] lg:max-w-[860px] mx-auto text-center"
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          )}
        </div>
        {/*=======================================Game gallery */}
        <div className="section-bg  mt-4 md:mt-5 xl:mt-6 ">
          <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1210px] 2xl:max-w-[1230px] mx-auto   ">
            {/*=======================================gallery main image*/}
            <div className=" rounded-xl px-2 py-3 zm:px-4 zm:py-5 md:px-5 md:py-6 xl:px-6 xl:py-7 ">
              <div className="gallery-img-full-view px-1  rounded-lg">
                {fullViewItemInfo.itemtype == "video" && (
                  <>
                    <PlayGalleryVideo
                      videoUrl={fullViewItemInfo.url}
                      videoPoster={fullViewItemInfo.videoScreenUrl}
                    />
                  </>
                )}
                {fullViewItemInfo.itemtype == "image" && (
                  <img
                    className="rounded-lg transition-all duration-500 ease-in-out"
                    alt={fullViewItemInfo.alt}
                    src={fullViewItemInfo.url}
                  ></img>
                )}
              </div>
              {/*=======================================gallery thumbnail carousel image*/}
              {/*=======================================gallery list image*/}
              <div className="gallery-img-thumb-carousel mt-3">
                <GalleryThumCarousel
                  setFullViewItemInfo={setFullViewItemInfo}
                  galleryImages={sectionData.galleryImages}
                  galleryVideo={sectionData.galleryVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
