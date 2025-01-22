import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";
import UerBtn from "./UerBtn";

const HowUnlimitedPlayPassWork = (props) => {
  return (
    <div className="uer-how bg-black py-16 md:py-20 lg:py-28 px-4 md:px-[28px]  lg:px-12  z-20 ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter
            title={"HOW OUR UNLIMITED PLAY PASS WORKS"}
          />
          <div className="mt-4 md:mt-6 text-[#e2e2e2] text-center lg:text-lg 3xl:text-xl">
            Buy now and enjoy your Unlimited Escape Room Play Pass in just 3
            steps!
          </div>
        </div>
        <div className="uer-how-conteiner mb-6 md:mb-8 flex flex-col lg:items-center lg:flex-row lg:space-x-6 2xl:space-x-12">
          <div className="uer-how-col lg:w-1/2">
            <img
              className="w-full"
              alt={"How unlimited play pass work"}
              src={
                "/assets/unlimited-escape-room/how-unlimited-escape-room-paly-pass-work.png"
              }
            ></img>
          </div>
          <div className="uer-how-col lg:w-1/2">
            <div className="uer-how-list-box mt-5 lg:mt-0 max-w-[576px]">
              <div className="uer-how-list-item mb-4 md:mb-6">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[27px] xl:text-[30px]">
                  Purchase Your Pass
                </h3>
                <p className="text-[#eeeeee] xl:text-lg lg:mt-1">
                  Choose your Day or Annual Pass and buy it online or in-store.
                </p>
              </div>
              <div className="uer-how-list-item mb-4 md:mb-6">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[27px] xl:text-[30px]">
                  Start Playing
                </h3>
                <p className="text-[#eeeeee] xl:text-lg  lg:mt-1">
                  Head to your chosen All In Adventures location and begin your
                  first thrilling escape room experience.
                </p>
              </div>
              <div className="uer-how-list-item mb-4 md:mb-6">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[27px] xl:text-[30px]">
                  Play Again and Again
                </h3>
                <p className="text-[#eeeeee] xl:text-lg lg:mt-1">
                  Keep coming back to enjoy unlimited escape games throughout
                  the day or year!
                </p>
              </div>
            </div>
            <div className="uer-how-btn mt-8">
              <UerBtn
                setShowUerBookingList={
                  props.setShowUerBookingList
                    ? props.setShowUerBookingList
                    : false
                }
              />
            </div>
          </div>
        </div>
        <div className="uer-how-note max-w-[1100px] mx-auto rounded-[16px] bg-[#0D0D0D] mt-8 md:mt-12 lg:mt-16">
          <h2 className="text-lg font-semibold text-[#D1B06F] px-2 py-3 md:pl-6 lg:pl-8 md:py-4">
            Important Notes to Remember:
          </h2>
          <div className="uer-wt-box-con grid grid-cols-1 md:grid-cols-3">
            {/*=======================item 1============== */}

            <div className="uer-box-col border-t border-1 border-[#1D1D1D]">
              <div className="px-2 py-5 md:px-5 md:py-6 lg:px-10 space-x-2 flex">
                <div className="ic mt-[6px]">
                  <img
                    src={
                      "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                    }
                  ></img>
                </div>
                <p className="text-[#A5A5A5] flex-1">
                  The Unlimited Play Pass is non-transferable and requires ID
                  verification for use.
                </p>
              </div>
            </div>
            {/*=======================item 2============== */}
            <div className="uer-box-col border-t border-1 border-[#1D1D1D] md:border-x">
              <div className="px-2 py-5 md:px-4 md:py-6 lg:px-10 flex space-x-2 ">
                <div className="ic mt-[6px]">
                  <img
                    src={
                      "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                    }
                  ></img>
                </div>
                <p className="text-[#A5A5A5] flex-1">
                  The Day Pass is valid for the purchase date only, while the
                  Annual Pass lasts until the end of the year.
                </p>
              </div>
            </div>
            {/*=======================item 3============== */}
            <div className="uer-box-col border-t border-1 border-[#1D1D1D]">
              <div className="px-2 py-5 md:px-4  md:py-6 lg:px-10 space-x-2 flex">
                <div className="ic mt-[6px]">
                  <img
                    src={
                      "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                    }
                  ></img>
                </div>
                <p className="text-[#A5A5A5] flex-1">
                  Your pass is valid at all 20 locations of All In Adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUnlimitedPlayPassWork;
