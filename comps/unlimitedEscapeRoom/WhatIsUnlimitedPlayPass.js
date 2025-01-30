import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const WhatIsUnlimitedPlayPass = (props) => {
  return (
    <div className="mer-event-section relative  py-16 md:py-24 lg:py-28 3xl:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat">
      {/*======================= boder img============== */}
      <SectionBorderTop />
      <SectionBorderBottom />
      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto ">
          <MobileTitleSeparatorCenter
            title={"WHAT IS THE UNLIMITED PLAY PASS?"}
          />
        </div>

        <div className="uer-wt-box-con grid justify-items-center grid-cols-1 gap-y-7 md:grid-cols-3 md:gap-4 xl:gap-8">
          {/*=======================item 1============== */}

          <div className="max-w-[370px] md:max-w-max  uer-box-col  border-dashed border-2 border-[#e2b846] rounded-lg relative">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between ">
              <div className="top-bg">
                <img
                  className="w-full"
                  src="/assets/unlimited-escape-room/icon/all-in-adventuers-escape-room-unlimited-play-pass-top-bg-com.svg"
                ></img>
              </div>
              <div className="bottom-bg">
                <img
                  className="w-full"
                  src="/assets/unlimited-escape-room/icon/all-in-adventuers-escape-room-unlimited-play-pass-bottom-bg-com.svg"
                ></img>
              </div>
            </div>
            {/*  <div className="absolute right-[-20px] bottom-[-16px] z-10">
              <img
                className="w-full md:max-w-[56px] lg:max-w-[64px] xl:max-w-[76px]"
                src="/assets/unlimited-escape-room/all-in-adventuers-escape-room-unlimited-play-pass-card.png"
              ></img>
            </div>*/}
            <div className=" py-5 px-3 rm:px-5 rm:py-8 md:px-6 md:py-7 xl:px-10 xl:py-10 relative z-20">
              <div className="ic flex justify-center">
                <img
                  src={
                    "/assets/unlimited-escape-room/icon/escape-room-puzzle.svg"
                  }
                ></img>
              </div>
              <p className="text-[#374151] mt-6 text-center text-[15px] lg:text-base">
                The Unlimited Play Pass is your ticket to nonstop escape room
                fun. Play as many Escape Rooms as you want for one unbeatable
                price. Perfect for adventurers who love puzzles, challenges, and
                unforgettable fun!
              </p>
            </div>
          </div>
          {/*=======================item 2============== */}
          <div className="max-w-[370px] md:max-w-max uer-box-col  border-dashed border-2 border-[#e2b846] rounded-lg relative">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between">
              <div className="top-bg">
                <img
                  className="w-full"
                  src="/assets/unlimited-escape-room/icon/all-in-adventuers-escape-room-unlimited-play-pass-top-bg-com.svg"
                ></img>
              </div>
              <div className="bottom-bg">
                <img
                  className="w-full"
                  src="/assets/unlimited-escape-room/icon/all-in-adventuers-escape-room-unlimited-play-pass-bottom-bg-com.svg"
                ></img>
              </div>
            </div>
            {/*
            <div className="absolute right-[-20px] bottom-[-16px] z-10">
              <img
                className="w-full max-w-[76px]"
                src="/assets/unlimited-escape-room/all-in-adventuers-escape-room-unlimited-play-pass-card.png"
              ></img>
            </div>
            */}
            <div className="py-5 px-3 rm:px-5 rm:py-8 md:px-6 md:py-7 xl:px-10 xl:py-10 relative z-20">
              <div className="ic flex justify-center">
                <img
                  src={
                    "/assets/unlimited-escape-room/icon/escape-room-discount-coupon.svg"
                  }
                ></img>
              </div>
              <p className="text-[#374151] mt-4 text-center text-[15px] lg:text-base">
                Experience unlimited Escape Room adventures for a single day.
                Dive into as many exciting rooms as you can handle for just $50.
                It's the perfect choice for spontaneous fun and memorable day
                trips!
              </p>
            </div>
          </div>
          {/*=======================item 3============== */}
          <div className="max-w-[370px] md:max-w-max uer-box-col  border-dashed border-2 border-[#e2b846] rounded-lg relative">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between  ">
              <div className="top-bg">
                <img
                  className="w-full"
                  src="/assets/unlimited-escape-room/icon/all-in-adventuers-escape-room-unlimited-play-pass-top-bg-com.svg"
                ></img>
              </div>
              <div className="bottom-bg">
                <img
                  className="w-full"
                  src="/assets/unlimited-escape-room/icon/all-in-adventuers-escape-room-unlimited-play-pass-bottom-bg-com.svg"
                ></img>
              </div>
            </div>
            {/*   <div className="absolute right-[-20px] bottom-[-16px] z-10">
              <img
                className="w-full max-w-[76px]"
                src="/assets/unlimited-escape-room/all-in-adventuers-escape-room-unlimited-play-pass-card.png"
              ></img>
            </div>*/}
            <div className="px-3 py-5 rm:px-5 rm:py-8 md:px-6 md:py-7 xl:px-10 xl:py-10 relative z-20">
              <div className="ic flex justify-center">
                <img
                  src={
                    "/assets/unlimited-escape-room/icon/escape-room-play-pass.svg"
                  }
                ></img>
              </div>
              <p className="text-[#374151] mt-4 text-center text-[15px] lg:text-base">
                Unlock unlimited Escape Room fun for a whole year! At only $79,
                you can enjoy endless adventures, test your skills, and make
                memories all year long. Great for true escape room enthusiasts!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsUnlimitedPlayPass;
