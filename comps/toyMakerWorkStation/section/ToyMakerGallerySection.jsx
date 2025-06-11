import SectionTitleCenterDark from "../../common/SectionTitleCenterDark";
import { useState, useEffect, useRef } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import PlayGalleryVideo from "../PlayGalleryVideo";
export default function ToyMakerGallerySection({ sectionData }) {
  const [fullImage, setFullImage] = useState(sectionData.galleryImages[0]);
  const [imageList, setImageList] = useState(sectionData.galleryImages);

  const showFullView = (e, index) => {
    e.preventDefault();
    setFullImage(imageList[index]);
  };
  return (
    <div className="game-gallery-section  egg-section bg-[#fff9eb] relative py-16  py:pt-20 lg:pt-20 lg:pb-28 xl:pb-28 xl:pt-20 3xl:pt-24 3xl:pb-28  z-20">
      <div className="section-head-lg  px-3">
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
      <div className="section-bg  mt-6 md:mt-8 xl:mt-10">
        <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[990px] xl:max-w-[1220px] 2xl:max-w-[1200px] mx-auto px-4">
          {/*=======================================gallery main image*/}
          <div className="gallery-img-full-view">
            {fullImage.videoUrl ? (
              <>
                <PlayGalleryVideo
                  videoUrl={fullImage.videoUrl}
                  videoPoster={fullImage.url}
                />
              </>
            ) : (
              <img
                className="rounded-lg transition-all duration-500 ease-in-out"
                alt={fullImage.alt}
                src={fullImage.url}
              ></img>
            )}
          </div>
          {/*=======================================gallery list image*/}
          <div className="gallery-img-list mt-2 xl:mt-3 flex justify-between md:justify-center items-center flex-wrap lg:flex-nowrap lg:justify-between space-x-0 md:space-x-2 space-y-0 md:space-y-3 md:space-x-3 lg:space-y-0 lg:space-x-1  xl:space-x-3">
            {imageList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="gl-img hover:cursor-pointer relative group w-[31.5%] md:w-[18.5%] lg:w-[116px]"
                  onClick={(e) => {
                    showFullView(e, index);
                  }}
                >
                  <img
                    className="rounded md:rounded-lg max-w-full my-1 md:my-0 "
                    alt={item.alt}
                    src={item.url}
                  ></img>
                  <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center ">
                    {item.videoUrl && (
                      <button className=" drop-shadow-lg transition-all duration-500 ease-in-out hidden group-hover:block text-red-600 hover:text-red-700 text-[28px] p-4">
                        <FaRegPlayCircle />
                      </button>
                    )}
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
