import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import PartnerOrg from "./PartnerOrg";
import MobileEscapeGallery from "./MobileEscapeGallery";
import { newUpdateData } from "../../lib/tempData/mobileEscapeTempData";
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

const MobileEscapeExperience = ({
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
    <div className="mer-hero bg-[#FFF9EB]  bg-[url('/assets/mobile-escape-room/paper-text-bg.jpg')] bg-center bg-cover  relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden">
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
                  className="max-w-[280px] md:max-w-[300px]  px-12 md:px-14 py-[14px] md:py-4 text-center border block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>
              ) : (
                <button
                  onClick={(e) => showMobileEscapeBookingMenu(e)}
                  className="max-w-[300px]  px-12 md:px-14 py-[14px] md:py-4text-center border block text-white border-red-600 bg-red-600  rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  GET A QUOTE
                </button>
              )}
            </div>
          </div>
          <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center">
              <img
                className="w-full"
                alt={"Allinadventures mobile escape room experience "}
                src={
                  "/assets/mobile-escape-room/experience-adventure-everywhere.png"
                }
              ></img>
            </div>
          </div>
        </div>

        {/* ==================Gallery=====================*/}
        <div className="mbl-partner-logo-container pt-4 lg:pt-12 lg:pb-0 mt-12 md:mt-10 lg:mt-16">
          <MobileEscapeGallery sectionData={newUpdateData.gallerySectionData} />
        </div>
        {/* ==================+++partner section row    +++=====================*/}
        <div className="mbl-row mbl-partners mt-12 md:mt-10 lg:mt-16">
          <PartnerOrg />
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeExperience;
