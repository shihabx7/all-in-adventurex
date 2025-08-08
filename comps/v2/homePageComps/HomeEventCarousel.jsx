import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState, useRef } from "react";

const HomeEventCarousel = ({ eventCarouselList }) => {
  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1200 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1199, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1023, min: 600 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };
  // ==================button action
  const showLocation = (e) => {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const exploreEvent = (e, slug) => {
    e.preventDefault();
    window.location.href = "/events/" + slug;
  };
  //=============================================
  return (
    <div className="aia-new-carousel event-carousel-container">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={false}
        // autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition=".5s ease-in-out"
        transitionDuration={500}
        containerClass="aia-new-carousel-container section-bg-light  home-event-carousel-container pt-5 rm:pt-6 md:pt-7 lg:pt-8 pb-14 sm:pb-16 lg:pb-20"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-[2px] zm:px-1 md:px-[16px] lg:px-[13px] xl:px-[8px] "
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {eventCarouselList.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-[#F6E8CB] rounded-[16px] h-full group  bg-cover relative p-1 zm:p-2 xl:p-3"
            >
              <div className="hec-item-row flex flex-col lg:flex-row spcae-y-3 zm:spcae-y-4 md:space-y-0 md:space-x-3 items-center">
                {/*====================================================================carousel-text */}
                <div className="hec-item-col grow order-2 lg:order-1 px-3 pt-3 pb-5 zm:p-4 md:p-8 lg:py-5 lg:px-4 xl:p-10 mt-4 lg:mt-0">
                  <div className="hec-head">
                    <p className="text-[#374151] font-medium lg:text-lg uppercase">
                      {item.eventType ? item.eventType : "ESCAPE ROOM"}
                    </p>
                    <h4 className="text-[#CA9342] egl-game-title leading-[1.1] font-bold text-[21px] rm:text-[25px] zm:text-[26px] lg:text-[28px] xl:text-[30px]  2xl:text-[32px] uppercase">
                      {item.eventName}
                    </h4>
                  </div>
                  <div
                    className="hec-text text-[15px] zm:text-base xl:text-lg text-[#374151] mt-3 zm:mt-3 md:mt-3 lg:mt-3 xl:mt-4 2xl:mt-5"
                    dangerouslySetInnerHTML={{ __html: item.carouselText }}
                  ></div>
                  {/*=========================================event book button===*/}
                  <div className="hec-btn-pair mt-5 md:mt-5  xl:mt-8 ">
                    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                      <button
                        onClick={(e) => showLocation(e)}
                        className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                      >
                        BOOK NOW
                      </button>
                      <a
                        onClick={(e) => {
                          exploreEvent(e, item.slug);
                        }}
                        href={`/events/${item.slug}`}
                        className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-[#374151] hover:text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                      >
                        EXPLORE
                      </a>
                    </div>
                  </div>
                </div>
                {/*====================================================================carousel-image */}
                <div className="hec-item-col max-w-[400px] lg:max-w-none lg:min-w-[460px] xl:min-w-[516px] order-1 lg:order-2">
                  <img
                    className="max-w-full"
                    alt={
                      item.carouselImage.alt
                        ? item.carouselImage.alt
                        : "all in adventures escape room event"
                    }
                    src={
                      item.carouselImage.url
                        ? item.carouselImage.url
                        : "/assets/escape-game-events/carousel/escape-room-birthday-party-event.png"
                    }
                  ></img>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeEventCarousel;
