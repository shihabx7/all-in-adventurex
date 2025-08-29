import EscapeGameDarkPatternBg from "../EscapeGameDarkPatternBg";
import EscapeGamesListSection from "../../homePageComps/sections/EscapeGamesListSection";
import OtherGameSection from "../../homePageComps/sections/OtherGameSection";

export default function ActivityFilterListSection({
  escapeGameListSectionData,
  otherGameListSectionData,
  locationSlug,
}) {
  return (
    <div className="list-page-list-section">
      <EscapeGamesListSection
        escapeGameListSectionData={escapeGameListSectionData}
        locationSlug={locationSlug ? locationSlug : false}
      />
      {otherGameListSectionData.hasGames && (
        <div className="mt-12 md:mt-16 lg:mt-[6rem] xl:mt-[7rem]">
          <OtherGameSection
            otherGameSectionData={otherGameListSectionData}
            locationSlug={locationSlug ? locationSlug : false}
          />
        </div>
      )}
    </div>
  );
}
