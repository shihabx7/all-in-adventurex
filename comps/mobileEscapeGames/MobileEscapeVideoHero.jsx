import { mobileEscapePageHeroInfoList } from "../../lib/tempData/mobileEscapeTempData";
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

const MobileEscapeVideoHero = ({
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
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="game-icon mb-2 md:mb-2 xl:mb-4">
                <img
                  className="max-w-[140px] rm:max-w-[180px] md:max-w-[220px] xl:max-w-[250px] mx-auto"
                  src="/assets/mobile-escape-room/hero/mobile-escape-room-theme.svg"
                ></img>
              </div>
              <div className="pageTitle max-w-[360px] zm:max-w-[520px] md:max-w-[720px] lg:max-w-[900px] mx-auto">
                <PageTitleCenterLight
                  pageTitle={
                    newUpdateData.pageHeroData.pageTitle
                      ? newUpdateData.pageHeroData.pageTitle
                      : "BRING THE THRILL OF AN ESCAPE ROOM TO YOU"
                  }
                />
              </div>
              {newUpdateData.pageHeroData.pageSubTitle && (
                <div
                  className="page-sub-title text-[#cacaca] zm:max-w-[480px] md:max-w-[760px] mx-auto md:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4 "
                  dangerouslySetInnerHTML={{
                    __html: newUpdateData.pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            <div className="max-w-[380px] xl:max-w-[400px]  mt-5 pb-8 rm:pb-0 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 mx-auto">
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

export default MobileEscapeVideoHero;
