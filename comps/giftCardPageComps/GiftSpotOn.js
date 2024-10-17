import React from "react";
import TitleSeparator from "../util/TitleSeparator";
import GiftGnBtn from "./GiftGnBtn";
function GiftSpotOn(props) {
  return (
    <div className="gift-spoton gift-pattern bg-black">
      <div className="gift-spoton-container-wrapper max-w-7xl mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-8">
        <div className="gs-container ">
          {/*======================section title======== */}
          <div className="sec-title gs-title max-w-[768px] mx-auto">
            <TitleSeparator title="THE GIFT THAT WILL ALWAYS BE SPOT-ON" />
            <p className="text-lg text-white mt-2 text-center">
              Become a gifting genius this holiday season with All In Adventures
              Gift Cards.
            </p>
          </div>
          {/*======================section container======== */}
          <div className="gs-box-container flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6   lg:space-x-0 lg:space-y-0 lg:justify-between mt-8 md:mt-12 flex-wrap">
            {/*======================box-column 1======== */}
            <div className="gs-box-col w-full md:max-w-[47%] lg:max-w-[32%] bg-[#FFF9EB]  relative rounded-lg">
              <div className="br-img absolute bottom-0 right-0 z-[20] w-[60px] md:w-[68px] 2xl:w-[75px]">
                <img
                  className=" w-[60px] md:w-[68px] 2xl:w-[75px]"
                  src="/assets/gift-images/usp/usp-gift-box.svg"
                  alt="An escape room gift box containing engaging puzzles and clues, perfect for an immersive adventure experience."
                ></img>
              </div>
              <div className="bg-or p-4 absolute z-[10] w-full h-full top-0 left-0 ">
                <div className="border-dashed border-2 border-[#E2B846] relative w-full h-full">
                  <div className="gs-box-top-riboon absolute top-[-16px] left-0 right-0 mx-auto max-w-[92%]">
                    <img
                      className=""
                      src="/assets/gift-images/usp/usp-box-confetti-for-top-and-bottom.svg"
                      alt="A vibrant gift box overflowing with confetti, symbolizing the thrill of an escape room challenge."
                    ></img>
                  </div>
                  <div className="gs-box-bottom-riboon absolute bottom-[-16px] left-0 right-0 mx-auto max-w-[92%]">
                    <img
                      className=""
                      src="/assets/gift-images/usp/usp-box-confetti-for-top-and-bottom.svg"
                      alt="An escape room gift box containing engaging puzzles and clues, perfect for an immersive adventure experience."
                    ></img>
                  </div>
                </div>
              </div>
              <div className="gs-cintent relative z-[30] px-10 py-16">
                <h3 className="text-[#CA9342] font-os font-bold text-[24px] md:text-[28px] xl:text-[32px] text-center">
                  MEMORIES OVER MATERIALS
                </h3>
                <p className="text-[#4A2F03] text-center mt-4">
                  Physical gifts may fade in time, but experiences and memories
                  of escape rooms will last a lifetime, making your present
                  unforgettable.
                </p>
              </div>
            </div>
            {/*======================box-column 2 ======== */}
            <div className="gs-box-col  w-full md:max-w-[47%] lg:max-w-[32%] bg-[#FFF9EB]  relative rounded-lg">
              <div className="br-img absolute bottom-0 right-0 z-[20] w-[60px] md:w-[68px] 2xl:w-[75px]">
                <img
                  className=" w-[60px] md:w-[68px] 2xl:w-[75px]"
                  src="/assets/gift-images/usp/usp-gift-box.svg"
                  alt="An escape room gift box containing engaging puzzles and clues, perfect for an immersive adventure experience."
                ></img>
              </div>
              <div className="bg-or p-4 absolute z-[10] w-full h-full top-0 left-0 ">
                <div className="border-dashed border-2 border-[#E2B846] relative w-full h-full">
                  <div className="gs-box-top-riboon absolute top-[-16px] left-0 right-0 mx-auto max-w-[92%]">
                    <img
                      className=""
                      src="/assets/gift-images/usp/usp-box-confetti-for-top-and-bottom.svg"
                      alt="A vibrant gift box overflowing with confetti, symbolizing the thrill of an escape room challenge."
                    ></img>
                  </div>
                  <div className="gs-box-bottom-riboon absolute bottom-[-16px] left-0 right-0 mx-auto max-w-[92%]">
                    <img
                      className=""
                      src="/assets/gift-images/usp/usp-box-confetti-for-top-and-bottom.svg"
                      alt="An escape room gift box containing engaging puzzles and clues, perfect for an immersive adventure experience."
                    ></img>
                  </div>
                </div>
              </div>
              <div className="gs-cintent relative z-[30] px-10 py-16">
                <h3 className="text-[#CA9342] font-os font-bold text-[24px] md:text-[28px] xl:text-[32px] text-center max-w-[80%] mx-auto">
                  HASSLE-FREE GIFTING
                </h3>
                <p className="text-[#4A2F03] text-center mt-4">
                  All In Adventures Gift Cards can be sent digitally, making
                  gifting a breeze — because everyone deserves a little
                  hassle-free happiness.
                </p>
              </div>
            </div>
            {/*======================box-column 3======== */}
            <div className="gs-box-col  w-full md:pt-[24px] lg:pt-0 lg:mt-0 md:max-w-[47%] lg:max-w-[32%] relative">
              <div className="bg-[#FFF9EB]  relative rounded-lg">
                <div className="br-img absolute bottom-0 right-0 z-[20] w-[60px] md:w-[68px] 2xl:w-[75px] ">
                  <img
                    className=" w-[60px] md:w-[68px] 2xl:w-[75px]"
                    src="/assets/gift-images/usp/usp-gift-box.svg"
                    alt="An escape room gift box containing engaging puzzles and clues, perfect for an immersive adventure experience."
                  ></img>
                </div>
                <div className="bg-or p-4 absolute z-[10] w-full h-full top-0 left-0 ">
                  <div className="border-dashed border-2 border-[#E2B846] relative w-full h-full">
                    <div className="gs-box-top-riboon absolute top-[-16px] left-0 right-0 mx-auto max-w-[92%]">
                      <img
                        className=""
                        src="/assets/gift-images/usp/usp-box-confetti-for-top-and-bottom.svg"
                        alt="A vibrant gift box overflowing with confetti, symbolizing the thrill of an escape room challenge."
                      ></img>
                    </div>
                    <div className="gs-box-bottom-riboon absolute bottom-[-16px] left-0 right-0 mx-auto max-w-[92%]">
                      <img
                        className=""
                        src="/assets/gift-images/usp/usp-box-confetti-for-top-and-bottom.svg"
                        alt="An escape room gift box containing engaging puzzles and clues, perfect for an immersive adventure experience."
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="gs-cintent relative z-[30] px-10 py-16">
                  <h3 className="text-[#CA9342] font-os font-bold text-[24px] md:text-[28px] xl:text-[32px] text-center">
                    MAKE MEMORIES, NOT ASSUMPTIONS
                  </h3>
                  <p className="text-[#4A2F03]  text-center mt-4">
                    Traditional gifts may assume preferences. Our Gift Cards
                    allow recipients to create lasting memories, making your
                    present stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-btn ss-btn flex justify-center mt-12 md:mt-16">
            <GiftGnBtn
              setShowGiftBookingList={
                props.setShowGiftBookingList
                  ? props.setShowGiftBookingList
                  : false
              }
              giftBooking={props.giftBooking ? props.giftBooking : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftSpotOn;
