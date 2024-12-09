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
const GameBookingBtn = (props) => {
  const showloc = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };

  return (
    <>
      <div className="heade-btn">
        {props.locationSlug ? (
          <>
            {props.isPublished ? (
              <>
                {props.allBooking && (
                  <button
                    onClick={() => bookAll(props.allBooking)}
                    className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
                  >
                    BOOK GAMES
                  </button>
                )}

                {props.giftBooking && props.isGiftPage && (
                  <button
                    onClick={() => bookGame(props.giftBooking)}
                    className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
                  >
                    BUY GIFT CARDS
                  </button>
                )}
                {props.gameBooking && (
                  <button
                    onClick={() => bookGame(props.gameBooking)}
                    className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
                  >
                    BOOK THIS GAME
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={showloc}
                className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
              >
                BOOK GAMES
              </button>
            )}
          </>
        ) : (
          <>
            <button
              onClick={showloc}
              className="bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300"
            >
              BOOK GAMES
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default GameBookingBtn;
