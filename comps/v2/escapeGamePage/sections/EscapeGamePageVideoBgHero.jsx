import HeroLocBtn from "../../../util/HeroLocBtn";

import GamePageHeroVideoBg from "../GamePageHeroVideoBg";

export default function EscapeGamePageVideoBgHero({ pageHeroData }) {
  return (
    <div className="page-hero-section">
      <div className="section-bg  bg-stone-800 relative">
        <GamePageHeroVideoBg videoData={pageHeroData.heroBgVideo} />
        <div className="section-overlay bg-[rgba(0,0,0,0.84)] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="game-icon mb-2 xl:mb-3">
                <img
                  className="max-w-[120px] md:max-w-[138px] xl:max-w-[148px] mx-auto"
                  src="/assets/escape-game/icons/escape-room-theme-icon.svg"
                ></img>
              </div>
              <div className="pageTitle max-w-[360px] zm:max-w-[520px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
                <h1 className="text-white uppercase font-bold text-center text-[30px] rm:text-[32px] zm:text-[34px] leading-[1.3] zm:leading-[1.4] md:leading-[1.3] md:text-[48px] lg:text-6xl font-os outline-tile">
                  {pageHeroData.pageTitle
                    ? pageHeroData.pageTitle
                    : "ESCAPE GAME"}
                </h1>
              </div>
              {pageHeroData.pageSubTitle && (
                <div
                  className="page-sub-title text-[#cacaca] zm:max-w-[480px] md:max-w-[760px] mx-auto md:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4 "
                  dangerouslySetInnerHTML={{
                    __html: pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            <div className="max-w-[460px] xl:max-w-[500px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
              <HeroLocBtn />
            </div>
            {/*============location search btn==========*/}
          </div>
        </div>
        {/*==========================shadow border=================*/}
        <div className="game-hero-shadow-border absolute left-0 bottom-0 z-[30] w-full h-[80px] bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}
