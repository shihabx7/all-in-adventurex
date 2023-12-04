import Link from "next/link";

const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortname,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};
const EventBookBtn = (props) => {
  const showloc = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };

  return (
    <div className="inline-block bg-golden hover:bg-golden-alt  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full">
      <div className="bg-[#FEF6E9] hover:bg-golden-alt  rounded-full items-center  text-[#424242] md:text-lg gont-medium">
        {props.bookingall ? (
          <button
            onClick={() => {
              bookAll(props.bookingall);
            }}
            className="block py-2 px-6  md:py-3 md:px-8"
          >
            {props.label}
          </button>
        ) : (
          <a
            href={"#eventbooking"}
            className="block py-2 px-6  md:py-3 md:px-8"
          >
            {props.label}
          </a>
        )}
      </div>
    </div>
  );
};

export default EventBookBtn;
