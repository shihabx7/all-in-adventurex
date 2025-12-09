import Link from "next/link";
import { useSiteData } from "../../contexts/SiteDataContext";

const bookParty = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};

export default function EventBookingBtn(props){

    const { openModalMenu, setModalMenuType } = useSiteData();
    //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
    const showLocModal = () => {
      const body = document.getElementsByTagName("body")[0];
      body.classList.remove("overflow-hidden");
      setModalMenuType("partyPackage-list");
      openModalMenu();
    };

  // new party booking setion

  return (
    <div className="header-btn">
      {props.locationSlug ? (
        <>
          {!props.partyBooking ? (
            <>
              {props.eventSlug ? (
                <>
                  {props.activeGameBooking ? (
                    <a
                      href={"/" + props.locationSlug + "/events#eventbooking"}
                      className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                    >
                      BOOK EVENT
                    </a>
                  ) : (
                    <a
                      href={"#eventbooking"}
                      className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                    >
                      BOOK EVENT
                    </a>
                  )}
                </>
              ) : (
                <a
                  href={"/" + props.locationSlug + "/events#eventbooking"}
                  className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                >
                  BOOK EVENT
                </a>
              )}
            </>
          ) : (
            <>
              {props.partyBooking.hasParty ? (
                <>
                  {props.partyBooking.isActive ? (
                    <button
                      onClick={() => bookParty(props.partyBooking)}
                      className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                    >
                      BOOK YOUR PARTY
                    </button>
                  ) : (
                    <a
                      href={"/" + props.locationSlug + "/events#eventbooking"}
                      className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                    >
                      BOOK EVENT
                    </a>
                  )}
                </>
              ) : (
                <a
                  href={"/" + props.locationSlug + "/events#eventbooking"}
                  className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
                >
                  BOOK EVENT
                </a>
              )}
            </>
          )}
        </>
      ) : (
        <button
          onClick={showLocModal}
          className="bg-transparent cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
        >
          BOOK EVENT
        </button>
      )}
    </div>
  );
};

