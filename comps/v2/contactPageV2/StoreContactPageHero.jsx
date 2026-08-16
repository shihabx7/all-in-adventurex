import { eventFormBookingLinks } from "../../../lib/tempData/eventFormBookingLinks";
import PageHeroBgImg from "./elements/PageHeroBgImg";

const StoreContactPageHero = (props) => {
  const partyFormBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };
  const showModalForm = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    props.setShowFormModalForm(true);
  };
  
  return (
    <div className="contact-hero bg-[#111111]  relative">
      <div className="hero-bg-image w-full h-full absolute top-0 left-0 ">
        <PageHeroBgImg
          heroBgImageDesktop={props.pageData.pageHeroDesktop}
          heroBgImageMobile={props.pageData.pageHeroMobile}
        />
      </div>
      <div className="section-bg-shadow w-full  bg-gradient-to-t from-black/50 to-black/70  relative z-10">
        {/*================================================== shadow 
        <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden z-10"></div>
        ===============================================shadow */}

        <div className="max-w-7xl min-h-[300px] mx-auto px-4  py-20 md:py-24 lg:py-32 xl:py-40 ">
          <div className="page-benar-info">
         

            <p className=" font-semibold zm:text-lg md:text-2xl rm:mb-[0px]  xm:mb-1 text-white text-center leading-[1.2] uppercase">
              At {props.pageData.mall} in {props.locationName}
            </p>
            <h1 className="text-gold aia-shadow font-bold text-center text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os uppercase max-w-[1100px] mx-auto">
              {props.pageData.pageTitle}
            </h1>
            <div
              className="text-gray-100 max-w-[960px] mx-auto text-center lg:text-lg contact-store-hero-desc"
              dangerouslySetInnerHTML={{
                __html: props.pageData.pageSubtitle,
              }}
            ></div>
          </div>
          <div className="hero-btn-pair flex flex-col zm:flex-row justify-center items-center space-y-5 zm:space-y-0 zm:space-x-2 md:space-x-4 lg:space-x-5 mt-7 zm:mt-10 md:mt-12 ">
            <div className="w-[90%] zm:w-[320px] md:w-[18rem]">
              <button
                onClick={() => {
                  partyFormBooking(eventFormBookingLinks[props.locationSlug]);
                }}
                className="w-full bg-red-600 cursor-pointer rounded font-medium text-white hover:bg-red-700 py-2 sm:py-2.5 lg:py-3 px-6 sm:px-8  md:px-10  border-[2px] border-red-600 hover:border-red-700 transition duration-300 uppercase"
              >
                Plan a Group EVENT
              </button>
            </div>
            <div className="w-[90%] zm:w-[320px] md:w-[18rem]">
              <button
                onClick={() => {
                  showModalForm();
                }}
                className="w-full bg-transparent cursor-pointer rounded font-medium text-white hover:bg-red-700 py-2 sm:py-2.5 lg:py-3 px-6 sm:px-8 md:px-10 border-[2px] border-red-600 hover:border-red-700 transition duration-300 uppercase "
              >
                ADDITIONAL HELP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContactPageHero;
