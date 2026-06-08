import { locationBookingInfo } from "../../../lib/v2/data/locationBookingInfo";
import { FaArrowDown } from "react-icons/fa6";
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
    <div className="note-to-remember-section relative">
      <div className="section-bg-video w-full h-full absolute top-0 left-0">
        <EventHeroBgVideo />
      </div>
      <div className="section-wrapper relative bg-[#370202]/80 z-20">
        <div className="section-container max-w-[700px] lg:max-w-7xl mx-auto py-16 md:py-20 lg:py-28 2xl:py-32 px-3 zm:px-4">
          <div className="section-row flex flex-col lg:flex-row lg:space-x-4 lg:justify-between items-center">
            <div className="section-col order-2 lg:order-1 max-w-[640px] lg:max-w-[500px] xl:max-w-[580px]">
              <div className="section-text">
                {locationInfo && locationName && (
                  <p className="location-mall text-sm md:text-base text-white">
                    At {locationInfo.mall} in {locationName}
                  </p>
                )}
                <p className="ev-ibrew text-[#FFFFFF] font-semibold tracking-widest shadow-lg uppercase font-os my-2">
                  {pageHeroData && pageHeroData.eyeBrewText
                    ? pageHeroData.eyeBrewText
                    : "Escape Room parties & events "}
                </p>
                <h1 className="uppercase text-white text-3xl md:text-[2.875rem] xl:text-[2.9rem] 2xl:text-[3rem] leading-[1.2] font-os font-semibold  my-2 md:my-2 lg:my-3">
                  {pageHeroData && pageHeroData.title
                    ? pageHeroData.title
                    : "All in adventure escape room event"}
                </h1>
                <p className="text-[#CACACA] xl:text-lg">
                  {pageHeroData && pageHeroData.description
                    ? pageHeroData.description
                    : "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure."}
                </p>
              </div>
              <div className="btn-pair-row mt-6  md:mt-10 xl:mt-12 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-6 sm:space-y-0 sm:space-x-3 md:spce-x-4">
                <div className="scrol-btn w-full sm:max-w-[308px] ">
                  <a
                    href={"#book-party-pacakages"}
                    className=" w-full py-3 px-8 rounded-full uppercase text-center flex justify-center items-center space-x-2 text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg"
                  >
                    <span>BOOK A PARTY PACKAGE </span>
                    <FaArrowDown />
                  </a>
                </div>
                 <div className="scrol-btn  w-full sm:max-w-[254px] ">
                  <a
                    href={"#book-escape-game"}
                    className=" w-full py-3 px-8 rounded-full uppercase text-center flex justify-center items-center space-x-2 text-white font-medium border-2 border-white bg-transparent hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg"
                  >
                    <span>BOOK GAME ONLY</span>
                    <FaArrowDown />
                  </a>
                </div>

              </div>
            </div>
            {/**=============================================================================================video */}
            <div className="section-col order-1 lg:order-2 lg:max-w-[580px] 2xl:max-w-[608px] mb-6 md:mb-10 lg:mb-0">
              <div className="video-bg-pattern w-full lg:max-w-[564px] 2xl:max-w-[590px] relative">
                <img
                  className="max-w-full"
                  src="/assets/event-page-v2/event-hero-video-bg-pattern.svg"
                  alt="Hero Video Bg Pattern"
                ></img>
                <div className="video-wrapper absolute top-[-3px] right-[-3px] zm:top-[-4px] zm:right-[-4px] md:top-[-16px] md:right-[-16px] w-full h-full flex items-center justify-center z-10">
                  <EventHeroVideo
                    videoData={
                      pageHeroData && pageHeroData.videoData
                        ? pageHeroData.videoData
                        : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
