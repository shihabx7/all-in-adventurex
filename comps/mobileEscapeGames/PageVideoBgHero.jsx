
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";

import HeroVideo from "./HeroVideo";
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
 const mobileMystryBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo2 },
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
  const showMobileEscapeBookingMenuParty = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
    const showMobileEscapeBookingMenuGame = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(false);
    setShowMobileEecapeMenu(true);
  };
  return (
    <div className="page-hero-section">
      <div className="section-bg  bg-stone-800 relative">
        <div className="hero-bg-video absolute top-0 -left-0 w-full h-full"> 
              <HeroVideo videoData={newUpdateData.pageHeroData.heroBgVideo} />
        </div>
       
        <div className="section-overlay bg-[rgba(0,0,0,0.69)] w-full  min-h-[84vh] rm:min-h-[75vh] md:min-h-[64vh] xl:min-h-[80vh] flex justify-center items-center relative z-20">
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-3">
            {/*============section head==========*/}
            <div className="section-head">
              {/*========================================================test==========*/}

              {/*========================================================test==========*/}

              {/*============game-sticker==========*/}
              <div className="game-badge mb-1 md:mb-1 xl:mb-2 flex justify-center items-center">
                <div className="max-w-[340px] rm:max-w-[372px]  zm:max-w-none mx-auto">
                  <h1 className="font-os text-center font-medium text-[.85rem] rm:text-[1.02rem] zm:rm:text-[1.1rem]  leading-[1.3] md:leading-[1.2] md:text-[1.4rem] xl:text-[1.6rem] text-white mobile-escape-stiker-text uppercase">
                    {locationName
                      ? "MOBILE MYSTERY IN " + locationName
                      : "MOBILE MYSTERY"}
                  </h1>
                </div>
              </div>
              {/*============game-sticker end==========*/}
              <div className="pageTitle rm:max-w-[400px] xm:max-w-[410px] zm:max-w-[540px] md:max-w-[750px] lg:max-w-[1140px] mx-auto">
                <h2 className="text-[#e0bf62] uppercase font-semibold text-center text-[1.16rem] rm:text-[1.3rem] xm:text-[1.45rem] zm:text-[2rem]  md:text-[2.5rem] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[3.6rem] leading-[1.33]  md:leading-[1.25] font-os outline-tile">
                  {newUpdateData.pageHeroData.pageTitle}
                </h2>
              </div>
              {newUpdateData.pageHeroData.pageSubTitle && (
                <div
                  className="page-sub-title text-[#ebebeb] max-w-[394px] zm:max-w-[520px] md:max-w-[740px] lg:max-w-[900px] mx-auto leading-[1.7] text-[.85rem] rm:text-[.92rem] xm:text-[1rem] zm:text-[1.06rem]  md:text-lg lg:text-xl text-center mt-3 md::mt-3 xl:mt-4 "
                  dangerouslySetInnerHTML={{
                    __html: newUpdateData.pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
              <div>
                {locationSlug !== "buffalo-ny" &&
                  locationSlug !== "rochester-ny" &&
                  locationSlug !== "winston-salem-nc" &&
                  locationSlug !== "greensboro-nc" && (
                    <p className="text-[#ebebeb] max-w-[394px]  zm:max-w-[500px] md:max-w-[760px] lg:max-w-[860px] mx-auto leading-[1.3]  text-[.85rem] rm:text-[.92rem] xm:text-[1rem] zm:text-[1.06rem] md:text-lg lg:text-xl  text-center mt-[12px] md:mt-4 lg:mt-5 2xl:mt-6">
                     Want to visit us instead? Just scroll down to check out our in-store escape room adventures!
                    </p>
                  )}
              </div>
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            <div className="flex justify-center items-center my-5  rm:pb-0 rm:my-6 xm:my-6 md:my-7 xl:my-8  2xl:my-10 ">
              {locationSlug ? (
                <div className="flex flex-col md:flex-row space-y-4 rm:space-y-5 md:space-y-0  md:space-x-2 md:space-x-3  xl:space-x-5 justify-center items-center">   
                   <button
                   onClick={() => {
                    mobileMystryBooking(mobileEscapeRoomBookingData[locationSlug]);
                  }}
                  className="w-[288px] sm:w-[360px]  md:w-[270px] lg:w-[280px] px-12 md:px-14 py-[12px] md:py-4 text-center border block text-white border-2 border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </button>
                <button
                  onClick={() => {
                    partyFormBooking(mobileEscapeRoomBookingData[locationSlug]);
                  }}
                   className="w-[288px] sm:w-[330px]  md:w-[260px] lg:w-[272px] px-12 md:px-14 py-[12px] md:py-4 text-center border block text-white border-2 border-red-600 bg-transparent rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>

                </div>
              
              ) : (
                <div className="flex flex-col md:flex-row space-y-4 rm:space-y-5 md:space-y-0 md:space-x-2 md:space-x-3  xl:space-x-5 justify-center items-center"> 
                <button
                  onClick={(e) => showMobileEscapeBookingMenuGame(e)}
                  className="w-[288px] sm:w-[330px]  md:w-[260px] lg:w-[272px] lg:w-[280px] px-12 md:px-14 py-[12px] md:py-4 text-center border block text-white border-2 border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  BOOK NOW
                </button>
                <button
                  onClick={(e) => showMobileEscapeBookingMenuParty(e)}
                  className="w-[288px] sm:w-[330px]  md:w-[260px] lg:w-[272px] px-12 md:px-14 py-[12px] md:py-4 text-center border block text-white border-2 border-red-600 bg-transparent rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>
                </div>
              )}
            </div>
            {/*============location search btn end==========*/}
            <div className="mbl-hero-note"> 
                  <p className="text-[#aeaeae] zm:max-w-[480px] md:max-w-[760px] text-xs lg:max-w-[860px] mx-auto md:text-sm lg:text-base text-center  italic">
                    * Online booking through BOOK NOW opens 14 days in advance. Need something sooner? Click GET A QUOTE
                    </p>
            </div>
          </div>
        </div>
      
        {/*==========================  <div className="section-bottom-border w-full h-[42px] md:h-[46px] lg:h-[49px] 2xl:h-[50px] 3xl:h-[52px] absolute bottom-[-13px] md:bottom-[-15px] lg:bottom-[-18px] 2xl:bottom-[-21px] left-0 ">
          <img
            className="w-full h-full object-cover"
            src="/assets/mobile-escape-room/hero/hero-border-bottom.svg"
          ></img>
        </div>=================*/}
      </div>
    </div>
  );
};

export default PageVideoBgHero;
