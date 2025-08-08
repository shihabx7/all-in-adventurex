import SectionTitleCenterLight from "../../sharedComs/SectionTitleCenterLight";

import EscapeGameList from "../escapeGameListComps/EscapeGameList";
export default function EscapeGamesListSection({
  escapeGameListSectionData,
  locationSlug,
}) {
  return (
    <div className="escape-games-list-section">
      <div className="section-bg  bg-[#000000] relative">
        <div className="section-overlay ">
          <div className="section-container  mx-auto max-w-7xl py-16 md:py-20 lg:py-24 xl:py-28 px-4 md:px-0">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="pageTitle max-w-[320px] zm:max-w-[500px] md:max-w-[780px] lg:max-w-[960px] mx-auto">
                <SectionTitleCenterLight
                  title={
                    escapeGameListSectionData.sectionTitle
                      ? escapeGameListSectionData.sectionTitle
                      : "REAL-LIFE ESCAPE ROOM GAMES"
                  }
                />
              </div>
              {escapeGameListSectionData.sectionSubTitle !== null && (
                <div className="pageSub Title max-w-[840px] mx-auto">
                  <div
                    className="text-[#f3f4f6]  sm:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4"
                    dangerouslySetInnerHTML={{
                      __html: escapeGameListSectionData.sectionSubTitle,
                    }}
                  ></div>
                </div>
              )}
            </div>
            {/*============section head end==========*/}

            {/*============Escape Game List==========*/}
            <div className="escape-game-list-container lm:max-w-[380px]  zm:max-w-[480px] md:max-w-[760px]  lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1240px] mx-auto  mt-6 md:mt-7 lg:mt-4">
              <EscapeGameList
                escapeGameList={escapeGameListSectionData.escapeGameList}
                gameThemeList={escapeGameListSectionData.gameThemeList}
                recommendList={escapeGameListSectionData.recommendList}
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
