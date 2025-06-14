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
      breakpoint: { max: 999, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
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
        dotListClass="custom-dot-list-style  mer-car-dot ocac-car-dot  mer-game-carousel-dot "
        itemClass="game-carousel-card px-1 md:px-4 lg:px-4 xl:px-5 2xl:px-6 4xl:px-7 pb-4 md:pb-5 lg:pb-8"
        renderDotsOutside={false}
        partialVisible={true}
      >
        {carouselList.map((item, index) => {
          return (
            <div key={index} className="text-white relative group ">
              <img
                className="w-full "
                alt={item.carouselImage.alt}
                src={item.carouselImage.url}
              ></img>

              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end ">
                <div className="card-bottom  mbl-card-bottom px-2 rm:px-3 md:px-3 lg:px-3 xl:px-3 3xl:px-4 4xl:px-4 pb-6 rm:pb-7 zm:pb-6 sm:pb-4 md:pb-6 pt-12 zm:pt-0 rounded-b-[10px]">
                  <div className="card-game-descs mb-3 md:mb-4">
                    <h3 className="card-game-titlex text-center zm:text-left text-[20px] rm:text-[21px] md:text-[22px] 2xl:text-[23px]  font-bold uppercase text-[#fff3e0]">
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
