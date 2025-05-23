import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MobileEscapeGameCarousel = ({ escapeGameList, locationName }) => {
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
      breakpoint: { max: 1640, min: 1501 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
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
    <div className="full-carousel inpersongame inp-car mer-car mer-game-car">
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
        containerClass="carousel-container pb-10 md:pb-12"
        // rewindWithAnimation={true}
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style  mer-car-dot  mer-game-carousel-dot "
        itemClass="game-carousel-card px-2 lg:px-4 2xl:px-5 3xl:px-3 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={false}
        partialVisible={true}
      >
        {escapeGameList.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white relative  game-slider-card mbl-game-card card-border group mb-shadow "
            >
              <img
                className="w-full  hidden zm:block"
                alt={
                  item.gameImageDesktop.hasImage
                    ? item.gameImageDesktop.alt
                    : "Allinadventures mobile escape game" +
                      item.id +
                      " in " +
                      locationName
                }
                src={
                  item.gameImageDesktop.hasImage
                    ? item.gameImageDesktop.url
                    : "/assets/mobile-escape-room/game/escape-from-alcatraz-mobile-escape-game.jpg"
                }
              ></img>
              <img
                className="w-full block  zm:hidden"
                alt={
                  item.gameImageMobile.hasImage
                    ? item.gameImageMobile.alt
                    : "Allinadventures mobile escape game" +
                      item.id +
                      " in " +
                      locationName
                }
                src={
                  item.gameImageMobile.hasImage
                    ? item.gameImageMobile.url
                    : "/assets/mobile-escape-room/game/escape-from-alcatraz-mobile-escape-game.jpg"
                }
              ></img>

              <div className="card-container mer-card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                <div className="card-head mbl-card-head flex justify-between items-center px-2 rm:px-3 pt-2 rm:pt-3 md:pt-4 md:px-4 pb-6 zm:pb-2 md:pb-4">
                  <div className="card-info w-[48%]">
                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img
                          alt="Allinadventure mobile escape game age range  icon"
                          src="/assets/svg/card-age.svg"
                        ></img>
                      </span>
                      <span className="text-[13px] md:text-sm">
                        Age {item.ageRange}
                      </span>
                    </p>
                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img
                          alt="Allinadventure mobile escape room duration   icon"
                          src="/assets/svg/card-time.svg"
                        ></img>
                      </span>
                      <span className="text-[13px] md:text-sm">
                        Duration {item.duration} Min
                      </span>
                    </p>
                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img
                          alt="Allinadventure mobile escape room team size  icon"
                          src="/assets/svg/card-person.svg"
                        ></img>
                      </span>
                      <span className="text-[13px] md:text-sm">
                        Team Size {item.teamSize}
                      </span>
                    </p>

                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img
                          alt="Allinadventure mobile escape game carousel icon"
                          src="/assets/svg/inperson.svg"
                        ></img>
                      </span>
                      <span className="text-[12px] md:text-sm">
                        Mobile Escape Room
                      </span>
                    </p>
                  </div>

                  <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                    <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                      <p
                        className="text-2xl md:text-3xl text-white font-bold"
                        style={{ lineHeight: 1 }}
                      >
                        ${item.price}
                      </p>
                      <p
                        className="text-lg text-white mt-2"
                        style={{ lineHeight: 1 }}
                      >
                        Per Person
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-bottom  mbl-card-bottom px-2 rm:px-3 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-6 rm:pb-7 zm:pb-6 sm:pb-4 md:pb-6 pt-12 zm:pt-0">
                  <div className="card-game-descs mb-3 md:mb-4">
                    <h3 className="card-game-titlex text-center zm:text-left text-[20px] rm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                      {item.gameTitle}
                    </h3>
                    <div
                      className="text-gray-200 text-center zm:text-left  text-[14px] rm:text-base lg:text-[17px]  max-w-[420px] mt-1 rm:mt-2 sm:mt-1"
                      dangerouslySetInnerHTML={{
                        __html: item.shortDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/** =========slide 1================ */}
      </Carousel>
    </div>
  );
};

export default MobileEscapeGameCarousel;
