import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";

import GameTitleSeparator from "../util/GameTitleSeparator";
import MobileTitleSeparatorLeft from "./MobileTitleSeparatorLeft";
const MobileEscapEx = ({ experienceSectionData, locationName }) => {
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
              className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-4 md:mt-6 mbl-group-text"
              dangerouslySetInnerHTML={{
                __html: experienceSectionData.descriptionOne,
              }}
            ></div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-8 md:mt-10 2xl:mt-12">
              <a
                href="#mobile-escape-room-form"
                className="max-w-[220px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
              >
                GET A QUOTE
              </a>
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
        {/* ==================+++section row 2   +++=====================*/}
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center mt-16 md:mt-16 lg:mt-16 2xl:mt-20">
          <div className="mbl-col w-full lg:w-1/2  mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center w-full">
              <img
                className="w-full"
                alt={
                  experienceSectionData.imageTwo.hasImage
                    ? experienceSectionData.imageTwo.alt
                    : "Allinadventures mobile escape room experience 2"
                }
                src={
                  experienceSectionData.imageTwo.hasImage
                    ? experienceSectionData.imageTwo.url
                    : "/assets/mobile-escape-room/allinadventures-mobile-escape-room-experience-2.jpg"
                }
              ></img>
            </div>
          </div>
          <div className="mbl-col w-full lg:w-1/2 ">
            {/* ==================section title=====================*/}
            <div className="md:max-w-[76%] lg:max-w-[100%]">
              <MobileTitleSeparatorLeft
                title={experienceSectionData.titleTwo}
              />
            </div>
            {/* ==================text====================*/}
            <div
              className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-4 md:mt-6 mbl-group-text"
              dangerouslySetInnerHTML={{
                __html: experienceSectionData.descriptionTwo,
              }}
            ></div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-8 md:mt-10 2xl:mt-12">
              <a
                href="#mobile-escape-room-form"
                className="max-w-[220px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
              >
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapEx;
