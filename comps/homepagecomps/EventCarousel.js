import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useSiteData } from "../../contexts/SiteDataContext";
import { locationBookingInfo } from "../../lib/v2/data/locationBookingInfo";

const EventCarousel = (props) => {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("partyPackage-list");
    openModalMenu();
  };
  const bookEventFlow = (e, locationSlug) => {
    e.preventDefault();
    let bookingData = locationBookingInfo[locationSlug];
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.partyPackageFlow,
    });
  };
  // new party booking setion
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const showDescription = (description) => {
    if (description.length > 144) {
      const cutDescription = description.slice(0, 130) + " ...";
      return cutDescription;
    }

    return description;
  };
  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.item },
    });
  };
  const responsive = {
    desktoplg: {
      breakpoint: { max: 4000, min: 1640 },
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
      partialVisibilityGutter: 24,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 24,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
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
        itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
        renderDotsOutside={true}
        partialVisible={true}
      >
        {props.eventList.map((event) => {
          return (
            <div
              key={event.id}
              className="text-white bg-gray-300 game-slider-card card-border event-card bg-cover"
            >
              <div className="card-container relative">
                <img
                  className="w-full"
                  src={event.eventCarousel.url}
                  alt={event.eventCarousel.alt}
                ></img>
                <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.07)]">
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="card-head otg-head flex justify-center pt-8 lg:pt-8 lg:pb-8 px-4">
                      <div className="card-info text-center">
                        <h3 className="card-game-title text-[22px] rm:text-[25px] sm:text-2xl lg:text-3xl xl:text-[28px] 3xl:text-[27px] 4xl:text-3xl font-bold uppercase text-[#ffffff]">
                          {event.eventName}
                        </h3>
                      </div>
                    </div>

                    <div className="card-bottom otg-bottom p-4 pt-6 md:pt-10 lg:pt-12">
                      <div className=" text-center  pb-3">
                        <p className="text-gray-100 text-[13px] rm:text-[15px] lg:text-[16px] 3xl:text-[15px] 4xl:text-[17px]">
                          {showDescription(event.description)}
                        </p>
                      </div>
                      <div className="event-booking-car-link mt-1 text-center ev-book-btn">
                        {props.locationSlug && (
                          <div className="flex flex-col justify-center items-center  space-y-2 md:space-y-2">
                            <button
                              onClick={(e) =>
                                bookEventFlow(e, props.locationSlug)
                              }
                              className="border loc-event max-w-[220px] border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-semibold text-lg mb-2 hover:bg-red-700 hover:border-red-700"
                            >
                              BOOK EVENT
                            </button>
                            <a
                              href={
                                "/" +
                                props.locationSlug +
                                "/events/" +
                                event.eventSlug
                              }
                              className="border max-w-[200px]  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-semibold text-lg mb-2 hover:bg-red-700 hover:border-red-700"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        )}
                        {!props.locationSlug && (
                          <div className="flex flex-col root-event justify-center items-center   space-y-2 md:space-y-2">
                            <button
                              onClick={showLocModal}
                              className="border max-w-[220px]   border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700"
                            >
                              BOOK EVENT
                            </button>
                            <a
                              href={"/events/" + event.eventSlug}
                              className="border max-w-[200px]    border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/*====== slide 1========= */}
      </Carousel>
    </div>
  );
};

export default EventCarousel;

/*============================= old btn



  {props.locationSlug ? (
                          <button
                            onClick={(e) =>
                              bookEventFlow(e, props.locationSlug)
                            }
                            className="border max-w-[220px] card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700"
                          >
                            BOOK EVENT
                          </button>
                        ) : (
                          <button
                            onClick={showLocModal}
                            className="border max-w-[220px] card-book-btn block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700"
                          >
                            BOOK EVENT
                          </button>
                        )}
                        {props.locationSlug ? (
                          <a
                            href={
                              "/" +
                              props.locationSlug +
                              "/events/" +
                              event.eventSlug
                            }
                            className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700"
                          >
                            LEARN MORE
                          </a>
                        ) : (
                          <a
                            href={"/events/" + event.eventSlug}
                            className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700"
                          >
                            LEARN MORE
                          </a>
                        )}

=========================*/
