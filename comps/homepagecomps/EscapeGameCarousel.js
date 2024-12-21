import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Script from "next/script";

const EscapeGameCarousel = (props) => {
  //console.log(inpersongames)
  const [gameSlug, setGamSlug] = useState(null);

  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };

  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

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
      breakpoint: { max: 1000, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
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
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />

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
        itemClass="game-carousel-card px-2 lg:px-4 2xl:px-5 3xl:px-2 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {props.escapeGameList.map((escapeGame) => {
          return (
            <div
              key={escapeGame.id}
              className="text-white relative bg-gray-300 game-slider-card card-border group mb-shadow pb-4"
            >
              <img
                className="w-full"
                alt={escapeGame.carouselImage.alt}
                src={escapeGame.carouselImage.url}
              ></img>
              <div className="card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                <div className="card-head flex justify-between items-center px-2 pt-4 md:px-[10px] pb-4">
                  <div className="card-info w-[48%]">
                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img src="/assets/svg/card-age.svg"></img>
                      </span>
                      <span className="text-[13px] md:text-sm">
                        Age {escapeGame.ageRange}
                      </span>
                    </p>
                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img src="/assets/svg/card-time.svg"></img>
                      </span>
                      <span className="text-[13px] md:text-sm">
                        Duration {escapeGame.duration} Min
                      </span>
                    </p>
                    <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                      <span>
                        <img src="/assets/svg/card-person.svg"></img>
                      </span>
                      <span className="text-[13px] md:text-sm">
                        {escapeGame.teamSizeLabel} {escapeGame.teamSize}
                      </span>
                    </p>
                    {escapeGame.successRate && (
                      <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                        <span>
                          <img src="/assets/svg/inperson.svg"></img>
                        </span>
                        <span className="text-[13px] md:text-sm">
                          Success Rate {escapeGame.successRate}%
                        </span>
                      </p>
                    )}
                  </div>
                  {escapeGame.price.length < 2 ? (
                    <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                      <div className="inline-block text-center py-2 px-4 border border-dashed border-gray-300">
                        <p className="text-lg text-white">FROM</p>
                        <p className="text-2xl md:text-3xl text-white font-bold">
                          ${escapeGame.price[0].Price}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="pricelist-container  w-[50%] max-w-[260px] p-[2px] md:p-[6px] bg-red-600">
                      <div className="priceDataTable border border-dashed border-gray-200">
                        <div className="pdt-head flex justify-center items-center border-b border-[#ba2121]">
                          <p className="w-1/2 p-1 md:p-1 text-center text-[12px] sm:text-[13px] text-white font-medium border-r border-[#ba2121]">
                            Team Size
                          </p>
                          <p className="w-1/2 p-1 md:p-1 text-center text-[12px] sm:text-[13px] text-white font-medium">
                            Per Guest
                          </p>
                        </div>
                        {escapeGame.price.map((priceItem, index) => {
                          return (
                            <div
                              key={index}
                              className="pdt-head flex justify-center items-center border-b border-[#ba2121]"
                            >
                              <p className="w-1/2 p-1 md:p-[4px] leading-[1]  text-center text-[12px] sm:text-[14px] text-white font-medium border-r border-[#ba2121]">
                                {priceItem.teamSize}
                              </p>
                              <p className="w-1/2 p-1 md:p-[4px] leading-[1] text-center text-[12px] sm:text-[14px] text-white font-medium">
                                ${priceItem.Price}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="card-bottom px-2 md:px-3 lg:px-4 xl:px-3 3xl:px-2 4xl:px-3 pb-6 pt-12">
                  <div className="card-game-descs  text-center mb-6">
                    <h3 className="card-game-title text-[22px] rm:text-[25px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                      {escapeGame.activityName}
                    </h3>
                    <div
                      className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px]"
                      dangerouslySetInnerHTML={{
                        __html: escapeGame.description,
                      }}
                    ></div>
                  </div>
                  <div className="card-game-link mt-4 flex justify-between text-center">
                    {props.locationSlug ? (
                      <>
                        {props.isPublished ? (
                          <>
                            {escapeGame.isActive ? (
                              <button
                                onClick={() => bookGame(escapeGame.bookingInfo)}
                                className="border w-[48%] card-book-btnxx   border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                              >
                                BOOK NOW
                              </button>
                            ) : (
                              <button
                                onClick={() => showLocation()}
                                className="border w-[48%] card-book-btnxx   border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                              >
                                COMING SOON 1
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            onClick={() => showLocation()}
                            className="border w-[48%] card-book-btnxx   border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                          >
                            COMING SOON 2
                          </button>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => showLocation()}
                        className="border w-[48%] card-book-btnxx   border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                      >
                        {!escapeGame.isPublish ? "COMING SOON 3" : "BOOK NOW"}
                      </button>
                    )}
                    {props.locationSlug ? (
                      <a
                        href={
                          "/" +
                          props.locationSlug +
                          "/activities/" +
                          escapeGame.activitySlug
                        }
                        className="border w-[48%]  border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                      >
                        EXPLORE
                      </a>
                    ) : (
                      <a
                        href={"/activities/" + escapeGame.activitySlug}
                        className="border w-[48%]  border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
                      >
                        EXPLORE
                      </a>
                    )}
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

export default EscapeGameCarousel;
