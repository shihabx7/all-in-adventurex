import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EventTestimonialCarousel = ({ testimonialList }) => {
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
      breakpoint: { max: 1440, min: 1001 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1000, min: 761 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobilexl: {
      breakpoint: { max: 760, min: 601 },
      items: 1,
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
    <div className="aia-new-carousel testimonial-carousel-container ">
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
        containerClass="aia-new-carousel-container section-bg-dark  home-event-carousel-container pt-5 rm:pt-6 md:pt-7 lg:pt-8 pb-14 sm:pb-16 lg:pb-20"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-[8px] zm:px-[30px] md:px-[15px] lg:px-[12px] xl:px-[20px] "
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {testimonialList.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white bg-[#FFF9EB] rounded-[24px] h-full bg-cover mer-testi-shadow relative overflow-hidden "
            >
              {/**=========== testimonial ornaments end */}
              {/**=========== rocket-bottom-left */}

              {/**=========== bottom-confette-bg */}
              <div className="max-w-[230px] absolute bottom-0 left-0 right-0 mx-auto z-0">
                <img
                  className="max-h-[60px]"
                  alt="testimonial bg icon"
                  src="/assets/mobile-escape-room/icon/testimonial-bg-com.svg"
                ></img>
              </div>
              {/**=========== balon-bottom-right */}

              {/**=========== testimonial ornaments end */}
              <div className="mer-testi-card-container  rounded-[24px] p-2 md:p-3 h-full relative z-[20]">
                <div className="merc-row h-full flex flex-col justify-between rounded-[18px] p-2 md:p-3 border-[2px] border-dashed border-[#ceb67e]  ">
                  {/*===========---------image--------============= */}
                  <div className="merc-img merc-col">
                    <img
                      alt={
                        item.testimonialImage.alt
                          ? item.testimonialImage.alt
                          : "Allinadventures escape room testimonial " + index
                      }
                      src={
                        item.testimonialImage.url
                          ? item.testimonialImage.url
                          : "/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-1.jpg"
                      }
                      className="w-full max-h-[240px] object-cover rounded-[18px]  "
                    ></img>
                  </div>

                  <div className="merc-testi merc-col  grow ">
                    <div className="mrec-testi-des  h-full flex flex-col justify-between">
                      <div className="merct-top py-5">
                        {/*==================== testimonial title*/}
                        <h3 className="font-bold text-[18px] rm:text-[20px] zm:text-[22px] md:text-[21px] xl:text-[22px] leading-[1.3] text-[#CA9342] text-center">
                          {item.title}
                        </h3>
                        {/*==================== testimonial desc*/}
                        <div
                          className="text-[#4A2F03]  mt-2 2xl:mt-2 3xl:mt-3 lg:text-sm xl:text-base text-center"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        ></div>
                      </div>
                      {/*==================== author and ratting */}
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

export default EventTestimonialCarousel;
