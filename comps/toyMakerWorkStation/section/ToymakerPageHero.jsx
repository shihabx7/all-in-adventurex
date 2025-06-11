import PageTitleCenterLight from "../../common/PageTitleCenterLight";
import SectionBgVideo from "../../common/SectionBgVideo";
const bookGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};
export default function ToymakerPageHero({ pageHeroData, bookingData }) {
  return (
    <div className="page-hero-section">
      <div className="section-bg  bg-stone-800 relative">
        <SectionBgVideo videoData={pageHeroData.heroBgVideo} />
        <div className="section-overlay bg-[rgba(0,0,0,0.84)] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="game-icon mb-2 md:mb-2 xl:mb-4">
                <img
                  className="max-w-[190px] md:max-w-[220px] xl:max-w-[250px] mx-auto"
                  src="/assets/toymakers-workshop/hero/toymakers-workshop-sticker.png"
                ></img>
              </div>
              <div className="pageTitle max-w-[360px] zm:max-w-[520px] md:max-w-[720px] lg:max-w-[1000px] mx-auto">
                <PageTitleCenterLight
                  pageTitle={
                    pageHeroData.pageTitle
                      ? pageHeroData.pageTitle
                      : "Toymaker's workstation"
                  }
                />
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
            <div className="max-w-[380px] xl:max-w-[400px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
              <button
                onClick={() => bookGame(bookingData)}
                className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
              >
                BOOK THIS GAME
              </button>
            </div>
            {/*============location search btn==========*/}
          </div>
        </div>
        {/*==========================shadow border=================*/}
      </div>
    </div>
  );
}
