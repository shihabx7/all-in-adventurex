import React from "react";
import TitleSeparator from "../util/TitleSeparator";
import GiftGnBtn from "./GiftGnBtn";
function GiftSpotOn(props) {
  return (
    <div className="gift-spoton bg-[#FFF9EB]" >
      <div className="gift-spoton-container-wrapper max-w-[400px] md:max-w-7xl mx-auto px-4 rm:px-5  md:px-6 lg:px-8 xl:px-12 2xl:px-8 relative z-[30] mt-[-120px] rm:mt-[-126px] md:mt-[-138px]  xl:mt-[-144px] 3xl:mt-[-160px]" >
        <div className="gs-container ">
          {/*======================section title======== */}

          {/*======================section container======== */}
          <div className="gs-box-container grid grid-cols-1 md:grid-cols-3 gap-3 rm:gap-4 md:gap-[6px] lg:gap-3  xl:gap-4 2xl:gap-5">
            {/*======================box-column 1======== */}
            <div className="gs-box-col bg-[#231800] rounded-[14px] xl:rounded-[10px] p-3 rm:p-4 md:p-3 xl:p-4">

              <div className="gs-content h-full px-3 md:px-2 lg:px-3 xl:px-4 py-5 lg:py-6 2xl:py-7 rounded-[8px] border-2 border-dashed border-[#E2B84680]">
                <h3 className="text-[#CA9342] font-os font-bold text-[20px] rm:text-[22px] md:text-[18px] lg:text-[21px]  xl:text-[25px] 2xl:text-[28px] text-center">
                  MEMORIES OVER MATERIALS
                </h3>
                <p className="text-[#fff9eb] text-sm rm:text-base md:text-sm lg:text-base text-center mt-3">
                  Give the gift of adventure! Physical gifts may fade in time, but experiences and memories of escape rooms last a lifetime, making your present unforgettable.
                </p>
              </div>
            </div>
            {/*======================box-column 2 ======== */}
            <div className="gs-box-col bg-[#231800] rounded-[14px] xl:rounded-[10px] p-3 rm:p-4 md:p-3 xl:p-4">

              <div className="gs-content h-full px-3 md:px-2 lg:px-3 xl:px-4 py-5 lg:py-6 2xl:py-7 rounded-[8px] border-2 border-dashed border-[#E2B84680]">
                <h3 className="text-[#CA9342] font-os font-bold text-[20px] rm:text-[22px] md:text-[18px] lg:text-[21px]  xl:text-[25px] 2xl:text-[28px] text-center ">
                  GIFTING MADE EASY
                </h3>
                <p className="text-[#fff9eb] text-sm rm:text-base  md:text-sm lg:text-base text-center mt-3">
                  No wrapping, no waiting! All In Adventures Gift Cards can be sent digitally, making gifting a breeze—because everyone deserves a little hassle-free happiness.
                </p>
              </div>
            </div>
            {/*======================box-column 3======== */}
            <div className="gs-box-col bg-[#231800] rounded-[14px] xl:rounded-[10px] p-3 rm:p-4 md:p-3 xl:p-4">
              <div className="gs-content h-full px-3 md:px-2 lg:px-3 xl:px-4 py-5 lg:py-6 2xl:py-7 rounded-[8px] border-2 border-dashed border-[#E2B84680]">
                <h3 className="text-[#CA9342] font-os font-bold text-[20px] rm:text-[22px] md:text-[18px] lg:text-[21px]   xl:text-[25px] 2xl:text-[28px] text-center">
                  MAKE MEMORIES
                </h3>
                <p className="text-[#fff9eb] text-sm rm:text-base md:text-sm lg:text-base text-center mt-3">
                  Traditional gifts may not always match preferences. Our Gift Cards give recipients the freedom to choose their adventure, creating moments they'll cherish forever.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default GiftSpotOn;
