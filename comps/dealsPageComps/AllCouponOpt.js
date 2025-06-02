import CouponForm from "./CouponForm";
import CouponFormOpt from "./CouponFormOpt";
import CouponDisplay from "./CouponDisplay";
import UnlimitedEscapeRoomSection from "../unlimitedEscapeRoom/UnlimitedEscapeRoomSection";
import { FiChevronRight } from "react-icons/fi";

const foldeskForm = [
  {
    formId: "683c8527a2151e95163521f7",
    divId: "fd-form-683c8527a2151e95163521f7",
    elId: "#fd-form-683c8527a2151e95163521f7",
  },
  {
    formId: "683c5e372a61d6df48bf6ab6",
    divId: "fd-form-683c5e372a61d6df48bf6ab6",
    elId: "#fd-form-683c5e372a61d6df48bf6ab6",
  },
  {
    formId: "683c85906c00df771883ef45",
    divId: "fd-form-683c85906c00df771883ef45",
    elId: "#fd-form-683c85906c00df771883ef45",
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
      <div className="section-container max-w-7xl mx-auto  pt-16 md:pt-24 lg:pt-28 relative z-30 px-3 rm:px-4 md:px-4">
        <div className="mb-8 md:mb-10 lg:mb-12 2xl:mb-16">
          <UnlimitedEscapeRoomSection
            setShowUerBookingList={props.setShowUerBookingList}
          />
        </div>
        <div className="section-container-ins max-w-[980px] xl:max-w-[1000px] mx-auto  pt-2 pb-16 md:pt-3 md:pb-20 lg:pb-28 lg:pt-4 relative z-30">
          {props.couponlist.map((coupon, index) => {
            return (
              <div
                key={index}
                className="copun-adv mb-8 md:mb-12 shadow-md rounded-lg"
              >
                <CouponFormOpt
                  id={coupon.id}
                  coupon={coupon}
                  foldeskFormData={foldeskForm[index]}
                />
              </div>
            );
          })}
          <CouponDisplay />
        </div>
      </div>
    </div>
  );
};

export default AllCouponOpt;
