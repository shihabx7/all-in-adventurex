import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { mobileEscapeRootMenuList } from "../../lib/tempData/mobileEscapeTempData";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";

const mobileMystryBooking = (bookingData, isFormBooking) => {
  let itemVal = isFormBooking ? bookingData.itemNo : bookingData.itemNo2;
  let itemFullView = isFormBooking ? "no" : "yes";

  let bookingItemNo = bookingData.itemNo;
  let bookingFullView = "no";
  if (!bookingData.eventOnly && !isFormBooking) {
    bookingItemNo = bookingData.itemNo2;
    bookingFullView = "yes";
  }

  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: bookingFullView,
    flow: "no",
    view: { item: bookingItemNo },
  });
};

const MobileEscapeRootMenu = (props) => {
  const closelocmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    props.setGoMobileEecapeForm(false);
    props.setShowMobileEecapeMenu(false);
  };

  return (
    <div className="loc-menu-mobile top-0 left-0 bg-[#111111] fixed w-full h-screen overflow-x-hidden overflow-y-auto z-[100000]">
      <div
        onClick={closelocmenu}
        id="locclosemb"
        className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
      >
        <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
          <FiX />
        </span>
      </div>
      <div className="loc-menu-content px-4">
        <div className="sep-container max-w-[420px] md:max-w-[760px] lg:max-w-[860px] mx-auto ">
          <h2 className="text-[#E0BF62] text-center text-[1.5rem] uppercase md:text-[3rem] lg:text-[4rem] leading-[1.2] font-os font-bold">
            Choose Your Location
          </h2>
          <p className="text-[#7B7B7B] py-2 text-center text-[1.05rem]  md:text-[1.3rem] lg:text-[1.5rem] leading-[1.2] ">
            {!props.goMobileEecapeForm
              ? "Book your Mobile Mystery experience"
              : "Request a quote for Mobile Mystery experience"}
          </p>
        </div>

        <div className="loc-menu-grid max-w-[64rem] mx-auto mt-4 md:mt-8 lg:mt-10 pb-8">
          {/*==================location xcolumn======================*/}
          {mobileEscapeRootMenuList.map((stateItem, index) => {
            return (
              <div key={index} className="loc-menu-box ">
                {/*==================location NEW YORK======================*/}
                <div className="loc-menu-head ">
                  <h3 className="text-[#bbbbbb] text-[1.06rem] md:text-[1.15rem] xl:md:text-[1.3rem] font-bold">
                    <span className="inline-block">
                      {stateItem.state}
                    </span>
                  </h3>
                </div>
                <div className="loc-item-box py-1 border-[#191919] ">
                  {stateItem.locations.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=" loc-item py-2 border-b border-[#191919]"
                      >
                        <button
                          onClick={() => {
                            mobileMystryBooking(
                              mobileEscapeRoomBookingData[item.locationSlug],
                              props.goMobileEecapeForm
                            );
                          }}
                          className="mer-booking-btn block text-[#7b7b7b] hover:text-[#D8C695]  text-left"
                        >
                          {item.locationName}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/*==================location xcolumn======================*/}
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeRootMenu;
