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
        <div className="section-overlay bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="section-container  mx-auto  max-w-[1140px] pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="game-badge mb-2 md:mb-2 xl:mb-3 flex justify-center items-center">
                <div className="px-[4px] py-[6px] md:px-[4px] md:py-[6px] max-w-[270px] mx-auto zm:max-w-none">
                  <h1 className="font-os text-center font-medium text-[1.15rem] rm:text-[1.2rem] leading-[1.5rem] md:leading-[1.2] md:text-[1.4rem] xl:text-[1.6rem] text-red-600 mobile-escape-stiker-text uppercase">
                    MY FIRST ESCAPE ROOM
                  </h1>
                </div>
              </div>
              <div className="pageTitle max-w-[360px] zm:max-w-[520px] md:max-w-[720px] lg:max-w-[1180px] mx-auto">
                <h2 className="text-[#e0bf62] uppercase font-semibold text-center text-[28px] rm:text-[32px] zm:text-[34px] leading-[1.3] zm:leading-[1.4] md:leading-[1.3] md:text-[48px] lg:text-[52px] xl:text-[54px] 2xl:text-[58px] font-os outline-tile">
                  THE TOYMAKER'S WORKSHOP 🧸
                </h2>
              </div>
              <div className="page-sub-title text-[#ebebeb] zm:max-w-[480px] md:max-w-[760px] lg:max-w-[1010px] mx-auto text-sm md:text-lg lg:text-xl text-center mt-[4px] md:mt-1 2xl:mt-3 ">
                <p>
                  Give your little ones the excitement of an escape room with
                  none of the pressure! The Toymaker's Workshop is a lock-free,
                  no-pressure, hands-on adventure designed specifically for ages
                  6 and under.
                </p>
              </div>
              <div>
                <p className="text-[#ebebeb] zm:max-w-[480px] md:max-w-[760px] text-sm lg:max-w-[1016px] mx-auto md:text-lg lg:text-xl text-center mt-[12px] md:mt-4 lg:mt-5 2xl:mt-5">
                  Have older kids? No problem—scroll down to discover our escape
                  room games that are perfect for ages 6 and up!
                </p>
              </div>
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            <div className="max-w-[380px] xl:max-w-[400px] mx-auto mt-5 pb-8 rm:pb-0 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
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
