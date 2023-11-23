import GiftFaqList from "./GiftFaqList";
import TitleSeparator from "../util/TitleSeparator";

import GiftGnBtn from "./GiftGnBtn";
const GiftFaq = (props) => {
  return (
    <div
      id="gift-faq"
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
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-8 md:mb-12">
          <TitleSeparator
            title="FREQUENTLY ASKED QUESTIONS"
            color="text-[#CA9342]"
            weight="font-bold"
          />
          <p className="mt-4 text-[#2E2E2E] max-w-[800px] mx-auto text-center lg:text-lg">
            Browse through these FAQs to find answers to commonly raised
            questions. If you don't see what's on your mind, reach out to us
            anytime on phone or email.
          </p>
        </div>
        <div className="gift-faq-box max-w-[1000px] mx-auto">
          <GiftFaqList faqlist={props.faqlist} />
        </div>
        <div className="flex justify-center mt-16">
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

export default GiftFaq;
