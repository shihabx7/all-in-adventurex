import LocationBtn from "../util/LocationBtn";

const GameHomeHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        backgroundImage: "url('" + props.pagedata.coverimageL + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
          <img
            className="w-full"
            src={props.pagedata.coverimageM}
            alt={
              props.pagedata.coverimageM_alt
                ? props.pagedata.coverimageM_alt
                : "Allinadventures escape room"
            }
          ></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[100px] md:py-20 lg:py-32 xl:py-40 relative z-20">
          <div className="page-benar-info">
            {props.pagedata.themeImage ? (
              <div className="flex justify-center mb-1 md:mb-2">
                <img
                  className="max-h-[30px] md:max-h-[32px] lg:max-h-[36px] 3xl:max-h-[40px]"
                  src={props.pagedata.themeImage}
                  alt={props.pagedata.themeImageAlt}
                ></img>
              </div>
            ) : (
              ""
            )}

            <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center">
              CHOOSE FROM {props.pagedata.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1000px] mx-auto">
              {props.pagedata.pagetitle}{" "}
            </h1>
            <p className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">
              {props.pagedata.pagesubtitle}{" "}
            </p>
          </div>
          <div className="max-w-md mx-auto mt-8 ">
            {/*============location search btn==========*/}
            <LocationBtn
              borderbg="bg-red-600"
              borderbghover="bg-red-900"
              innerbg="bg-white"
              innerborder="border-white"
              innerbghover="bg-grey-200"
              innerborderhover="border-gray-200"
              color="text-black"
            />
            {/*============location search btn==========*/}
          </div>
          {props.pagedata.notice && (
            <div
              className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pagedata.notice }}
            ></div>
          )}
          {props.gametotal != "not" && <div className="mb-6"> </div>}

          {props.gametotal != "not" && (
            <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[90%] md:max-w-3xl mx-auto bottom-[-66px] md:bottom-[-8%] left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
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
                {props.pagedata.max_players && (
                  <div className="text-center w-[33%] md:w-auto">
                    <div className=" ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {!props.pagedata.groupcat ? (
                          <>
                            {props.pagedata.max_players ==
                            props.pagedata.min_players
                              ? props.pagedata.min_players
                              : props.pagedata.min_players +
                                "-" +
                                props.pagedata.max_players}{" "}
                          </>
                        ) : (
                          <>{props.pagedata.max_players}</>
                        )}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        {!props.pagedata.groupcat && (
                          <>
                            {props.pagedata.min_players < 2
                              ? "Guest"
                              : "Team Size"}
                          </>
                        )}

                        {props.pagedata.groupcat && (
                          <span className="text-gray-700 text-xs md:text-base lg:text-lg">
                            {props.pagedata.groupcat}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                )}
                {props.pagedata.age && (
                  <div className="text-center w-[33%] md:w-auto">
                    <div className="border-l border-gray-300">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.age}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Age Range
                      </p>
                    </div>
                  </div>
                )}
                {!props.pagedata.age && (
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
                )}
                {props.pagedata.private_events && (
                  <div className="text-center w-[33%] md:w-auto">
                    <div className="border-l border-gray-300 ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        YES
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Private Events
                      </p>
                    </div>
                  </div>
                )}
                {props.pagedata.duration && (
                  <div
                    className={
                      props.pagedata.private_events
                        ? "text-center w-[44%] md:w-auto"
                        : "text-center w-[33%] md:w-auto"
                    }
                  >
                    <div
                      className={
                        props.pagedata.private_events
                          ? "pt-2 mt-3 border-t md:border-t-0 md:pt-0 md:mt-0 md:border-l border-gray-300 "
                          : "border-l border-gray-300 "
                      }
                    >
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.duration} MIN
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Duration
                      </p>
                    </div>
                  </div>
                )}
                {props.pagedata.success_rate && (
                  <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                    <div className="border-l-0 border-gray-300 md:border-l ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.success_rate}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Success Rate
                      </p>
                    </div>
                  </div>
                )}
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
                {props.pagedata.price && (
                  <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                    <div className="border-l border-gray-300 ">
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        YES
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                        Private
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
  );
};

export default GameHomeHero;
