import { mobileEscapePageHeroInfoList } from "../../lib/tempData/mobileEscapeTempData";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";

const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};

const MobileEscapeHero = ({
  pageHero,
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) => {
  const comaoff = (txt) => {
    //console.log(txt)
    return txt.split(",").join(" ");
    //return ret
  };
  const showMobileEscapeBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
  return (
    <div className="uer-hero  bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]   pt-2 pb-16  md:pb-20 md:pt-4  lg:pb-28 lg:pt-16 xl:pb-16 xl:pt-8 3xl:pb-24 3xl:pt-14  px-2 rm:px-4 relative overflow-hidden">
      <div className="mbl-h-container max-w-7xl mx-auto relative">
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1 md:px-12 lg:px-0">
            {/* ==================section title=====================*/}
            {locationName ? (
              <h1 className="text-[#4A2F03] text-[13px] leading-[1.2] rm:text-[14px]  md:text-[24px] 2xl:text-[26px] uppercase font-semibold">
                MOBILE ESCAPE ROOM IN {comaoff(locationName)}
              </h1>
            ) : (
              <h1 className="text-[#4A2F03] text-[13px] leading-[1.2] rm:text-[14px]  md:text-[24px] 2xl:text-[26px] uppercase font-semibold">
                All In Adventures' Mobile Escape Rooms
              </h1>
            )}
            <h2
              className="text-[#CA9342] font-bold  text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] 2xl:text-6xl mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              {pageHero.pageTitle}
            </h2>
            {pageHero.pageSubTitle ? (
              <div
                className="text-slate-100 md:text-lg mt-6"
                dangerouslySetInnerHTML={{
                  __html: pageHero.pageSubTitle,
                }}
              ></div>
            ) : (
              <></>
            )}
            {/* ==================icon list=====================*/}
            <div className="text-[#2e2e2e] mbl-h-list mt-6 ml-2">
              {mobileEscapePageHeroInfoList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="icon-row flex space-x-2 md:spaxe-x-3  my-3 w-full"
                  >
                    <span className="mt-[8px] md:mt-[8px] w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#CA9342] "></span>
                    <div
                      className="md:text-lg flex-1"
                      style={{ lineHeight: 1.3 }}
                    >
                      {item.text !== null
                        ? item.text
                        : " Perfect for Team-Building, Parties, and Special Events"}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-8 md:mt-10 2xl:mt-12">
              {locationSlug ? (
                <button
                  onClick={() => {
                    partyFormBooking(eventFormBookingLinks[locationSlug]);
                  }}
                  className="max-w-[280px] px-14 text-center border block text-white border-red-600 bg-red-600 py-[14px] md:py-3 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>
              ) : (
                <button
                  onClick={(e) => showMobileEscapeBookingMenu(e)}
                  className="max-w-[340px] px-10 text-center border block text-white border-red-600 bg-red-600 py-[16px] md:py-4 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  CHOOSE YOUR LOCATION
                </button>
              )}
            </div>
          </div>
          <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center md:max-w-[580px] mx-auto">
              <img
                alt={
                  pageHero.pageHeroImage.hasImage
                    ? pageHero.pageHeroImage.alt
                    : "Allinadventure mobile escape room in" + locationName
                }
                src={
                  pageHero.pageHeroImage.hasImage
                    ? pageHero.pageHeroImage.url
                    : "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png"
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeHero;
