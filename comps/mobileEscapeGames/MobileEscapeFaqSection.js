import MegFaqlist from "./MegFaqlist";
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const MobileEscapeFaqSection = ({ faqSectionData, faqList, locationName }) => {
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
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[860px] mx-auto">
          <MobileTitleSeparatorCenter title={faqSectionData.sectionTitle} />
          {faqSectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#2E2E2E] mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl max-w-[700px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: faqSectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
        {faqSectionData.faqList.length > 0 ? (
          <div className="mer-faq-box max-w-[1000px] mx-auto">
            <MegFaqlist faqList={faqSectionData.faqList} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MobileEscapeFaqSection;
