import Script from "next/script";

const EventLocHero = (props) => {
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

  return (
    <>
      {" "}
      <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
      <div
        className="home-hero"
        style={{
          background: "url('" + props.pagedata.coverimageL + "')",
        }}
      >
        <div className="home-hero-holder ">
          <div className="homehero-img w-full min-h-[280px] md:hidden">
            <img src={props.pagedata.coverimageM}></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[100px] md:py-20 lg:py-32 xl:py-40 relative z-20">
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
              {/*============party-booking  search btn==========*/}
              {props.eventbooking.eventstatus && (
                <button
                  onClick={() => bookGame(props.eventbooking)}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                >
                  BOOK YOUR PARTY
                </button>
              )}
              {!props.eventbooking.eventstatus && (
                <a
                  href={"#eventform"}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                >
                  BOOK YOUR PARTY
                </a>
              )}

              {/*============location search btn==========*/}
              {props.pagedata.bookingall &&
                props.pagedata.publish_status == true && (
                  <a
                    href={"/" + props.pagedata.locationslug + "/activities"}
                    className="block w-full mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                  >
                    VIEW ALL GAMES
                  </a>
                )}
              {props.pagedata.bookingall &&
                props.pagedata.publish_status == false && (
                  <button className="w-full block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg">
                    COMING SOON
                  </button>
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
              <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[90%] md:max-w-3xl mx-auto bottom-[-66px] md:bottom-[-8%] left-0 right-0 absolute bg-white px-0 py-4 md:py-4 md:px-4 lg:py-6  rounded">
                <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
                  {props.pagedata.totalUniqueGames && (
                    <div className="text-center w-[33%] md:w-auto">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.totalUniqueGames}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        Themed Games
                      </p>
                    </div>
                  )}

                  <div className="text-center w-[33%] md:w-auto">
                    <div className="border-l border-gray-300">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        2-70
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Team Size
                      </p>
                    </div>
                  </div>

                  <div className="text-center w-[33%] md:w-auto">
                    <div className="border-l border-gray-300">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        6-99
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Age Range
                      </p>
                    </div>
                  </div>

                  {props.pagedata.totalFiveStarReview && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l-0 border-gray-300 md:border-l ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.totalFiveStarReview}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Rave Reviews
                        </p>
                      </div>
                    </div>
                  )}
                  {props.pagedata.catering && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l-0 border-gray-300 md:border-l ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          YES
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Catering
                        </p>
                      </div>
                    </div>
                  )}

                  {props.pagedata.totalPlayerEscaped && (
                    <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                      <div className="border-l border-gray-300 ">
                        <p className="golden-text text-xl md:text-4xl font-os font-bold">
                          {props.pagedata.totalPlayerEscaped}
                        </p>
                        <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                          Guests Served
                        </p>
                      </div>
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

export default EventLocHero;
