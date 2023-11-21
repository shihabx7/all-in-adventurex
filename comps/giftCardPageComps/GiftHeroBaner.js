import React from "react";
import GiftHeroBtn from "./GiftHeroBtn";
const GiftHeroBaner = (props) => {
  return (
    <div className="gift-hero bg-[#FFF9EB] relative">
      <div className="dec-content absolute p-8 z-[10] w-full h-full gift-hero-border ">
        <div className="border-2 border-dashed border-[#E2B846] w-full h-full"></div>
      </div>
      <div className="gift-hero-container-wrapper  relative z-[50]">
        <div className="max-w-7xl py-16 mx-auto  md:px-4">
          <div className="gh-content flex justify-between items-center">
            <div className="lg:max-w-[48%] gift-title">
              <div className="max-w-[500px]">
                <p className="text-[#4A2F03] text-[28px]">
                  ESCAPE ROOM GIFT CARDS
                </p>
                <h1 className="text-[60px] leading-[1.2] text-[#CA9342] font-os font-bold">
                  <span>'TIS THE SEASON OF GIVING</span>
                  <span className="ml-[12px]">
                    <img
                      className="w-[52px] h-[52px] inline-block align-middle mt-[-12px]"
                      src="/assets/gift-images/hero/gift-card-icon-for-title.svg"
                    ></img>
                  </span>
                </h1>
                <div className="gift-hero-list-box mt-8">
                  <div className="gh-item flex justify-start space-x-2 items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      Unforgettable gifts that create memorable experiences
                    </p>
                  </div>
                  <div className="gh-item flex justify-start space-x-2 items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      Unlock collective joy for both families and co-workers
                    </p>
                  </div>
                  <div className="gh-item flex justify-start space-x-2 items-center my-3">
                    <img
                      className="w-[30px]"
                      src="/assets/gift-images/hero/gift-icon-for-hero-point-text.svg"
                    ></img>
                    <p className="text-[#2E2E2E] text-[18px]">
                      All In Adventures Gift Cards NEVER expire
                    </p>
                  </div>
                  <div className="gh-item flex justify-start space-x-2 items-center my-3">
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
                  <GiftHeroBtn />
                </div>
              </div>
            </div>
            <div className="lg:max-w-[48%] gift-img">
              <img src="/assets/gift-images/hero/All-In-Adventures-Gift-Card-hero.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftHeroBaner;
