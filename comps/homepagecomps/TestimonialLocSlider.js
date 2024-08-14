import TitleSeparator from "../util/TitleSeparator";
import TestimonialCarousel from "./TestimonialCarousel";
import { FaAngleRight } from "react-icons/fa";

const TestimonialLocSlider = (props) => {
  return (
    <div className="homereview bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 lg:py-28 overflow-hidden">
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

      {/*======================= boder img end============== */}
      {/** =======ornamental icon===== */}

      <div className="pl-or pl-or-1 absolute top-0 left-0">
        <img src="/assets/pl-bgi-1.png"></img>
      </div>

      <div className="htb-bg-icon htb-bg-2 absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>

      {/** =======ornamental icon end===== */}
      <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
        <TitleSeparator title={props.testimonialList.title} />
        <div className="max-w-[840px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
          <div
            className="text-gray-700 md:px-8"
            dangerouslySetInnerHTML={{ __html: props.testimonialList.subTitle }}
          ></div>
        </div>
      </div>
      <div className="slider-box pb-4 md:pb-8 relative">
        <TestimonialCarousel
          testimonialList={props.testimonialList.testimonialList}
        />
      </div>
      <div className="view-all flex justify-center mt-8 md:mt-12 lg:mt-16 relative z-10">
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

export default TestimonialLocSlider;
