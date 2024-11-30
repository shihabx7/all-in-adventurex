import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const MobileEscapeGameTestimonialCar = ({ testimonialList }) => {
  const responsive = {
    desktop2xl: {
      breakpoint: { max: 4000, min: 2700 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktopxl: {
      breakpoint: { max: 2699, min: 2100 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    desktoplg: {
      breakpoint: { max: 2100, min: 1640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 160,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1025 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 761 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 160,
    },
    mobilexl: {
      breakpoint: { max: 760, min: 601 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
  };
  return (
    <div className="full-carousel planning-event-carousel inp-car ev-car">
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
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="game-carousel-card   px-2 sm:px-3 lg:px-3 3xl:px-4  py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {testimonialList.map((item, index) => {
          return (
            <div
              key={item.id}
              className="text-white bg-[#FFF9EB] rounded-[14px] h-full bg-cover"
            >
              <div className="mer-testi-card-container   rounded-[14px]">
                <div className="merc-row flex flex-col sm:flex-row  ">
                  <div className="merc-img hidden sm:block  merc-col w-full sm:w-[47%]  lg:w-[40%] xl:w-[41%] 3xl:w-[42%] p-2 rm:p-3 md:p-4 lg:p-4 3xl:p-5">
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
                      className="w-full rounded-[12px] lg:rounded-[12px] 3xl:rounded-[12px] "
                    ></img>
                  </div>
                  <div className="merc-img-mbl sm:hidden  merc-col w-full sm:w-[47%]  lg:w-[40%] xl:w-[41%] 3xl:w-[42%] p-2 rm:p-3 md:p-4 lg:p-4 3xl:p-5">
                    <img
                      alt={
                        item.testimonialImageMobile.alt
                          ? item.testimonialImageMobile.alt
                          : "Allinadventures mobile escape room testimonial " +
                            index
                      }
                      src={
                        item.testimonialImageMobile.hasImage
                          ? item.testimonialImageMobile.url
                          : "/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-1.jpg"
                      }
                      className="w-full rounded-[12px] lg:rounded-[12px] 3xl:rounded-[12px] "
                    ></img>
                  </div>
                  <div className="merc-testi merc-col w-full sm:w-auto sm:flex-1  relative">
                    <div className="mrec-testi-bg-icon absolute top-0 left-[10px] w-[200px] z-10">
                      <img
                        className="block max-w-[100px] rm:max-w-[120px] sm:max-w-[130px] md:max-w-[140px] xl:max-w-[120px] 2xl:max-w-[150px] 3xl:max-w-[180px]"
                        src="/assets/mobile-escape-room/icon/allinadventures-quote-icon.svg"
                        alt="allinadventures quote icon"
                      ></img>
                    </div>
                    <div className="mrec-testi-des sm:absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
                      <div className="merct-top mt-2 rm:mt-3  sm:mt-5 md:mt-8 lg:mt-10 xl:mt-3 2xl:mt-5 3xl:mt-8 p-3 sm:pr-3 md:pr-4 2xl:pr-5">
                        <h3 className="font-bold text-[20px] rm:text-[24px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                          {item.title}
                        </h3>
                        <div
                          className="text-[#4A2F03] text-sm mt-2 2xl:mt-2 3xl:mt-3 xl:text-sm 2xl:text-base "
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        ></div>
                      </div>
                      <div className="merct-bottom flex space-x-2 items-center lg:mb-3 2xl:mb-4 3xl:mb-6 p-3 pb-5 sm:pr-3 md:pr-4 2xl:pr-5">
                        <div className="merct-avater w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full bg-gray-300">
                          {item.authorAvatar.hasImage ? (
                            <img
                              className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full"
                              src={item.authorAvatar.url}
                              alt={item.authorAvatar.alt}
                            ></img>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="merct-auth-info">
                          <div className="merct-rating">
                            <img
                              src="/assets/mobile-escape-room/icon/five-star-review.svg"
                              alt="allinadventures fivestar icon"
                            ></img>
                          </div>
                          <div className="merct-rating text-[#A17F47] text-sm mt-2">
                            <span>{item.author}, </span>
                            <span>{item.designation}</span>
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
