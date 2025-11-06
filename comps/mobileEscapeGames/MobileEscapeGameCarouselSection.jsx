import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameCarousel from "./MobileEscapeGameCarousel";
import { mobileEscapeGameList } from "../../lib/tempData/mobileEscapeTempData";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";
import MobileGameGrid from "./MobileGameGrid";
import MobileEscapeGrid2 from "./MobileEscapeGrid2";
import MobileEscapeGrid3 from "./MobileEscapeGrid3";
import MobileEscapeGrid4 from "./MobileEscapeGrid4";

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
const MobileEscapeGameCarouselSection = ({
  gameCarouselSectionData,
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) => {
  const showMobileEscapeBookingMenuParty= () => {
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
    <div className="mer-games-slider bg-[#251A03]   relative">
      <div className="py-16   lg:pt-20 3xl:pt-24 lg:pb-28 xl:pb-28  3xl:pb-28  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1040px] mx-auto px-4 lg:px-0">
          <div className="max-w-[364px] md:max-w-full mx-auto">
            <MobileTitleSeparatorCenter
              title={"CHOOSE YOUR MOBILE MYSTERY"
              }
              textColor={"#E0BF62"}
            />
          </div>
          {/*  __html: gameCarouselSectionData.sectionSubTitle, */}
          <div className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[990px] mx-auto">
            <p>
          Select up to six unique, fully facilitated Mobile Mystery Experiences. Each 60-minute adventure is complete with physical props, digital locks, and an engaging storyline designed to maximize teamwork and fun.
            </p>
          </div>
        </div>
        {/*   escapeGameList={gameCarouselSectionData.escapeGameList} */}
        <div className="megc relative">
          {/* <MobileEscapeGameCarousel
            escapeGameList={mobileEscapeGameList}
            locationName={locationName} 
            {<MobileEscapeGrid2 />}
               <MobileEscapeGrid3 />
                 <MobileEscapeGrid4 />
          />*/}
        </div>
        <div className="block">
          <MobileGameGrid />
        </div>

       
        <div className="card-game-link mt-7 rm:mt-10 md:mt-12 xl:mt-12 ">
          {locationSlug ? (
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 rm:space-y-5 rm:space-y-0 md:space-x-5 xl:space-x-6"> 
              <button
              onClick={() => {
                partyFormBooking(mobileEscapeRoomBookingData[locationSlug]);
              }}
              className="max-w-[280px] md:max-w-[300px]  px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => {
                mobileMystryBooking(mobileEscapeRoomBookingData[locationSlug]);
              }}
              className="max-w-[280px] md:max-w-[300px]  px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-white border-red-600 bg-transparent rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
            >
              GET A QUOTE
            </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 rm:space-y-5 rm:space-y-0 md:space-x-5 xl:space-x-6">
            <button
              onClick={(e) =>  showMobileEscapeBookingMenuGame(e)}
              className="max-w-[300px] px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
            >
               BOOK NOW
            </button>
            <button
              onClick={(e) => showMobileEscapeBookingMenuParty(e)}
              className="max-w-[300px] px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-white border-red-600 bg-transparent rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
            >
              GET A QUOTE
            </button>
            </div>
          )}
        </div>
          <div className="mbl-sect-note mt-5 rm:mt-7 md:mt-8 xl:mt-10 "> 
                  <p className="text-[#aeaeae] zm:max-w-[500px] md:max-w-[760px] text-sm lg:max-w-[990px] mx-auto md:text-base text-center font-thin  italic">
                    * Online booking through BOOK NOW opens 14 days in advance. Need something sooner? Click GET A QUOTE
                    </p>
            </div>
      </div>
    </div>
  );
};
export default MobileEscapeGameCarouselSection;
