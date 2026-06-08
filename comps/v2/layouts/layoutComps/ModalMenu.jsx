import Script from "next/script";
import { useSiteData } from "../../../../contexts/SiteDataContext";

import { FiX } from "react-icons/fi";
import { locationBookingInfo } from "../../../../lib/v2/data/locationBookingInfo";
import {
  filterLocationList,
  filterLocationListForParty,
} from "../../../../lib/v2/formate/locationDataFormater";
import LocationPageLink from "./LocationPageLink";
import EscapeGameBookingBtn from "./EscapeGameBookingBtn";
import PartyPackageLocationList from "./PartyPackageLocationList";
import { eventFormBookingLinks } from "../../../../lib/tempData/eventFormBookingLinks";

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
const getMysteryQuote = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "no",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const mobileMysteryBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: {
      item: bookingData.itemNo,
    },
  });
};
const allInRewardsBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: {
      item: bookingData.itemNo,
    },
  });
};
const partyPackageFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: {
      item: bookingData.itemNo,
    },
  });
};

// ==================================================================================================def function----
export default function ModalMenu() {
  const {
    locationList,
    showModalMenu,
    closeModalMenu,
    activeModalMenuType,
    setModalMenuType,
    activeGameSlug,
    setModalGame,
    activePartyName,
    setModalPartyName,
  } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery | mobile-mystery-quote |unlimited-play-pass | bundle |all-in-rewards
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
      bookItemflow({
        shortName: bookingInfo.shortName,
        itemFlow: locationBookingInfo[locationSlug].partyPackageFlow,
      });
    }
    if (activeModalMenuType == "partyPackage-form") {
      partyPackageFormBooking(eventFormBookingLinks[locationSlug]);
    }

    if (activeModalMenuType == "bundle") {
      bookItemflow({
        shortName: bookingInfo.shortName,
        itemFlow: locationBookingInfo[locationSlug].bundleFlow,
      });
    }
    if (activeModalMenuType == "mobile-mystery") {
      mobileMysteryBooking({
        shortName: bookingInfo.shortName,
        itemNo: locationBookingInfo[locationSlug].mobileMysteryItemNo,
      });
    }
    if (activeModalMenuType == "mobile-mystery-quote") {
      getMysteryQuote({
        shortName: bookingInfo.shortName,
        itemNo: locationBookingInfo[locationSlug].eventFormItemNo,
      });
    }
    if (activeModalMenuType == "all-in-rewards") {
      allInRewardsBooking({
        shortName: bookingInfo.shortName,
        itemNo: locationBookingInfo[locationSlug].rewardItemNo,
      });
    }
  };

  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div className="modal-menu full-sceen-view-modal top-0 left-0 bg-[#111111] fixed w-full h-screen  overflow-x-hidden overflow-y-scroll z-[100000]">
        {/*====================================================close modal menu button */}
        <div
          onClick={closeLocModalmenu}
          id="close-modal-menu"
          className="location-close-box flex justify-end pt-1 px-2 md:px-4 text-gray-400 text-xl md:text-2xl lg:text-3xl"
        >
          <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
            <FiX />
          </span>
        </div>
        {/*====================================================close modal menu button end*/}
        <div className="loc-menu-content px-4">
          {/*==================================================== modal menu title*/}
          <div className="sep-container max-w-[420px] md:max-w-[760px] lg:max-w-[860px] mx-auto ">
            <h2 className="text-[#E0BF62] text-center text-[1.5rem] rm:text-[1.88rem]  uppercase md:text-[3rem] lg:text-[4rem] leading-[1.2] font-os font-bold">
              Choose Your Location
            </h2>
            <p className="text-[#7B7B7B] py-2 text-center text-[1.1rem]  md:text-[1.3rem] lg:text-[1.5rem] leading-[1.2] ">
              {activeModalMenuType == "location-links" && (
                <>View games, hours, and details for your selected location</>
              )}
              {activeModalMenuType == "gift-card" && (
                <>Buy gift cards valid at your location</>
              )}
              {activeModalMenuType == "game-list" && (
                <>See available games and book instantly</>
              )}
              {activeModalMenuType == "game" && (
                <>
                  This game is available at the locations below—Book instantly
                </>
              )}
              {activeModalMenuType == "partyPackage-list" && (
                <>View party packages and book your event</>
              )}
              {activeModalMenuType == "mobile-mystery" && (
                <>Book your Mobile Mystery experience</>
              )}

              {activeModalMenuType == "mobile-mystery-quote" && (
                <>Request a quote for Mobile Mystery experience</>
              )}
              {activeModalMenuType == "bundle" && (
                <>Unlock available bundles at your location</>
              )}
              {activeModalMenuType == "all-in-rewards" && (
                <span>Unlock Free Rooms with ALL IN REWARDS!</span>
              )}
              {activeModalMenuType == "BookPatryPackage" && (
                <span>
                  This party package is available at the locations below—Book
                  instantly
                </span>
              )}
              {activeModalMenuType == "partyPackage-form" && (
                <span>
                  Party For Large group is available at the locations below—Book
                  instantly
                </span>
              )}
            </p>
          </div>
          {/*==================================================== modal menu title end*/}
          {/*====================================================modal menu grid column */}
          <div className="loc-menu-grid max-w-[64rem] mx-auto mt-4 md:mt-8 lg:mt-10 pb-[80px] md:pb-8">
            {/*==================location xcolumn======================*/}
            {activeModalMenuType == "location-links" && (
              <LocationPageLink locationList={locationList} />
            )}
            {activeModalMenuType == "game" && (
              <EscapeGameBookingBtn
                locationList={filterLocationList(locationList, activeGameSlug)}
              />
            )}
            {activeModalMenuType == "BookPatryPackage" && (
              <PartyPackageLocationList
                locationList={filterLocationListForParty(
                  locationList,
                  activePartyName,
                )}
              />
            )}
            {activeModalMenuType !== "location-links" &&
              activeModalMenuType !== "game" &&
              activeModalMenuType !== "BookPatryPackage" &&
              locationList.map((state, index) => {
                return (
                  <div key={index + 1} className="loc-menu-box ">
                    {/*==================location NEW YORK======================*/}
                    <div className="loc-menu-head ">
                      <h3 className="text-[#bbbbbb] text-[1.08rem] md:text-[1.13rem] xl:md:text-[1.2rem] uppercase font-bold">
                        <span className="inline-block">{state.stateName}</span>
                      </h3>
                    </div>
                    <div className="loc-item-box py-1 border-[#191919] ">
                      {state.locations.map((item, index) => {
                        return (
                          <div
                            key={index + 2}
                            className=" loc-item py-2 border-b border-[#191919]"
                          >
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                trigerBooking(
                                  item.bookingInfo,
                                  item.locationSlug,
                                );
                              }}
                              className="loc-link block text-[#7b7b7b] hover:text-[#D8C695]  text-left"
                            >
                              <span className="loc-name block text-[1.05rem] font-medium">
                                {item.locationName}
                              </span>

                              {activeModalMenuType != "mobile-mystery" &&
                                activeModalMenuType !=
                                  "mobile-mystery-quote" && (
                                  <span className="block loc-mall text-sm">
                                    {item.mall}
                                  </span>
                                )}
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
