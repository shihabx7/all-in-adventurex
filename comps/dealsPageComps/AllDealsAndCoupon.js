import CouponForm from "./CouponForm";
import CouponDisplay from "./CouponDisplay";

import { FiChevronRight } from "react-icons/fi";
const AllDealsAndCoupon = (props) => {
  return (
    <div className="our-mission-vission relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
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
      <div className="section-container max-w-5xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
        {props.couponlist.map((coupon) => {
          return (
            <div key={coupon.id} className="copun-adv mb-8 md:mb-12 shadow-md">
              <CouponForm id={coupon.id} coupon={coupon} />
            </div>
          );
        })}
        <CouponDisplay />
        <div className="view-all flex justify-center mt-8">
          <div className="game-btn-all ">
            <a
              href="/activities/"
              className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-10 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
            >
              VIEW ALL GAMES
            </a>

            <a
              href="/events/"
              className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-10 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center"
            >
              VIEW ALL EVENTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDealsAndCoupon;
