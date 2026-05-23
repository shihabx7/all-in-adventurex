import TitleSeparator from "../util/TitleSeparator";
import TestimonialCarousel from "./TestimonialCarousel";
import { FaAngleRight } from "react-icons/fa";

import SectionBorderTop from "../util/SectionBorderTop";
const TestimonialLocSlider = (props) => {
  return (
    <div className="old-loc-homereview bg-[#FFF3D3] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px] pt-4 md:pt-6 lg:pt-8  relative overflow-hidden">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      {/** =======ornamental icon===== */}

     

      {/** =======ornamental icon end===== */}
      <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
        <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
          CUSTOMERS LOVE ALL IN ADVENTURES
        </h2>
        <div className="max-w-[900px] md:text-lg mx-auto text-center mt-1 md:mt-2 mb-4 md:mb-8 lg:mb-9">
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
