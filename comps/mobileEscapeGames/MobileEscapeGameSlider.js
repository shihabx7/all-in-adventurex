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
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[860px] mx-auto px-4 lg:px-0">
          <MobileTitleSeparatorCenter
            title={
              gameCarouselSectionData.sectionTitle !== null
                ? gameCarouselSectionData.sectionTitle
                : "CHOOSE YOUR MOBILE ESCAPE ROOM ADVENTURE"
            }
          />
          {gameCarouselSectionData.sectionSubTitle !== null ? (
            <div
              className="text-gray-200 mt-2 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[840px] mx-auto"
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
