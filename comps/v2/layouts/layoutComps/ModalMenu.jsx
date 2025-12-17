import Script from "next/script";
import { useSiteData } from "../../../../contexts/SiteDataContext";
import { FiX } from "react-icons/fi";
import { locationBookingInfo } from "../../../../lib/v2/data/locationBookingInfo";
import { filterLocationList } from "../../../../lib/v2/formate/locationDataFormater";
import LocationPageLink from "./LocationPageLink";
import EscapeGameBookingBtn from "./EscapeGameBookingBtn";

// ============================booking function
const bookItemflow = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "no",
    flow: bookingData.itemFlow,
  });
};

const bookGiftCard = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "no",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const bookAllGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};
// ==================================================================================================def function----
export default function ModalMenu() {
  const {
    locationList,
    showModalMenu,
    activeModalMenuType,
    setModalMenuType,
    activeGameSlug,
    setModalGame,
    closeModalMenu,
  } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  if (!showModalMenu) return null;
  const closeLocModalmenu = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    closeModalMenu();
    setModalMenuType(null);
    setModalGame(null);
  };

  // launch fareharber booking engine
  const trigerBooking = (bookingInfo, locationSlug) => {
    if (activeModalMenuType == "gift-card") {
      bookGiftCard({
        shortName: bookingInfo.shortName,
        itemNo: bookingInfo.giftCardItemNo,
      });
    }
    if (activeModalMenuType == "game-list") {
      bookAllGame(bookingInfo);
    }
    if (activeModalMenuType == "partyPackage-list") {
      let bookingobj = {};
      bookItemflow({
        shortName: bookingInfo.shortName,
        itemFlow: locationBookingInfo[locationSlug].partyPackageFlow,
      });
    }
    if (activeModalMenuType == "bundle") {
      let bookingobj = {};
      bookItemflow({
        shortName: bookingInfo.shortName,
        itemFlow: locationBookingInfo[locationSlug].bundleFlow,
      });
    }
  };

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div
        className="modal-menu full-sceen-view-modal top-0 left-0 bg-dark fixed w-full h-full  overflow-x-hidden overflow-y-auto z-[100000]"
        style={{
          backgroundImage:
            "url(/assets/submenu-bg.png),linear-gradient(#111111,#111111)",
        }}
      >
        {/*====================================================close modal menu button */}
        <div
          onClick={closeLocModalmenu}
          id="close-bundle-booking-menu"
          className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
        >
          <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
            <FiX />
          </span>
        </div>
        {/*====================================================close modal menu button end*/}
        <div className="loc-menu-content px-4">
          {/*==================================================== modal menu title*/}
          <div className="sep-container max-w-[280px] md:max-w-[600px] mx-auto ">
            <h2 className="dark-gold py-2 text-center text-2xl uppercase md:text-[40px] lg:text-[44px] leading-[1.2] font-os font-bold">
              {activeModalMenuType == "location-links" && (
                <span>Choose Your Location</span>
              )}
              {activeModalMenuType == "gift-card" && (
                <span>Choose Your Location to Buy Gift Cards</span>
              )}
              {activeModalMenuType == "game-list" && (
                <span>
                  Choose Your Location to Book Escape Games
                </span>
              )}
              {activeModalMenuType == "game" && (
                <>
                <p>Choose Your Location to Book Your Game</p>
                
                </>
              )}
              {activeModalMenuType == "partyPackage-list" && (
                <span>Choose Your Location to Book Party Package</span>
              )}
              {activeModalMenuType == "mobile-mystery" && (
                <span>BOOK NOW - RESERVE YOUR MOBILE MYSTERY EXPERIENCE</span>
              )}
              {activeModalMenuType == "bundle" && (
                <span>Choose Your Location to Unlock Your Bundle</span>
              )}
              {activeModalMenuType == "unlimited-pass" && (
                <span>Choose Your Location TO Buy Unlimited Play Pass</span>
              )}
            </h2>
          </div>
          {/*==================================================== modal menu title end*/}
          {/*====================================================modal menu grid column */}
          <div className="loc-menu-grid max-w-6xl mx-auto mt-4 md:mt-6 lg:mt-8 pb-8">
            {/*==================location xcolumn======================*/}
            {activeModalMenuType == "location-links" && (
              <LocationPageLink locationList={locationList} />
            )}
            {activeModalMenuType == "game" && (
              <EscapeGameBookingBtn
                locationList={filterLocationList(locationList, activeGameSlug)}
              />
            )}

            {activeModalMenuType !== "location-links" &&
              activeModalMenuType !== "game" &&
              locationList.map((state, index) => {
                return (
                  <div key={index + 1} className="loc-menu-box ">
                    {/*==================location NEW YORK======================*/}
                    <div className="loc-menu-head mb-2">
                      <h3 className="text-light-gold text-xl md:text-2xl font-bold">
                        <span className="inline-block pb-1 border-b border-light-gold">
                          {state.stateName}
                        </span>
                      </h3>
                    </div>
                    <div className="loc-item-box py-2 border-dark-coffee">
                      {state.locations.map((item, index) => {
                        return (
                          <div
                            key={index + 2}
                            className=" loc-item py-2 border-b border-dark-coffee"
                          >
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                trigerBooking(
                                  item.bookingInfo,
                                  item.locationSlug
                                );
                              }}
                              className="loc-link block golden-text md:text-lg"
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
    </>
  );
}
