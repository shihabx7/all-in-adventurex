import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameCarousel from "./MobileEscapeGameCarousel";

const MobileEscapeGameSlider = ({
  gameCarouselSectionData,
  locationName,
  pricingSectionData,
}) => {
  return (
    <div className="mer-games-slider bg-black   relative">
      <div className="py-16  py:pt-20 lg:pt-20 lg:pb-28 xl:pb-28 xl:pt-20 3xl:pt-24 3xl:pb-28  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[920px] mx-auto px-4 lg:px-0">
          <div className="max-w-[364px] md:max-w-full mx-auto">
            <MobileTitleSeparatorCenter
              title={
                gameCarouselSectionData.sectionTitle !== null
                  ? gameCarouselSectionData.sectionTitle
                  : "CHOOSE YOUR MOBILE ESCAPE ROOM ADVENTURE"
              }
            />
          </div>
          {gameCarouselSectionData.sectionSubTitle !== null ? (
            <div
              className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[840px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: gameCarouselSectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
        <div className="megc relative">
          {gameCarouselSectionData.escapeGameList.length > 0 ? (
            <MobileEscapeGameCarousel
              escapeGameList={gameCarouselSectionData.escapeGameList}
              locationName={locationName}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="card-game-link mt-7 rm:mt-9 md:mt-7 xl:mt-8 flex justify-center">
          <a
            href="#mobile-escape-room-form"
            className="border block text-white text-center  border-red-600 bg-red-600 min-w-[280px] py-3 px-[30px] md:px-12 md:py-4 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </div>
  );
};
export default MobileEscapeGameSlider;
