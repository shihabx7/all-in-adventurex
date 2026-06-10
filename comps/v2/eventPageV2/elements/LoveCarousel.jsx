import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            <div key={index} className="rev-item h-full">
              {index % 2 == 0 ? (
                <div className="love-carousel-card  bg-[#EBDBB2] h-full flex flex-col space-y-8 rounded-[16px] p-3 xl:p-5 overflow-hidden -rotate-2">
                  <div className="rev-txt">
                    <img
                      className="max-w-[120px]"
                      src={"/assets/event-page-v2/five-star-rating-icon.svg"}
                    ></img>
                    <p className="lg:text-sm xl:text-base text-[#374151] mt-5">
                      {item.text}
                    </p>
                  </div>
                  <div className="rev-author-box items-center">
                    <p className="text-xs text-[#374151] ">
                      &mdash; {item.authorName}
                      {item.occupation ? ", " + item.occupation : ""}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="love-carousel-card-dk bg-[#423109] h-full flex flex-col space-y-8 rounded-[16px] p-3 xl:p-5 overflow-hidden rotate-2">
                  <div className="rev-txt">
                    <img
                      className="max-w-[120px]"
                      src={"/assets/event-page-v2/five-star-rating-icon.svg"}
                    ></img>
                    <p className="lg:text-sm xl:text-base text-[#ebebeb] mt-5">
                      {item.text}
                    </p>
                  </div>
                  <div className="rev-author">
                    <p className="text-xs text-[#CCCCCC] ">
                      &mdash; {item.authorName}
                      {item.occupation ? ", " + item.occupation : ""}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
