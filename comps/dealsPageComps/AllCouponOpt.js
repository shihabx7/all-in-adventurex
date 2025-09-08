import CouponForm from "./CouponForm";
import CouponFormOpt from "./CouponFormOpt";
import CouponDisplay from "./CouponDisplay";

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
    <div className="coupon-section section-bg relative bg-[#FFF9EB]">
      <div className="section-full-screen-bg-image w-full h-full bg-[#FFF9EB] absolute left-0 top-0 bg-[url('/assets/home-page/aia-brown-bg-pattern.svg')] bg-center bg-[length:200px_200px] md:bg-[length:360px_360px] lg:bg-[length:400px_400px] bg-repeat bg-opacity-50"></div>
      <div className="section-content  relative z-[10]">
        <div className="section-container max-w-7xl mx-auto  pt-16 md:pt-24 lg:pt-28 relative z-30 px-3 rm:px-4 md:px-4">
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
    </div>
  );
};

export default AllCouponOpt;
