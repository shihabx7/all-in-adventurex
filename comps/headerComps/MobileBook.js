const MoblieBook = (props) => {
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

  return (
    <div
      id="hbtn"
      className="header-book-btn-container  w-full  bg-coffee  lg:hidden z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between">
        {/**============event booking================= */}
        <div className="w-[48%]">
          {props.eventbooking && (
            <>
              {!props.eventslug ? (
                <>
                  {props.gameslug && props.gameslug == "axe-throwing" ? (
                    <button
                      onClick={() => bookGame(props.bookingParty)}
                      className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white"
                    >
                      BOOK YOUR PARTY
                    </button>
                  ) : (
                    <a
                      href={"/" + props.locationslug + "/events#eventbooking"}
                      className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white"
                    >
                      BOOK EVENT
                    </a>
                  )}
                </>
              ) : (
                <>
                  {props.eventslug == "date-night" ? (
                    <a
                      href={"/" + props.locationslug + "/events#eventbooking"}
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
              )}
            </>
          )}

          {!props.eventbooking && (
            <a
              href={"/" + props.locationslug + "/events#eventbooking"}
              className="bg-red-600 font-medium hover:bg-red-700 py-2 px-2 block text-center text-white"
            >
              BOOK EVENT
            </a>
          )}
        </div>
        {/**============event booking end================= */}
        {/**============game booking================= */}
        <div className="w-[48%]">
          {props.bookingall &&
            (props.publish_status == undefined ||
              props.publish_status == true) && (
              <button
                onClick={() => bookAll(props.bookingall)}
                className="w-full bg-red-600 font-medium hover:bg-red-700 py-2 px-1 block text-center text-white"
              >
                BOOK GAMES
              </button>
            )}
          {props.bookingall && props.publish_status == false && (
            <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-1 block text-center font-medium text-white">
              COMING SOON
            </button>
          )}
          {props.bookinggame &&
            (props.publish_status == undefined ||
              props.publish_status == true) && (
              <>
                {props.bookinggame.active == true && (
                  <button
                    onClick={() => bookGame(props.bookinggame)}
                    className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white"
                  >
                    {props.bookinggame.type == "gift"
                      ? "BUY GIFT CARDS"
                      : "BOOK THIS GAME"}
                  </button>
                )}
                {props.bookinggame.active == false && (
                  <button className="w-full font-medium bg-red-600 hover:bg-red-700 py-2 px-1 block text-center text-white">
                    COMING SOON
                  </button>
                )}
              </>
            )}
          {props.bookinggame && props.publish_status == false && (
            <button className="w-full bg-red-600 font-medium hover:bg-red-700 py-2 px-1 block text-center text-white">
              {props.bookinggame.type == "gift"
                ? "BUY GIFT CARDS"
                : "BOOK THIS GAME"}
            </button>
          )}
        </div>
        {/**============game booking end================= */}
      </div>
    </div>
  );
};

export default MoblieBook;
