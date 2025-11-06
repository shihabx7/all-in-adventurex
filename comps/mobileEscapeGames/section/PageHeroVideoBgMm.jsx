import { newUpdateData } from "../../../lib/tempData/mobileEscapeTempData";
import BookingButtonPair from "../mmcomponents/BookingButtonPair";
import OpenMenuButtonPair from "../mmcomponents/OpenMenuButtonPair";
import HeroBgVideo from "../mmcomponents/HeroBgVideo";

export default function PageHeroVideoBgMm({
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  isSubStore,
}) {
  return (
    <div className="page-hero-section mm-hero  bg-stone-800 relative">
      {/*============hero bg video==========*/}
      <div className="hero-bg-video absolute top-0 left-0 w-full h-full">
        <HeroBgVideo videoData={newUpdateData.pageHeroData.heroBgVideo} />
      </div>

      <div className="section-overlay bg-[rgba(0,0,0,0.6)] w-full  min-h-[84vh] rm:min-h-[75vh] md:min-h-[64vh] xl:min-h-[80vh] flex justify-center items-center relative z-20">
        <div className="section-container   max-w-7xl mx-auto  py-16 md:py-20 lg:py-24 xl:py-28 px-3 md:px-4">
          {/*============section head==========*/}
          <div className="section-head">
            {/*============game-sticker==========*/}
            <div className="game-badge mb-1 md:mb-1 xl:mb-2 flex justify-center items-center">
              <h1 className="font-os text-center font-medium text-[.85rem] rm:text-[1.02rem] zm:rm:text-[1.1rem]  leading-[1.3] md:leading-[1.2] md:text-[1.4rem] xl:text-[1.6rem] text-white mobile-escape-stiker-text uppercase">
                {locationName
                  ? "MOBILE MYSTERY IN " + locationName
                  : "MOBILE MYSTERY"}
              </h1>
            </div>
            {/*============page title=========*/}
            <div className="page-title rm:max-w-[400px] xm:max-w-[410px] zm:max-w-[540px] md:max-w-[750px] lg:max-w-[1140px] mx-auto">
              <h2 className="text-[#e0bf62] uppercase font-semibold text-center text-[1.16rem] rm:text-[1.3rem] xm:text-[1.45rem] zm:text-[2rem]  md:text-[2.5rem] lg:text-[3rem] xl:text-[3.4rem] 2xl:text-[3.6rem] leading-[1.33]  md:leading-[1.22] xl:leading-[1.1] font-os outline-tile">
                {newUpdateData.pageHeroData.pageTitle}
              </h2>
            </div>
            {/*============page sub-title=========*/}
            {newUpdateData.pageHeroData.pageSubTitle && (
              <div
                className="page-sub-title text-[#ebebeb] max-w-[394px] zm:max-w-[520px] md:max-w-[740px] lg:max-w-[900px] mx-auto leading-[1.7] text-[.85rem] rm:text-[.92rem] xm:text-[1rem] zm:text-[1.06rem]  md:text-lg lg:text-xl text-center mt-3 md::mt-3 xl:mt-4 "
                dangerouslySetInnerHTML={{
                  __html: newUpdateData.pageHeroData.pageSubTitle,
                }}
              ></div>
            )}
            {/*============page hero note 1=========*/}
            <div className="mm-hero-notice-1">
              {!isSubStore && (
                <p className="text-[#ebebeb] max-w-[394px]  zm:max-w-[500px] md:max-w-[760px] lg:max-w-[860px] mx-auto leading-[1.3]  text-[.85rem] rm:text-[.92rem] xm:text-[1rem] zm:text-[1.06rem] md:text-lg lg:text-xl  text-center mt-[12px] zm:mt-3 md:mt-4 lg:mt-4 2xl:mt-5">
                  Want to visit us instead? Just scroll down to check out our
                  in-store escape room adventures!
                </p>
              )}
            </div>
          </div>

          {/*============section head end==========*/}
          {/*============location search btn==========*/}
          <div className="flex justify-center items-center mt-5 rm:mt-6 xm:mt-6 md:mt-7 xl:mt-8  2xl:mt-10 ">
            {locationSlug && (
              <div className="flex flex-col md:flex-row space-y-5 rm:space-y-6  md:space-y-0  md:space-x-6  xl:space-x-10 justify-center items-center">
                <BookingButtonPair locationSlug={locationSlug} />
              </div>
            )}
            {!locationSlug && (
              <div className="flex flex-col md:flex-row space-y-4 rm:space-y-5 md:space-y-0 md:space-x-3  xl:space-x-5 justify-center items-center">
                <OpenMenuButtonPair
                  setShowMobileEecapeMenu={setShowMobileEecapeMenu}
                  setGoMobileEecapeForm={setGoMobileEecapeForm}
                />
              </div>
            )}
          </div>
          {/*============location search btn end==========*/}
          {!isSubStore && (
            <div className="mbl-hero-note mt-5 rm:mt-6 xm:mt-6 md:mt-7 xl:mt-8  2xl:mt-10 ">
              <p className="text-[#aeaeae] zm:max-w-[480px] md:max-w-[760px] text-xs lg:max-w-[860px] mx-auto md:text-sm lg:text-base text-center  italic">
                * Online booking through BOOK NOW opens 14 days in advance. Need
                something sooner? Click GET A QUOTE {isSubStore}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
