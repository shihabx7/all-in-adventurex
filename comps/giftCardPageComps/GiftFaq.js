import GiftFaqList from "./GiftFaqList";
import TitleSeparator from "../util/TitleSeparator";

import GiftGnBtn from "./GiftGnBtn";
const GiftFaq = (props) => {
  return (
    <div
      id="gift-faq"
      className="all-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat"
    >
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
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-8 md:mb-12">
          <TitleSeparator title="FREQUENTLY ASKED QUESTIONS" />
          <p className="mt-4 text-[#2E2E2E] max-w-[840px] mx-auto text-center lg:text-lg">
            Explore these FAQs to uncover answers to popular questions about All
            In Adventures Gift Cards. If your specific query isn't covered,
            reach us anytime on phone or email.
          </p>
        </div>
        <div className="gift-faq-box max-w-[1000px] mx-auto">
          <GiftFaqList giftFaqs={props.giftFaqs} />
        </div>
        <div className="flex justify-center mt-16">
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

export default GiftFaq;
