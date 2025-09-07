import SectionTitleCenterDark from "../../sharedComs/SectionTitleCenterDark";
import EventCardList from "../EventCardList";

const EventCardListSection = ({ sectionData }) => {
  return (
    <div className="event-carousel-section bg-[#FFF9EB]  ">
      <div className="event-carousel-section-bg relative bg-[url('/assets/home-page/aia-brown-bg-pattern.svg')] bg-center bg-[length:200px_200px] md:bg-[length:360px_360px] lg:bg-[length:400px_400px] bg-repeat bg-opacity-50">
        <div className="secttion-container max-w-7xl mx-auto py-16 md:py-20 lg:py-28  relative z-30">
          {/*===================Section Title======================== */}
          <div className="section-title text-center max-w-[780px] mx-auto px-4 md:px-8 lg:px-0 ">
            <SectionTitleCenterDark
              title={
                sectionData.sectionTitle
                  ? sectionData.sectionTitle
                  : "EVENT AND PARTIES"
              }
            />
            {sectionData.sectionSubTitle && (
              <div
                className="text-gray-700 sm:text-lg xl:text-xl text-center mt-3 md:mt-3 xl:mt-4"
                dangerouslySetInnerHTML={{
                  __html: sectionData.sectionSubTitle,
                }}
              ></div>
            )}
          </div>
          {/*===================event Carousel======================== */}
          <div className=" max-w-[480px] md:max-w-[760px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1220px] mx-auto mt-4 lg:mt-6 px-2 rm:px-3 zm:px-4">
            <EventCardList eventCardlList={sectionData.eventCardlList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardListSection;
