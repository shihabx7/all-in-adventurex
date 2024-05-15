import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const PysicalCarousel = (props) => {
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };

  const openBooking = (shortname, booking) => {
    FH.open({
      shortname: shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: booking.flow,
      view: { item: booking.item },
    });
  };
  const virtualBooking = (booking) => {
    FH.open({
      shortname: booking.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: booking.flow,
      view: { item: booking.item },
    });
  };
  const showDescription = (description) => {
    if (description.length > 144) {
      const cutDescription = description.slice(0, 144) + " ...";
      return cutDescription;
    }

    return description;
  };

  const responsive = {
    desktopxl: {
      breakpoint: { max: 2560, min: 2100 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2100, min: 1500 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1500, min: 1280 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
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
    <div className="full-carousel md:max-w-[96%] lg:max-w-[86%] xl:max-w-[94%] 2xl:max-w-[86%] 3xl:max-w-[1200px] 4xl:max-w-[60%] mx-auto pysicalescapecarousel inp-car">
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
        keyBoardControl={true}
        customTransition=".5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style physical-escape-dots"
        itemClass="game-carousel-card px-2 lg:px-4 2xl:px-5 3xl:px-2 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {props.othergames.map((othergame) => {
          return (
            <div
              key={othergame.id}
              className="text-white relative bg-gray-800 game-slider-card card-border mb-shadow"
            >
              <img className="w-full" src={othergame.bgimg}></img>
              <div className="card-container absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                <div className="card-head  flex justify-between items-center p-4 md:pb-8">
                  <div className="card-info">
                    <p className="flex items-center space-x-2 text-gray-50 my-1">
                      <span>
                        <img src="/assets/svg/card-age.svg"></img>
                      </span>
                      <span className="text-sm">Age Range {othergame.age}</span>{" "}
                    </p>
                    <p className="flex items-center space-x-2 text-gray-50 my-1">
                      <span>
                        <img src="/assets/svg/card-time.svg"></img>
                      </span>
                      <span className="text-sm">
                        Duration {othergame.duration} Min
                      </span>
                    </p>
                    <p className="flex items-center space-x-2 text-gray-50 my-1">
                      <span>
                        <img src="/assets/svg/card-person.svg"></img>
                      </span>
                      <span className="text-xs md:text-sm">
                        {!othergame.groupcat ? (
                          <>
                            {othergame.maxplayers != ""
                              ? "Team Size "
                              : "Guest "}{" "}
                            {othergame.minplayers}
                            {othergame.maxplayers != "" && <span>-</span>}
                            {othergame.maxplayers}
                          </>
                        ) : (
                          <>
                            {othergame.groupcat ? othergame.groupcat + " " : ""}

                            {othergame.maxplayers}
                          </>
                        )}
                      </span>
                    </p>
                  </div>
                  <div className="card-ribbon p-[2px] md:p-[5px] bg-red-600">
                    <div className="inline-block text-center py-2 px-4  border border-dashed border-gray-300">
                      {othergame.type == "Virtual" && othergame.booking && (
                        <p className="text-lg text-white">PER PERSON</p>
                      )}
                      {othergame.type == "Virtual" && othergame.bookinglink && (
                        <p className="text-lg text-white">PER GROUP</p>
                      )}
                      {othergame.type != "Virtual" && (
                        <p className="text-lg text-white">FROM</p>
                      )}
                      <p className="text-2xl md:text-3xl text-white font-bold">
                        ${othergame.price}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-bottom px-2 md:px-3 lg:px-4 xl:px-3 3xl:px-2 4xl:px-4 pb-6 pt-12">
                  <div className="card-game text-center mb-6">
                    <h3 className="card-game-title text-[22px] rm:text-[25px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[26px] 4xl:text-3xl font-bold uppercase text-[#E0BF62]">
                      {othergame.title}
                    </h3>
                    <p className="text-gray-200 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px]">
                      {othergame.description}
                    </p>
                  </div>

                  <div className="card-game-link mt-4 flex justify-between text-center">
                    {props.bookingData && props.publish && (
                      <>
                        {props.bookingData[othergame.slug].active == true && (
                          <>
                            {props.bookingData[othergame.bookingSlug] ? (
                              <button
                                onClick={() =>
                                  openBooking(
                                    props.bookingData.shortname,
                                    props.bookingData[othergame.bookingSlug]
                                  )
                                }
                                className="border w-[48%] card-book-btnxx border-red-600 bg-red-600 py-[10px] md:py-3  rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700"
                              >
                                BOOK PARTY
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  openBooking(
                                    props.bookingData.shortname,
                                    props.bookingData[othergame.slug]
                                  )
                                }
                                className="border w-[48%] card-book-btnxx border-red-600 bg-red-600 py-[10px] md:py-3  rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700"
                              >
                                BOOK NOW
                              </button>
                            )}
                          </>
                        )}
                        {props.bookingData[othergame.slug].active == false && (
                          <button className="border w-[48%] card-book-btnxx border-red-600 bg-red-600 py-[10px] md:py-3  rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700">
                            COMING SOON
                          </button>
                        )}
                      </>
                    )}
                    {props.bookingData && !props.publish && (
                      <button className="border w-[48%] card-book-btnxx border-red-600 bg-red-600 py-[10px] md:py-3  rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700">
                        COMING SOON
                      </button>
                    )}
                    {!props.bookingData && (
                      <button
                        onClick={() => showLocation()}
                        className="border w-[48%] card-book-btnxx border-red-600 bg-red-600 py-[10px] md:py-3  rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700"
                      >
                        BOOK NOW
                      </button>
                    )}

                    {props.locationslug && (
                      <a
                        href={
                          "/" +
                          props.locationslug +
                          "/activities/" +
                          othergame.slug
                        }
                        className="border w-[48%] card-book-btnxx border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700"
                      >
                        EXPLORE
                      </a>
                    )}
                    {!props.locationslug && (
                      <a
                        href={"/activities/" + othergame.slug}
                        className="border w-[48%] card-book-btnxx border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium text-lg hover:bg-red-700 hover:border-red-700"
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
      </Carousel>
    </div>
  );
};

export default PysicalCarousel;
