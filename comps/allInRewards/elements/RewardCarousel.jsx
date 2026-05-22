import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

export default function RewardCarousel(props) {
  const responsive = {
    desktopxl: {
      breakpoint: { max: 4300, min: 2081 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktoplg: {
      breakpoint: { max: 2080, min: 1640 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };
  /*

   
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
        dotListClass="custom-dot-list-style"
        itemClass="game-carousel-card px-2 lg:px-4 2xl:px-5 3xl:px-2 4xl:px-5 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
        */

  return (
    <div className="smoot-carousel-section bg-black">
      <div className="reward-smooth-carousel bg-[rgba(38, 29, 10, 0.4)] border-y-[.5px] border-[#917c42] py-5 md:py-6 lg:py-8">
        <Carousel
          ssr={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1}
          keyBoardControl={true}
          containerClass="carousel-container" // Keeps the animation loop moving
          customTransition="transform 5000ms linear" // Essential for smooth movement
          transitionDuration={5000}
          arrows={false} // Usually hidden for smooth scrolling carousels
          pauseOnHover={true}
          partialVisible={true} // Optional: stops the scroll when user hovers
        >
          <div className="flex carousel-item  justify-between space-x-2 items-center">
            <p className="text-sm md:text-base lg:text-lg text-[#8A7133] pl-8">
              JOIN FREE TODAY
            </p>
            <div className="pr-8">
              <img
                src={"/assets/all-in-rewards/all-in-adventures-icon.svg"}
                alt="All-in Adventures Icon"
              ></img>
            </div>
          </div>
          <div className="flex carousel-item  justify-between space-x-2 items-center">
            <p className="text-sm md:text-base lg:text-lg text-[#8A7133] pl-8">
              FREE ROOM AFTER 2 VISITS
            </p>
            <div className="pr-8">
              <img
                src={"/assets/all-in-rewards/all-in-adventures-icon.svg"}
                alt="All-in Adventures Icon"
              ></img>
            </div>
          </div>
          <div className="flex carousel-item  justify-between space-x-2 items-center">
            <p className="text-sm md:text-base lg:text-lg text-[#8A7133] pl-8">
              EXCLUSIVE MEMBER OFFERS
            </p>
            <div className="pr-8">
              <img
                src={"/assets/all-in-rewards/all-in-adventures-icon.svg"}
                alt="All-in Adventures Icon"
              ></img>
            </div>
          </div>
          <div className="flex carousel-item  justify-between space-x-2 items-center">
            <p className="text-sm md:text-base lg:text-lg text-[#8A7133] pl-8">
              JOIN FREE TODAY
            </p>
            <div className="pr-8">
              <img
                src={"/assets/all-in-rewards/all-in-adventures-icon.svg"}
                alt="All-in Adventures Icon"
              ></img>
            </div>
          </div>
          <div className="flex carousel-item  justify-between space-x-2 items-center">
            <p className="text-sm md:text-base lg:text-lg text-[#8A7133] pl-8">
              FREE ROOM AFTER 2 VISITS
            </p>
            <div className="pr-8">
              <img
                src={"/assets/all-in-rewards/all-in-adventures-icon.svg"}
                alt="All-in Adventures Icon"
              ></img>
            </div>
          </div>
          <div className="flex carousel-item  justify-between space-x-2 items-center">
            <p className="text-sm md:text-base lg:text-lg text-[#8A7133] pl-8">
              EXCLUSIVE MEMBER OFFERS
            </p>
            <div className="pr-8">
              <img
                src={"/assets/all-in-rewards/all-in-adventures-icon.svg"}
                alt="All-in Adventures Icon"
              ></img>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
