import SectionTitleCenterDark from "../../common/SectionTitleCenterDark";
import TwFaqList from "../TwFaqList";
export default function ToyMakerFaqSection({ sectionData }) {
  return (
    <div
      id="tw-faq"
      className="tow-faq-section relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[#fff9eb]"
    >
      {/*======================= bg img============== */}
      <div className="section-full-screen-bg-image w-full h-full bg-stone-800 absolute left-0 top-0">
        <img
          className="w-full h-full object-cover object-center"
          src={"/assets/toymakers-workshop/toymaker-faq-bg.jpg"}
          alt={"toymaker faq bg"}
        ></img>
      </div>
      {/*======================= bg img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[700px] lg:max-w-[800px] mx-auto">
          <SectionTitleCenterDark title={sectionData.sectionTitle} />
          {sectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#2E2E2E] mt-3 md:mt-3 xl:mt-4 text-center md:text-lg lg:text-xl max-w-[700px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
        {sectionData.faqList.length > 0 ? (
          <div className="mer-faq-box max-w-[1000px] mx-auto">
            <TwFaqList faqList={sectionData.faqList} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
