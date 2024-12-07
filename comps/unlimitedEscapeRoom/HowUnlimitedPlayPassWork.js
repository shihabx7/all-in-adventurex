import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";

const HowUnlimitedPlayPassWork = () => {
  return (
    <div className="uer-how bg-black py-16 md:py-20 lg:py-28 px-4 md:px-[28px]  lg:px-12  z-20 ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter
            title={"HOW OUR “UNLIMITED PLAY PASS” WORK"}
          />
          <div className="mt-4 md:mt-6 text-[#e2e2e2] text-center lg:text-lg 3xl:text-xl">
            Get your All In Adventures Gift Cards in 3 simple steps
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
              <div className="uer-how-list-item mb-4">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[27px] xl:text-[30px]">
                  Purchase Your Pass
                </h3>
                <p className="text-[#eeeeee] xl:text-lg lg:mt-1">
                  Secure your Unlimited Play Pass online or at any All In
                  Adventures location.
                </p>
              </div>
              <div className="uer-how-list-item my-4">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[27px] xl:text-[30px]">
                  Start Playing{" "}
                </h3>
                <p className="text-[#eeeeee] xl:text-lg  lg:mt-1">
                  Use your pass to book and enjoy any of our Mystery Rooms.
                  Simply present your pass and valid ID upon arrival.
                </p>
              </div>
              <div className="uer-how-list-item my-4">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[27px] xl:text-[30px]">
                  Play Again and Again
                </h3>
                <p className="text-[#eeeeee] xl:text-lg lg:mt-1">
                  There's no limit to how often you can play! Each visit brings
                  new challenges and fun experiences.
                </p>
              </div>
            </div>
            <div className="uer-how-btn mt-8">
              <button className=" px-5 rm:px-6 md:px-8 text-center border inline-block text-[15px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700">
                Get Your Unlimited Play Pass Today!
              </button>
            </div>
          </div>
        </div>
        <div className="uer-how-note max-w-[1110px] mx-auto rounded-[16px] bg-[#0D0D0D]">
          <h2 className="text-lg font-semibold text-[#D1B06F] px-2 py-3 md:pl-6 lg:pl-8 md:py-4">
            Important Notes:
          </h2>
          <div className="uer-wt-box-con grid grid-cols-1 md:grid-cols-3">
            {/*=======================item 1============== */}

            <div className="uer-box-col border-t border-1 border-[#1D1D1D]">
              <div className="px-2 py-5 md:px-4 md:py-6 lg:px-8 space-x-2 flex">
                <div className="ic mt-[6px]">
                  <img
                    src={
                      "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                    }
                  ></img>
                </div>
                <div className="text-[#A5A5A5] flex-1">
                  Pass is valid for one year from the date of purchase.
                </div>
              </div>
            </div>
            {/*=======================item 2============== */}
            <div className="uer-box-col border-t border-1 border-[#1D1D1D] md:border-x">
              <div className="px-2 py-5 md:px-4 md:py-6 lg:px-8 flex space-x-2 ">
                <div className="ic mt-[6px]">
                  <img
                    src={
                      "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                    }
                  ></img>
                </div>
                <div className="text-[#A5A5A5] flex-1">
                  Non-transferable and requires ID verification.
                </div>
              </div>
            </div>
            {/*=======================item 3============== */}
            <div className="uer-box-col border-t border-1 border-[#1D1D1D]">
              <div className="px-2 py-5 md:px-4 md:py-6 lg:px-8 space-x-2 flex">
                <div className="ic mt-[6px]">
                  <img
                    src={
                      "/assets/unlimited-escape-room/allinadventures-unlimitedescape-room-play-icon.svg"
                    }
                  ></img>
                </div>
                <div className="text-[#A5A5A5] flex-1">
                  If you'd like to use your pass at a different location,
                  contact our customer service team to assist with booking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUnlimitedPlayPassWork;
