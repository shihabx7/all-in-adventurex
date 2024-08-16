import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
import GalleryWithCarousel from "./GalleryWithCarousel";
const EventGallerySection = (props) => {
  return (
    <div className="event-gallery my-16 md:my-20 lg:my-28">
      <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0">
        <TitleSeparator
          title="EVENTS AND PARTIES"
          color="golden-text"
          weight="font-bold"
        />
        <p className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5">
          We&apos;ve hosted over 10,000 birthday parties and team-building
          events over the years. With more escape room themes and options being
          constantly added, we are always looking for ways to make your event
          memorable.
        </p>
      </div>

      <GalleryWithCarousel category="events" galleryitem={props.gallerylist} />
      <div className="gl-bottom-link mt-12 text-center">
        <PageLink link="/events" label="View all events and parties" />
      </div>
    </div>
  );
};

export default EventGallerySection;
