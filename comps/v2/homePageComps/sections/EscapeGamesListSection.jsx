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
            {/*============ =================================================top gap  ==========*/}
            {locationSlug && (
              <div className="sec-gap-top zm:h-[110px] md:h-[128px] lg:h-[124px] xl:h-[100px] 2xl:h-[120px] 3xl:h-[132px]"></div>
            )}
            {!locationSlug && (
              <div className="sec-gap-top zm:h-[20px] md:h-[58px] lg:h-[64px] 2xl:h-[70px] 3xl:h-[85px]"></div>
            )}
            {/*============ top gap  ==========*/}
            {/*===============================================section head===========*/}
            <div className="section-head">
              <div className="pageTitle lm:max-w-[400px] zm:max-w-[500px] md:max-w-[780px] lg:max-w-[1080px] mx-auto">
                <p className="font-os font-semibold text-[1.15rem] rm:text-[1.25rem] md:text-[1.65rem] xl:text-[2rem] 3xl:text-[2.5rem] uppercase text-red-600 text-center leading-[1] ">
                  Our Escape Rooms
                </p>
                <h2
                  className="text-[#e0bf62] uppercase font-bold text-center 
                text-[2.3rem] rm:text-[2.58rem] lm:text-[3rem] zm:text-[3.8rem] md:text-[4.75rem] lg:text-[5.35rem] xl:text-[6rem] 3xl:text-[6.5rem] leading-[1] 3xl:leading-[1.1]
                 font-os outline-tile mt-1.5 md:mt-1 xl:mt-0 3xl:mt-1"
                >
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
            <div className="py-2 md:py-5 xl:py-6 2xl:py-7 3xl:py-8 "></div>
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
