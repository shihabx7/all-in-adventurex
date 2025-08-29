import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const bookThisGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};

export default function MoreEscapeGameCarousel({ gameCarouselData }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1181 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 14,
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
  //=====================================

  return (
    <div className="aia-new-carousel game-carousel-container">
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
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-[4px] zm:px-[5px] md:px-[7px]  xl:px-[8px] "
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={true}
      >
        {gameCarouselData.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-[#111111] h-full group bg-cover relative p-1 zm:p-2 xl:p-3"
            >
              <div className="came-carousel-img">
                <img
                  className="max-w-full"
                  alt={item.poster.alt}
                  src={item.poster.url}
                ></img>
              </div>
              <div className="carousel-btn-pair mt-5 mb-2">
                <div className="flex justify-center items-center space-x-2 md:space-x-3 lg:space-x-5 ">
                  {!item.bookingInfo && (
                    <button
                      onClick={(e) => showLocation(e)}
                      className="block max-w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-[15px] md:text-[16px] xl:text-[18px] leading-[1.1] text-white px-5 rm:px-6 py-[11px] xl:py-[13px] text-center font-medium transition duration-400 ease-in-out"
                    >
                      BOOK NOW
                    </button>
                  )}
                  {item.bookingInfo && (
                    <button
                      onClick={() => bookThisGame(item.bookingInfo)}
                      className="block max-w-[48%]  border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-[15px] md:text-[16px] xl:text-[18px] leading-[1.1] text-white px-5 rm:px-6 py-[11px] xl:py-[13px] text-center font-medium transition duration-400 ease-in-out"
                    >
                      BOOK NOW
                    </button>
                  )}

                  <a
                    href={`/activities/${item.slug}`}
                    className="block max-w-[48%]  border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 text-[15px] md:text-[16px] xl:text-[18px] leading-[1.1] text-[#ffffff] hover:text-white px-5 rm:px-6 py-[10px] xl:py-[12px]  text-center font-medium transition duration-400 ease-in-out"
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
