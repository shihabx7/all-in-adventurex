import SectionTitleCenterLight from "../../sharedComs/SectionTitleCenterLight";

import EscapeGameList from "../escapeGameListComps/EscapeGameList";
export default function EscapeGamesListSection({
  escapeGameListSectionData,
  locationSlug,
}) {
  return (
    <div className="escape-games-list-section">
      <div className="section-bg   relative">
        <div className="section-overlay ">
          <div className="section-container  mx-auto max-w-7xl px-4 md:px-0">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="pageTitle max-w-[320px] zm:max-w-[500px] md:max-w-[780px] lg:max-w-[960px] mx-auto">
                <p className="font-os font-semibold text-[1.15rem] md:text-[1.6rem] xl:text-3xl uppercase text-red-600 text-center">
                  our escape Rooms
                </p>

                <h2 className="text-[#e0bf62] uppercase font-bold text-center text-[2.3rem] rm:text-[2.4rem] zm:text-[3.8rem] leading-[1.2] sm:text-[4rem] lg:text-[4.5rem] font-os outline-tile  md:mt-2 xl:mt-3">
                  {escapeGameListSectionData.sectionTitle
                    ? escapeGameListSectionData.sectionTitle
                    : "REAL-LIFE ESCAPE ROOM GAMES"}
                </h2>
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
            <div className="escape-game-list-container lm:max-w-[380px]  zm:max-w-[480px] md:max-w-[760px]  lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1220px] mx-auto  mt-7 md:mt-8 lg:mt-10">
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
