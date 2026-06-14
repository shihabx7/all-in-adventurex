import { locationBookingInfo } from "../../../lib/v2/data/locationBookingInfo";
import { FaArrowDown } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import EventHeroBgVideo from "./elements/EventHeroBgVideo";
import EventHeroVideo from "./elements/EventHeroVideo";
export default function EventPageHero({
  pageHeroData,
  locationSlug,
  locationInfo,
  locationName,
}) {
  const bookEscapeRoomPartyPackages = (slug) => {
    let bookingData = locationBookingInfo[slug];
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.partyPackageFlow,
    });
  };
  return (
    <div className="event-page-hero-section relative">
      <div className="section-bg-video w-full h-full absolute top-0 left-0">
        <EventHeroBgVideo />
      </div>
      <div className="section-wrapper relative bg-[#370202]/80 z-20">
        <div className="section-container md:max-w-[840px] lg:max-w-[1020px] xl:max-w-[1236px] 2xl:max-w-7xl mx-auto pb-16 pt-12 md:py-20 lg:py-[9rem] xl:py-32 2xl:py-[10rem] px-3 zm:px-4">
          <div className="section-row flex flex-col lg:flex-row lg:space-x-5 lg:justify-between  items-center">
            {/**==================================================================================================================video col*/}
            <div className="section-col mb-6 md:mb-10 lg:mb-0 order-1 lg:order-2 w-full lg:w-[48%] xl:w-[45%]  2xl:w-[46%]">
              <div className="event-hero-video-container pl-1.5 pb-1.5 md:pl-5 md:pb-5 lg:pl-3.5 lg:pb-3.5 max-w-full ">
                {/**==================================================================================================================video box*/}
                <div className="video-place w-full aspect-[756/516]  relative">
                  <div className="w-full h-full overflow-hidden relative z-10 border border-t-[1px] border-r-[1px]  border-b-[3px] border-l-[3px] sm:border-t-[3px] sm:border-r-[3px]  sm:border-b-[6px] sm:border-l-[6px] lg:border-t-[2px] lg:border-r-[2px]  lg:border-b-[4px] lg:border-l-[4px] border-gold rounded-lg md:rounded-xl bg-gold" >
                    <EventHeroVideo
                      videoData={
                        pageHeroData && pageHeroData.videoData
                          ? pageHeroData.videoData
                          : null
                      }
                    />
                  </div>
                  <div className="w-full h-full absolute -bottom-1.5 -left-1.5 md:-bottom-5 md:-left-5 lg:-bottom-3.5 lg:-left-3.5">
                    <img
                      className="w-full h-full objcet-cover object-center"
                      src="/assets/event-page-v2/event-hero-video-bg-pattern.png"
                      alt="Hero Video Bg Pattern"
                    ></img>
                  </div>
                </div>
              </div>
              {/**==================================================================================================================video box*/}
            </div>
            {/**=========================================================================================================text content col*/}
            <div className="section-col order-2 lg:order-1 w-full lg:w-[49%] xl:w-[50%] 2xl:w-[48%]">
              <div className="section-text">
                {locationInfo && locationName && (
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <p className="location-pin text-sm md:text-base text-[#ebebeb]">
                      <FaMapMarkerAlt />
                    </p>
                    <p className="location-mall text-xs md:text-[.98rem] text-white">
                      At {locationInfo.mall} in {locationName}
                    </p>
                  </div>
                )}
                <h1 className="ev-ibrew text-[#FFFFFF] font-semibold tracking-widest uppercase font-os my-2">
                  {pageHeroData && pageHeroData.eyeBrewText
                    ? pageHeroData.eyeBrewText
                    : "Escape Room parties & events "}
                </h1>
                <h2 className="uppercase text-white text-3xl md:text-[2.875rem] xl:text-[2.7rem] 2xl:text-[3rem] leading-[1.2] font-os font-semibold  my-2 md:my-2 lg:my-3">
                  {pageHeroData && pageHeroData.title
                    ? pageHeroData.title
                    : "All in adventure escape room event"}
                </h2>
                <p className="text-[#CACACA] md:text-lg 2xl:text-[1.2rem]">
                  {pageHeroData && pageHeroData.description
                    ? pageHeroData.description
                    : "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure."}
                </p>
              </div>
              <div className="btn-pair-row mt-6  md:mt-10 xl:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-6 sm:space-y-0 sm:space-x-3 md:spce-x-4 lg:space-x-2 xl:space-x-3">
                <div className="scrol-btn w-full sm:max-w-[300px] ">
                  <a
                    href={"#book-party-pacakages"}
                    className=" w-full py-3 px-5 rounded-full uppercase text-center flex justify-center items-center space-x-2 text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg"
                  >
                    <span>
                      {pageHeroData.ctaBtnLabel
                        ? pageHeroData.ctaBtnLabel
                        : "BOOK A PARTY PACKAGE"}
                    </span>
                    <FaArrowDown />
                  </a>
                </div>
                <div className="scrol-btn  w-full sm:max-w-[250px] ">
                  <a
                    href={"#escape-game-booking"}
                    className=" w-full py-3 px-5 rounded-full uppercase text-center flex justify-center items-center space-x-2 text-white font-medium border-2 border-white bg-transparent hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg"
                  >
                    <span>BOOK GAME ONLY</span>
                    <FaArrowDown />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


