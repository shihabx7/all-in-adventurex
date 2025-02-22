import LocationBtn from "../util/LocationBtn";
const HomeHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111] new-vx"
      style={{
        backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder relative">
        <div className="homehero-img md:hidden w-full min-h-[280px] bg-[#000000]">
          <img
            className="w-full"
            alt={props.pageData.pageHeroMobile.alt}
            src={props.pageData.pageHeroMobile.url}
          ></img>
        </div>
        <div className="theme-img max-w-[84px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[26px] lg:top-[46px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto">
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
        <div className="max-w-7xl home-hero-container mx-auto px-4 pb-[90px] pt-0 md:pb-24 md:pt-[160px] lg:pb-28 lg:pt-[210px] relative z-10">
          <div className="page-benar-info max-w-[900px] mx-auto">
            <p className="leading-[1.2] md:mt-4 lg:mt-6 xl:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center">
              CHOOSE FROM {props.pageData.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os outline-tile">
              {props.pageData.pageTitle
                ? props.pageData.pageTitle
                : "ESCAPE ROOMS AND ADVENTURE ACTIVITIES"}
            </h1>
            <div
              className="text-gray-100 max-w-[840px] mx-auto text-center lg:text-lg nocopy"
              dangerouslySetInnerHTML={{ __html: props.pageData.pageSubTitle }}
            ></div>
          </div>
          <div className="max-w-md mx-auto mt-8 pb-8 ">
            {/*============location search btn==========*/}
            <LocationBtn />
            {/*============location search btn==========*/}
          </div>

          <div className="drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)]  mx-auto bottom-[-66px] max-w-[90%] md:max-w-3xl md:bottom-[-8%] left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
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
                    {/*props.pageData.ageRange*/}6+
                  </h3>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                    Age
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
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
