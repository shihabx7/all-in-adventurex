import MobileTitleSeparatorLeft from "./MobileTitleSeparatorLeft";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { useEffect, useState } from "react";
const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const MobileEscapeGameRootHomeSection = (props) => {
  const iconList = [
    {
      id: 1,
      text: "Kid and family-friendly experience, perfect for all ages",
    },
    {
      id: 2,
      text: "Great for team-building, parties and special events",
    },
    {
      id: 3,
      text: "Experience anywhere—office, classroom, church or indoor/outdoor",
    },
    {
      id: 4,
      text: "No transportation hassle, no logistical challenges",
    },
    {
      id: 5,
      text: "No waiver signs are required for kids",
    },
  ];
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    props.setGoMobileEecapeForm(false);
    props.setShowMobileEecapeMenu(true);
  };
  const showLocatioForm = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    props.setGoMobileEecapeForm(true);
    props.setShowMobileEecapeMenu(true);
  };
  return (
    <>
      <div className="mbl-h mbe-root">
        <div className="mbl-h-container max-w-7xl mx-auto py-16 md:py-28 2xl:py-32 px-4 md:px-4 lg:px-4">
          <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center md:px-8 lg:px-0">
            <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
              {/* ==================section title=====================*/}
              <div className="section-title-container">
                <div className="md:max-w-[76%] lg:max-w-[100%]">
                  <MobileTitleSeparatorLeft
                    title={"EXPERIENCE OUR MOBILE ESCAPE ROOMS"}
                    label={"NEW"}
                    fontRM="3xl"
                  />
                </div>

                <div className="text-slate-100 md:text-lg mt-6">
                  <p>
                    Looking for a fun, hassle-free way to level up your next
                    event? Bring the adventure to you with our one-of-a-kind
                    mobile escape room experience! Whether it's a school event,
                    team-building day, church gathering, or private party, we
                    deliver the thrill, puzzles, and excitement right to your
                    location. No setup is needed—just step inside and let the
                    fun begin!
                  </p>
                </div>
              </div>
              {/* ==================icon list=====================*/}
              <div className="text-slate-100 mbl-h-list mt-6 ml-1 md:ml-4">
                {iconList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="icon-row flex space-x-2 md:spaxe-x-3 my-3 2xl:my-3 w-full"
                    >
                      <span className="mt-[5px] md:mt-[5px] w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#CA9342] "></span>
                      <div
                        className="md:text-lg flex-1"
                        style={{ lineHeight: 1.3 }}
                      >
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* ==================button=====================*/}
              <div className="mbl-h-btn flex space-x-2 justify-between md:justify-start md:space-x-6 mt-8">
                {props.locationSlug && (
                  <>
                    <button
                      onClick={() => {
                        partyFormBooking(
                          eventFormBookingLinks[props.locationSlug]
                        );
                      }}
                      className="w-[48%] md:max-w-[220px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      GET A QUOTE
                    </button>
                    <a
                      href={
                        "/" +
                        props.locationSlug +
                        "/activities/mobile-escape-room"
                      }
                      className="w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      LEARN MORE
                    </a>
                  </>
                )}
                {!props.locationSlug && (
                  <>
                    <button
                      onClick={(e) => showLocatioForm(e)}
                      className="w-[48%] md:max-w-[220px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      GET A QUOTE
                    </button>
                    <a
                      href={"/mobile-escape-room"}
                      className="w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                    >
                      LEARN MORE
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mt-3 md:mt-0 mb-6 md:mb-8 lg:mb-0">
              <div className="mbl-h-img">
                <img
                  alt={"Allinadventures mobile escape room"}
                  src={
                    "https://cdn.allinadventures.com/uploads/All_In_Adventures_Mobile_Escappe_Room_For_Big_Event_eb07303e99.jpg"
                  }
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileEscapeGameRootHomeSection;
