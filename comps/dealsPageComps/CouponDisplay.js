import { BsFillCheckCircleFill, BsCheck } from "react-icons/bs";
const CouponDisplay = () => {
  return (
    <div className="couponcard bg-[#FFF3D8] border border-[#DAC89F] drop-shadow-sm my-4">
      {/* ==================coupon desc title============================= */}
      <div className="copoun-desc-box px-4 py-4 md:px-6 md:py-6">
        <div className="coupon-title">
          <p className="md:text-lg text-[#938056]">CURRENT DEALS AND COUPONS</p>
          <h2 className="golden-text font-os font-bold text-2xl md:text-3xl lg:text-4xl">
            PLAY IT AGAIN—DOUBLE THE FUN, HALF THE PRICE{" "}
          </h2>
        </div>
      
      </div>
      {/* ==================coupon desc============================= */}
      {/* ==================coupon from============================= */}
      <div className="copoun-form-box bg-[#F4E6C3] flex justify-between flex-col  md:flex-row space-y-2 space-x-0 md:space-y-0  md:space-x-2 ">
         {/* ==================coupon offer============================= */}
        <div className="md:w-1/3 coupon-offer-col bg-[#000000]  text-center">
          <div className="py-12">
            <p className="golden-text text-[64px] font-bold font-os leading-[1.2]">
              50%
            </p>
            <p className="golden-text text-[48px] font-os uppercase">off</p>
          </div>
        </div>
         {/* ==================coupon offer============================= */}
        {/* ==================coupon text============================= */}
        <div className="coupon-form-col md:w-2/3 px-4 flex flex-col justify-between ">
          <div className="coupon-form-top flex justify-between items-center mt-2 md:mt-4">
            <div className="coupon-varified flex space-x-1 rm:space-x-2 items-center uppercase text-[#A78849] text-sm md:text-base">
              <span className="md:text-lg xl:text-xl">
                <BsFillCheckCircleFill />
              </span>
              <span>VERIFIED</span>
            </div>
            <div className="coupon-varified flex space-x-1 items-center text-[#71603D] text-xs md:text-sm">
              <span className="md:text-xl">
                <BsCheck />
              </span>
              <span>
                Last user saved <span className="font-medium">$25</span> 20 min
                ago
              </span>
            </div>
          </div>
          {/*
          <div className="coupon-code-col mb-4 md:mb-0 mt-4 max-w-[260px] md:max-w-[280px] inline-block relative">
            <div className="coupon-code-box flex space-x-2 items-center justify-end  h-[60px] px-2 border-2 border-dashed border-[#E4CB98] rounded bg-[#FDF1D3] drop-shadow-md"></div>
            <div className="flex items-center justify-center coupon-hider absolute top-0 left-0 h-full rounded w-[100%] bg-golden text-center text-white border-2 border-dashed border-[#FDF1D3">
              <p className="lg:text-lg">Available In-store</p>
            </div>
          </div>
          */}
          <p className="xl:text-lg text-[#464646] mt-4">
            Play one escape room and get 50% OFF your second room! You have two
            options for using this discount:
          </p>
          <div className="cup-list">
            <ul className="star-list list-inside pl-4">
              <li className="xl:text-lg text-[#464646] my-3">
                <span className="font-semibold">Same-Day Adventure: </span>Book
                your second room on the same day as your first! Simply mention
                this offer to our team in-store.
              </li>
              <li className="lg:text-lg text-[#464646] my-3">
                <span className="font-semibold">Same-Day Adventure: </span>Book
                your second room on the same day as your first! Simply mention
                this offer to our team in-store.
              </li>
            </ul>
          </div>
           <p className="xl:text-lg text-[#464646] mt-2 pb-4">* Valid any day of the week. In-store or online purchase.</p>
        </div>
      </div>
      {/* ==================coupon text end============================= */}
    </div>
  );
};

export default CouponDisplay;
