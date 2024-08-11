import Link from "next/link";
import Script from "next/script";

const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortname,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};
const bookGame = (bookingData) => {
  FH.open({
    shortname: bookingData.shortname,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.item },
  });
};
const HeaderBtnRed = (props) => {
  const showloc = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };

  return (
    <>
      <div className="heade-btn">
        {props.bookingall && (
          <button
            onClick={() => bookAll(props.bookingall)}
            className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
          >
            {props.btntext}
          </button>
        )}
        {props.bookinggame && (
          <>
            {props.bookinggame.active == true && (
              <button
                onClick={() => bookGame(props.bookinggame)}
                className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
              >
                {props.btntext}
              </button>
            )}
            {props.bookinggame.active == false && (
              <button
                // onClick={() => bookGame(props.bookinggame)}
                className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
              >
                COMING SOON
              </button>
            )}
          </>
        )}

        {!props.bookinggame &&
          !props.bookingall &&
          !props.vgamebooking &&
          !props.vgamebookinglink && (
            <button
              onClick={showloc}
              className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
            >
              {props.btntext}
            </button>
          )}
      </div>
    </>
  );
};
export default HeaderBtnRed;
