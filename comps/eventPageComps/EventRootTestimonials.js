import TitleSeparator from "../util/TitleSeparator";

import { FaAngleRight } from "react-icons/fa";
import EventReviewCarousel from "./EventReviewCarousel";

const EventRootTestimonials = (props) => {
  return (
    <div className="homereview relative py-16 md:py-20 lg:py-28 overflow-hidden bg-center bg-[url('/assets/svg/pattern/brown-color-bg-pattern.svg')] bg-[length:320px_320px] md:bg-[length:460px_460px] lg:bg-[length:600px_600px] bg-repeat">
      {/** =======ornamental icon===== */}

      <div className="bbottom absolute bottom-0 left-0 w-full">
        <img
          className="w-full rotate-180"
          src="/assets/svg/pattern/brown-color-border.svg"
        ></img>
      </div>

      <div className="htb-bg-icon htb-bg-3 absolute">
        <img src="/assets/Navigation.png"></img>
      </div>

      <div className="htb-bg-icon htb-bg-4 absolute">
        <img src="/assets/Skull.png"></img>
      </div>

      {/** =======ornamental icon end===== */}
      <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
        <TitleSeparator title="CUSTOMERS LOVE ALL IN ADVENTURES" />
        <div className="max-w-[840px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-8">
          <p className="text-gray-700 md:px-8">
            Our Game Masters are passionate and always work to ensure everyone
            feels like a rockstar while playing! Over 25,000 guests have raved
            about their experience at All In Adventures!
          </p>
        </div>
      </div>
      <div className="slider-box pb-4 md:pb-8 relative">
        <EventReviewCarousel testimonialData={props.testimonialData} />
      </div>
      <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16 relative z-10">
        <a
          href="/testimonials/"
          className="flex text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700 font-medium"
        >
          <span>See more customer testimonials</span> <FaAngleRight />
        </a>
      </div>
    </div>
  );
};

export default EventRootTestimonials;
