import { eventFormBookingLinks } from "../../lib/tempData/eventFormBookingLinks";
const partyFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const MobileEscapeBookingBtn = (props) => {
  // new party booking setion

  return (
    <div className="header-btn">
      <button
        onClick={() => {
          partyFormBooking(eventFormBookingLinks[props.locationSlug]);
        }}
        href={"#mobile-escape-room-form"}
        className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2.5 px-10 border-[2px] border-red-600 hover:border-red-700 transition duration-300"
      >
        GET A QUOTE
      </button>
    </div>
  );
};
export default MobileEscapeBookingBtn;
