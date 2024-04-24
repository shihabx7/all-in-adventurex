import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Script from "next/script";

const GiftRdmCarousel = (props) => {
  // console.log(props.redeemgames);
  const [gameSlug, setGamSlug] = useState(null);

  const showDescription = (description) => {
    if (description.length > 144) {
      const cutDescription = description.slice(0, 2000) + " ...";
      return cutDescription;
    }

    return description;
  };
  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
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
        itemClass="game-carousel-card px-2 lg:px-1 py-4 md:py-8"
        renderDotsOutside={false}
        partialVisible={true}
      >
        {props.redeemgames.map((game) => {
          return (
            <div
              key={game.id}
              className="text-white rounded-lg bg-gray-300 game-slider-card card-border group mb-shadow bg-cover relative"
            >
              <div className="card-img rounded-lg">
                <img className="rounded-lg" src={game.bgimg}></img>
              </div>
              <div className="rounded-lg card-container absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                <div className="card-bottom-gift rounded-[6px] py-4 px-2 pt-6  pb-12">
                  <div className="mb-3">
                    <img
                      className="max-w-[120px] mx-auto"
                      src="/assets/gift-images/escape-room-tag.png"
                    ></img>
                  </div>
                  <div className="card-game-descs  text-center">
                    <h3 className="card-game-title text-[22px] rm:text-[25px] sm:text-2xl lg:text-3xl xl:text-[27px] 3xl:text-[26px] 4xl:text-3xl font-bold uppercase text-white">
                      {game.title}
                    </h3>
                    <p className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[15px] 3xl:text-[14px] 4xl:text-[17px]">
                      {game.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/*====== slide 1========= */}
      </Carousel>
    </div>
  );
};

export default GiftRdmCarousel;
