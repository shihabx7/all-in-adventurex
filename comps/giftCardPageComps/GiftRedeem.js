import TitleSeparator from "../util/TitleSeparator";
import GiftRdmCarousel from "./GiftRdmCarousel";
import GiftGnBtn from "./GiftGnBtn";
import SectionTitleCenter from "./SectionTitleCenter";
import SectionBorderBottom from "../util/SectionBorderBottom";
const GiftRedeem = (props) => {
  return (
    <div
      id="gift-redem"
      className="gift-redeem relative py-16  py:pt-20 lg:pt-20 lg:pb-28 xl:pb-28 xl:pt-20 3xl:pt-24 3xl:pb-28 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat"
    >
      {/*======================= boder img============== */}
      {  /*<SectionBorderTop />*/}
      <SectionBorderBottom />
      {/*======================= boder img end============== */}
      <div className="giftrdm-container relative z-30">
        {/** =================section title============= */}
        <div className="section-title px-4 mb-4 md:mb-0 lg:mb-2 max-w-[840px] mx-auto">
          <div className=" max-w-[370px] md:max-w-[720px] mx-auto">  <SectionTitleCenter
            title="REDEEM ESCAPE ROOM GIFT CARDS TO UNLOCK THESE GAMES" /></div>

          <p className=" text-[#2E2E2E]  mx-auto text-center md:text-lg  mt-1 lg:mt-2 max-w-[700px] mx-auto">
            Your gift recipients are in for a treat to experience one of these escape room games at the chosen All In Adventures store — what mystery will they unravel?
          </p>
        </div>
        {/* =================section title end============= */}
        <div className="gift-rdm-carusel-container  mx-auto">
          <GiftRdmCarousel giftReedem={props.giftReedem} />
        </div>

        <div className="flex justify-center mt-7 lg:mt-10">
          <GiftGnBtn
            setShowGiftBookingList={
              props.setShowGiftBookingList
                ? props.setShowGiftBookingList
                : false
            }
            giftBooking={props.giftBooking ? props.giftBooking : false}
          />
        </div>
      </div>
    </div>
  );
};

export default GiftRedeem;
