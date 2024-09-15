import TitleSeparator from "../util/TitleSeparator";

const EscapeGameList = (props) => {
  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <div
      id="real-life-escape-games"
      className="pt-20 all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8"
    >
      <div className="section-title text-center max-w-[800px] mx-auto">
        <TitleSeparator title={props.escapeGames.title} />
        <div
          className="text-gray-700 md:px-8 md:text-lg"
          dangerouslySetInnerHTML={{
            __html: props.escapeGames.subtitle,
          }}
        ></div>
      </div>
      {props.escapeGames.activityList.map((activity, index) => {
        return (
          <div
            key={index + 1}
            className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8 "
            style={{
              backgroundImage:
                "linear-gradient(53deg, rgba(0,0,0,0.92),rgba(0,0,0,0.82),rgba(0,0,0,0.62),rgba(0,0,0,0),rgba(0,0,0,0)),url('" +
                activity.listImage.url +
                "')",
              boxShadow: "0px 0px 16px 2px rgba(0,0,0,0.45)",
            }}
          >
            <div className="all-game-list-head flex justify-between space-x-1 items-center">
              <div className="all-game-info max-w-[50%]">
                <div className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-age.svg"></img>
                  </span>
                  <p className="text-[13px] xs:text-[14px] md:text-base">
                    Age Range {activity.ageRange}
                  </p>
                </div>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-time.svg"></img>
                  </span>
                  <span className="text-[13px] xs:text-[14px] md:text-base">
                    Duration {activity.duration} Min
                  </span>
                </p>
                <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                  <span>
                    <img src="/assets/svg/card-person.svg"></img>
                  </span>
                  <span className="text-[13px] xs:text-[14px] md:text-base">
                    {activity.teamSizeLabel} {activity.teamSize}
                  </span>
                </p>
                {activity.successRate && (
                  <p className="flex items-center space-x-1 md:space-x-2 text-gray-50 my-1">
                    <span>
                      <img src="/assets/svg/inperson.svg"></img>
                    </span>
                    <span className="text-[13px] xs:text-[14px] md:text-base drop-shadow">
                      Success Rate {activity.successRate}%
                    </span>
                  </p>
                )}
              </div>

              <div className="pricelist-container  max-w-[220px] p-[2px] md:p-[6px] bg-red-600">
                <div className="priceDataTable border border-dashed border-gray-200">
                  {activity.price.length > 1 ? (
                    <>
                      <div className="pdt-head flex justify-center items-center border-b border-[#ba2121]">
                        <p className="w-1/2 p-1 md:p-1 text-center text-[12px] sm:text-[14px] text-white font-medium border-r border-[#ba2121]">
                          Team Size
                        </p>
                        <p className="w-1/2 p-1 md:p-1 text-center text-[12px] sm:text-[14px] text-white font-medium">
                          Per Guest
                        </p>
                      </div>
                      {activity.price.map((priceItem, index) => {
                        return (
                          <div
                            key={index}
                            className="pdt-head flex justify-center items-center border-b border-[#ba2121]"
                          >
                            <p className="w-1/2 p-1 md:p-[4px] leading-[1]  text-center text-[12px] sm:text-[14px] text-white font-medium border-r border-[#ba2121]">
                              {priceItem.teamSize}
                            </p>
                            <p className="w-1/2 p-1 md:p-[4px] leading-[1] text-center text-[12px] sm:text-[14px] text-white font-medium">
                              ${priceItem.Price}
                            </p>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="inline-block px-4 py-2">
                      <p className="text-lg text-white text-center">FROM</p>
                      <p className="text-3xl text-white font-bold text-center">
                        ${activity.price[0].Price}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="all-game-list-gap py-[52px] md:py-[8%] lg:py-[72px]"></div>
            <div className="all-game-list-bottom">
              <div className=" text-center md:text-left">
                <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
                  {activity.activityName}
                </h3>
                <div
                  className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[700px]"
                  dangerouslySetInnerHTML={{ __html: activity.description }}
                ></div>
              </div>

              <div className="card-game-link mt-4 text-left">
                {props.isPublished && activity.gameBooking.isActive ? (
                  <button
                    onClick={() => bookGame(activity.gameBooking)}
                    className="border-2 w-[240px] card-book-btn-x block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
                  >
                    BOOK NOW
                  </button>
                ) : (
                  <button className="border-2 w-[240px] card-book-btn-x block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">
                    COMING SOON
                  </button>
                )}

                {props.locationSlug ? (
                  <a
                    href={
                      "/" +
                      props.locationSlug +
                      "/activities/" +
                      activity.activitySlug
                    }
                    className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                  >
                    EXPLORE
                  </a>
                ) : (
                  <a
                    href={"/activities/" + activity.activitySlug}
                    className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                  >
                    EXPLORE
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EscapeGameList;
