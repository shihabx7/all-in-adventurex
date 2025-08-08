import HomePageHeroVideoBg from "../HomepageHeroVideoBg";
import HomePageTitleCenterLight from "../HomePageTitleCenterLight";
import HomeHeroInfo from "../HomeHeroInfo";
import PageHeroLocBtn from "../PageHeroLocBtn";

export default function HomePageHeroVideoBgSection({
  pageHeroData,
  allBooking,
}) {
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: "items",
    });
  };
  return (
    <div className="page-hero-section">
      <div className="section-bg  bg-stone-800 relative">
        <HomePageHeroVideoBg videoData={pageHeroData.heroBgVideo} />
        <div className="section-overlay bg-[rgba(0,0,0,0.66)] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="pageTitle max-w-[320px] zm:max-w-[520px] md:max-w-[800px] lg:max-w-[960px] mx-auto">
                <HomePageTitleCenterLight
                  pageTitle={
                    pageHeroData.pageTitle
                      ? pageHeroData.pageTitle
                      : "20 ESCAPE ROOMS venues in the u.s."
                  }
                />
              </div>
              {pageHeroData.pageSubTitle && (
                <div
                  className="pageSub Title zm:max-w-[480px] md:max-w-[760px] mx-auto text-[#f3f4f6]  md:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4"
                  dangerouslySetInnerHTML={{
                    __html: pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}

            {allBooking ? (
              <div className="md:max-w-[380px] xl:max-w-[400px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
                <button
                  onClick={() => bookAll(allBooking)}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
                >
                  BOOK YOUR GAMES
                </button>
              </div>
            ) : (
              <div className="max-w-[460px] xl:max-w-[500px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
                <PageHeroLocBtn />
              </div>
            )}

            {/*============location search btn==========*/}
          </div>
        </div>
        <HomeHeroInfo heroInfo={pageHeroData.heroInfo} />
      </div>
    </div>
  );
}
