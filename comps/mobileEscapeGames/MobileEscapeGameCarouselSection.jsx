import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameCarousel from "./MobileEscapeGameCarousel";
import { mobileEscapeGameList } from "../../lib/tempData/mobileEscapeTempData";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
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
const MobileEscapeGameCarouselSection = ({
  gameCarouselSectionData,
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) => {
  const showMobileEscapeBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
  return (
    <div className="mer-games-slider bg-[#251A03]   relative">
      <div className="py-16  py:pt-20 lg:pt-20 lg:pb-28 xl:pb-28 xl:pt-20 3xl:pt-24 3xl:pb-28  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1040px] mx-auto px-4 lg:px-0">
          <div className="max-w-[364px] md:max-w-full mx-auto">
            <MobileTitleSeparatorCenter
              title={
                gameCarouselSectionData.sectionTitle !== null
                  ? gameCarouselSectionData.sectionTitle
                  : "CHOOSE YOUR MOBILE ESCAPE ROOM ADVENTURE"
              }
              textColor={"#E0BF62"}
            />
          </div>
          {/*  __html: gameCarouselSectionData.sectionSubTitle, */}
          <div className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[850px] mx-auto">
            <p>
              Explore six unique mobile escape room adventures—each with a
              thrilling story, clever twists, and immersive challenges. Whether
              you're on a secret mission or stopping a prison break, every game
              delivers 60 minutes of unforgettable fun.
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

        <div className="hidden"></div>
        <div className="card-game-link mt-7 rm:mt-10 md:mt-12 xl:mt-12 flex justify-center">
          {locationSlug ? (
            <button
              onClick={() => {
                partyFormBooking(eventFormBookingLinks[locationSlug]);
              }}
              className="max-w-[280px] md:max-w-[300px]  px-12 md:px-14 py-[14px] md:py-4 text-center border block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
            >
              GET A QUOTE
            </button>
          ) : (
            <button
              onClick={(e) => showMobileEscapeBookingMenu(e)}
              className="max-w-[300px] px-12 md:px-14 py-[14px] md:py-4 text-center border block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
            >
              GET A QUOTE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MobileEscapeGameCarouselSection;
