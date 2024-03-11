import LocationBtn from "./LocationBtn";
const OtherHero = (props) => {
  return (
    <div
      className="other-home-hero relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/game-dt-bg.jpg')",
      }}
    >
      <div className="w-full absolute top-0 left-0 ">
        <img className="w-full" src="/assets/game-home-or1.jpg"></img>
      </div>
      <div className="htb-bg-icon htb-bg-2 ot-hero-icon absolute right[-104px]">
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="home-hero-holder ">
        <div className="max-w-7xl  mx-auto px-4 pt-16 pb-16 md:py-20 lg:py-32 xl:py-40 relative z-10">
          <div className="page-benar-info">
            <p className=" md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-[#111111] text-center">
              CHOOSE FROM {props.pagedata.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="dark-gold font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase">
              {props.pagedata.pagetitle}{" "}
            </h1>
            <p className="text-[#333333] max-w-2xl mx-auto text-center lg:text-lg">
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
          {props.gametotal != "not" && <div className="mb-8"> </div>}

          {props.gametotal != "not" && (
            <div
              style={{
                background: "#FFFBF3",
              }}
              className="un-games  max-w-2xl mx-auto bottom-4 left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded"
            >
              <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                <div className="text-center flex justify-center">
                  {props.pagedata.totalUniqueGames && (
                    <div>
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.totalUniqueGames}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        Unique Games
                      </p>
                    </div>
                  )}
                  {props.pagedata.max_players && (
                    <div>
                      <p className="golden-text text-xl md:text-4xl font-os font-bold">
                        {props.pagedata.min_players}-
                        {props.pagedata.max_players}
                      </p>
                      <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
                        Players
                      </p>
                    </div>
                  )}
                </div>
                {props.pagedata.totalFiveStarReview && (
                  <div className="text-center">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pagedata.totalFiveStarReview}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      5-Star Reviews
                    </p>
                  </div>
                )}
                {props.pagedata.price && (
                  <div className="text-center">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      ${props.pagedata.price}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      Per Player
                    </p>
                  </div>
                )}
                {props.pagedata.totalPlayerEscaped && (
                  <div className="text-center">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pagedata.totalPlayerEscaped}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      Players Escaped
                    </p>
                  </div>
                )}
                {props.pagedata.duration && (
                  <div className="text-center">
                    <p className="golden-text text-xl md:text-4xl font-os font-bold">
                      {props.pagedata.duration} MIN
                    </p>
                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">
                      Duration
                    </p>
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

export default OtherHero;
