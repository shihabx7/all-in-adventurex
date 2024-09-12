import LocationBtn from "../util/LocationBtn";
import HeroLocBtn from "../util/HeroLocBtn";
const HomeHeroNew = (props) => {
  return (
    <div
      className="home-hero bg-[#111111] new-vx"
      style={{
        backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder pt-0 pb-24 rm:pb-28  xm:pb-28 md:py-24 lg:py-32 2xl:py-36  relative">
        <div className="homehero-img hm-img md:hidden w-full min-h-[280px] bg-[#000000]">
          <img
            className="w-full"
            alt={props.pageData.pageHeroMobile.alt}
            src={props.pageData.pageHeroMobile.url}
          ></img>
        </div>
        {/* shadow */}
        <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden z-10"></div>
        {/* shadow */}
        {/* =============stiker======= */}
        <div className="max-w-[84px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[26px] lg:top-[60px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto z-40">
          <img
            alt={
              props.pageData.themeImage.hasImage
                ? props.pageData.themeImage.alt
                : "Kid and familly friendly escape rooms Allinadventures"
            }
            src={
              props.pageData.themeImage.hasImage
                ? props.pageData.themeImage.url
                : "/assets/kid-and-familly-friendly-escape-rooms-allinadventures.png"
            }
          ></img>
        </div>
        {/* =============stiker======= */}
        <div className="max-w-7xl home-hero-containerx mx-auto mt-[-28%] rm:mt-[-26%] lm:mt-[-25%] zm:mt-[-24%] sm:mt-[-22%] md:mt-0 md:pt-[160px] lg:pt-20 relative px-4  z-20">
          <div className="page-benar-info  mx-auto">
            <p className=" md:mt-4 lg:mt-6 xl:mt-0 font-semibold rm:text-lg md:text-2xl rm:mb-[-5px] xm:mb-1 text-white text-center leading-[1.1]">
              CHOOSE FROM {props.pageData.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold font-bold text-center text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os outline-tile">
              {props.pageData.pageTitle
                ? props.pageData.pageTitle
                : "ESCAPE ROOMS AND ADVENTURE ACTIVITIES"}
            </h1>
            <div
              className="text-gray-300 md:text-slate-50 max-w-[860px] mx-auto text-center lg:text-lg nocopy"
              dangerouslySetInnerHTML={{ __html: props.pageData.pageSubTitle }}
            ></div>
          </div>
          <div className="max-w-md mx-auto mt-5 rm:mt-6 xm:mt-6  md:mt-8  ">
            {/*============location search btn==========*/}
            <HeroLocBtn />
            {/*============location search btn==========*/}
          </div>
        </div>
        {/* =============info bar======= */}
        <div className="drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[95%]  xm:max-w-[92%] mx-auto md:max-w-3xl absolute bottom-[-11%] rm:bottom-[-11%] lm:bottom-[-10%] zm:bottom-[-10%] sm:bottom-[-9%] md:bottom-[-8%] left-0 right-0  bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded z-30">
          <div className="flex flex-wrap md:grid justify-center items-center md:grid-cols-5 ">
            <div className="text-center w-[33%] md:w-auto">
              <div className="boarf">
                <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.totalUniqueGames}
                </h3>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                  Themed Games
                </p>
              </div>
            </div>
            <div className="text-center w-[33%] md:w-auto">
              <div className="border-l border-gray-300">
                <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.ageRange}
                </h3>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                  Age Range
                </p>
              </div>
            </div>
            <div className="text-center w-[33%] md:w-auto">
              <div className="border-l border-gray-300">
                <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.privateEvents}
                </h3>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                  Private Events
                </p>
              </div>
            </div>
            <div className="text-center w-[44%] md:w-auto border-t pt-2 mt-3 md:pt-0 md:mt-0 md:border-t-0  border-gray-300">
              <div className="md:border-l border-gray-300">
                <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.raveReviews}
                </h3>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Rave Reviews
                </p>
              </div>
            </div>
            <div className="text-center w-[44%] md:w-auto border-t md:border-t-0 pt-2 mt-3 md:pt-0 md:mt-0 border-gray-300">
              <div className="border-l  border-gray-300">
                <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.guestsServed}
                </h3>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Guests Served
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* =============info bar end======= */}
      </div>
    </div>
  );
};

export default HomeHeroNew;
