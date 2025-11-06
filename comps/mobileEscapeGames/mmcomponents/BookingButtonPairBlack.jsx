import { mobileEscapeRoomBookingData } from "../../../lib/tempData/mobileEscapeRoomBookingData";
// bookin functions
const eventFormBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "no",
    flow: "no",
    view: { item: bookingData.itemNo },
  });
};
const gameBooking = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: bookingData.eventOnly ? "no" : "yes",
    flow: "no",
    view: {
      item: bookingData.eventOnly ? bookingData.itemNo : bookingData.itemNo2,
    },
  });
};
export default function BookingButtonPairBlack({ locationSlug }) {
  return (
    <>
      <button
        onClick={() => {
          gameBooking(mobileEscapeRoomBookingData[locationSlug]);
        }}
        className="w-[288px] xm:w-[316px] sm:w-[330px]  md:w-[220px] lg:w-[234px] px-3 md:px-6 py-[12px] md:py-3  block text-white border-2 border-red-600 hover:border-red-700 rounded-full text-center font-semibold md:text-lg bg-red-600 hover:bg-red-700"
      >
        BOOK NOW
      </button>
      <button
        onClick={() => {
          eventFormBooking(mobileEscapeRoomBookingData[locationSlug]);
        }}
        className="w-[288px] xm:w-[316px] sm:w-[330px] md:w-[220px] lg:w-[234px] px-3 md:px-6 py-[12px] md:py-3 text-center  block text-[#2e2e2e] hover:text-white border-2 border-red-600 hover:border-red-700  rounded-full font-semibold md:text-lg bg-transparent hover:bg-red-700 "
      >
        GET A QUOTE
      </button>
    </>
  );
}
