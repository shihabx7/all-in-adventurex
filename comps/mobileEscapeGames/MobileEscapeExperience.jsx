import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
import { HiMiniArrowLongRight } from "react-icons/hi2";

import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";
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
 const mobileMystryBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: "no",
      view: { item: bookingData.itemNo2 },
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
    const showMobileEscapeBookingMenuParty= () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(true);
    setShowMobileEecapeMenu(true);
  };
   const showMobileEscapeBookingMenuGame = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setGoMobileEecapeForm(false);
    setShowMobileEecapeMenu(true);
  };
  return (
    <div className="mer-hero bg-[#FFF9EB]  bg-[url('/assets/mobile-escape-room/paper-text-bg.jpg')] bg-center bg-cover  relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden">
      <div className="mbl-h-container max-w-7xl mx-auto md:px-4">
        {/* =====================++++section row 1++++=====================*/}
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-6 2xl:space-x-8 items-center">
          <div className="mbl-col w-full lg:min-w-[500px] xl:min-w-[640px] order-2 lg:order-1">
            {/* ==================section title=====================*/}
            <div className="md:max-w-[80%] lg:max-w-[100%]">
              <MobileTitleSeparatorLeft
                title={"ALL THE FUN IN YOUR PLACE"}
              />
            </div>
            

            {/* ==================text   __html: experienceSectionData.descriptionOne, =====================*/}
            <div className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-1 md:mt-2 mbl-group-text">
              <p>
               Bring high-energy entertainment to your event without the stress. Our interactive, on-site Mobile Mystery experiences transform ordinary spaces into unforgettable adventures—complete with interesting props, engaging storylines, and seamless setup.

              </p>
              <p>
                Whether you're hosting a school field trip, company retreat, church function, or birthday bash, we deliver a crowd-pleasing activity that sparks teamwork, creativity, and excitement. All you need is the space—we handle the rest.
              </p>
            </div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-5 md:mt-10 2xl:mt-12">
              {locationSlug ? (
                         <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 rm:space-y-5 rm:space-y-0 md:space-x-5 xl:space-x-6"> 
                           <button
                           onClick={() => {
                             partyFormBooking(mobileEscapeRoomBookingData[locationSlug]);
                           }}
                           className="max-w-[280px] md:max-w-[300px]  px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                         >
                           BOOK NOW
                         </button>
                         <button
                           onClick={() => {
                             mobileMystryBooking(mobileEscapeRoomBookingData[locationSlug]);
                           }}
                           className="max-w-[280px] md:max-w-[300px]  px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-[#2e2e2e] hover:text-white border-red-600 bg-transparent rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                         >
                           GET A QUOTE
                         </button>
                         </div>
                       ) : (
                         <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 rm:space-y-5 rm:space-y-0 md:space-x-5 xl:space-x-6">
                         <button
                           onClick={(e) =>  showMobileEscapeBookingMenuGame(e)}
                           className="max-w-[300px] px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-white border-red-600 bg-red-600 rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                         >
                            BOOK NOW
                         </button>
                         <button
                           onClick={(e) => showMobileEscapeBookingMenuParty(e)}
                           className="max-w-[300px] px-12 md:px-14 py-[12px] md:py-3 text-center border-2 block text-[#2e2e2e] hover:text-white border-red-600 bg-transparent rounded-full font-semibold md:text-lg hover:bg-red-700 hover:border-red-700"
                         >
                           GET A QUOTE
                         </button>
                         </div>
                       )}
            </div>
          </div>
          <div className="mbl-col w-full lg:w-auto flex-grow order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
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

        {/* ==================+++partner section row    +++=====================*/}
      </div>
    </div>
  );
};

export default MobileEscapeExperience;
