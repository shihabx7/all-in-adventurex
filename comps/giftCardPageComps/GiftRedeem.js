import TitleSeparator from "../util/TitleSeparator";
import GiftRdmCarousel from "./GiftRdmCarousel";
import GiftGnBtn from "./GiftGnBtn";
const GiftRedeem = (props) => {
  return (
    <div
      id="gift-redem"
      className="gift-redeem relative  py-16 md:py-24 lg:py-32  overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/brown-color-bg-pattern.svg')] bg-[length:320px_320px] md:bg-[length:460px_460px] lg:bg-[length:600px_600px] bg-repeat"
    >
      <div className="btop absolute top-0 left-0 w-full">
        <img
          className="w-full"
          src="/assets/svg/pattern/brown-color-border.svg"
        ></img>
      </div>
      <div className="btop absolute bottom-0 left-0 w-full">
        <img
          className="w-full rotate-180"
          src="/assets/svg/pattern/brown-color-border.svg"
        ></img>
      </div>
      <div className="giftrdm-container relative z-30">
        {/** =================section title============= */}
        <div className="section-title mb-8 md:mb-12">
          <TitleSeparator
            title="REDEEM TO UNLOCK THESE ESCAPE ROOMS"
            color="text-[#CA9342]"
            weight="font-bold"
          />
          <p className="mt-4 text-[#2E2E2E] max-w-[800px] mx-auto text-center lg:text-lg">
            Your gift recipients are in for a treat when they experience one of
            these great escape room games at their local All In Adventures store
            — what mystery will they unravel?
          </p>
        </div>
        {/** =================section title end============= */}
        <div className="gift-rdm-carusel-container  mx-auto">
          <GiftRdmCarousel redeemgames={props.redeemgames} />
        </div>

        <div className="flex justify-center mt-12">
          <GiftGnBtn
            setShowGiftBookingList={
              props.setShowGiftBookingList
                ? props.setShowGiftBookingList
                : false
            }
            bookingData={props.bookingData ? props.bookingData : false}
          />
        </div>
      </div>
    </div>
  );
};

export default GiftRedeem;
