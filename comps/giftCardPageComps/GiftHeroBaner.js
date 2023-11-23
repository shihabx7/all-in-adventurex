import React from "react";
import GiftHeroBtn from "./GiftHeroBtn";
const GiftHeroBaner = (props) => {
  return (
    <div className="gift-hero bg-[#FFF9EB] relative overflow-hidden">
      {/* =======card border========  */}
      <div className="dec-content absolute p-3 md:p-6 lg:p-8 z-[10] w-full h-full gift-hero-border ">
        <div className="border-2 border-dashed border-[#E2B846] w-full h-full"></div>
      </div>
      {/* =======card bg images========  */}
      <div className="gft-bg-decor absolute w-full h-full z-20">
        <div className="decor-inner w-full h-full relative z-20">
          <img
            className="tl-ribbon absolute top-[-10px] left-[-10px] max-w-[100px] md:max-w-[180px] lg:max-w-[200px]  z-20"
            src="/assets/gift-images/hero/Gift-Ribbon-Left-Side.png"
          ></img>
          <img
            className="tl-ribbon absolute top-[100px] md:top-[140px] left-[20px] max-w-[70px] md:max-w-[200px] z-20"
            src="/assets/gift-images/hero/Color-Confetti-1-Left-Side.svg"
          ></img>
          <img
            className="md:hidden tl-ribbon absolute top-[20px] md:top-[140px] right-[20px] max-w-[70px] md:max-w-[200px] z-20"
            src="/assets/gift-images/hero/Color-Confetti-1-Left-Side.svg"
          ></img>
          <img
            className="tl-ribbon absolute bottom-[66%] md:bottom-[120px] left-[6%]  z-20 max-w-[40px] md:max-w-[56px]"
            src="/assets/gift-images/hero/Star-1.png"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute bottom-[44%] left-[10%]  z-20 max-w-[52px]"
            src="/assets/gift-images/hero/Star-3.png"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute top-[28%] left-[8%]  z-20 max-w-[40px]"
            src="/assets/gift-images/hero/Star-2.png"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute bottom-[60px] left-[46%]  z-20 max-w-[50px]"
            src="/assets/gift-images/hero/Star-1.png"
          ></img>
          <img
            className="tl-ribbon absolute top-[3%] left-[58%] md:top-[10%] md:left-[54%]  z-20 max-w-[36px] md:max-w-[52px]"
            src="/assets/gift-images/hero/Star-3.png"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute top-[40%] left-[44%]  z-20 max-w-[140px]"
            src="/assets/gift-images/hero/Color-Confetti-2-middle.svg"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute top-[20%] right-[28%]  z-20 max-w-[40px]"
            src="/assets/gift-images/hero/Star-2.png"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute bottom-[8%] right-[14%]  z-20 max-w-[40px]"
            src="/assets/gift-images/hero/Star-2.png"
          ></img>
          <img
            className="hidden md:block  tl-ribbon absolute bottom-[40%] right-[4%]  z-20 max-w-[48px]"
            src="/assets/gift-images/hero/Star-3.png"
          ></img>
          <img
            className="tl-ribbon absolute top-[24%] right-[16%]  z-20 max-w-[48px]"
            src="/assets/gift-images/hero/Star-4.png"
          ></img>
          <img
            className="tl-ribbon absolute bottom-[8px] right-[4px] md:bottom-[28px] md:right-[20px]  z-20 max-w-[80px] md:max-w-[140px]"
            src="/assets/gift-images/hero/Gift-Box-Right-Corner.png"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute top-[0px] right-[4%]  z-20 max-w-[70px]"
            src="/assets/gift-images/hero/Big-Ribbon-left-side-top-corner.svg"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute top-[-4px] right-[20%]  z-20 max-w-[60px]"
            src="/assets/gift-images/hero/Small-Ribbon-left-and-top-side.svg"
          ></img>
          <img
            className="hidden md:block tl-ribbon absolute top-[50%] right-[-20px]  z-20 max-w-[60px]"
            src="/assets/gift-images/hero/Small-Ribbon-left-and-top-side.svg"
          ></img>
          <img
            className="md:hidden tl-ribbon absolute bottom-[24px] left-[0px] right-[0px]  z-20 max-w-[300px] mx-auto"
            src="/assets/gift-images/hero/Color-Confetti-3-mobile.svg"
          ></img>
          <img
            className=" md:hidden tl-ribbon absolute bottom-[24px] left-[20px]  z-20 max-w-[44px]"
            src="/assets/gift-images/hero/Small-Ribbon-left-and-top-side.svg"
          ></img>
        </div>
      </div>
      {/* =======card content container========  */}
      <div className="gift-hero-container-wrapper  relative z-[50]">
        <div className="max-w-7xl py-20 md:py-28 mx-auto px-8  md:px-16">
          <div className="gh-content flex flex-col lg:flex-row justify-between items-center">
            {/* =======card content text========  */}

            <div className="w-full order-2 lg:order-1 lg:max-w-[48%] gift-title">
              <div className="max-w-[500px]">
                <p className="text-[#4A2F03] font-medium md:text-[24px] xl:text-[28px]">
                  ESCAPE ROOM GIFT CARDS
                </p>
                <h1 className="text-[40px] md:text-[42px] lg:text-[52px] xl:text-[60px] leading-[1.2] text-[#CA9342] font-os font-bold">
                  <span>IT'S THE SEASON OF GIVING</span>
                  <span className="ml-[12px]">
                    <img
                      className="w-[52px] h-[52px] inline-block align-middle mt-[-12px]"
                      src="/assets/gift-images/hero/gift-card-icon-for-title.svg"
                    ></img>
                  </span>
                </h1>
                {/* =======card content List========  */}
                <div className="gift-hero-list-box mt-8">
                  <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      Unforgettable gifts that create memorable experiences
                    </p>
                  </div>
                  <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      Unlock collective joy for both families and co-workers
                    </p>
                  </div>
                  <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      All In Adventures Gift Cards NEVER expire
                    </p>
                  </div>
                  <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      Perfect for all ages (6+) and skill levels
                    </p>
                  </div>
                </div>
                <div className="mt-12">
                  <GiftHeroBtn
                    setShowGiftBookingList={
                      props.setShowGiftBookingList
                        ? props.setShowGiftBookingList
                        : false
                    }
                    bookingData={props.bookingData ? props.bookingData : false}
                  />
                </div>
              </div>
            </div>
            {/* =======card content images========  */}
            <div className="w-full order-1 lg:order-2 lg:max-w-[48%] gift-img">
              <img src="/assets/gift-images/hero/All-In-Adventures-Gift-Card-hero.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftHeroBaner;
