import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TestimonialSlider({ testimonialData }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1181 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    tabletLg: {
      breakpoint: { max: 1180, min: 1001 },
      items: 1,
      slidesToSlide: 2,
      partialVisibilityGutter: 8,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 1,
      slidesToSlide: 2,
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
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="1s ease-in-out"
        transitionDuration={2000}
        containerClass="aia-new-carousel-container section-bg-light  home-event-carousel-container pt-12 md:pt-9 lg:pt-10 pb-16 lg:pb-20"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-1 zm:px-3 md:px-2 xl:px-3"
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {testimonialData.map((item, index) => {
          return (
            <div key={index} className="tst-item relative h-full">
              <div className="quote-img max-w-[60px] absolute -top-[30px] left-6 xl:left-8 z-10">
                <img
                  className="max-w-[80px] md:max-w-[120px] lg:max-w-[156px]"
                  src={"/assets/event-page-v2/inverted-quote.svg"}
                ></img>
              </div>
              <div className="testim-card bg-[#231800] h-full flex flex-col space-y-8 rounded-[16px] px-2.5 rm:px-4 py-6 md:p-7 xl:p-8  relative">
                <div className="rev-txt pt-3.5 md:pt-5">
                  <p className="text-[1.05rem] md:text-[1.1rem] xl:text-[1.2rem] leading-[1.5] font-thin text-[#FFEFD8] italic">
                    {item.text}
                  </p>
                </div>
                <div className="rev-author ">
                  <p className="text-sm text-[#BDBDBD] ">
                    -- {item.authorName}
                    {item.city !== null ? ", " + item.city : ""}
                    {item.occupation ? ", " + item.occupation : ""}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
