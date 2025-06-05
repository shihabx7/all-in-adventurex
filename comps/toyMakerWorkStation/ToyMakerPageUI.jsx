import ToymakerPageHero from "./section/ToymakerPageHero";
import ToyMakersStoryLineSection from "./section/ToyMakersStoryLineSection";
import OccasionActivitySection from "./section/occasionActivitySection";
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
      <OccasionActivitySection
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
