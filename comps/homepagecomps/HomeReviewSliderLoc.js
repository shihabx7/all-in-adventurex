import TitleSeparator from "../util/TitleSeparator";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import HomeReviewCarousel from "./HomeReviewCarousel";

const HomeReviewSliderLoc = ({ reviews }) => {
  return (
    <div className="homereview bg-center bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 lg:py-28 overflow-hidden ">
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
        <img src="/assets/review-bg-icon.png"></img>
      </div>

      <div className="htb-bg-icon htb-bg-2 absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>

      {/** =======ornamental icon end===== */}
      <div className="max-w-7xl mx-auto  px-4 relative z-30 ">
        <TitleSeparator
          title="CUSTOMERS LOVE ALL IN ADVENTURES"
          color="dark-gold"
          weight="font-bold"
        />
        <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
          <p className="text-gray-700 md:px-8">
            Our Game Masters are passionate and always work to ensure everyone
            feels like a rockstar while playing! Over 25,000 guests have raved
            about their experience at All In Adventures!
          </p>
        </div>
      </div>
      <div className="slider-box pb-4 md:pb-8 relative">
        <HomeReviewCarousel reviews={reviews} />
      </div>
      <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16 relative z-10">
        <a
          href="/testimonials/"
          className="flex font-medium text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"
        >
          <span>See more customer testimonials</span> <FaAngleRight />
        </a>
      </div>
    </div>
  );
};

export default HomeReviewSliderLoc;
