import SectionTitleLight from "../../common/SectionTitleLight";
import SectionTittleCenterLight from "../../common/SectionTitleCenterLight";
import OccActivityCarousel from "../OccActivityCarousel";
export default function OccActivitySection({ sectionData, bookingData }) {
  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <div className="ac-oc-section bg-[#231800]">
      <div className="py-16  md:py-20 lg:py-24  xl:py-28  px-4 xl:px-0  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1200px] mx-auto   lg:px-0">
          <div className="max-w-[364px] md:max-w-full">
            <SectionTittleCenterLight
              title={
                sectionData.sectionTitle !== null
                  ? sectionData.sectionTitle
                  : "ACTIVITY FOR EVERY OCCASION"
              }
            />
          </div>
          {sectionData.sectionSubTitle !== null ? (
            <div
              className="text-gray-200 mt-2 md:mt-3 lg:mt-4 text-center md:text-lg lg:text-xl max-w-[850px] mx-auto "
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
        <div className="oc-ac-slider relative">
          {sectionData.activityCarouselData.length > 0 ? (
            <OccActivityCarousel
              carouselList={sectionData.activityCarouselData}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="oc-ac-book-btn mt-4 rm:mt-5 md:mt-3 xl:mt-0 flex justify-center">
          <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
            <button
              onClick={() => bookGame(bookingData)}
              className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700  md:text-lg text-white px-10 md:px-12  xl:px-12 py-3 md:py-4 text-center font-bold "
            >
              BOOK THIS GAME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
