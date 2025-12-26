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
          <div className="section-container pt-3 rm:pt-4 md:pt-6 xl:pt-8 2xl:pt-10 mx-auto max-w-7xl  px-4 md:px-0">
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
                <div className="pageSub Title max-w-[700px] lg:max-w-[800px] mx-auto">
                  <p className="text-[#aaaaaa]  md:text-lg xl:text-[1.2rem] text-center mt-3 md:mt-3 lg:mt-4 xl:mt-5">
                    Looking for more fun things to do? Step beyond escape rooms
                    and enjoy our interactive games designed for laughs,
                    friendly competition, and fun.
                  </p>
                </div>
              )}
            </div>
            {/*============section head end==========*/}

            {/*============other Game List==========*/}
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
