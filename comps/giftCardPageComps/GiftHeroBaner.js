import React from "react";
import GiftHeroBtn from "./GiftHeroBtn";
import Script from "next/script";

import BanerBox from "./BanerBox";
const GiftHeroBaner = (props) => {
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div className="gift-hero bg-[#FFF9EB] relative overflow-hidden">
        {/* =======card border========  */}
        <div className="dec-content absolute p-3 md:p-4 lg:p-5 xl:p-6 3xl:p-8 z-[10] w-full h-full gift-hero-border ">
          <div className="border-2 border-dashed border-[#E2B846] w-full h-full"></div>
        </div>
        {/* =======card border end========  */}
        {/* =======card bg images========  */}
        <div className="gft-bg-decor absolute w-full h-full z-20">
          <div className="decor-inner w-full h-full relative z-20">
            <img
              className="tl-ribbon absolute top-[-10px] left-[-10px] md:top-[-20px] md:left-[-20px] lg:top-[-20px] lg:left-[-20px] xl:top-[-20px] xl:left-[-20px] 2xl:top-[-20px] 2xl:left-[-20px] max-w-[100px] md:max-w-[140px] lg:max-w-[140px] xl:max-w-[148px] 2xl:max-w-[176px]] 3xl:max-w-[200px]  z-20"
              src="/assets/gift-images/hero/Gift-Ribbon-Left-Side.png"
              alt="An exquisite gift ribbon with a lustrous sheen, artfully arranged to enhance the presentation of any present."
            ></img>
            <img
              className="tl-ribbon absolute top-[100px] md:top-[120px] left-[20px] max-w-[40px] md:max-w-[70px] lg:max-w-[100px] xl:max-w-[110px] 2xl:max-w-[150px] 3xl:max-w-[200px] z-20"
              src="/assets/gift-images/hero/Color-Confetti-1-Left-Side.svg"
              alt="Colorful confetti scattered across a vibrant background, symbolizing celebration and joy in a gift-themed design."
            ></img>
            <img
              className="md:hidden tl-ribbon absolute top-[20px] md:top-[140px] right-[20px] max-w-[40px] md:max-w-[200px] z-20"
              src="/assets/gift-images/hero/Color-Confetti-1-Left-Side.svg"
              alt="Colorful confetti scattered across a vibrant background, symbolizing celebration and joy in a gift-themed design."
            ></img>
            <img
              className="tl-ribbon absolute bottom-[66%] md:bottom-[30px] lg:bottom-[32px] xl:bottom-[40px] 2xl:bottom-[92px] 3xl:bottom-[110px] left-[4%] lg:left-[3%]  xl:left-[2.1%] 2xl:left-[2.3%] 3xl:left-[6%]  z-20 max-w-[32px] lg:max-w-[42px] xl:max-w-[46px] 2xl:max-w-[50px] 3xl:max-w-[56px]"
              src="/assets/gift-images/hero/Star-1.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden xl:block tl-ribbon absolute bottom-[44%] xl:left-[1.5%] 2xl:left-[5%] 3xl:left-[12%]  z-20 xl:max-w-[32px] 2xl:max-w-[40px] 3xl:max-w-[50px]"
              src="/assets/gift-images/hero/Star-3.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute top-[40%] left-[5%] lg:left-[1.8%] xl:top-[28%] xl:left-[2%] 2xl:left-[3%] 3xl:left-[8%]  z-20 max-w-[26px] lg:max-w-[28px] xl:max-w-[30px] 2xl:max-w-[36px] 3xl:max-w-[40px]"
              src="/assets/gift-images/hero/Star-2.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute bottom-[66px] left-[52%] lg:bottom-[58px] lg:left-[46%] xl:bottom-[48px] xl:left-[44%] 2xl:bottom-[52px] 2xl:left-[44%] 3xl:bottom-[60px] 3xl:left-[46%]  z-20 max-w-[36px] lg:max-w-[42px] xl:max-w-[46px] 2xl:max-w-[50px] 3xl:max-w-[56px]"
              src="/assets/gift-images/hero/Star-1.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute top-[3%] left-[58%] md:top-[6%] md:left-[40%] xl:top-[6%] xl:left-[50%] 2xl:top-[8%] 2xl:left-[52%] 3xl:top-[10%] 3xl:left-[54%]  z-20 max-w-[28px] xl:max-w-[36px] 2xl:max-w-[40px] 3xl:max-w-[50px]"
              src="/assets/gift-images/hero/Star-3.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden 3xl:block tl-ribbon absolute top-[40%] left-[40%]  z-20 max-w-[140px]"
              src="/assets/gift-images/hero/Color-Confetti-2-middle.svg"
              alt="Colorful confetti scattered across a vibrant background, symbolizing celebration and joy in a gift-themed design."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute top-[10%] right-[36%] lg:top-[14%] lg:right-[30%] xl:top-[16%] xl:right-[30%] 3xl:top-[20%] 3xl:right-[28%]  z-20 max-w-[26px] lg:max-w-[28px] xl:max-w-[30px] 2xl:max-w-[36px] 3xl:max-w-[40px]"
              src="/assets/gift-images/hero/Star-2.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute bottom-[16%] right-[14%] lg:bottom-[10%] xl:bottom-[8%]   xl:right-[16%] 2xl:bottom-[6%] 2xl:right-[14%] 3xl:bottom-[8%] 3xl:right-[14%]  z-20 max-w-[26px] lg:max-w-[28px] xl:max-w-[30px] 2xl:max-w-[36px] 3xl:max-w-[40px]"
              src="/assets/gift-images/hero/Star-2.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden md:block  tl-ribbon absolute bottom-[30%] right-[6%] lg:bottom-[58%] lg:right-[3%] xl:bottom-[50%] xl:right-[3%] 2xl:bottom-[40%] 2xl:right-[4%]  z-20 max-w-[28px] xl:max-w-[36px] 2xl:max-w-[40px] 3xl:max-w-[50px]"
              src="/assets/gift-images/hero/Star-3.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute top-[12%] right-[16%] lg:top-[22%] lg:right-[16%] xl:top-[20%] xl:right-[16%] 3xl:top-[24%] 3xl:right-[16%]  z-20 max-w-[36px] xl:max-w-[40px] 2xl:max-w-[48px]"
              src="/assets/gift-images/hero/Star-4.png"
              alt="A star icon representing a gift, symbolizing joy and celebration in a vibrant design."
            ></img>
            <img
              className="tl-ribbon absolute bottom-[8px] right-[4px] md:bottom-[28px] md:right-[20px]  z-20 max-w-[80px] md:max-w-[100px] lg:max-w-[110px] xl:max-w-[120px]  3xl:max-w-[136px]"
              src="/assets/gift-images/hero/Gift-Box-Right-Corner.png"
              alt="A charming gift box with a decorative exterior, suitable for celebrating birthdays, holidays, or other memorable events."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute top-[-24px] lg:top-[-20px] xl:top-[-28px] 3xl:top-[-34px] right-[6%] xl:right-[4%]  z-20 max-w-[48px] xl:max-w-[54px] 3xl:max-w-[70px]"
              src="/assets/gift-images/hero/Big-Ribbon-left-side-top-corner.svg"
              alt="An eye-catching gift wrapped in vibrant paper, topped with a big, decorative ribbon, perfect for special occasions."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute rotate-[-45deg] md:top-[-6px] md:right-[22%] lg:top-[-6px] lg:right-[22%] 3xl:top-[-8px] 3xl:right-[20%] max-w-[42px] lg:max-w-[48px] z-20 3xl:max-w-[60px]"
              src="/assets/gift-images/hero/Small-Ribbon-left-and-top-side.svg"
              alt="An eye-catching gift wrapped in vibrant paper, topped with a big, decorative ribbon, perfect for special occasions."
            ></img>
            <img
              className="hidden md:block tl-ribbon absolute rotate-[-45deg] top-[50%] right-[-18px] lg:right-[-16px] xl:right-[-20px] 3xl:right-[-22px]  z-20 max-w-[36px] xl:max-w-[42px] 3xl:max-w-[50px]"
              src="/assets/gift-images/hero/Small-Ribbon-left-and-top-side.svg"
              alt="An eye-catching gift wrapped in vibrant paper, topped with a big, decorative ribbon, perfect for special occasions."
            ></img>
            <img
              className="md:hidden tl-ribbon absolute bottom-[24px] left-[0px] right-[0px]  z-20 max-w-[300px] mx-auto"
              src="/assets/gift-images/hero/Color-Confetti-3-mobile.svg"
              alt="Colorful confetti scattered on a surface, creating a festive and vibrant atmosphere for celebrations and gifts."
            ></img>
            <img
              className=" md:hidden tl-ribbon absolute bottom-[24px] left-[20px]  z-20 max-w-[44px]"
              src="/assets/gift-images/hero/Small-Ribbon-left-and-top-side.svg"
              alt="An eye-catching gift wrapped in vibrant paper, topped with a big, decorative ribbon, perfect for special occasions."
            ></img>
          </div>
        </div>
        {/* =======card bg images end========  */}
        {/* =======card content container========  */}
        <div className="gift-hero-container-wrapper  relative z-[20]">
          <div className="max-w-7xl pt-10 pb-[180px] md:pt-24 md:pb-[220px]  xl:pt-26 lg:pb-[230px]  3xl:pt-28 3xl:pb-[264px] mx-auto px-8 lg:px-12 ">
            <div className="gh-content flex flex-col lg:flex-row justify-between items-center">
              {/* =======card content text========  */}

              <div className="w-full order-2 lg:order-1 md:ml-8 lg:ml-0 lg:max-w-[52%] xl:max-w-[46%] gift-title">
                <div className="gift-baner-content">
                  <div className="max-w-[460px] lg:max-w-[500px]">
                    <h1 className="text-[#4A2F03] text-[14px] rm:text-[16px] md:text-[24px] 2xl:text-[28px] uppercase font-semibold">
                      ESCAPE ROOM GIFT CARDS
                    </h1>
                    <h2 className="text-[36px] md:text-[42px] lg:text-[46px] xl:text-[54px] 3xl:text-[60px] leading-[1.2] text-[#CA9342] font-os font-bold">
                      <span>GIVE THE GIFT OF ADVENTURE</span>
                      <span className="ml-[12px]">
                        <img
                          className="w-[32px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px] inline-block align-middle mt-[-12px]"
                          src="/assets/gift-images/hero/gift-card-icon-for-title.svg"
                          alt=" All in Adventures gift card icon showcasing a vibrant design, symbolizing adventure and excitement in gift-giving."
                        ></img>
                      </span>
                    </h2>
                  </div>
                  {/* =======card content List========  */}
                  <div className="gift-hero-list-box mt-4 lg:mt-6">
                    <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                      <img
                        className="w-[26px] xl:w-[30px]"
                        src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                        alt=" All in Adventures gift card icon showcasing a vibrant design, symbolizing adventure and excitement in gift-giving."></img>

                      <p className="text-[#2E2E2E] xl:text-[18px]">
                        Unforgettable experiences that last a lifetime
                      </p>
                    </div>
                    <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                      <img
                        className="w-[26px] xl:w-[30px]"
                        src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                        alt=" All in Adventures gift card icon showcasing a vibrant design, symbolizing adventure and excitement in gift-giving."
                      ></img>
                      <p className="text-[#2E2E2E]  xl:text-[18px]">Exciting adventures for family, friends, couples, and co-workers</p>
                    </div>
                    <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                      <img
                        className="w-[26px] xl:w-[30px]"
                        src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                        alt=" All in Adventures gift card icon showcasing a vibrant design, symbolizing adventure and excitement in gift-giving."
                      ></img>
                      <p className="text-[#2E2E2E]  xl:text-[18px]">
                        Perfect for all ages (6+) and skill levels—great for any occasion</p>
                    </div>
                    <div className="gh-item flex justify-start space-x-2 items-start md:items-center my-3">
                      <img
                        className="w-[26px] xl:w-[30px]"
                        src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                        alt=" All in Adventures gift card icon showcasing a vibrant design, symbolizing adventure and excitement in gift-giving."
                      ></img>
                      <p className="text-[#2E2E2E]  xl:text-[18px]">
                        Redeem anytime, anywhere—it NEVER expires
                      </p>
                    </div>
                  </div>
                  {/* =======card content List end========  */}
                  {/* =======card content btn========  */}
                  <div className="mt-9 md:mt-10">
                    <GiftHeroBtn
                      setShowGiftBookingList={
                        props.setShowGiftBookingList
                          ? props.setShowGiftBookingList
                          : false
                      }
                      giftBooking={
                        props.giftBooking ? props.giftBooking : false
                      }
                    />
                  </div>
                </div>
              </div>
              {/* =======card content images========  */}
              <div className="w-full order-1 lg:order-2 lg:max-w-[48%] xl:max-w-[54%] gift-img">
                <img
                  alt="A dynamic gift card illustration that embodies adventure, suitable for those seeking unique outdoor experiences."
                  src="/assets/gift-images/hero/All-In-Adventures-Gift-Card-hero.png"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* =======card content container end========  */}

      </div>
      <BanerBox />
    </>
  );
};

export default GiftHeroBaner;
