import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
import GalleryWithCarousel from "./GalleryWithCarousel";
const OtherGamesGallerySection = (props) => {
  return (
    <div className="other-games-gallery mt-16 md:mt-20 lg:mt-28 mb-2">
      <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
        <TitleSeparator
          title="OTHER GAMES AND ACTIVITIES"
          color="golden-text"
          weight="font-bold"
        />
        <p className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5">
          All In Adventures is more than an escape room place. Join us to
          experience more fun activities, including Game Show Rooms, Beat the
          Seat and Axe Throwing.
        </p>
      </div>

      <GalleryWithCarousel category="others" galleryitem={props.gallerylist} />
      <div className="gl-bottom-link mt-12 text-center">
        <PageLink
          link="/activities#others-physical-games"
          label="View all other in-person games"
        />
      </div>
    </div>
  );
};

export default OtherGamesGallerySection;
