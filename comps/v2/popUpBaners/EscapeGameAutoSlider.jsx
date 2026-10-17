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

export default function EscapeGameAutoSlider({ escapeGameList }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1181 },
      items: 5,
      slidesToSlide: 3,
    },
    tabletLg: {
      breakpoint: { max: 1180, min: 1001 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 4,
      slidesToSlide: 2,
    },
    mobileLg: {
      breakpoint: { max: 639, min: 430 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 429, min: 341 },
      items: 3,
      slidesToSlide: 2,
    },
    mobileXs: {
      breakpoint: { max: 340, min: 0 },
      items: 2,
      slidesToSlide: 1,
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
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition=".3s ease-in-out"
        transitionDuration={2000}
        containerClass="aia-new-carousel-container section-bg-light  home-event-carousel-container"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-[4px] zm:px-[5px] md:px-[7px]  xl:px-[8px] "
        renderArrowsOutside={false}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {escapeGameList.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-[#111111] h-full group bg-cover relative"
            >
              <div className="came-carousel-img">
                <img
                  className="max-w-full rounded-lg"
                  src={item.gameCardData.poster.url}
                  alt={
                    item.gameCardData.poster.alt
                      ? item.gameCardData.poster.alt
                      : "All in Adventures escape game "
                  }
                ></img>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
