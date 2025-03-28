import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const MobileEscapeHomeCarousel = (props) => {
  //console.log(inpersongames)

  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="full-carousel  relative inp-car mbl-h-car">
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
        dotListClass="custom-dot-list-style mbl-h-dot"
        itemClass="game-carousel-card px-1 lg:px-2 2xl:px-4 3xl:px-3 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {/*====== slide 1========= */}
        {props.infoList.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white group px-2 h-full bg-[#1D1D1D] rounded-2xl"
            >
              <div className="mbl-hcard-container px-4 py-6 md:p-6 2xl:px-8 2xl:py-10 ">
                <div className="mbl-card-head-t pb-2 md:pb-0">
                  <h3 className="text-[22px] md:text-[24px] lg:text-[26px] text-gold font-medium">
                    {item.title}
                  </h3>
                </div>

                <div className="mbl-h-card-bottom mt-5 md:mt-6 2xl:mt-8">
                  <p className="text-white lg:text-lg font-medium">
                    {item.subTitle !== null ? item.subTitle : ""}
                    {item.subTitleNote !== null ? (
                      <span className="text-gray-400 text-sm lg:text-base">
                        {" "}
                        {item.subTitleNote}
                      </span>
                    ) : (
                      <></>
                    )}
                  </p>
                  {item.infoCardText !== null ? (
                    <p className="lg:text-lg text-[#A5A5A5] mt-2">
                      {item.infoCardText}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MobileEscapeHomeCarousel;
