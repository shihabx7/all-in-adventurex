import TitleSeparator from "../util/TitleSeparator";

import { FaAngleRight } from "react-icons/fa";
import EventCarousel from "./EventCarousel";

const EventSlider = (props) => {
  return (
    <div className="planningevent bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 lg:py-28 ">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      {/** =======ornamental icon===== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0">
        <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div className="pl-or pl-or-2 absolute bottom-0 left-0">
        <img src="/assets/pl-bgi-2.png"></img>
      </div>
      <div className="pl-or pl-or-3 absolute top-0 right-0">
        <img src="/assets/pl-bgi-3.png"></img>
      </div>
      <div className="pl-or pl-or-4 absolute bottom-0 right-0">
        <img src="/assets/pl-bgi-4.png"></img>
      </div>

      {/** =======ornamental icon end===== */}
      <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
        <TitleSeparator title={props.eventList.title} />

        <div className="max-w-[840px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
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
      <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16">
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
