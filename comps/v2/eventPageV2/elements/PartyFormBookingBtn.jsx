import { useSiteData } from "../../../../contexts/SiteDataContext";
import { eventFormBookingLinks } from "../../../../lib/tempData/eventFormBookingLinks";

export default function PartyFormBookingBtn(props) {
  const { openModalMenu, setModalPartyName, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | partyPackage-form | BookPatryPackage | gift-card | mobile-mystery |unlimited-play-pass | bundle

  const showPartyFormModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("partyPackage-form");
    openModalMenu();
  };
  const partyFormBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: "no",
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <div className="party-booking-btn-v2">
      {props.locationSlug ? (
        <button
          onClick={() => {
            partyFormBooking(eventFormBookingLinks[props.locationSlug]);
          }}
          className="flex justify-center items-center space-x-2 w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
        >
          <div className="w-[14px] md:w-[16px]">
            <img
              className="block w-full h-auto "
              src="/assets/event-page-v2/doc-icon.svg"
            ></img>
          </div>
          <p>{props.btnLabel ? props.btnLabel : "TELL US ABOUT YOUR PARTY"}</p>
        </button>
      ) : (
        <button
          onClick={(e) => showPartyFormModal()}
          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
        >
          <div className="max-w-[16px]">
            <img
              className="block w-full h-auto "
              src="/assets/event-page-v2/doc-icon.svg"
            ></img>
          </div>
          <p>{props.btnLabel ? props.btnLabel : "TELL US ABOUT YOUR PARTY"}</p>
        </button>
      )}
    </div>
  );
}
