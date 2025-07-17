import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import SectionBgVideo from "../common/SectionBgVideo";
import PageTitleCenterLight from "../common/PageTitleCenterLight";
import { newUpdateData } from "../../lib/tempData/mobileEscapeTempData";

const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};

const PageVideoBgHero = ({
  pageHero,
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) => {
  const comaoff = (txt) => {
    //console.log(txt)
    return txt.split(",").join(" ");
    //return ret
  };
  const showMobileEscapeBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
  return (
    <div className="page-hero-section">
      <div className="section-bg  bg-stone-800 relative">
        <SectionBgVideo videoData={newUpdateData.pageHeroData.heroBgVideo} />
        <div className="section-overlay bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-3">
            {/*============section head==========*/}
            <div className="section-head">
              {/*========================================================test==========*/}

              {/*========================================================test==========*/}

              {/*============game-sticker==========*/}
              <div className="game-badge mb-2 md:mb-2 xl:mb-3 flex justify-center items-center">
                <div className="px-[4px] py-[6px] md:px-[4px] md:py-[6px] max-w-[270px] mx-auto zm:max-w-none">
                  <h1 className="font-os text-center font-medium text-[1.15rem] rm:text-[1.2rem] leading-[1.5rem] md:leading-[1.2] md:text-[1.4rem] xl:text-[1.6rem] text-red-600 mobile-escape-stiker-text uppercase">
                    {locationName
                      ? "MOBILE ESCAPE ROOMS IN " + locationName
                      : "MOBILE ESCAPE ROOMS"}
                  </h1>
                </div>
              </div>
              {/*============game-sticker end==========*/}
              <div className="pageTitle max-w-[360px] zm:max-w-[520px] md:max-w-[720px] lg:max-w-[1140px] mx-auto">
                <h2 className="text-[#e0bf62] uppercase font-semibold text-center text-[28px] rm:text-[32px] zm:text-[34px] leading-[1.3] zm:leading-[1.4] md:leading-[1.3] md:text-[48px] lg:text-[52px] xl:text-[54px] 2xl:text-[58px] font-os outline-tile">
                  {newUpdateData.pageHeroData.pageTitle}
                </h2>
              </div>
              {newUpdateData.pageHeroData.pageSubTitle && (
                <div
                  className="page-sub-title text-[#ebebeb] zm:max-w-[480px] md:max-w-[760px] lg:max-w-[960px] mx-auto text-sm  md:text-lg lg:text-xl text-center mt-[4px] md:mt-1 2xl:mt-3 "
                  dangerouslySetInnerHTML={{
                    __html: newUpdateData.pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
              <div>
                <p className="text-[#ebebeb] zm:max-w-[480px] md:max-w-[760px] text-sm lg:max-w-[860px] mx-auto md:text-lg lg:text-xl text-center mt-[12px] md:mt-4 lg:mt-5 2xl:mt-6">
                  Want to visit us instead? Just scroll down to check out our
                  in-store escape room adventures!
                </p>
              </div>
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            <div className="flex justify-center items-center mt-5 pb-8 rm:pb-0 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
              {locationSlug ? (
                <button
                  onClick={() => {
                    partyFormBooking(eventFormBookingLinks[locationSlug]);
                  }}
                  className="w-[300px] sm:w-[360px]  px-12 md:px-14 py-[14px] md:py-4 text-center border block text-white border-red-600 bg-red-600  rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>
              ) : (
                <button
                  onClick={(e) => showMobileEscapeBookingMenu(e)}
                  className="w-[300px] sm:w-[360px]  px-12 md:px-14 py-[14px] md:py-4 text-center border block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>
              )}
            </div>
            {/*============location search btn==========*/}
          </div>
        </div>
        <div className="section-bottom-border w-full h-[42px] md:h-[46px] lg:h-[49px] 2xl:h-[50px] 3xl:h-[52px] absolute bottom-[-13px] md:bottom-[-15px] lg:bottom-[-18px] 2xl:bottom-[-21px] left-0 ">
          <img
            className="w-full h-full object-cover"
            src="/assets/mobile-escape-room/hero/hero-border-bottom.svg"
          ></img>
        </div>
        {/*==========================shadow border=================*/}
      </div>
    </div>
  );
};

export default PageVideoBgHero;
