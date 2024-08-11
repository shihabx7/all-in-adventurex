import TitleSeparator from "../util/TitleSeparator";

const ActivityRootList = (props) => {
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");

    document.getElementById("locmenu").classList.remove("hidden");
  };

  return (
    <>
      <div className=" relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
        {/*======================= boder img============== */}
        <div className="sec-divider-top w-full absolute top-0 left-0 ">
          <img
            className="w-full hidden md:block"
            src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
          ></img>
          <img
            className="w-full rotate-180 md:hidden"
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
          ></img>
        </div>
        <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
          <img
            className="w-full hidden md:block"
            src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
          ></img>
          <img
            className="w-full  md:hidden"
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
          ></img>
        </div>
        {/*======================= boder img end============== */}
        <div className="all-games-container max-w-7xl mx-auto relative  z-30 pt-[110px] pb-16 md:py-20 lg:py-28 px-4">
          <div className="all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
            <div className="section-title  text-center max-w-[840px] mx-auto">
              <TitleSeparator title={props.activityData.escapeGames.title} />
              <div
                className="text-gray-700 mt-4 md:mt-6 mb-4 md:mb-6 md:px-8 md:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.activityData.escapeGames.subtitle,
                }}
              ></div>
            </div>
            {props.activityData.escapeGames.activityList.map((activity) => {
              return (
                <div
                  key={activity.id}
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

                    <div className="pricelist-container  w-[50%] max-w-[220px] p-[2px] md:p-[6px] bg-red-600">
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
                          <>
                            <p className="text-lg text-white">FROM</p>
                            <p className="text-3xl text-white font-bold">
                              ${activity.price[0].Price}
                            </p>
                          </>
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
                      <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[700px]">
                        {activity.description}
                      </p>
                    </div>

                    <div className="card-game-link mt-4 text-left">
                      <button
                        onClick={showLocation}
                        className="border-2 w-[240px] card-book-btn-r block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        BOOK NOW
                      </button>

                      <a
                        href={"/activities/" + activity.activitySlug}
                        className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        EXPLORE
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/**=========================================other in person games============== */}

          <div
            id="others-physical-games"
            className="pt-20 all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8"
          >
            <div className="section-title text-center max-w-[800px] mx-auto">
              <TitleSeparator title={props.activityData.otherGames.title} />
              <div
                className="text-gray-700 md:px-8 md:text-lg"
                dangerouslySetInnerHTML={{
                  __html: props.activityData.otherGames.subtitle,
                }}
              ></div>
            </div>
            {props.activityData.otherGames.activityList.map((activity) => {
              return (
                <div
                  key={activity.id}
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
                            <p className="text-lg text-white text-center">
                              FROM
                            </p>
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
                      <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[700px]">
                        {activity.description}
                      </p>
                    </div>

                    <div className="card-game-link mt-4 text-left">
                      <button
                        onClick={showLocation}
                        className="border-2 w-[240px] card-book-btn-r block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        BOOK NOW
                      </button>

                      <a
                        href={"/activities/" + activity.activitySlug}
                        className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        EXPLORE
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/**=========================================other in person games end============== */}
          <div className="link-btn mt-8 md:mt-16">
            {props.locationslug && (
              <a
                href={"/" + props.locationslug + "/events"}
                className="border-2 max-w-[280px] text-center block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
              >
                VIEW ALL EVENTS
              </a>
            )}
            {!props.locationslug && (
              <a
                href="/events"
                className="border-2 max-w-[280px] text-center block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
              >
                VIEW ALL EVENTS
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityRootList;
