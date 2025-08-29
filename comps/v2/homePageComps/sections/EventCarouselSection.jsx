import SectionTitleCenterDark from "../../sharedComs/SectionTitleCenterDark";
import HomeEventCarousel from "../HomeEventCarousel";

const EventCarouselSection = ({ eventCarouselSectionData }) => {
  return (
    <div className="event-carousel-section bg-[#FFF9EB]  ">
      <div className="event-carousel-section-bg relative bg-[url('/assets/escape-game-events/old-paper-texture-bg-long.svg')] bg-center bg-cover ">
        <div className="secttion-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28  relative z-30">
          {/*===================Section Title======================== */}
          <div className="section-title text-center max-w-[780px] mx-auto px-4 md:px-8 lg:px-0 ">
            <SectionTitleCenterDark
              title={
                eventCarouselSectionData.sectionTitle
                  ? eventCarouselSectionData.sectionTitle
                  : "EVENT AND PARTIES"
              }
            />
            {eventCarouselSectionData.sectionSubTitle && (
              <div
                className="text-gray-700 sm:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4"
                dangerouslySetInnerHTML={{
                  __html: eventCarouselSectionData.sectionSubTitle,
                }}
              ></div>
            )}
          </div>
          {/*===================event Carousel======================== */}
          <div className=" max-w-[480px] md:max-w-[760px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1220px] mx-auto mt-4 lg:mt-6 px-2 rm:px-3 zm:px-4">
            <HomeEventCarousel
              eventCarouselList={eventCarouselSectionData.eventCarouselList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarouselSection;
