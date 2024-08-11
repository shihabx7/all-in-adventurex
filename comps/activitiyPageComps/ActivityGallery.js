import TitleSeparator from "../util/TitleSeparator";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const ActivityGallery = (props) => {
  const responsive = {
    desktoplg: {
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 24,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className="game-gallery bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-4">
        <div className="s-title">
          <TitleSeparator title={props.activityGallery.galleryTitle} />
          <div className="max-w-[800px] mx-auto mt-4 mb-4 md:mt-6  md:mb-16">
            <p className="text-gray-700 px-4 md:px-6  md:text-lg text-center">
              {props.activityGallery.gallerySubTitle}
            </p>
          </div>
        </div>
        <div className="hidden md:block game-gallery">
          <div className="grid md:grid-cols-3 gap-4">
            {props.activityGallery.galleryImages.map((item) => {
              return (
                <div
                  key={item.id}
                  className="game-gl-item cursor-pointer shadow-lg border-2 inset border-transparent hover:border-2 hover:border-[#D3A54F]"
                >
                  <img src={item.url} alt={item.alt}></img>
                </div>
              );
            })}
          </div>
        </div>
        {/*============== gallery slider========== */}
        <div className="game-gallery-slider md:hidden">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            arrows={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlay={false}
            keyBoardControl={true}
            customTransition=".5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="game-carousel-card game-gallery-carousel px-2 lg:px-3 py-4 md:py-8"
            renderDotsOutside={true}
            partialVisible={true}
          >
            {props.activityGallery.galleryImages.map((item) => {
              return (
                <div key={item.id} className="game-gl-item">
                  <img src={item.url} alt={item.alt} />
                </div>
              );
            })}
          </Carousel>
        </div>

        {/* ===============gallery slider============= */}
      </div>
    </div>
  );
};

export default ActivityGallery;
