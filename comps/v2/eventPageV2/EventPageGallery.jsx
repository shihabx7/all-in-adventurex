import GalleryCarouselView from "./elements/GalleryCarouselView";
export default function EventPageGallery({ sectionData }) {
  return (
    <div className="eventpage-gallery-section bg-[#090909] relative">
      <div className="section-container min-h-[50vh] max-w-[840px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-4 xl:px-6 mx-auto">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12 max-w-[930px] mx-auto">
          <h2 className="text-[#E0BF62]   text-[1.5rem] leading-[1.25] md:text-[2.5rem] xl:text-[2.6rem] 2xl:text-[2.75rem] font-os font-bold uppercase text-center">
            {sectionData.title
              ? sectionData.title
              : "ESCAPE ROOM PARTY GALLERY"}
          </h2>
          <p className=" text-[#B5B5B5] mt-2 md:mt-3 lg:mt-4 text-center md:text-lg lg:text-xl md:max-w-[720px] lg:max-w-[800px] mx-auto">
            {sectionData.description
              ? sectionData.description
              : "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!"}
          </p>
        </div>
        {/**===============================================================gallery */}
        <div className="hidden lg:block">
          <div className="grid-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2 xl:gap-3">
            {sectionData.galleryImages.map((item, index) => {
              return (
                <div key={index} className={"gallery-item item-" + index}>
                  <img
                    className="max-w-full h-auto"
                    src={
                      item.url
                        ? item.url
                        : "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png"
                    }
                    alt={
                      item.alt ? item.alt : "escape room event party gallery"
                    }
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <GalleryCarouselView imageList={sectionData.galleryImages} />
        </div>
      </div>
    </div>
  );
}
