import { useSiteData } from "../../../../contexts/SiteDataContext";

import { eventFormBookingLinks } from "../../../../lib/tempData/eventFormBookingLinks";

export default function PartyPackageBookingBtn(props) {
  const { openModalMenu, setModalPartyName, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | partyPackage-form | BookPatryPackage | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showPartyBookingModal = (partyName) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    let activePartyName = partyName.trim().toLowerCase();
    setModalPartyName(activePartyName);
    setModalMenuType("BookPatryPackage");
    openModalMenu();
  };

  const partyPackageBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <div className="party-booking-btn-v2">
      {props.locationSlug && props.bookingInfo ? (
        <button
          onClick={(e) => partyPackageBooking(props.bookingInfo)}
          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
        >
          BOOK THIS PACKAGE
        </button>
      ) : (
        <button
          onClick={(e) => showPartyBookingModal(props.partyName)}
          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
        >
          BOOK THIS PACKAGE
        </button>
      )}
    </div>
  );
}
