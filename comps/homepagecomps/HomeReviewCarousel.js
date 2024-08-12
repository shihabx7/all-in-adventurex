import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const HomeReviewCarousel = ({ reviews }) => {
  const showLocation = () => {
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const showDescription = (description) => {
    var cutDescription = description;
    if (description.length > 110) {
      cutDescription = description.slice(0, 160) + " ...";
    }

    return cutDescription;
  };
  const shortrev = (txt) => {
    return txt.split(" ").splice(0, 24).join(" ");
  };

  const responsive = {
    desktoplg: {
      breakpoint: { max: 4000, min: 1640 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 8,
    },
    desktopmd: {
      breakpoint: { max: 1640, min: 1440 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 8,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 16,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <div className="full-carousel pysicalescapecarousel revcarousel tst inp-car">
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
        keyBoardControl={true}
        customTransition=".5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style z-10"
        itemClass="game-carousel-card home review-carousel px-2 lg:px-3 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {reviews.map((review) => {
          return (
            <div
              key={review}
              className="text-white  game-slider-card rev-card group"
            >
              <div className="card-container relative">
                <div className="rev-card-head">
                  <div className="card-img review-img px-4">
                    <img src={review.rev_img}></img>
                  </div>
                </div>

                <div className="card-rev-bottom bg-black pt-4 md:pt-6 lg:pt-8 px-4">
                  <div className="card-rev-desc text-center">
                    <div className="card-rev-desc text-center min-h-[200px]">
                      <img
                        className="inline"
                        src="/assets/reviews/rev-5star.svg"
                      ></img>
                      {review.revlink && (
                        <h3 className="card-rev-title py-3 text-lg lg:text-xl font-medium uppercase text-white">
                          {review.title}
                        </h3>
                      )}
                      {!review.revlink && (
                        <h3 className="card-rev-title py-3 text-xl lg:text-2xl font-medium uppercase text-white">
                          {review.title}
                        </h3>
                      )}

                      {review.revlink && (
                        <>
                          <p className="vx text-gold font-light lg:text-lg italic h-[130px] md:h-[172px]">
                            {review.review_text}
                          </p>
                        </>
                      )}
                      {!review.revlink && (
                        <p className="text-gold font-light lg:text-lg italic h-[130px] md:h-[172px]">
                          {review.review_text}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="card-rev-auth mt-4 pb-8 text-center">
                    <p className="text-[#afafaf] mt-4">{review.author}</p>

                    <p className="text-[#585858]">{review.author_location}</p>
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

export default HomeReviewCarousel;
