import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const MobileEscapeHomeCarousel = (props) => {
  //console.log(inpersongames)

  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="full-carousel  relative inp-car mbl-h-car">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
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
        containerClass="carousel-container"
        // rewindWithAnimation={true}
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style mbl-h-dot"
        itemClass="game-carousel-card px-1 lg:px-2 2xl:px-4 3xl:px-3 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {/*====== slide 1========= */}
        <div className="text-white group px-2">
          <div className="mbl-hcard-container bg-[#1D1D1D] px-4 py-6 md:p-6 2xl:p-8 rounded-2xl">
            <div className="mbl-card-head ">
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                PRICING
              </h3>
            </div>

            <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
              <p className="text-white lg:text-lg font-medium">
                $19.99 per Person
                <span className="text-gray-400 text-sm lg:text-base">
                  {" "}
                  (20-person minimum)
                </span>
              </p>
              <p className="lg:text-lg text-[#A5A5A5] mt-2">
                Enjoy your first round for $19.99 per person. Add a second round
                with a different game for 50% off at just $9.99 per person.
              </p>
            </div>
          </div>
        </div>
        {/*====== slide 2========= */}
        <div className="text-white group ">
          <div className="mbl-hcard-container bg-[#1D1D1D] px-4 py-6 md:p-6 2xl:p-8 rounded-2xl">
            <div className="mbl-card-head ">
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                PRICING
              </h3>
            </div>

            <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
              <p className="text-white lg:text-lg font-medium">
                $19.99 per Person
                <span className="text-gray-400 text-sm lg:text-base">
                  {" "}
                  (20-person minimum)
                </span>
              </p>
              <p className="lg:text-lg text-[#A5A5A5] mt-2">
                Enjoy your first round for $19.99 per person. Add a second round
                with a different game for 50% off at just $9.99 per person.
              </p>
            </div>
          </div>
        </div>
        {/*====== slide 3========= */}
        <div className="text-white group ">
          <div className="mbl-hcard-container bg-[#1D1D1D] px-4 py-6 md:p-6 2xl:p-8 rounded-2xl">
            <div className="mbl-card-head ">
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                PRICING
              </h3>
            </div>

            <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
              <p className="text-white lg:text-lg font-medium">
                $19.99 per Person
                <span className="text-gray-400 text-sm lg:text-base">
                  {" "}
                  (20-person minimum)
                </span>
              </p>
              <p className="lg:text-lg text-[#A5A5A5] mt-2">
                Enjoy your first round for $19.99 per person. Add a second round
                with a different game for 50% off at just $9.99 per person.
              </p>
            </div>
          </div>
        </div>
        {/*====== slide 4========= */}
        <div className="text-white group  ">
          <div className="mbl-hcard-container bg-[#1D1D1D] px-4 py-6 md:p-6 2xl:p-8 rounded-2xl">
            <div className="mbl-card-head ">
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                PRICING
              </h3>
            </div>

            <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
              <p className="text-white lg:text-lg font-medium">
                $19.99 per Person
                <span className="text-gray-400 text-sm lg:text-base">
                  {" "}
                  (20-person minimum)
                </span>
              </p>
              <p className="lg:text-lg text-[#A5A5A5] mt-2">
                Enjoy your first round for $19.99 per person. Add a second round
                with a different game for 50% off at just $9.99 per person.
              </p>
            </div>
          </div>
        </div>
        {/*====== slide 5========= */}
        <div className="text-white group  ">
          <div className="mbl-hcard-container bg-[#1D1D1D] px-4 py-6 md:p-6 2xl:p-8 rounded-2xl">
            <div className="mbl-card-head ">
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                PRICING
              </h3>
            </div>

            <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
              <p className="text-white lg:text-lg font-medium">
                $19.99 per Person
                <span className="text-gray-400 text-sm lg:text-base">
                  {" "}
                  (20-person minimum)
                </span>
              </p>
              <p className="lg:text-lg text-[#A5A5A5] mt-2">
                Enjoy your first round for $19.99 per person. Add a second round
                with a different game for 50% off at just $9.99 per person.
              </p>
            </div>
          </div>
        </div>
        {/*====== slide 6========= */}
        <div className="text-white group  ">
          <div className="mbl-hcard-container bg-[#1D1D1D] px-4 py-6 md:p-6 2xl:p-8 rounded-2xl">
            <div className="mbl-card-head ">
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                PRICING
              </h3>
            </div>

            <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
              <p className="text-white lg:text-lg font-medium">
                $19.99 per Person
                <span className="text-gray-400 text-sm lg:text-base">
                  {" "}
                  (20-person minimum)
                </span>
              </p>
              <p className="lg:text-lg text-[#A5A5A5] mt-2">
                Enjoy your first round for $19.99 per person. Add a second round
                with a different game for 50% off at just $9.99 per person.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MobileEscapeHomeCarousel;
