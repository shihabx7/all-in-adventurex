import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameCarousel from "./MobileEscapeGameCarousel";
const MobileEscapeGameSlider = ({ gameCarouselSectionData, locationName }) => {
  return (
    <div className="mer-games-slider bg-black">
      <div className="py-16 md:py-20 lg:py-28  z-20 ">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1000px] mx-auto px-4 lg:px-0">
          <MobileTitleSeparatorCenter
            title={
              gameCarouselSectionData.sectionTitle !== null
                ? gameCarouselSectionData.sectionTitle
                : "CHOOSE YOUR MOBILE ESCAPE ROOM ADVENTURE"
            }
          />
          {gameCarouselSectionData.sectionSubTitle !== null ? (
            <div
              className="text-gray-200 mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl"
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
      </div>
    </div>
  );
};
export default MobileEscapeGameSlider;
