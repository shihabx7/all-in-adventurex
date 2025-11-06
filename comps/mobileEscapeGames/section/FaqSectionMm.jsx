import FaqListMm from "../mmcomponents/FaqListMm";
import { mobileEscapeFaqList } from "../../../lib/tempData/mobileEscapeTempData";

export default function FaqSectionMm({faqSectionData,locationName}) {
  return (
    <div
      id="gift-faq"
      className="all-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px]  lg:bg-[400px_400px] "
    >
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[860px] mx-auto">
          <h2 className="dark-gold pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase text-center">FREQUENTLY ASKED QUESTIONS</h2>
          {locationName? (
            <div
              className=" mt-1 md:mt-2 lg:mt-2   max-w-[640px] mx-auto"
             
            ><p className="text-center md:text-lg lg:text-xl text-[#2E2E2E]">Get answers to all the questions you have about our mobile mystery room experience in {locationName}</p></div>
          ) : (
            <div
              className=" mt-1 md:mt-2 lg:mt-2   max-w-[640px] mx-auto"
             
            ><p className="text-center md:text-lg lg:text-xl text-[#2E2E2E]">Get answers to all the questions you have about our mobile mystery room experience</p></div>
          )}
        </div>
        {/*======================= faqList={faqSectionData.faqList}============== */}

        <div className="mer-faq-box max-w-[1000px] mx-auto">
          <FaqListMm faqList={mobileEscapeFaqList} />
        </div>
      </div>
    </div>
  );
}
