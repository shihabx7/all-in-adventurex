import LocationBtn from "../util/LocationBtn";
import Image from "next/image";
const ActivityRootListHero = (props) => {
  return (
    <div
      className={"home-hero bg-[#111111]"}
      style={{
        backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder pt-0 pb-24 rm:pb-28  xm:pb-28 md:py-24 lg:py-32 2xl:py-36  relative">
        <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
          <img
            className="w-full"
            src={props.pageData.pageHeroMobile.url}
            alt={props.pageData.pageHeroMobile.alt}
          ></img>
        </div>
        {/* shadow */}
        <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden z-10"></div>
        {/* shadow */}
        <div className="max-w-7xl home-hero-containerx mx-auto mt-[-28%] rm:mt-[-26%] lm:mt-[-25%] zm:mt-[-24%] sm:mt-[-22%] md:mt-0 md:pt-[60px] lg:pt-20 relative px-4  z-20">
          <div className="page-benar-info">
            <p className="md:mt-4 lg:mt-6 xl:mt-0 font-semibold zm:text-lg md:text-2xl rm:mb-[-5px] xm:mb-1 text-white text-center leading-[1.2] uppercase">
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
          <div className="max-w-md mx-auto mt-5 rm:mt-6 xm:mt-6  md:mt-8">
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
        </div>
        <div className="game-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[95%]  xm:max-w-[92%] mx-auto md:max-w-3xl absolute bottom-[-11%] rm:bottom-[-11%] lm:bottom-[-10%] zm:bottom-[-10%] sm:bottom-[-9%] md:bottom-[-8%] left-0 right-0  bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded z-40">
          <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
            <div className="text-center w-[33%] md:w-auto">
              <div className=" ">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.totalUniqueGames}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                  Themed Games
                </p>
              </div>
            </div>

            <div className="text-center w-[33%] md:w-auto">
              <div className="border-l border-gray-300">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.ageRange}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Age Range
                </p>
              </div>
            </div>

            <div className="text-center w-[33%] md:w-auto">
              <div className="border-l border-gray-300 ">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.privateEvents}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Private Events
                </p>
              </div>
            </div>

            <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
              <div className="border-l-0 border-gray-300 md:border-l ">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.raveReviews}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Rave Reviews
                </p>
              </div>
            </div>

            <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
              <div className="border-l border-gray-300 ">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.guestsServed}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Guests Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityRootListHero;
