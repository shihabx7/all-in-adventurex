import GiftFaqList from "./GiftFaqList";
import TitleSeparator from "../util/TitleSeparator";

import GiftGnBtn from "./GiftGnBtn";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const GiftFaq = (props) => {
  return (
    <div
      id="gift-faq"
      className="all-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat"
    >
      {/*======================= boder img============== */}
      <SectionBorderTop />
      <SectionBorderBottom />
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
