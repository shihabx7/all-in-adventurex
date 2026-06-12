import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function GalleryCarouselView({ imageList }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4300, min: 1181 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    tabletLg: {
      breakpoint: { max: 1180, min: 1001 },
      items: 1,
      slidesToSlide: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1000, min: 640 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 0,
    },
    mobileLg: {
      breakpoint: { max: 639, min: 430 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 429, min: 341 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobileXs: {
      breakpoint: { max: 340, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="gallery-carousel-view ">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition=".5s ease-out"
        transitionDuration={500}
        containerClass="aia-new-carousel-container section-bg-light  home-event-carousel-container pt-0 md:pt-6 lg:pt-10 pb-14 sm:pb-16 lg:pb-16"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style aia-new-dot-list"
        itemClass="aia-new-carousel-item home-event-car-list rounded-[16px] px-[4px] zm:px-[5px] md:px-2 xl:px-3"
        renderArrowsOutside={true}
        renderDotsOutside={false}
        partialVisible={false}
      >
        {imageList.map((item, index) => {
          return (
            <div key={index} className="gallery-img-item relative h-full">
              <img
                className="max-w-full h-full object-cover"
                src={
                  item.url
                    ? item.url
                    : "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png"
                }
                alt={item.alt ? item.alt : "escape room event party gallery"}
              ></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
