import CouponForm from "./CouponForm";
import CouponFormOpt from "./CouponFormOpt";
import CouponDisplay from "./CouponDisplay";
import UnlimitedEscapeRoomSection from "../unlimitedEscapeRoom/UnlimitedEscapeRoomSection";
import { FiChevronRight } from "react-icons/fi";

const foldeskForm = [
  {
    formId: "67f550e0f08b888165c44461",
    divId: "fd-form-67f550e0f08b888165c44461",
    elId: "#fd-form-67f550e0f08b888165c44461",
  },
  {
    formId: "682dc93f91c1753681f2754a",
    divId: "fd-form-682dc93f91c1753681f2754a",
    elId: "#fd-form-682dc93f91c1753681f2754a",
  },
  {
    formId: "682dcd249b0e3e5d568aad9c",
    divId: "fd-form-682dcd249b0e3e5d568aad9c",
    elId: "#fd-form-682dcd249b0e3e5d568aad9c",
  },
];
const AllCouponOpt = (props) => {
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
      <div className="section-container max-w-7xl mx-auto  pt-16 md:pt-24 lg:pt-28 relative z-30 md:px-4">
        <div className="mb-8 md:mb-10 lg:mb-12 2xl:mb-16">
          <UnlimitedEscapeRoomSection
            setShowUerBookingList={props.setShowUerBookingList}
          />
        </div>
        <div className="section-container-ins max-w-5xl mx-auto px-4 pt-2 pb-16 md:pt-3 md:pb-20 lg:pb-28 lg:pt-4 relative z-30">
          {props.couponlist.map((coupon, index) => {
            return (
              <div key={index} className="copun-adv mb-8 md:mb-12 shadow-md">
                <CouponFormOpt
                  id={coupon.id}
                  coupon={coupon}
                  foldeskFormData={foldeskForm[index]}
                />
              </div>
            );
          })}
          <CouponDisplay />
          <div className="view-all flex justify-center mt-8">
            <a
              href="/rewards-program"
              className="flex text-lg  justify-center space-x-1 items-center text-red-600 hover:text-red-700 font-medium"
            >
              <span>Learn more about reward program</span> <FiChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCouponOpt;
