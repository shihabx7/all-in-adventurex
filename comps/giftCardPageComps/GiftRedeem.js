import TitleSeparator from "../util/TitleSeparator";
import GiftRdmCarousel from "./GiftRdmCarousel";
import GiftGnBtn from "./GiftGnBtn";
const GiftRedeem = (props) => {
  return (
    <div
      id="gift-redem"
      className="all-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/brown-color-bg-pattern.svg')] bg-[length:600px_600px] bg-repeat"
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
        <div className="section-title mb-8 md:mb-12">
          <TitleSeparator
            title="REDEEM TO UNLOCK THESE ESCAPE ROOMS"
            color="text-[#CA9342]"
            weight="font-bold"
          />
          <p className="mt-4 text-[#2E2E2E] max-w-[800px] mx-auto text-center lg:text-lg">
            Your gift recipients are in for a treat to experience one of these
            escape room games at the chosen All In Adventures store — what
            mystery will they unravel?
          </p>
        </div>
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
