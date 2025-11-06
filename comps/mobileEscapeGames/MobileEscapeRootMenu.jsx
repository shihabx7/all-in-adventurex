import { FiX } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { mobileEscapeRootMenuList } from "../../lib/tempData/mobileEscapeTempData";
import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";

const mobileMystryBooking = (bookingData, isFormBooking) => {
  console.log(isFormBooking);
  let itemVal = isFormBooking ? bookingData.itemNo : bookingData.itemNo2;
  let itemFullView = isFormBooking ? "no" : "yes";
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: itemFullView,
    flow: "no",
    view: { item: itemVal },
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
    <div
      className="loc-menu-mob top-0 left-0 bg-dark fixed w-full h-screen overflow-scroll md:overflow-hidden z-[100000]"
      style={{
        backgroundImage:
          "url(/assets/submenu-bg.png),linear-gradient(#111111,#111111)",
      }}
    >
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
        <div className="sep-container max-w-[300px] md:max-w-[740px] mx-auto ">
          <h2 className="dark-gold py-2 text-center text-2xl uppercase md:text-[40px] lg:text-[44px] leading-[1.2] font-os font-bold">
            {!props.goMobileEecapeForm
              ? "BOOK NOW - RESERVE YOUR MOBILE MYSTERY EXPERIENCE"
              : "REQUEST A QUOTE - PLAN YOUR MOBILE MYSTERY EXPERIENCE"}
          </h2>
        </div>

        <div className="loc-menu-grid max-w-6xl mx-auto mt-5 md:mt-8 pb-8">
          {/*==================location xcolumn======================*/}
          {mobileEscapeRootMenuList.map((stateItem, index) => {
            return (
              <div key={index} className="loc-menu-box ">
                {/*==================location NEW YORK======================*/}
                <div className="loc-menu-head mb-0">
                  <h3 className="text-light-gold text-xl md:text-2xl font-bold">
                    <span className="inline-block pb-1 border-b border-light-gold">
                      {stateItem.state}
                    </span>
                  </h3>
                </div>
                <div className="loc-item-box py-2 border-dark-coffee">
                  {stateItem.locations.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=" loc-item py-2 border-b border-dark-coffee"
                      >
                        <button
                          onClick={() => {
                            mobileMystryBooking(
                              mobileEscapeRoomBookingData[item.locationSlug],
                              props.goMobileEecapeForm
                            );
                          }}
                          className="mer-booking-btn block md:text-lg golden-text"
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
