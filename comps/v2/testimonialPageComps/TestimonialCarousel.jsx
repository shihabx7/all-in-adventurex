import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialCarousel = ({ testimonialList }) => {
  const responsive = {
    desktopxxl: {
      breakpoint: { max: 5000, min: 2700 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 200,
    },
    desktopxl: {
      breakpoint: { max: 2699, min: 2000 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 170,
    },
    desktopfhd: {
      breakpoint: { max: 1999, min: 1570 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 157,
    },
    desktophd: {
      breakpoint: { max: 1569, min: 1380 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 100,
    },
    desktopmd: {
      breakpoint: { max: 1379, min: 1140 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 130,
    },
    desktop: {
      breakpoint: { max: 1139, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 120,
    },
    tablet: {
      breakpoint: { max: 1023, min: 600 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 4,
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  //=============================================
  return (
    <div className="aia-new-carousel testimonial-vid-carousel-container">
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
        containerClass="aia-new-carousel-container section-bg-light  test-vid-carousel-container pt-5 rm:pt-6 md:pt-7 lg:pt-8 pb-14 sm:pb-16 lg:pb-20"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item test-car-list-v2 md:max-w-[640px] lg:max-w-[860px] xl:max-w-[1100px] 2xl:max-w-[1230px] rounded-[16px] px-2 sm:px-1 md:px-[16px] lg:px-[20px] xl:px-[36px] "
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={true}
        //centerMode={true}
      >
        {testimonialList.map((item, index) => {
          return (
            <div key={index} className="testimonial-item-container ">
              <div className="relative">
                {/*=======================background-image */}
                <div className="tc-item-bg h-full w-full absolute top-0 left-0 z-10">
                  <img
                    className="h-full w-full object-contain object-right"
                    src={"/assets/testimonials/testimonial-gray-bg.svg"}
                    alt={"testimonial gray bg"}
                  ></img>
                </div>
                {/*=======================testimonial */}
                <div className="tc-item-box relative z-20">
                  <div className="grid grid-cols-1 md:grid-cols-[45%_55%] lg:grid-cols-[47%_53%] gap-0">
                    {/*=======================testimonial image*/}
                    <div className="tc-img-box">
                      <img
                        className="h-full w-full object-cover object-center"
                        src={
                          item.testimonialImage.url
                            ? item.testimonialImage.url
                            : "/assets/testimonials/thumb/testimonial-img-1.jpg"
                        }
                        alt={
                          item.testimonialImage.alt
                            ? item.testimonialImage.alt
                            : "testimonial image 1"
                        }
                      ></img>
                    </div>
                    {/*=======================testimonial image*/}
                    <div className="tc-content-box p-12 pl-6">
                      <div className="google-review flex items-center space-x-2">
                        <div className="w-[2.4rem] md:w-[2.5rem] xl:w-[2.7rem]">
                          <img
                            className="w-full "
                            src={"/assets/testimonials/google-review-icon.svg"}
                            alt={"google review icon"}
                          ></img>
                        </div>
                        <div className="w-[128px] md:w-[130px] xl:w-[135px]">
                          <img
                            className="w-full"
                            src={"/assets/testimonials/google-review-star.svg"}
                            alt={"google review star"}
                          ></img>
                        </div>
                      </div>
                      <div className="tc-text mt-5">
                        <p className="text-white italic text-lg xl:text-[1.2rem] leading-[1.5]">
                          {item.testimonial}
                        </p>
                      </div>
                      <div className="tc-auth mt-3">
                        <p className="text-[#A6A6A6] italic text-sm md:text-base">
                          {item.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative z-30 tc-quote-icon flex justify-end mt-[-48px] mr-[40px]">
                <img
                  className="w-[92px] md:w-[100px] xl:w-[106px]"
                  src={"/assets/testimonials/testtimonial-quote-icon.svg"}
                  alt={"testimonial quote icon"}
                ></img>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
