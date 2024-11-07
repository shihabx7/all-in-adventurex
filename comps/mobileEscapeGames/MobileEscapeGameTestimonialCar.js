import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const MobileEscapeGameTestimonialCar = (props) => {
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
        itemClass="game-carousel-card  px-2 sm:px-3 lg:px-3 3xl:px-4  py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {/*====== slide 1========= */}
        <div className="text-white   bg-cover">
          <div className="mer-testi-card-container bg-[#FFF9EB]  rounded-[12px]">
            <div className="merc-row flex flex-col sm:flex-row  ">
              <div className="merc-img merc-col w-full sm:w-[47%]  lg:w-[46%] 3xl:w-[42%] p-2 sm:p-3 md:p-4 lg:p-4 3xl:p-5">
                <img
                  src="/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-1.jpg"
                  alt="allinadventures mobile escape game testimonial 1"
                  className="w-full rounded-[12px] lg:rounded-[14px] 3xl:rounded-[16px]"
                ></img>
              </div>
              <div className="merc-testi merc-col w-full sm:w-auto sm:flex-1  relative">
                <div className="mrec-testi-bg-icon absolute top-0 left-0 w-[200px] z-10">
                  <img
                    src="/assets/mobile-escape-room/icon/allinadventures-quote-icon.svg"
                    alt="allinadventures quote icon"
                  ></img>
                </div>
                <div className="mrec-testi-des sm:absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
                  <div className="merct-top mt-5 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-8 3xl:mt-12 p-3 sm:pr-3 md:pr-4 2xl:pr-5">
                    <h3 className="font-bold text-[22px] sm:text-[24px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                      UNFORGETTABLE TEAM-BUILDING EXPERIENCE
                    </h3>
                    <div className="text-[#4A2F03] mt-1 2xl:mt-2 3xl:mt-3">
                      "Our team had an amazing time with the mobile escape room!
                      It brought everyone together and strengthened our bonds.
                      The puzzles were challenging yet fun, and we're still
                      talking about it weeks later!"
                    </div>
                  </div>
                  <div className="merct-bottom flex space-x-2 items-center md:mb-8 2xl:mb-6 3xl:mb-10 p-3 pb-5 sm:pr-3 md:pr-4 2xl:pr-5">
                    <div className="merct-avater w-[52px] h-[52px] rounded-full bg-gray-300"></div>
                    <div className="merct-auth-info">
                      <div className="merct-rating">
                        <img
                          src="/assets/mobile-escape-room/icon/five-star-review.svg"
                          alt="allinadventures fivestar icon"
                        ></img>
                      </div>
                      <div className="merct-rating text-[#A17F47] text-sm mt-2">
                        <span>Sarah J., </span>
                        <span>Corporate Event Organizer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== slide 2========= */}
        <div className="text-white   bg-cover">
          <div className="mer-testi-card-container bg-[#FFF9EB]  rounded-[12px]">
            <div className="merc-row flex flex-col sm:flex-row  ">
              <div className="merc-img merc-col w-full sm:w-[47%]  lg:w-[46%] 3xl:w-[42%] p-2 sm:p-3 md:p-4 lg:p-4 3xl:p-5">
                <img
                  src="/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-2.jpg"
                  alt="allinadventures mobile escape game testimonial 2"
                  className="w-full rounded-[12px] lg:rounded-[14px] 3xl:rounded-[16px]"
                ></img>
              </div>
              <div className="merc-testi merc-col w-full sm:w-auto sm:flex-1  relative">
                <div className="mrec-testi-bg-icon absolute top-0 left-0 w-[200px] z-10">
                  <img
                    src="/assets/mobile-escape-room/icon/allinadventures-quote-icon.svg"
                    alt="allinadventures quote icon"
                  ></img>
                </div>
                <div className="mrec-testi-des sm:absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
                  <div className="merct-top mt-5 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-8 3xl:mt-12 p-3 sm:pr-3 md:pr-4 2xl:pr-5">
                    <h3 className="font-bold text-[22px] sm:text-[24px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                      PERFECT FOR FAMILY CELEBRATIONS
                    </h3>
                    <div className="text-[#4A2F03] mt-1 2xl:mt-2 3xl:mt-3">
                      "We celebrated my son's birthday with the mobile escape
                      room, and it was a huge hit! The kids had a blast solving
                      puzzles together, and the setup was seamless. Highly
                      recommend for any family event!"
                    </div>
                  </div>
                  <div className="merct-bottom flex space-x-2 items-center md:mb-8 2xl:mb-6 3xl:mb-10 p-3 pb-5 sm:pr-3 md:pr-4 2xl:pr-5">
                    <div className="merct-avater w-[52px] h-[52px] rounded-full bg-gray-300"></div>
                    <div className="merct-auth-info">
                      <div className="merct-rating">
                        <img
                          src="/assets/mobile-escape-room/icon/five-star-review.svg"
                          alt="allinadventures fivestar icon"
                        ></img>
                      </div>
                      <div className="merct-rating text-[#A17F47] text-sm mt-2">
                        <span>John D., </span>
                        <span>Happy Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== slide 3========= */}
        <div className="text-white   bg-cover">
          <div className="mer-testi-card-container bg-[#FFF9EB]  rounded-[12px]">
            <div className="merc-row flex flex-col sm:flex-row  ">
              <div className="merc-img merc-col w-full sm:w-[47%]  lg:w-[46%] 3xl:w-[42%] p-2 sm:p-3 md:p-4 lg:p-4 3xl:p-5">
                <img
                  src="/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-3.jpg"
                  alt="allinadventures mobile escape game testimonial 3"
                  className="w-full rounded-[12px] lg:rounded-[14px] 3xl:rounded-[16px]"
                ></img>
              </div>
              <div className="merc-testi merc-col w-full sm:w-auto sm:flex-1  relative">
                <div className="mrec-testi-bg-icon absolute top-0 left-0 w-[200px] z-10">
                  <img
                    src="/assets/mobile-escape-room/icon/allinadventures-quote-icon.svg"
                    alt="allinadventures quote icon"
                  ></img>
                </div>
                <div className="mrec-testi-des sm:absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
                  <div className="merct-top mt-5 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-8 3xl:mt-12 p-3 sm:pr-3 md:pr-4 2xl:pr-5">
                    <h3 className="font-bold text-[22px] sm:text-[24px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                      A FUN AND ENGAGING ACTIVITY
                    </h3>
                    <div className="text-[#4A2F03] mt-1 2xl:mt-2 3xl:mt-3">
                      "The mobile escape room was the highlight of our
                      conference! Participants loved the unique experience, and
                      it was a fantastic way to break the ice. I can't wait to
                      book again for our next event!"
                    </div>
                  </div>
                  <div className="merct-bottom flex space-x-2 items-center md:mb-8 2xl:mb-6 3xl:mb-10 p-3 pb-5 sm:pr-3 md:pr-4 2xl:pr-5">
                    <div className="merct-avater w-[52px] h-[52px] rounded-full bg-gray-300"></div>
                    <div className="merct-auth-info">
                      <div className="merct-rating">
                        <img
                          src="/assets/mobile-escape-room/icon/five-star-review.svg"
                          alt="allinadventures fivestar icon"
                        ></img>
                      </div>
                      <div className="merct-rating text-[#A17F47] text-sm mt-2">
                        <span>Lisa M., </span>
                        <span>Event Planner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====== slide 4========= */}
        <div className="text-white   bg-cover">
          <div className="mer-testi-card-container bg-[#FFF9EB]  rounded-[12px]">
            <div className="merc-row flex flex-col sm:flex-row  ">
              <div className="merc-img merc-col w-full sm:w-[47%]  lg:w-[46%] 3xl:w-[42%] p-2 sm:p-3 md:p-4 lg:p-4 3xl:p-5">
                <img
                  src="/assets/mobile-escape-room/testimonials/mobile-escape-game-testimonial-1.jpg"
                  alt="allinadventures mobile escape game testimonial 1"
                  className="w-full rounded-[12px] lg:rounded-[14px] 3xl:rounded-[16px]"
                ></img>
              </div>
              <div className="merc-testi merc-col w-full sm:w-auto sm:flex-1  relative">
                <div className="mrec-testi-bg-icon absolute top-0 left-0 w-[200px] z-10">
                  <img
                    src="/assets/mobile-escape-room/icon/allinadventures-quote-icon.svg"
                    alt="allinadventures quote icon"
                  ></img>
                </div>
                <div className="mrec-testi-des sm:absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-between">
                  <div className="merct-top mt-5 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-8 3xl:mt-12 p-3 sm:pr-3 md:pr-4 2xl:pr-5">
                    <h3 className="font-bold text-[22px] sm:text-[24px] 3xl:text-[28px] leading-[1.3] text-[#CA9342]">
                      UNFORGETTABLE TEAM-BUILDING EXPERIENCE
                    </h3>
                    <div className="text-[#4A2F03] mt-1 2xl:mt-2 3xl:mt-3">
                      "Our team had an amazing time with the mobile escape room!
                      It brought everyone together and strengthened our bonds.
                      The puzzles were challenging yet fun, and we're still
                      talking about it weeks later!"
                    </div>
                  </div>
                  <div className="merct-bottom flex space-x-2 items-center md:mb-8 2xl:mb-6 3xl:mb-10 p-3 pb-5 sm:pr-3 md:pr-4 2xl:pr-5">
                    <div className="merct-avater w-[52px] h-[52px] rounded-full bg-gray-300"></div>
                    <div className="merct-auth-info">
                      <div className="merct-rating">
                        <img
                          src="/assets/mobile-escape-room/icon/five-star-review.svg"
                          alt="allinadventures fivestar icon"
                        ></img>
                      </div>
                      <div className="merct-rating text-[#A17F47] text-sm mt-2">
                        <span>Sarah J., </span>
                        <span>Corporate Event Organizer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MobileEscapeGameTestimonialCar;
