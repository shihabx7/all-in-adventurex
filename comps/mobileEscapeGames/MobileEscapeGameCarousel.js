import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Script from "next/script";

const MobileEscapeGameCarousel = (props) => {
  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 54,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 200,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="full-carousel inpersongame inp-car ">
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
        dotListClass="custom-dot-list-style"
        itemClass="game-carousel-card px-2 lg:px-4 2xl:px-5 3xl:px-3 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {/** =========slide 1================ */}
        <div className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow ">
          <img
            className="w-full block"
            alt="allinadventures mobile escape game"
            src="/assets/mobile-escape-room/game/escape-from-alcatraz-mobile-escape-game.jpg"
          ></img>

          <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            <div className="card-head mbl-card-head flex justify-between items-center px-2 pt-2 md:pt-4 md:px-4 pb-2 md:pb-4">
              <div className="card-info w-[48%]">
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">Age Range 6-99</span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Duration 60 Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Team Size 20-60
                  </span>
                </p>

                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/inperson.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Mobile Escape Room
                  </span>
                </p>
              </div>

              <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    $19.99
                  </p>
                  <p className="text-lg text-white">Per Persion</p>
                </div>
              </div>
            </div>

            <div className="card-bottom  mbl-card-bottom px-1 rm:px-2 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-3 md:pb-6 pt-0">
              <div className="card-game-descs mb-3 md:mb-6">
                <h3 className="card-game-titlex text-[16px] rm:text-[20px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                  ESCAPE FROM ALCATRAZ
                </h3>
                <div className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px] max-w-[420px]">
                  You are trapped in a lab lockdown with a growing zombie horde
                  and need to find your way out before it is too late!
                </div>
              </div>
              <div className="card-game-link mt-3 md:mt-4 flex justify-between text-center">
                <a
                  href="#mobile-escape-room-form"
                  className="border block card-book-btnxx   border-red-600 bg-red-600 py-[8px] px-[30px] md:px-16 md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*====== slide 2========= */}
        <div className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow ">
          <img
            className="w-full block"
            alt="allinadventures mobile escape game"
            src="/assets/mobile-escape-room/game/treasure-island-mmobile-escape-game.jpg"
          ></img>

          <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            <div className="card-head mbl-card-head flex justify-between items-center px-2 pt-2 md:pt-4 md:px-4 pb-2 md:pb-4">
              <div className="card-info w-[48%]">
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">Age Range 6-99</span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Duration 60 Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Team Size 20-60
                  </span>
                </p>

                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/inperson.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Mobile Escape Room
                  </span>
                </p>
              </div>

              <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    $19.99
                  </p>
                  <p className="text-lg text-white">Per Persion</p>
                </div>
              </div>
            </div>

            <div className="card-bottom  mbl-card-bottom px-1 rm:px-2 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-3 md:pb-6 pt-0">
              <div className="card-game-descs mb-3 md:mb-6">
                <h3 className="card-game-titlex text-[16px] rm:text-[20px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                  TREASURE ISLAND
                </h3>
                <div className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px] max-w-[440px]">
                  You are trapped in a lab lockdown with a growing zombie horde
                  and need to find your way out before it is too late!
                </div>
              </div>
              <div className="card-game-link mt-3 md:mt-4 flex justify-between text-center">
                <a
                  href="#mobile-escape-room-form"
                  className="border block card-book-btnxx   border-red-600 bg-red-600 py-[8px] px-[30px] md:px-16 md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*====== slide 3========= */}
        <div className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow ">
          <img
            className="w-full block"
            alt="allinadventures mobile escape game"
            src="/assets/mobile-escape-room/game/super-heros-adventures-mmobile-escape-game.jpg"
          ></img>

          <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            <div className="card-head mbl-card-head flex justify-between items-center px-2 pt-2 md:pt-4 md:px-4 pb-2 md:pb-4">
              <div className="card-info w-[48%]">
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">Age Range 6-99</span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Duration 60 Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Team Size 20-60
                  </span>
                </p>

                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/inperson.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Mobile Escape Room
                  </span>
                </p>
              </div>

              <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    $19.99
                  </p>
                  <p className="text-lg text-white">Per Persion</p>
                </div>
              </div>
            </div>

            <div className="card-bottom  mbl-card-bottom px-1 rm:px-2 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-3 md:pb-6 pt-0">
              <div className="card-game-descs mb-3 md:mb-6">
                <h3 className="card-game-titlex text-[16px] rm:text-[20px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                  SUPERHERO'S ADVENTURE
                </h3>
                <div className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px] max-w-[440px]">
                  You are trapped in a lab lockdown with a growing zombie horde
                  and need to find your way out before it is too late!
                </div>
              </div>
              <div className="card-game-link mt-3 md:mt-4 flex justify-between text-center">
                <a
                  href="#mobile-escape-room-form"
                  className="border block card-book-btnxx   border-red-600 bg-red-600 py-[8px] px-[30px] md:px-16 md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        {/** =========slide 1================ */}
        <div className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow ">
          <img
            className="w-full block"
            alt="allinadventures mobile escape game"
            src="/assets/mobile-escape-room/game/escape-from-alcatraz-mobile-escape-game.jpg"
          ></img>

          <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            <div className="card-head mbl-card-head flex justify-between items-center px-2 pt-2 md:pt-4 md:px-4 pb-2 md:pb-4">
              <div className="card-info w-[48%]">
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">Age Range 6-99</span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Duration 60 Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Team Size 20-60
                  </span>
                </p>

                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/inperson.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Mobile Escape Room
                  </span>
                </p>
              </div>

              <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    $19.99
                  </p>
                  <p className="text-lg text-white">Per Persion</p>
                </div>
              </div>
            </div>

            <div className="card-bottom  mbl-card-bottom px-1 rm:px-2 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-3 md:pb-6 pt-0">
              <div className="card-game-descs mb-3 md:mb-6">
                <h3 className="card-game-titlex text-[16px] rm:text-[20px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                  ESCAPE FROM ALCATRAZ
                </h3>
                <div className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px] max-w-[440px]">
                  You are trapped in a lab lockdown with a growing zombie horde
                  and need to find your way out before it is too late!
                </div>
              </div>
              <div className="card-game-link mt-3 md:mt-4 flex justify-between text-center">
                <a
                  href="#"
                  className="border block card-book-btnxx   border-red-600 bg-red-600 py-[8px] px-[30px] md:px-16 md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*====== slide 2========= */}
        <div className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow ">
          <img
            className="w-full block"
            alt="allinadventures mobile escape game"
            src="/assets/mobile-escape-room/game/treasure-island-mmobile-escape-game.jpg"
          ></img>

          <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            <div className="card-head mbl-card-head flex justify-between items-center px-2 pt-2 md:pt-4 md:px-4 pb-2 md:pb-4">
              <div className="card-info w-[48%]">
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">Age Range 6-99</span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Duration 60 Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Team Size 20-60
                  </span>
                </p>

                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/inperson.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Mobile Escape Room
                  </span>
                </p>
              </div>

              <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    $19.99
                  </p>
                  <p className="text-lg text-white">Per Persion</p>
                </div>
              </div>
            </div>

            <div className="card-bottom  mbl-card-bottom px-1 rm:px-2 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-3 md:pb-6 pt-0">
              <div className="card-game-descs mb-3 md:mb-6">
                <h3 className="card-game-titlex text-[16px] rm:text-[20px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                  TREASURE ISLAND
                </h3>
                <div className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px] max-w-[440px]">
                  You are trapped in a lab lockdown with a growing zombie horde
                  and need to find your way out before it is too late!
                </div>
              </div>
              <div className="card-game-link mt-3 md:mt-4 flex justify-between text-center">
                <a
                  href="#"
                  className="border block card-book-btnxx   border-red-600 bg-red-600 py-[8px] px-[30px] md:px-16 md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*====== slide 3========= */}
        <div className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow">
          <img
            className="w-full block"
            alt="allinadventures mobile escape game"
            src="/assets/mobile-escape-room/game/super-heros-adventures-mmobile-escape-game.jpg"
          ></img>

          <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
            <div className="card-head mbl-card-head flex justify-between items-center px-2 pt-2 md:pt-4 md:px-4 pb-2 md:pb-4">
              <div className="card-info w-[48%]">
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">Age Range 6-99</span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Duration 60 Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Team Size 20-60
                  </span>
                </p>

                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/inperson.svg"></img>
                  </span>
                  <span className="text-[13px] md:text-sm">
                    Mobile Escape Room
                  </span>
                </p>
              </div>

              <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                  <p className="text-2xl md:text-3xl text-white font-bold">
                    $19.99
                  </p>
                  <p className="text-lg text-white">Per Persion</p>
                </div>
              </div>
            </div>

            <div className="card-bottom  mbl-card-bottom px-1 rm:px-2 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-3 md:pb-6 pt-0">
              <div className="card-game-descs mb-3 md:mb-6">
                <h3 className="card-game-titlex text-[16px] rm:text-[20px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                  SUPERHERO'S ADVENTURE
                </h3>
                <div className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px] max-w-[440px]">
                  You are trapped in a lab lockdown with a growing zombie horde
                  and need to find your way out before it is too late!
                </div>
              </div>
              <div className="card-game-link mt-3 md:mt-4 flex justify-between text-center">
                <a
                  href="#"
                  className="border block card-book-btnxx   border-red-600 bg-red-600 py-[8px] px-[30px] md:px-16 md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MobileEscapeGameCarousel;
