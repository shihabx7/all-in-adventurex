import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
import { mobileEscapeRoomBookingData } from "../../lib/tempData/mobileEscapeRoomBookingData";
const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
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
    view: { item: bookingData.itemNo },
  });
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
const mobileMysteryBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo2 },
  });
};
const MobileBookingBtn = (props) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between">
      {/**============event booking================= */}
      {props.activitySlug !== "mobile-escape-room" ? (
        <>
          <div className="w-[48%]">
            {props.locationSlug ? (
              <>
                {!props.partyBooking ? (
                  <>
                    {props.eventSlug ? (
                      <>
                        {props.activeGameBooking ? (
                          <a
                            href={
                              "/" + props.locationSlug + "/events#eventbooking"
                            }
                            className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white"
                          >
                            BOOK EVENT
                          </a>
                        ) : (
                          <a
                            href={"#eventbooking"}
                            className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white"
                          >
                            BOOK EVENT
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={"/" + props.locationSlug + "/events#eventbooking"}
                        className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white"
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
                            className="w-full bg-red-600 font-medium hover:bg-red-700 py-2 px-1 block text-center text-white"
                          >
                            BOOK YOUR PARTY
                          </button>
                        ) : (
                          <a
                            href={
                              "/" + props.locationSlug + "/events#eventbooking"
                            }
                            className="bg-red-600 font-medium hover:bg-red-700 py-2 px-2 block text-center text-white"
                          >
                            BOOK EVENT
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={"/" + props.locationSlug + "/events#eventbooking"}
                        className="bg-red-600 font-medium hover:bg-red-700 py-2 px-2 block text-center text-white"
                      >
                        BOOK EVENT
                      </a>
                    )}
                  </>
                )}
              </>
            ) : (
              <a
                href={"/events#eventbooking"}
                className="bg-red-600 font-medium hover:bg-red-700 py-2 px-2 block text-center text-white"
              >
                BOOK EVENT
              </a>
            )}
          </div>
          {/**============event booking end================= */}
          {/**============game booking================= */}
          <div className="w-[48%]">
            {props.locationSlug ? (
              <>
                {props.isPublished ? (
                  <>
                    {props.allBooking && (
                      <button
                        onClick={() => bookAll(props.allBooking)}
                        className="w-full bg-red-600 font-medium hover:bg-red-700 py-2 px-1 block text-center text-white"
                      >
                        BOOK GAMES
                      </button>
                    )}
                    {props.giftBooking && props.isGiftPage && (
                      <button
                        onClick={() => bookGame(props.giftBooking)}
                        className="w-full bg-red-600 font-medium hover:bg-red-700 py-2 px-1 block text-center text-white"
                      >
                        BOOK GIFT CARDS
                      </button>
                    )}
                    {props.gameBooking && (
                      <button
                        onClick={() => bookGame(props.gameBooking)}
                        className="w-full bg-red-600 font-medium hover:bg-red-700 py-2 px-1 block text-center text-white"
                      >
                        BOOK THIS GAME
                      </button>
                    )}
                  </>
                ) : (
                  <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-1 block text-center font-medium text-white">
                    COMING SOON
                  </button>
                )}
              </>
            ) : (
              <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-1 block text-center font-medium text-white">
                COMING SOON
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="w-full flex space-x-2 md:space-x-3  xl:space-x-5 justify-center items-center">
          <button
            onClick={() => {
              mobileMysteryBooking(mobileEscapeRoomBookingData[props.locationSlug]);
            }}
            className="bg-red-600 block w-full font-medium hover:bg-red-700 py-1 md:py-2  block text-center text-white text-lg"
          >
          BOOK NOW
          </button>
           <button
            onClick={() => {
              partyFormBooking(mobileEscapeRoomBookingData[props.locationSlug]);
            }}
            className="bg-red-600 lg:bg-transparent  block w-full font-medium hover:bg-red-700 py-1 md:py-2  block text-center text-white text-lg"
          >
            GET A QUOTE
          </button>
        </div>
      )}
      {/**============game booking end================= */}
    </div>
  );
};

export default MobileBookingBtn;
