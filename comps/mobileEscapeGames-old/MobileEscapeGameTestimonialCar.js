import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const MobileEscapeGameTestimonialCar = ({ testimonialList }) => {
  const responsive = {
    desktop2xl: {
      breakpoint: { max: 4000, min: 2700 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopxl: {
      breakpoint: { max: 2699, min: 2100 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2100, min: 1640 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1025 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 761 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobilexl: {
      breakpoint: { max: 760, min: 601 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
  };
  return (
    <div className="full-carousel planning-event-carousel inp-car ev-car mer-car ">
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
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style mer-car-dot "
        itemClass="game-carousel-card   px-2 sm:px-3 md:px-4 lg:px-3 xl:px-4 2xl:px-5 py-4 md:py-8"
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {testimonialList.map((item, index) => {
          return (
            <div
              key={item.id}
              className="text-white bg-[#FFF9EB] rounded-[24px] h-full bg-cover mer-testi-shadow relative overflow-hidden "
            >
              {/**=========== testimonial ornaments end */}
              {/**=========== rocket-bottom-left */}

              {/**=========== bottom-confette-bg */}
              <div className="max-w-[230px] absolute bottom-0 left-0 right-0 mx-auto z-0">
                <img
                  className="max-h-[60px]"
                  src="/assets/mobile-escape-room/icon/testimonial-bg-com.svg"
                ></img>
              </div>
              {/**=========== balon-bottom-right */}

              {/**=========== testimonial ornaments end */}
              <div className="mer-testi-card-container  rounded-[24px] p-2 md:p-3 h-full">
                <div className="merc-row h-full flex flex-col justify-between rounded-[18px] p-2 md:p-3 border-[2px] border-dashed border-[#ceb67e]  ">
                  {/*===========---------image--------============= */}
                  <div className="merc-img merc-col">
                    <img
                      alt={
                        item.testimonialImage.alt
                          ? item.testimonialImage.alt
                          : "Allinadventures mobile escape room testimonial " +
                          index
                      }
                      src={
                        item.testimonialImage.hasImage
                          ? item.testimonialImage.url
                          : "/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-1.jpg"
                      }
                      className="w-full max-h-[240px] object-cover rounded-[18px]  "
                    ></img>
                  </div>

                  <div className="merc-testi merc-col  grow ">
                    <div className="mrec-testi-des  h-full flex flex-col justify-between">
                      <div className="merct-top py-5">
                        <h3 className="font-bold text-[18px] rm:text-[20px] md:text-[22px] xl:text-[23px] leading-[1.3] text-[#CA9342] text-center">
                          {item.title}
                        </h3>
                        <div
                          className="text-[#4A2F03] text-sm mt-2 2xl:mt-2 3xl:mt-3 xl:text-sm 2xl:text-base text-center"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        ></div>
                      </div>
                      <div className="merct-bottom flex space-x-2 items-center justify-center ">
                        <div className="merct-auth-info">
                          <div className="merct-rating">
                            <img
                              className="mx-auto"
                              src="/assets/mobile-escape-room/icon/five-star-review.svg"
                              alt="allinadventures fivestar icon"
                            ></img>
                          </div>
                          <div className="merct-rating text-[#A17F47] 2xl:text-[17px] mt-1 text-center">
                            <span>{item.author} </span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default MobileEscapeGameTestimonialCar;
