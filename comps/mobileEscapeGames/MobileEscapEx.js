import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
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

import MobileTitleSeparatorLeft from "./MobileTitleSeparatorLeft";
const MobileEscapEx = ({
  experienceSectionData,
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
  goMobileEecapeForm,
}) => {
  const showMobileEscapeBookingMenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
  return (
    <div className="mer-hero  bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden">
      <SectionBorderBottom />
      <SectionBorderTop />
      <div className="mbl-h-container max-w-7xl mx-auto md:px-4">
        {/* =====================++++section row 1++++=====================*/}
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
            {/* ==================section title=====================*/}
            <div className="md:max-w-[80%] lg:max-w-[100%]">
              <MobileTitleSeparatorLeft
                title={experienceSectionData.titleOne}
              />
            </div>

            {/* ==================text=====================*/}
            <div
              className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-1 md:mt-2 mbl-group-text"
              dangerouslySetInnerHTML={{
                __html: experienceSectionData.descriptionOne,
              }}
            ></div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-5 md:mt-10 2xl:mt-12">
              {locationSlug ? (
                <button
                  onClick={() => {
                    partyFormBooking(eventFormBookingLinks[locationSlug]);
                  }}
                  className="max-w-[280px] md:max-w-[300px] px-14 md:px-16 text-center border block text-white border-red-600 bg-red-600 py-[14px] md:py-3 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
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
            <div className="mbl-h-img text-center">
              <img
                className="w-full"
                alt={
                  experienceSectionData.imageOne.hasImage
                    ? experienceSectionData.imageOne.alt
                    : "Allinadventures mobile escape room experience 1"
                }
                src={
                  experienceSectionData.imageOne.hasImage
                    ? experienceSectionData.imageOne.url
                    : "/assets/mobile-escape-room/allinadventures-mobile-escape-room-experience-1.jpg"
                }
              ></img>
            </div>
          </div>
        </div>
        {/* ==================+++partner section row    +++=====================*/}
        <div className="mbl-row mbl-partners mt-12 md:mt-10 lg:mt-16">
          <div className="md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1090px]">
            <MobileTitleSeparatorLeft
              title={"ORGANIZATIONS THAT CHOSE TO ESCAPE THE ORDINARY"}
            />
          </div>

          {/* ==================text=====================*/}
          <div className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-1 md:mt-2 mbl-group-text md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1080px]">
            We've brought teams, students, and staff together with engaging,
            on-site fun—right at their location. These groups turned ordinary
            events into unforgettable adventures with our mobile escape rooms!
          </div>
        </div>
        {/* ==================parter's logo=====================*/}
        <div className="mbl-partner-logo-container pt-4 lg:pt-12 lg:pb-0">
          <div className="logo-item-box flex space-x-4 space-y-4 flex-wrap md:flex-nowrap justify-evenly md:justify-between items-center">
            <div className="logo-item">
              <img
                className="max-h-[36px] md:max-h-[48px] lg:max-h-[60px]"
                src="/assets/mobile-escape-room/patners/Apple_logo_black.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className="max-h-[20px] md:max-h-[24px] lg:max-h-[40px]"
                src="/assets/mobile-escape-room/patners/Amazon_logo.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className="max-h-[18px] md:max-h-[22px] lg:max-h-[38px]"
                src="/assets/mobile-escape-room/patners/Deloitte.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className="max-h-[24px] md:max-h-[26px] lg:max-h-[38px]"
                src="/assets/mobile-escape-room/patners/IBM_logo.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className="max-h-[42px] lg:max-h-[60px]"
                src="/assets/mobile-escape-room/patners/Dell_Logo.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className=" max-h-[30px] lg:max-h-[44px]"
                src="/assets/mobile-escape-room/patners/Syracuse_University.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className="max-h-[32px] lg:max-h-[58px]"
                src="/assets/mobile-escape-room/patners/University_of_Massachusetts.svg"
              ></img>
            </div>
            <div className="logo-item">
              <img
                className="max-h-[32px] lg:max-h-[58px]"
                src="/assets/mobile-escape-room/patners/NC_State_University.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapEx;
