import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
import GalleryWithCarousel from "./GalleryWithCarousel";
const InpersonGallerySection = (props) => {
  return (
    <div className="inperson-gallery">
      <div className="section-title  text-center max-w-[800px] mx-auto px-4 md:px-0  ">
        <p className="uppercase md:text-lg">CUSTOMER GALLERY</p>
        <TitleSeparator
          title="IN-PERSON ESCAPE ROOM GAMES"
          color="golden-text"
          weight="font-bold"
        />
        <p className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5">
          Escape rooms are one of the hottest trends in entertainment today.
          Players must work together to find hidden clues, solve puzzles, crack
          codes, complete tasks, and escape before time runs out!
        </p>
      </div>

      <GalleryWithCarousel
        category="escapegame"
        galleryitem={props.gallerylist}
      />
      <div className="gl-bottom-link mt-12 text-center">
        <PageLink link="/activities" label="View all in-person escape rooms" />
      </div>
    </div>
  );
};

export default InpersonGallerySection;
