import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const MobileEscapeEvents = ({ eventSectionData, locationName }) => {
  return (
    <div className="mer-event-section relative  py-16 md:py-24 lg:py-28 3xl:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat">
      {/*======================= boder img============== */}
      <SectionBorderTop />
      <SectionBorderBottom />
      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto ">
          <MobileTitleSeparatorCenter title={eventSectionData.sectionTitle} />
          <div
            className="text-[#2E2E2E] mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl"
            dangerouslySetInnerHTML={{
              __html: eventSectionData.sectionSubTitle,
            }}
          ></div>
        </div>
        {eventSectionData.eventList.length > 0 ? (
          <div className="mer-event-list flex flex-col md:flex-row md:justify-between  space-y-6 md:space-y-0 md:space-x-2 lg:space-x-4  md:flex-wrap lg:flex-nowrap">
            {/*=======================item ============== */}
            {eventSectionData.eventList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mer-event-list-item w-full md:w-[32.5%] lg:w-[32%]  bg-[#222222] rounded-[12px]"
                >
                  <div className="mer-ev-img rounded-t-[12px]">
                    <img
                      className="rounded-t-[12px]"
                      alt={
                        item.image.hasImage
                          ? item.image.alt
                          : "Allinadventures mobile escape room event" + index
                      }
                      src={
                        item.image.hasImage
                          ? item.image.url
                          : "/assets/mobile-escape-room/events/mobile-escape-room-events-1.jpg"
                      }
                    ></img>
                  </div>
                  <div className="mar-ev-text px-5 py-6 md:px-2 md:py-6 lg:px-6 lg:py-8 text-center">
                    <h3 className="font-bold text-[22px] md:text-[24px] lg:text-[28px] 3xl:text-[32px] leading-[1.3] text-[#CA9342]">
                      {item.eventTitle}
                    </h3>
                    <div
                      className="text-[#e2e2e2] md:text-sm lg:text-base mt-2 rm:mt-2 md:mt-3 3xl:mt-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {/*=======================Section btn============== */}
        <div className="mbl-h-btn  mt-10 md:mt-14 2xl:mt-16 flex justify-center">
          <a
            href="#mobile-escape-room-form"
            className="max-w-[220px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[12px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeEvents;
