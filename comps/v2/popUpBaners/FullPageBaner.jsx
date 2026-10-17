import { FiX } from "react-icons/fi";
import Script from "next/script";
import EscapeGameAutoSlider from "./EscapeGameAutoSlider";

export default function FullPageBaner(props) {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    props.setShowPopup(false);
  };
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: "items",
    });
  };

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />

      <div className="full-page-baner top-0 left-0 bg-[#111111]/80 fixed w-full h-screen  overflow-x-hidden overflow-y-auto z-[20000]">
        <div className="baner-content-wrapper w-full h-full flex flex-col justify-center items-center ">
          {/*============================================== baner content ====================  */}
          <div className="baner-container w-full max-w-[480px] md:max-w-max md:w-[740px] lg:w-[920px] px-2 zm:px-4 relative">
            {/*============================================= close btn ==================== */}
            <button
              onClick={closelocmenu}
              className="close-btn absolute top-1 right-3 sm:right-5  text-gray-400 text-xl md:text-2xl lg:text-3xl z-40"
            >
              <span className="inline-block p-1 border bg-[#090909] border-gold text-white rounded-full cursor-pointer hover:border-light-gold hover:text-red-700">
                <FiX />
              </span>
            </button>
            <div className="w-full bg-gradient-to-b from-[#3A2507] via-[#140D04] to-[#050404] rounded-2xl border border-[#D4B56A73]/50">
              <div className="baner-logo  md:hidden flex justify-center items-center pt-5">
                <img
                  className="w-24 md:w-28 mb-4"
                  src="/assets/svg/All-In-Adventures-Logo.svg"
                  alt="All-In Adventures Escape Room logo showcasing an engaging and adventurous theme, perfect for escape room enthusiasts."
                />
              </div>
              {/**============================================== baner slider ====================  */}
              <div className="baner-slider-box py-3 md:py-5 px-2 sm:px-3 lg:px-4 bg-[#0B0702] sm:rounded-t-2xl min-h-40">
                <EscapeGameAutoSlider
                  escapeGameList={
                    props.escapeGameListSectionData.escapeGameList
                  }
                />
              </div>
              {/**============================================== baner offer content ====================  */}
              <div className="w-full baner-content-text flex flex-col md:flex-row justify-between items-center py-6 px-2 xm:px-3 md:py-8 md:px-5  lg:p-10 min-h-80">
                <div className="baner-content-text-left w-full md:w-1/2 text-center sm:text-left ">
                  <div className="baner-logo hidden md:block">
                    <img
                      className="w-24 md:w-28 mb-4"
                      src="/assets/svg/All-In-Adventures-Logo.svg"
                      alt="All-In Adventures Escape Room logo showcasing an engaging and adventurous theme, perfect for escape room enthusiasts."
                    />
                  </div>
                  <p className="font-os text-sm zm:text-base md:text-lg text-[#DC2626] font-semibold">
                    NEW GROUP PRICING
                  </p>
                  <h2 className="font-os text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1]  text-gold font-bold my-3 max-w-[300px] mx-auto sm:max-w-max">
                    BIGGER GROUP. BIGGER SAVINGS.
                  </h2>
                  <p className=" text-sm zm:text-base md:text-lg text-[#D9D9D9] max-w-[300px] mx-auto sm:mx-0 sm:max-w-[360px]">
                    New lower group rates in{" "}
                    <span className="text-gold">{props.locationName}!</span>
                  </p>
                  <p className=" text-sm zm:text-base md:text-lg text-[#D9D9D9] max-w-[300px] mx-auto sm:mx-0 sm:max-w-[360px]">
                    Bring 4+ and save even more.
                  </p>
                </div>
                <div className="baner-content-text-right w-full md:w-1/2 mt-8 sm:mt-0">
                  <div className="offer-price-row grid grid-cols-2 gap-2 xm:gap-3 lg:gap-4">
                    <div className="regular-price-box h-full bg-[#1A1200]/85 px-4 py-6 text-center border border-[#D4B56A]/25 rounded-xl relative">
                      <div className="inline-block max-w-[66%] bg-red-600 text-white text-[.87rem] leading-[1] px-4 py-1.5 rounded-full absolute top-[-14px] left-0 right-0 mx-auto">
                        {props.popupBanerInfo.regularPrice.ribbonText}
                      </div>
                      <div className="inline-block max-w-[54%] h-[1.5px] bg-white -rotate-12 absolute top-[-3px]  left-0 right-0 mx-auto z-20 "></div>
                      <p className="text-sm text-[#ADADAD]">
                        {props.popupBanerInfo.regularPrice.guests} GUESTS
                      </p>
                      <p className=" text-[1.5rem] lg:text-[1.75rem] font-bold text-[#F0F0F0] font-os">
                        $
                        <span className="text-[2.5rem] lg:text-[3rem] ">
                          {props.popupBanerInfo.regularPrice.perPersonPrice}
                        </span>
                      </p>
                      <p className="text-sm text-[#ADADAD]">per person</p>
                    </div>
                    <div className="offer-price-box h-full bg-gradient-to-b from-[#4A3210] to-[#1A1200] px-4 py-6 text-center border-2 border-[#D4B56A]  rounded-xl relative">
                      <div className="inline-block max-w-[88%] sm:max-w-[82%] bg-red-600 text-white text-[.7rem] lm:text-xs px-2 xm:px-3 py-1.5 rounded-full absolute top-[-15px] left-0 right-0 mx-auto">
                        {props.popupBanerInfo.offerPrice.ribbonText}
                      </div>
                      <p className="text-sm text-[#E0BF62]">
                        {props.popupBanerInfo.offerPrice.guests} GUESTS
                      </p>
                      <p className="text-[1.5rem] lg:text-[1.75rem] font-bold text-[#E0BF62] font-os">
                        $
                        <span className="text-[2.5rem] lg:text-[3rem]">
                          {props.popupBanerInfo.offerPrice.perPersonPrice}
                        </span>
                      </p>
                      <p className="text-sm text-[#D9D9D9]">per person</p>
                    </div>
                  </div>
                  <div className="offer-booking-btn mt-6">
                    <button
                      onClick={() => bookAll(props.allBooking)}
                      className="block w-full py-2 md:py-2.5 rounded-full text-center text-white font-medium border border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-sm rm:text-base md:text-lg"
                    >
                      BOOK YOUR GAMES
                    </button>
                    <div className="text-center text-[#808080] text-xs md:text-sm mt-5">
                      <p className="mb-3">Maybe later </p>
                      <p>
                        Prices are per person and apply to bookings at{" "}
                        {props.locationName}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
