import TitleSeparator from "../util/TitleSeparator";
import EscapeGameCarousel from "./EscapeGameCarousel";
import { FaAngleRight } from "react-icons/fa";
import SectionTitleCenterDark from "../common/SectionTitleCenterDark";
import OtherPageGameCarousel from "./OtherPageGameCarousel";

const OtherPageGameCarouselSection = ({
  sectionData,
  locationName,
  locationSlug,
  locationInfo,
}) => {
  return (
    <div className="escape-game-carousel  bg-[#231800] relative ">
      <div className="py-16 py:pt-20 lg:pt-20 lg:pb-28 xl:pb-28 xl:pt-20 3xl:pt-24 3xl:pb-28 z-20 relative">
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12 md:max-w-[720px] lg:max-w-[1400px] mx-auto px-4 lg:px-0 z-20 relative">
          <SectionTitleCenterDark title={sectionData.sectionTitle} />

          <div className="text-gray-200 mt-2 md:mt-3 lg:mt-4 text-center md:text-lg lg:text-xl max-w-[900px] mx-auto">
            <div className="text-[#E5E7EB] md:px-8">
              {!locationInfo
                ? " Visit us for next-level escape room adventures—featuring detailed sets, clever puzzles, and unforgettable teamwork moments. Perfect for groups looking to get out and dive deeper into the world of in-person escape games."
                : "Visit us at " +
                  locationInfo.mall +
                  " in " +
                  locationName +
                  " for next-level escape room adventures—featuring detailed sets, clever puzzles, and unforgettable teamwork moments. Perfect for groups looking to get out and dive deeper into the world of in-person escape games."}
            </div>
          </div>
        </div>
        <div className="slider-box  relative">
          {locationSlug ? (
            <OtherPageGameCarousel
              escapeGameList={sectionData.gameList}
              locationSlug={locationSlug}
              isPublished={true}
            />
          ) : (
            <OtherPageGameCarousel escapeGameList={sectionData.gameList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherPageGameCarouselSection;
