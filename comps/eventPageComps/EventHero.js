import LocationBtn from "../util/LocationBtn";

const EventHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        background: "url('" + props.pagedata.coverimageL + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
          <img
            className="w-full"
            src={props.pagedata.coverimageM}
            alt={props.pagedata.coverimageM_alt}
          ></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[100px] md:py-20  lg:py-32 xl:py-40 relative z-20">
          <div className="page-benar-info">
            <p className=" md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center">
              CHOOSE FROM {props.pagedata.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase max-w-[1000px] mx-auto">
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
          <div className="mb-6"> </div>

          <div className="evt-ft drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[90%] md:max-w-3xl mx-auto bottom-[-66px] md:bottom-[-8%] left-0 right-0 absolute bg-white px-0 py-4 md:py-4 md:px-4 lg:py-6  rounded">
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
                    Guest Capacity
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
        </div>
      </div>
    </div>
  );
};

export default EventHero;
