import TitleSeparator from "../util/TitleSeparator";
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const MobileEscapeGallery = ({ gallerySectionData, imgList, locationName }) => {
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
      partialVisibilityGutter: 80,
    },
  };

  return (
    <div className="game-gallery bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-28 md:px-4">
        <div className="s-title  mb-4 rm:mb-6 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto px-4 md:px-0">
          <MobileTitleSeparatorCenter title={gallerySectionData.sectionTitle} />
          <div
            className="text-[#2E2E2E] mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{
              __html: gallerySectionData.sectionSubTitle,
            }}
          ></div>
        </div>
        {gallerySectionData.galleryImageList ? (
          <div className="hidden md:block game-gallery">
            <div className="grid md:grid-cols-3 gap-4">
              {gallerySectionData.galleryImageList.map((item, index) => {
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
        ) : (
          <></>
        )}

        {/*============== gallery carousel========== */}
        {gallerySectionData.galleryImageList ? (
          <div className="game-gallery-slider md:hidden relative inp-car ">
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
              keyBoardControl={true}
              customTransition=".5s ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              //  removeArrowOnDeviceType={["tablet", "mobile"]}
              //deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="game-carousel-card game-gallery-carousel px-2 lg:px-3 py-4 md:py-8"
              renderDotsOutside={true}
              partialVisible={true}
            >
              {gallerySectionData.galleryImageList.map((item) => {
                return (
                  <div key={item.id} className="game-gl-item">
                    <img src={item.url} alt={item.alt} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <></>
        )}

        {/* ===============gallery slider============= */}
        <div className="mbl-h-btn  mt-16 md:mt-14 2xl:mt-16 flex justify-center">
          <a
            href="#mobile-escape-room-form"
            className="max-w-[220px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeGallery;
