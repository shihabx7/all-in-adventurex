import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OccActivityCarousel = ({ carouselList }) => {
  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1380 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1380, min: 1000 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 999, min: 500 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="full-carousel inpersongame inp-car mer-car mer-game-car ac-oc-cont">
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
        containerClass="carousel-container ocac-car-container ml-auto pb-10 md:pb-12"
        // rewindWithAnimation={true}
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style tst  mer-car-dot ocac-car-dot  mer-game-carousel-dot "
        itemClass="game-carousel-card px-1 zm:px-2 md:px-4 lg:px-3 xl:px-5 2xl:px-6 4xl:px-5 pb-4 md:pb-5 lg:pb-8"
        renderDotsOutside={false}
        partialVisible={true}
      >
        {carouselList.map((item, index) => {
          return (
            <div
              key={index}
              className="text-white relative group rounded-xl overflow-hidden hover:cursor-pointer"
            >
              <img
                className="max-w-full rounded-xl transition ease-in-out duration-1000 transform scale-100 group-hover:scale-105"
                alt={item.carouselImage.alt}
                src={item.carouselImage.url}
              ></img>

              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end ">
                <div className="card-bottom  mbl-card-bottom px-2 rm:px-4 md:px-4 lg:px-3 xl:px-5 3xl:px-6 pb-6 rm:pb-7 zm:pb-6 sm:pb-4 md:pb-6 pt-12 zm:pt-0 rounded-b-lg">
                  <div className="card-game-descs mb-3 md:mb-4">
                    <h3 className="card-game-titlex  text-[20px] rm:text-[22px] zm:text-[20px] md:text-[22px] lg:text-[24px] 2xl:text-[25px]  font-bold capitalize transition ease-in-out duration-1000 text-[#fff3e0] group-hover:text-[#e0bf62] ">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/** =========slide 1================ */}
      </Carousel>
    </div>
  );
};

export default OccActivityCarousel;
