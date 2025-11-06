/* eslint-disable @next/next/no-img-element */

import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";

const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const mobileMystryBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo2 },
  });
};
const showMobileEscapeBookingMenuParty = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("overflow-hidden");
  setGoMobileEecapeForm(true);
  setShowMobileEecapeMenu(true);
};
const showMobileEscapeBookingMenuGame = () => {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("overflow-hidden");
  setGoMobileEecapeForm(false);
  setShowMobileEecapeMenu(true);
};
const PerfectForGroupSection = ({ sectionData, locationName }) => {
  return (
    <div className="mer-games-slider bg-[#231800] py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-28  relative ">
      <div className="max-w-[1248px] mx-auto  px-3 rm:px-4 xl:px-0  z-20 ">
        {/*============================================================Section title============== */}
        <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  ">
          <div className="max-w-[364px] md:max-w-full mx-auto">
            <MobileTitleSeparatorCenter
              title={
                sectionData.sectionTitle
                  ? sectionData.sectionTitle
                  : "Perfect For Any Group, Any Occasion"
              }
              textColor={"#E0BF62"}
            />
          </div>

          <div className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[960px] xl:max-w-[1080px] mx-auto">
            <p>
              Our Mobile Mystery experience is designed to bring excitement to
              all kinds of events—big or small. Whether you&apos;re planning a
              school activity, company outing, or community celebration, we
              deliver unforgettable fun right to your location.
            </p>
          </div>
        </div>
        {/*===========================================================3 box grid============== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-3 xl:gap-5 mb-6 rm:mb-8 md:mb-10 lg:mb-16">
          {/*=======================ite 1============== */}
          <div className="mer-pric-list-item bg-[#FAECCA] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-5 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  PRICING
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-2 lg:mt-3 3xl:mt-4 text-sm rm:text-[16px] md:text-[14px] lg:text-[15px]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  $19.99 per person (20-person minimum)
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-[.9rem] rm:text-[1rem] md:text-[.9rem] xl:text-[1.06rem]">
                  Kick off the fun at just $19.99 per person with a 20-player
                  minimum. Want more adventure? Add a second round with a
                  different game for only $9.99 per person—that's 50% off!
                </p>
              </div>
            </div>
          </div>
          {/*=======================ite 2============== */}
          <div className="mer-pric-list-item bg-[#FAECCA] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-5 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  AVAILABILITY
                </h3>
                <p className="text-[#2e2e2e]  mt-4 md:mt-2 lg:mt-3 text-sm rm:text-[16px] md:text-[14px] lg:text-[15px]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  Service within 25 miles
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-[.9rem] rm:text-[1rem] md:text-[.9rem] xl:text-[1.07rem]">
                  {locationName
                    ? "Escape the travel costs! We travel free of charge to locations within 25 miles of the city center. Outside that range? No problem—reach out, and we'll do our best to make it work!"
                    : "Escape the travel costs! We travel free of charge to locations within 25 miles of the city center. Outside that range? No problem—reach out, and we'll do our best to make it work!"}
                </p>
              </div>
            </div>
          </div>
          {/*=======================ite 3============== */}
          <div className="mer-pric-list-item bg-[#FAECCA] rounded-[20px]">
            <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-5 2xl:px-6 2xl:py-8">
              <div className="mar-wv-text ">
                <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.3] text-[#CA9342]">
                  GROUP SIZE
                </h3>
                <p className="text-[#2e2e2e] mt-4 md:mt-2 lg:mt-3 text-sm rm:text-[16px] md:text-[14px] lg:text-[15px]  xl:text-base 3xl:text-lg font-semibold leading-1 ">
                  Accommodates 20 to 60 people per hour
                </p>
                <p className="text-[#2E2E2E] mt-1 rm:mt-2  text-[.9rem] rm:text-[1rem] md:text-[.9rem] xl:text-[1.07rem]">
                  We can host 20 to 60 players per hour across 6 thrilling
                  games, each lasting 60 minutes. Bigger crowd or special timing
                  needs? We'll customize the experience to fit your event!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-sec">
        <div className="mbl-per-opt 3xl:max-w-[1568px] mx-auto px-3 rm:px-4 lg:px-3 xl:px-4 relative">
          <div className="grid grid-cols-1  md:grid-cols-3 xl:grid-cols-5 gap-y-7 gap-x-0 md:gap-x-3 md:gap-y-8 lg:gap-x-4 lg:gap-y-0 xl:gap-x-2 2xl:gap-x-3 3xl:gap-x-4">
            {sectionData.dataList.map((item, index) => {
              return (
                <div className="per-col" key={index}>
                  <div className="per-col-wrapper relative w-full h-full ">
                    <div className="per-icon-box h-[62px] w-[62px] bg-[#CA9342] flex items-center justify-center absolute top-0 left-0 bottom-0 m-auto rounded-lg">
                      <img
                        className="max-w-[32px]"
                        src={item.icon.url}
                        alt={item.icon.alt}
                      ></img>
                    </div>
                    <div className="per-content flex justify-end h-full items-center">
                      <div className="bg-[#2F2102] py-[12px] 2xl:py-[13px] pr-1 2xl:pr-2 xl:pl-9 2xl:pl-12 h-full rounded-lg w-[90%] lg:w-[87%] 2xl:w-[90%]">
                        <p className="text-[1rem] xl:text-[.92rem]  3xl:text-[1.1rem] text-[#ffffff] font-regular">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="notice flex  justify-center lg:items-center space-x-3 mt-12">
          <div>
            <img
              className="max-w-[24px] mt-2 lg:mt-0"
              src="/assets/mobile-escape-room/perfectFor/star.svg"
              alt="star-con"
            ></img>
          </div>
          <p className="text-lg text-[#7B7B7B] font-thin italic te ">
            Please note: We do not offer residential bookings. The event
            location must be a commercial or institutional address.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PerfectForGroupSection;
