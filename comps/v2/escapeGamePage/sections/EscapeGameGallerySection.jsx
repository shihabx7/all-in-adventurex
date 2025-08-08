import SectionTitleCenterDark from "../../sharedComs/SectionTitleCenterDark";
import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

export default function EscapeGameGallerySection({ sectionData }) {
  const [fullImage, setFullImage] = useState(sectionData.galleryImages[0]);
  const [imageList, setImageList] = useState(sectionData.galleryImages);

  const showFullView = (e, index) => {
    e.preventDefault();
    setFullImage(imageList[index]);
  };
  return (
    <div className="game-gallery-section  egg-section relative">
      <div className="section-head-lg">
        <div className="section-title">
          <SectionTitleCenterDark title={sectionData.sectionTitle} />
        </div>
        {sectionData.sectionSubTitle && (
          <div
            className="text-[#d9d9d9] sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 max-w-[800px]"
            dangerouslySetInnerHTML={{
              __html: sectionData.sectionSubTitle,
            }}
          ></div>
        )}
      </div>
      {/*=======================================Game gallery */}
      <div className="section-bg  mt-8 xl:mt-12">
        <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1220px] 2xl:max-w-[1240px] mx-auto px-4">
          {/*=======================================gallery main image*/}
          <div className="gallery-img-full-view">
            <img
              className="rounded-lg transition-all duration-500 ease-in-out"
              alt={
                fullImage.alt
                  ? fullImage.alt
                  : "/assets/escape-game/gallery/escape-from-alcatraz-gallery.jpg"
              }
              src={
                fullImage.url
                  ? fullImage.url
                  : "/assets/escape-game/gallery/escape-from-alcatraz-gallery.jpg"
              }
            ></img>
          </div>
          {/*=======================================gallery list image*/}
          <div className="gallery-img-list mt-2 xl:mt-3 flex space-x-1 md:space-x-2 xl:space-x-3">
            {imageList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="gl-img hover:cursor-pointer relative group"
                  onClick={(e) => {
                    showFullView(e, index);
                  }}
                >
                  <img
                    className="rounded-lg"
                    alt={item.alt}
                    src={item.url}
                  ></img>
                  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center ">
                    <button className=" drop-shadow-lg transition-all duration-500 ease-in-out hidden group-hover:block text-red-600 hover:text-red-700 text-[28px] p-4">
                      <FaRegPlayCircle />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
