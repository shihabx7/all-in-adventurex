import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useSiteData } from "../../../../contexts/SiteDataContext";
const bookThisGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};

export default function EscapeRoomPosterCarousel({ gameCarouselData }) {
    const { openModalMenu, setModalMenuType, setModalGame } = useSiteData();

  //============== button action
  const showLocation = (e) => {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const exploreGame = (e, slug) => {
    e.preventDefault();
    window.location.href = "/activities/" + slug;
  };
  const showLocModal = (activitySlug) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalGame(activitySlug);
    setModalMenuType("game");
    openModalMenu();
  };
  //=================================================================== responsive data
  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1181 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    tabletLg: {
      breakpoint: { max: 1180, min: 1001 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 8,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 16,
    },
    mobileLg: {
      breakpoint: { max: 639, min: 430 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 100,
    },
    mobile: {
      breakpoint: { max: 429, min: 341 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 22,
    },
    mobileXs: {
      breakpoint: { max: 340, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 15,
    },
  };
  return (
    <div className="aia-new-carousel escape-game-poster-carousel-container">
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
        containerClass="aia-new-carousel-container section-bg-light  home-event-carousel-container pt-1 md:pt-1 lg:pt-2 pb-14 sm:pb-16 lg:pb-20"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-[4px] zm:px-[5px] md:px-2 xl:px-3"
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={true}
      >
        {gameCarouselData.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-[#111111] h-full group bg-cover relative p-1 zm:p-2 xl:p-4"
            >
              <div className="came-carousel-img">
                <img
                  className="max-w-full"
                  alt={item.poster.alt}
                  src={item.poster.url}
                ></img>
              </div>
              <div className="carousel-btn-pair mt-5 mb-2">
                <div className="book-now-btn flex justify-center text-center">
                  {!item.bookingInfo && (
                    <button
                      onClick={(e) => showLocModal(item.slug)}
                      className="block w-[90%]  border-[1px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-[15px] md:text-[16px] xl:text-[18px] leading-[1.1] text-white px-5 rm:px-6 py-[11px] xl:py-[13px] text-center font-medium transition duration-400 ease-in-out"
                    >
                      BOOK NOW
                    </button>
                  )}
                  {item.bookingInfo && (
                    <button
                      onClick={() => bookThisGame(item.bookingInfo)}
                      className="block w-[90%] border-[1px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-[15px] md:text-[16px] xl:text-[18px] leading-[1.1] text-white px-5 rm:px-6 py-[11px] xl:py-[13px] text-center font-medium transition duration-400 ease-in-out"
                    >
                      BOOK NOW
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
