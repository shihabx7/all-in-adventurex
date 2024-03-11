import Script from "next/script";

const GameLocHero = (props) => {
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      // flow:  bookingData.flow,
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
  // console.log(props.pagedata.bookingdata.active);
  return (
    <>
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div
        className="home-hero bg-[#111111]"
        style={{
          backgroundImage: "url('" + props.pagedata.coverimageL + "')",
        }}
      >
        <div className="home-hero-holder ">
          <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
            <img src={props.pagedata.coverimageM}></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-20">
            <div className="page-benar-info">
              {props.pagedata.publish_status == false && (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[400px] mx-auto"
                    src="/assets/svg/coming-soon.svg"
                  ></img>
                </div>
              )}

              <p className=" md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center uppercase">
                At {props.pagedata.mall} in {props.pagedata.location_name}
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase max-w-[1000px] mx-auto">
                {props.pagedata.pagetitle}{" "}
              </h1>
              <div
                className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.pagedata.pagesubtitle,
                }}
              ></div>
            </div>
            <div className="max-w-md mx-auto mt-8 ">
              {/*============location search btn==========*/}
              {props.pagedata.bookingall &&
                props.pagedata.publish_status == true && (
                  <button
                    onClick={() => bookAll(props.pagedata.bookingall)}
                    className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                  >
                    BOOK YOUR GAMES
                  </button>
                )}
              {props.pagedata.bookingall &&
                props.pagedata.publish_status == false && (
                  <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                    COMING SOON
                  </button>
                )}
              {props.pagedata.bookingdata &&
                props.pagedata.publish_status == true && (
                  <>
                    {props.pagedata.bookingdata.active == true && (
                      <button
                        onClick={() => bookGame(props.pagedata.bookingdata)}
                        className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                      >
                        BOOK THIS GAME
                      </button>
                    )}
                    {props.pagedata.bookingdata.active == false && (
                      <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                        COMING SOON
                      </button>
                    )}
                  </>
                )}

              {props.pagedata.bookingdata &&
                props.pagedata.publish_status == false && (
                  <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">
                    COMING SOON
                  </button>
                )}
              {props.pagedata.eventbooking && props.eventslug && (
                <>
                  {props.pagedata.eventbooking.eventstatus == true && (
                    <button
                      onClick={() => {
                        bookGame(props.pagedata.eventbooking);
                      }}
                      className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      {props.pagedata.bookingall
                        ? "BOOK A PARTY"
                        : "BOOK YOUR PARTY"}
                    </button>
                  )}
                  {props.pagedata.eventbooking.eventstatus == false && (
                    <a
                      href="#eventform"
                      className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      {props.pagedata.bookingall
                        ? "BOOK A PARTY"
                        : "BOOK YOUR PARTY"}
                    </a>
                  )}
                </>
              )}
              {props.eventslug && !props.pagedata.eventbooking && (
                <a
                  href="#eventform"
                  className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                >
                  BOOK EVENTS
                </a>
              )}
              {!props.eventslug && props.pagedata.eventbooking && (
                <>
                  {props.pagedata.eventbooking.eventstatus == true && (
                    <>
                      {props.pagedata.bookingParty ? (
                        <button
                          onClick={() => bookGame(props.pagedata.bookingParty)}
                          className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                        >
                          BOOK YOUR PARTY
                        </button>
                      ) : (
                        <a
                          href={"/" + props.pagedata.locationslug + "/events"}
                          className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                        >
                          VIEW ALL EVENTS
                        </a>
                      )}
                    </>
                  )}
                  {props.pagedata.eventbooking.eventstatus == false && (
                    <a
                      href={"/" + props.pagedata.locationslug + "/events"}
                      className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      VIEW ALL EVENTS
                    </a>
                  )}
                </>
              )}

              {/*============location book btn==========*/}
            </div>
            {props.pagedata.notice && (
              <div
                className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
                dangerouslySetInnerHTML={{ __html: props.pagedata.notice }}
              ></div>
            )}
            {props.gametotal != "not" && <div className="mb-6"> </div>}

            {props.gametotal != "not" && (
              <div
                style={{
                  background: "#FFFBF3",
                }}
                className="un-games  max-w-2xl mx-auto bottom-4 left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded"
              >
                <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                  {props.pagedata.totalUniqueGames && (
                    <div className="text-center">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.totalUniqueGames}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        Unique Games
                      </p>
                    </div>
                  )}
                  {props.pagedata.max_players && (
                    <div className="text-center">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.max_players ==
                        props.pagedata.min_players
                          ? props.pagedata.min_players
                          : props.pagedata.min_players +
                            "-" +
                            props.pagedata.max_players}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        {props.pagedata.max_players < 2 ? "player" : "Players"}
                        {props.pagedata.groupcat && (
                          <span className="text-[10px] md:text-[16px]">
                            /{props.pagedata.groupcat}
                          </span>
                        )}
                      </p>
                    </div>
                  )}

                  {props.pagedata.totalFiveStarReview && (
                    <div className="text-center ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.totalFiveStarReview}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        5-Star Reviews
                      </p>
                    </div>
                  )}
                  {props.pagedata.price && (
                    <div className="text-center ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        ${props.pagedata.price}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Per Player
                      </p>
                    </div>
                  )}
                  {props.pagedata.totalPlayerEscaped && (
                    <div className="text-center">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.totalPlayerEscaped}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Players Escaped
                      </p>
                    </div>
                  )}
                  {props.pagedata.duration && (
                    <div className="text-center ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.duration} MIN
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Duration
                      </p>
                    </div>
                  )}
                  {props.pagedata.age && (
                    <div className="text-center">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.age}{" "}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Age
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameLocHero;
