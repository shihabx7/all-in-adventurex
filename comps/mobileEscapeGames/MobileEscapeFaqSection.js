import MegFaqlist from "./MegFaqlist";
import TitleSeparator from "../util/TitleSeparator";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const MobileEscapeFaqSection = (props) => {
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
        <div className="section-title mb-8 md:mb-12  mx-auto">
          <TitleSeparator title="FREQUENTLY ASKED QUESTIONS" />
          <p className="mt-6 text-[#2E2E2E] max-w-[840px] mx-auto text-center lg:text-lg 3xl:text-xl">
            Find answers to common inquiries about our mobile escape room,
            including pricing, booking, and game details to help plan your
            unforgettable adventure!
          </p>
        </div>
        <div className="mer-faq-box max-w-[1000px] mx-auto">
          <MegFaqlist faqList={props.faqList} />
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeFaqSection;
