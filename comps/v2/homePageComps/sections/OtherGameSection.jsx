import SectionTitleCenterLight from "../../sharedComs/SectionTitleCenterLight";
import OtherGameList from "../OtherGameList";
export default function OtherGameSection({
  otherGameSectionData,
  locationSlug,
}) {
  return (
    <div className="other-games-section">
      <div className="section-bg   relative">
        <div className="section-overlay ">
          <div className="section-container pt-5 rm:pt-6 md:pt-8 xl:pt-10 mx-auto max-w-7xl pb-16 md:pb-20 lg:pb-24 xl:pb-28 px-4 md:px-0">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="pageTitle max-w-[320px] zm:max-w-[500px] md:max-w-[780px] lg:max-w-[960px] mx-auto">
                <SectionTitleCenterLight
                  title={
                    otherGameSectionData.sectionTitle
                      ? otherGameSectionData.sectionTitle
                      : "BEYOND THE ESCAPE"
                  }
                />
              </div>
              {otherGameSectionData.sectionSubTitle && (
                <div className="pageSub Title max-w-[800px] mx-auto">
                  <div
                    className="text-[#f3f4f6]  sm:text-lg xl:text-xl text-center mt-3 md:mt-3 lg:mt-5 xl:mt-6"
                    dangerouslySetInnerHTML={{
                      __html: otherGameSectionData.sectionSubTitle,
                    }}
                  ></div>
                </div>
              )}
            </div>
            {/*============section head end==========*/}

            {/*============Escape Game List==========*/}
            <div className="escape-game-list-container  lm:max-w-[380px]  zm:max-w-[500px] md:max-w-[760px]  lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1220px] mx-auto  mt-8 md:mt-10 lg:mt-12">
              <OtherGameList
                otherGameList={otherGameSectionData.otherGameList}
                locationSlug={locationSlug ? locationSlug : false}
              />
            </div>
            {/*============Escape Game List end==========*/}
          </div>
        </div>
      </div>
    </div>
  );
}
