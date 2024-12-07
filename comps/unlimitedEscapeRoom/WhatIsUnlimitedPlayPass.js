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

        <div className="uer-wt-box-con grid grid-cols-1 md:grid-cols-3">
          {/*=======================item 1============== */}

          <div className="uer-box-col border-t border-1 border-[#D8CDB7]">
            <div className="px-2 py-5 md:px-4 md:py-7 lg:px-6 lg:py-8 space-x-2 flex">
              <div className="ic mt-[6px]">
                <img
                  src={
                    "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                  }
                ></img>
              </div>
              <div className="text-[#374151] flex-1">
                Looking for endless fun and excitement? The Unlimited Play Pass
                is your ticket to a full year of unlimited adventures in our
                thrilling Mystery Room
              </div>
            </div>
          </div>
          {/*=======================item 2============== */}
          <div className="uer-box-col border-t border-1 border-[#D8CDB7]  md:border-x">
            <div className="px-2 py-5 md:px-4 md:py-7 lg:px-6 lg:py-8 flex space-x-2">
              <div className="ic mt-[6px]">
                <img
                  src={
                    "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                  }
                ></img>
              </div>
              <div className="text-[#374151] flex-1">
                For just $79, you can explore as many rooms as you want, as
                often as you want, at any All In Adventures location. It's the
                perfect way to challenge yourself, bond with friends and family,
                and create unforgettable memories—all year long.
              </div>
            </div>
          </div>
          {/*=======================item 3============== */}
          <div className="uer-box-col border-t border-1 border-[#D8CDB7]">
            <div className="px-2 py-5 md:px-4 md:py-7 lg:px-6 lg:py-8 space-x-2 flex">
              <div className="ic mt-[6px]">
                <img
                  src={
                    "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                  }
                ></img>
              </div>
              <div className="text-[#374151] flex-1">
                For just $79, you can explore as many rooms as you want, as
                often as you want, at any All In Adventures location. It's the
                perfect way to challenge yourself, bond with friends and family,
                and create unforgettable memories—all year long.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsUnlimitedPlayPass;
