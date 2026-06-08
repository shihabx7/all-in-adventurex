import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoveCarouselCardBrown from "./loveCarouselCardBrown";
import LoveCarouselCardDark from "./loveCarouselCardDark";

export default function LoveCarousel({ customerLoveCarouselData }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1181 },
      items: 4,
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
      items: 3,
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
        partialVisible={false}
      >
        {customerLoveCarouselData.map((item, index) => {
          return (
            <div key={index} className="rev-item">
              {index % 2 == 0 ? (
                <LoveCarouselCardBrown item={item} />
              ) : (
                <LoveCarouselCardDark item={item} />
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
