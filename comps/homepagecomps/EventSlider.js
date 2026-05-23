import { FaAngleRight } from "react-icons/fa";
import EventCarousel from "./EventCarousel";

const EventSlider = (props) => {
  return (
    <div className="event-parties-carousel-section bg-[#FFF3D3] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px] pt-16 md:pt-20 lg:pt-28  relative  ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      {/** =======ornamental icon===== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0">
        <img
          alt="Balloons, stars and a flying rocket representing the fun and excitement of Escape Rooms at All In Adventures."
          src="/assets/pl-bgi-1.png"
        ></img>
      </div>
      <div className="pl-or pl-or-3 absolute top-0 right-0">
        <img
          alt="Appealing decorations with colourful confetti, highlighting the fun of Escape Rooms at All In Adventures."
          src="/assets/pl-bgi-3.png"
        ></img>
      </div>
      {/** =======ornamental icon end===== */}
      <div className="max-w-7xl mx-auto   px-4 relative z-20 ">
        <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
          EVENTS AND PARTIES
        </h2>

        <div className="max-w-[960px] md:text-lg mx-auto text-center mt-1 md:mt-2 mb-4 md:mb-8 lg:mb-9">
          <div
            className="text-gray-700 md:px-8"
            dangerouslySetInnerHTML={{ __html: props.eventList.subTitle }}
          ></div>
        </div>
      </div>
      <div className="slider-box pb-4 md:pb-8 relative">
        {props.locationSlug ? (
          <EventCarousel
            eventList={props.eventList.eventList}
            locationSlug={props.locationSlug}
            isPublished={props.isPublished}
          />
        ) : (
          <EventCarousel eventList={props.eventList.eventList} />
        )}
      </div>
      <div className="view-all flex justify-center pb-2 pt-8 md:pt-12 lg:pt-16">
        {props.locationSlug ? (
          <a
            href={"/" + props.locationSlug + "/events"}
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all events and parties </span> <FaAngleRight />
          </a>
        ) : (
          <a
            href={"/events/"}
            className="flex relative z-20 font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
          >
            <span>View all events and parties </span> <FaAngleRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default EventSlider;
