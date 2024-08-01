import React from "react";
import Image from "next/image";
import TitleSeparator from "../util/TitleSeparator";
import Script from "next/script";

const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortname,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};
const bookGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.item },
  });
};
const bookEvent = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.item },
  });
};

function BookYourEvent3(props) {
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div
        id="eventbooking"
        className="book-your-event overflow-hidden  relative z-[30]  md:px-1 lg:px-0 bg-center bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat"
      >
        {/*======================= boder img============== */}

        <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
          <img
            className="w-full hidden md:block"
            src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
          ></img>
          <img
            className="w-full  md:hidden"
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
          ></img>
        </div>
        {/*======================= boder img end============== */}
        <div className="bbottom-left max-w-[66px] md:max-w-[140px] xl:max-w-[180px] absolute bottom-0 left-0 z-10">
          <img className="w-full" src="/assets/pl-bgi-2.png"></img>
        </div>
        <div className="bbottom-right max-w-[72px] md:max-w-[144px] xl:max-w-[180px]  absolute bottom-0 right-0 z-10">
          <img className="w-full" src="/assets/pl-bgi-4.png"></img>
        </div>
        <div className="max-w-7xl mx-auto relative pb-16 pt-12 md:pb-24 md:pt-28 lg:pb-28 lg:pt-28 xl:pb-32  px-4 xl:px-0 z-20">
          {/*===========section Title============= */}
          <div className="section-title  text-center max-w-[760px] mx-auto  mb-8 md:mb-14 lg:mb-16 xl:mb-16">
            <TitleSeparator
              title="BOOK YOUR EVENT"
              color="golden-text"
              weight="font-bold"
            />
            <p className="text-[#333333] md:text-lg mt-3 md:mt-3 xl:mt-4">
              Choose from the 3 distinct escape room party packages that cater
              to your preference and group size, and let the adventure begin.
            </p>
          </div>
          {/*===========section Title end============= */}
          {/*===========section Content============= */}
          <div className="book-event mt-16 sec-content grid md:grid-cols-3 lg:grid-cols-3 gap-x-0 gap-y-16 md:gap-x-4 md:gap-y-16 lg:gap-x-6 lg:gap-y-0">
            {props.escapeGamePartyList.map((party, index) => {
              return (
                <div className="book-event-box w-full" key={index}>
                  <div className="bk-wrapper h-full bg-[#FBF2DC] border border-[#D2C6AA] relative">
                    <div className="bk-option absolute bottom-[100%] left-0">
                      <span className="inline-block bg-[#D4B56A] px-3 py-1 text-[#111111] font-medium">
                        Option {index + 1}
                      </span>
                    </div>
                    <div className="bk-content h-full flex flex-col justify-between  ">
                      <div className="bk-box ">
                        <div className="bk-img">
                          <Image
                            className="w-full"
                            src={party.sliderImage.url}
                            alt="Party and escape room booking"
                            width={party.sliderImage.width}
                            height={party.sliderImage.height}
                          />
                        </div>

                        <div className="bk-text mt-3 mb-6 px-3 md:px-2 xl:px-3">
                          <h3 className="text-black text-2xl md:text-[20px] lg:text-[22px] xl:text-[24px] uppercase text-center font-bold">
                            {party.partyName}
                            <br /> Party Package
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: party.slideText,
                            }}
                            className="text-[#232323] text-[16px] md:text-[17px] xl:text-[18px] font-thin text-center mt-2"
                          ></div>
                        </div>
                      </div>
                      <div className="bk-btn text-center pb-5 md:pb-8 px-3 md:px-3 xl:px-5">
                        <button
                          onClick={() => {
                            bookEvent(party.bookingData);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white text-center font-medium
        py-4  rounded-full mx-auto text-[16px] lg:text-[14px] xl:text-[16px] w-full"
                        >
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="inq-box mt-10 md:mt-12 lg:mt-16">
            {/*===========box 4 ============= */}
            <div className="book-event-box ">
              <div className="bk-wrapper bg-trandparent md:bg-[#FBF2DC]  border border-[#D2C6AA] flex flex-col md:flex-row justify-between items-center">
                <div className="inq-txt px-4 w-full md:w-[60%] lg:w-[54%] bg-[#FBF2DC]  md:h-full order-2 md:order-1 flex justify-center items-center">
                  <div className="max-w-[600px] md:p-0 lg:p-8">
                    <div className="bk-content h-full flex flex-col justify-between ">
                      <div className="bk-box ">
                        <div className="bk-text mt-3 mb-6">
                          <h3 className="text-black text-2xl md:text-[20px] lg:text-[22px] xl:text-[24px]  font-bold text-center md:text-left">
                            FOR LARGE EVENT
                          </h3>
                          <p className="text-[#232323] text-[16px] md:text-[17px] xl:text-[18px] font-thin mt-2 text-center md:text-left">
                            If you're planning a large event with more guests
                            and want to combine the thrill of an escape room
                            with a fun party room, we can accommodate you! Just
                            submit your custom request through the form below,
                            and we'll provide a quote with bulk discounts.
                          </p>
                        </div>
                      </div>
                      <div className="bk-btn  pb-5 md:pb-0 text-center md:text-left">
                        <a
                          href="#eventform"
                          className="bg-red-600 hover:bg-red-700
                   text-white text-center font-medium
                    py-4  rounded-full mx-auto text-[16px] lg:text-[14px] xl:text-[16px] w-full inline-block md:max-w-[320px]"
                        >
                          SUBMIT INQUIRY
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bk-img w-full md:w-[40%] lg:w-[46%] order-1 md:order-2">
                  <Image
                    className="w-full"
                    src="/assets/events/all-in-adventures-book-your-event-option4.jpg"
                    alt="Large event booking"
                    width={885}
                    height={627}
                  />
                </div>
              </div>
            </div>
            {/*===========box 4 end ============= */}
          </div>
          {/*===========section Content End============= */}
        </div>
      </div>
    </>
  );
}

export default BookYourEvent3;
