import PageHeroLocBtn from "../../homePageComps/PageHeroLocBtn";
import PageHeroBgImage from "../PageHeroBgImage";
import { eventFormBookingLinks } from "../../../../lib/tempData/eventFormBookingLinks";

export default function EventPageHero({ pageHeroData, locationSlug }) {
  const inquiryFormBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <div className="page-hero-section ">
      <div className="section-wrap  bg-black relative">
        <div className="section-bg  bg-black w-full h-full absolute top-0 left-0">
          <PageHeroBgImage pageHeroBgImage={pageHeroData.pageHeroBgImage} />
        </div>

        <div className="section-overlay bg-[rgba(0,0,0,0.6)]  min-h-[76vh] rm:min-h-[72vh] zm:min-h-[64vh] md:min-h-[62vh] lg:min-h-[60vh] xl:min-h-[85vh] flex justify-center items-center relative z-20">
          <div className="section-container  mx-auto  max-w-7xl pt-16 pb-24 md:py-20 lg:py-24 xl:py-28 px-[.9rem] rm:px-4">
            {/*============section head==========*/}
            <div className="section-head">
              <div className="pageTitle max-w-[310px] rm:max-w-[340px] zm:max-w-[520px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1100px] mx-auto">
                <h1 className="text-[#E0BF62] uppercase font-bold text-center text-[1.8rem] rm:text-[2.1rem] zm:text-[2.2rem] leading-[1.28] zm:leading-[1.4] md:leading-[1.3] md:text-[3rem] lg:text-6xl font-os outline-tile">
                  {pageHeroData.pageTitle
                    ? pageHeroData.pageTitle
                    : "ESCAPE GAME PARTY"}
                </h1>
              </div>
              {pageHeroData.pageSubTitle && (
                <div
                  className="page-sub-title text-[#dadada] zm:max-w-[480px] md:max-w-[800px] mx-auto  rm:text-[1.04rem] md:text-[1.25rem] xl:text-[1.35rem] text-center mt-3 md:mt-3 xl:mt-4 "
                  dangerouslySetInnerHTML={{
                    __html: pageHeroData.pageSubTitle,
                  }}
                ></div>
              )}
            </div>

            {/*============section head end==========*/}
            {/*============location search btn==========*/}
            {!locationSlug && (
              <div className="max-w-[460px] xl:max-w-[500px] mx-auto mt-[1.3rem] rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
                <PageHeroLocBtn />
              </div>
            )}
            {locationSlug && (
              <div className="btn-pair flex flex-col md:flex-row justify-center items-center space-y-5 rm:space-y-5 md:space-y-0 md:space-x-6 lg:space-x-8  mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
                <a
                  href="#eventbooking"
                  className="bg-red-600 cursor-pointer rounded-full text-[1.05rem] md:text-[1.15rem] leading-[1.2] font-medium text-white hover:bg-red-700 py-[1rem] px-12  rm:py-[1.085rem] rm:px-14  lg:py-4 lg:px-16 border border-red-600 hover:border-red-700 transition duration-300 uppercase"
                >
                  BOOK YOUR EVENT
                </a>
                <button
                  onClick={() => {
                    inquiryFormBooking(pageHeroData.inquiryFormBookingInfo);
                  }}
                  className="bg-transparent cursor-pointer rounded-full text-[1.05rem] md:text-[1.15rem] leading-[1.2] font-medium text-white hover:bg-red-700 py-[1rem] px-12  rm:py-[1.085rem] rm:px-14   lg:py-4 lg:px-16  border border-red-600 hover:border-red-700 transition duration-300 uppercase"
                >
                  Custom Inquiry
                </button>
              </div>
            )}
            {/*============location search btn==========*/}
          </div>
        </div>
        {/*==========================shadow border=================   <EventHeroInfoBox heroInfoList={props.pageHeroData.heroInfo} /> */}
        <div className="event-hero-shadow-border absolute left-0 bottom-0 z-[20] w-full h-[80px] bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}
