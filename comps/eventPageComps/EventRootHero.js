
import { useSiteData } from "../../contexts/SiteDataContext";

const EventRootHero = (props) => {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("partyPackage-list");
    openModalMenu();
  };
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder  pt-0 pb-24 rm:pb-28  xm:pb-28 md:py-24 lg:py-32 2xl:py-36  relative">
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
            <p className="md:mt-4 lg:mt-6 xl:mt-0 font-semibold rm:text-lg md:text-2xl rm:mb-[-5px] xm:mb-1 text-white text-center leading-[1.1] uppercase">
              CHOOSE FROM {props.pageData.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold aia-shadow font-bold text-center text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os uppercase max-w-[1100px] mx-auto">
              {props.pageData.pageTitle}
            </h1>

            <div
              className="pageSub text-gray-100 max-w-[840px] mx-auto text-center lg:text-lg"
              dangerouslySetInnerHTML={{
                __html: props.pageData.pageSubtitle,
              }}
            ></div>
          </div>
          <div className="max-w-md mx-auto mt-5 rm:mt-6 xm:mt-6  md:mt-8 ">
            {/*============location search btn==========*/}
          <div className="md:max-w-[380px] xl:max-w-[400px] mx-auto mt-5 rm:mt-6 xm:mt-6 md:mt-8  xl:mt-10 ">
                <button
                  onClick={(e)=>showLocModal()}
                  className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
                >
                  BOOK YOUR EVENT
                </button>
              </div>
            {/*============location search btn==========*/}
          </div>
          {props.pageData.notice && (
            <div
              className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pageData.notice }}
            ></div>
          )}
        </div>
        <div className="evt-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[95%]  xm:max-w-[92%] mx-auto md:max-w-3xl absolute bottom-[-11%] rm:bottom-[-11%] lm:bottom-[-10%] zm:bottom-[-10%] sm:bottom-[-9%] md:bottom-[-8%] left-0 right-0  bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded z-30">
          <div className="flex flex-wrap w-full justify-center md:grid md:grid-cols-5  md:justify-evenly items-center ">
            {props.pageData.totalUniqueGames && (
              <div className="text-center w-[33%] md:w-auto">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.totalUniqueGames}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                  Themed Games
                </p>
              </div>
            )}

            <div className="text-center w-[33%] md:w-auto">
              <div className="border-l border-gray-300">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.guestCapacity}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Guest Capacity
                </p>
              </div>
            </div>

            <div className="text-center w-[33%] md:w-auto">
              <div className="border-l border-gray-300">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.ageRange}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Age
                </p>
              </div>
            </div>

            <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
              <div className="border-l-0 border-gray-300 md:border-l ">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.catering}
                </p>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                  Catering
                </p>
              </div>
            </div>

            <div className="text-center w-[44%] md:w-auto pt-2 mt-3 border-t border-gray-300 md:pt-0 md:mt-0 md:border-t-0">
              <div className="border-l border-gray-300 ">
                <p className="golden-text text-xl md:text-4xl font-os font-bold">
                  {props.pageData.guestServed}
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

export default EventRootHero;
