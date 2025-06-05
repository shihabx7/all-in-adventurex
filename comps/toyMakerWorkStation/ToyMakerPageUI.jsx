import ToymakerPageHero from "./section/ToymakerPageHero";
import ToyMakersStoryLineSection from "./section/ToyMakersStoryLineSection";
import OccActivitySection from "./section/OccActivitySection";
import ToyMakerGallerySection from "./section/ToyMakerGallerySection";
import ToyMakerTestimonialsSection from "./section/ToyMakerTestimonialsSection";
import ToyMakerFaqSection from "./section/ToyMakerFaqSection";
export default function ToyMakerPageUI({
  toymakersPageData,
  locationInfo,
  locationName,
  locationSlug,
}) {
  return (
    <>
      <ToymakerPageHero
        pageHeroData={toymakersPageData.pageHeroData}
        bookingData={toymakersPageData.bookingData}
      />
      <ToyMakersStoryLineSection
        gameInfo={toymakersPageData.gameInfo}
        bookingData={toymakersPageData.bookingData}
      />
      <OccActivitySection
        sectionData={toymakersPageData.activityCarouselSectionData}
        bookingData={toymakersPageData.bookingData}
      />
      <ToyMakerGallerySection
        sectionData={toymakersPageData.gallerySectionData}
      />
      <ToyMakerTestimonialsSection
        sectionData={toymakersPageData.testimonialSectionData}
      />
      <ToyMakerFaqSection sectionData={toymakersPageData.faqSectionData} />
    </>
  );
}
