import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState, useRef } from "react";
import TestimonialVideo from "./testimonialVideo";
import TestimonialVideoText from "./testimonialVideoText";

const TestimonialVideoCarousel = ({ testimonialVideoList }) => {
  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1200 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1199, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1023, min: 600 },
      items: 2,
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

  const [controls, setControls] = useState({
    currentVideo: null,
    isPlaying: false,
    currentIndex: -1,
    isShowFull: false,
  });

  useEffect(() => {
    setControls({
      currentVideo: null,
      isPlaying: false,
      currentIndex: -1,
      isShowFull: false,
    });
  }, []);
  //=============================================
  return (
    <div className="aia-new-carousel testimonial-vid-carousel-container">
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
        containerClass="aia-new-carousel-container section-bg-light  test-vid-carousel-container pt-5 rm:pt-6 md:pt-7 lg:pt-8 pb-14 sm:pb-16 lg:pb-20"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item test-vid-car-list rounded-[16px] px-2 sm:px-1 md:px-[16px] lg:px-[13px] xl:px-[8px] "
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {testimonialVideoList.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-gray-800 rounded-[16px] h-full group  bg-cover relative "
            >
              <div className="testi-video rounded-[16px] h-[434px] rm:h-[448px] lm:h-[456px] md:h-[464px]  lg:h-[448px] xl:h-[440px]">
                <TestimonialVideo
                  controls={controls}
                  setControls={setControls}
                  itemIndex={index}
                  videoData={item.videoData}
                />
              </div>
              <TestimonialVideoText
                controls={controls}
                setControls={setControls}
                itemIndex={index}
                reviewData={item.reviewData}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestimonialVideoCarousel;
