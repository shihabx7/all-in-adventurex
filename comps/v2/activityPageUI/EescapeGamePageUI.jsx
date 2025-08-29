import EscapeGamePageVideoBgHero from "../escapeGamePage/sections/EscapeGamePageVideoBgHero";
import GameStoryLineSection from "../escapeGamePage/sections/GameStoryLineSection";
import EscapeGameDarkPatternBg from "../escapeGamePage/EscapeGameDarkPatternBg";
import EscapeGameGallerySection from "../escapeGamePage/sections/EscapeGameGallerySection";
import MoreEscapeGameCarouselSection from "../escapeGamePage/sections/MoreEscapeGameCarouselSection";

export default function EescapeGamePageUI({ escapeGamePageUIData }) {
  return (
    <div className="escape-game-page-ui">
      <EscapeGamePageVideoBgHero
        pageHeroData={escapeGamePageUIData.pageHeroData}
        gameBooking={
          escapeGamePageUIData.gameBooking
            ? escapeGamePageUIData.gameBooking
            : false
        }
      />
      <GameStoryLineSection
        storyLineSectionData={escapeGamePageUIData.storyLineSectionData}
        gameBooking={
          escapeGamePageUIData.gameBooking
            ? escapeGamePageUIData.gameBooking
            : false
        }
      />
      <EscapeGameDarkPatternBg>
        <EscapeGameGallerySection
          sectionData={escapeGamePageUIData.gallerySectionDataData}
        />
        <MoreEscapeGameCarouselSection
          sectionData={escapeGamePageUIData.mooreEscapeGameCarouselSection}
        />
      </EscapeGameDarkPatternBg>
    </div>
  );
}
