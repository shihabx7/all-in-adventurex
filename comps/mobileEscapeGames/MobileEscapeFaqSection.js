import MegFaqlist from "./MegFaqlist";
import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";

import { mobileEscapeFaqList } from "../../lib/tempData/mobileEscapeTempData";
const MobileEscapeFaqSection = ({ faqSectionData, faqList, locationName }) => {
  return (
    <div
      id="gift-faq"
      className="all-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/mobile-escape-room/paper-text-bg.jpg')] bg-center bg-cover "
    >
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[860px] mx-auto">
          <MobileTitleSeparatorCenter title={faqSectionData.sectionTitle} />
          {faqSectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#2E2E2E] mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[640px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: faqSectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
        {/*======================= faqList={faqSectionData.faqList}============== */}

        <div className="mer-faq-box max-w-[1000px] mx-auto">
          <MegFaqlist faqList={mobileEscapeFaqList} />
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeFaqSection;
