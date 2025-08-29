import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function GalleryThumCarousel({
  setFullViewItemInfo,
  galleryImages,
  galleryVideo,
}) {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    let netActive = galleryVideo ? 0 : 1;

    setFullViewItemInfo(netActive);
  }, []);
  const setFullviewItem = (e, index, item, type) => {
    let newFullViewItemInfo = {
      itemtype: type,
      url: item.url,
      alt:
        type == "video"
          ? item.videoScreen.alt ||
            "All in adventures escape room gallery video"
          : item.alt || "All in adventures escape room gallery image",
      videoScreenUrl: type == "video" ? item.videoScreen.url : "",
      height:
        type == "video" ? item.videoScreen.height || "" : item.height || "",
      width: type == "video" ? item.videoScreen.width || "" : item.width || "",
    };

    setFullViewItemInfo(newFullViewItemInfo);
    setActiveItem(index);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1240 },
      items: 6,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopsm: {
      breakpoint: { max: 1239, min: 1000 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 999, min: 640 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobilelg: {
      breakpoint: { max: 639, min: 430 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 428, min: 300 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 28,
    },
  };

  return (
    <div className="gallery-thummnail-carousel">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={false}
        // autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition=".5s ease-in-out"
        transitionDuration={500}
        containerClass="thumb-carousel-container "
        // rewindWithAnimation={true}
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="thumb-carousel-dot"
        itemClass="thumb-carousel-item p-[2px]"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {galleryVideo && (
          <div
            key={0}
            className={
              activeItem != 0
                ? "border border-transparent p-[4px] md:p-[6px] rounded-lg group hover:border-[#E0BF62] transition ease-in-out duration-600 "
                : "border border-[#CA9342] p-[4px] md:p-[6px] rounded-lg group hover:border-[#ac7e3a] transition ease-in-out duration-600 "
            }
            onClick={(e) => setFullviewItem(e, 0, galleryVideo, "video")}
          >
            <div className="relative  rounded-lg overflow-hidden group-hover:cursor-pointer">
              <img
                className=" rounded-lg max-w-full"
                alt={galleryVideo.videoScreen.alt}
                src={galleryVideo.videoScreen.url}
              ></img>
              <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center ">
                {galleryVideo && (
                  <button className=" drop-shadow-lg transition-all duration-500 ease-in-out  text-red-600 hover:text-red-700 text-[28px] p-4">
                    <FaRegPlayCircle />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {galleryImages.map((item, index) => {
          return (
            <div
              key={index + 1}
              className={
                activeItem != index + 1
                  ? "border border-transparent p-[4px] md:p-[6px] rounded-lg group hover:border-[#E0BF62] transition ease-in-out duration-600 "
                  : "border border-[#CA9342] p-[4px] md:p-[6px] rounded-lg group hover:border-[#ac7e3a] transition ease-in-out duration-600 "
              }
              onClick={(e) => setFullviewItem(e, index + 1, item, "image")}
            >
              <div className="relative  rounded-lg overflow-hidden group-hover:cursor-pointer">
                <img
                  className=" rounded-lg max-w-full"
                  alt={item.alt}
                  src={item.url}
                ></img>
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center ">
                  {item.videoUrl && (
                    <button className=" drop-shadow-lg transition-all duration-500 ease-in-out  text-red-600 hover:text-red-700 text-[28px] p-4">
                      <FaRegPlayCircle />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/** =========slide 1================ */}
      </Carousel>
    </div>
  );
}
