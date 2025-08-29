import HeroLocBtn from "../../../util/HeroLocBtn";

import GamePageHeroVideoBg from "../GamePageHeroVideoBg";

const bookThisGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};

export default function EscapeGamePageVideoBgHero({
  pageHeroData,
  gameBooking,
}) {
  return (
    <div className="page-hero-section">
      <div className="section-bg  bg-stone-800 relative">
        <div className="hero-video-bg w-full h-full absolute top-0 left-0 ">
          <GamePageHeroVideoBg videoData={pageHeroData.heroBgVideo} />
        </div>

        <div className="section-overlay bg-[rgba(0,0,0,0.84)] flex flex-col justify-center min-h-[76vh] rm:min-h-[72vh] zm:min-h-[64vh] md:min-h-[54vh] lg:min-h-[58vh] xl:min-h-[85vh] relative z-20">
          <div className="section-container  mx-auto  max-w-7xl pt-20 pb-24 md:py-24 md:pb-28 2xl:py-28  px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="game-icon mb-2 xl:mb-3">
                <img
                  className="max-w-[120px] md:max-w-[138px] xl:max-w-[148px] mx-auto"
                  src="/assets/escape-games/icons/escape-room-theme-icon.svg"
                ></img>
              </div>
              <div className="pageTitle max-w-[360px] zm:max-w-[520px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
                <h1 className="text-white uppercase font-bold text-center text-[1.75rem] rm:text-[2rem] zm:text-[2.25rem] leading-[1.25] zm:leading-[1.35] md:leading-[1.25] md:text-[3.2rem] lg:leading-[1.15] lg:text-[3.5rem] xl:text-[3.8rem] font-os outline-tile">
                  {pageHeroData.pageTitle
                    ? pageHeroData.pageTitle
                    : "ESCAPE GAME"}
                </h1>
              </div>
              {pageHeroData.pageSubTitle && (
                <div
                  className="page-sub-title text-[#cacaca] zm:max-w-[480px] md:max-w-[760px] lg:max-w-[840px] mx-auto md:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4 "
                  dangerouslySetInnerHTML={{
                    __html: pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            {!gameBooking && (
              <div className="max-w-[460px] xl:max-w-[500px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
                <HeroLocBtn />
              </div>
            )}
            {gameBooking && (
              <div className="md:max-w-[380px] xl:max-w-[400px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8 xl:mt-10 ">
                <button
                  onClick={() => bookThisGame(gameBooking)}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[.94rem] rm:text-[1rem] md:text-[1.2rem]"
                >
                  BOOK THIS GAME
                </button>
              </div>
            )}
            {/*============location search btn==========*/}
          </div>
        </div>
        {/*==========================shadow border=================*/}
        <div className="game-hero-shadow-border absolute left-0 bottom-0 z-[30] w-full h-[80px] bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}
