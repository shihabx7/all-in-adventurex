import LocationBtn from "../util/LocationBtn";
import Image from "next/image";
const ActivityRootHero = (props) => {
  return (
    <div
      className={"home-hero bg-[#111111]"}
      style={{
        backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
          <img
            className="w-full"
            src={props.pageData.pageHeroMobile.url}
            alt={props.pageData.pageHeroMobile.alt}
          ></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[100px] md:py-20 lg:py-32 xl:py-40 relative z-20">
          <div className="page-benar-info">
            {props.pageData.themeImage.hasImage ? (
              <div className="flex justify-center mb-1 md:mb-2">
                <div className=" theme-image">
                  <img
                    className="max-h-[30px] md:max-h-[32px] lg:max-h-[36px] 3xl:max-h-[40px]"
                    src={props.pageData.themeImage.url}
                    alt={props.pageData.themeImage.alt}
                  ></img>
                </div>
              </div>
            ) : (
              <></>
            )}

            <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center">
              CHOOSE FROM {props.pageData.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1000px] mx-auto">
              {props.pageData.pageTitle}
            </h1>
            <div
              className="pageSub text-gray-100 max-w-[840px] mx-auto text-center lg:text-lg"
              dangerouslySetInnerHTML={{
                __html: props.pageData.pageSubtitle,
              }}
            ></div>
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
          {props.pageData.pageNotice ? (
            <div
              className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pageData.pageNotice }}
            ></div>
          ) : (
            <></>
          )}

          <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[90%] md:max-w-3xl mx-auto bottom-[-66px] md:bottom-[-8%] left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded mt-6">
            <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
              <div className="text-center w-[33%] md:w-auto">
                <div className=" ">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.teamSize}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                    {props.pageData.teamSizeLabel}
                  </p>
                </div>
              </div>

              <div className="text-center w-[33%] md:w-auto">
                <div className="border-l border-gray-300">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.age}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Age Range
                  </p>
                </div>
              </div>

              <div className="text-center w-[33%] md:w-auto">
                <div className="border-l border-gray-300 ">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.duration} MIN
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Duration
                  </p>
                </div>
              </div>

              <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                <div className="border-l-0 border-gray-300 md:border-l ">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.successRate}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Success Rate
                  </p>
                </div>
              </div>

              <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
                <div className="border-l border-gray-300 ">
                  <p className="golden-text text-xl md:text-4xl font-os font-bold">
                    {props.pageData.privateEvents}
                  </p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                    Private
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityRootHero;
