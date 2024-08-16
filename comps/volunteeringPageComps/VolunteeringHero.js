import LocationBtn from "../util/LocationBtn";

const VolunteeringHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        backgroundImage: "url('" + props.pageData.coverimageL + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="homehero-img w-full min-h-[280px] bg-[#000000] md:hidden">
          <img
            className="w-full"
            src={props.pageData.coverimageM}
            alt={
              props.pageData.coverimageM_alt
                ? props.pageData.coverimageM_alt
                : "Allinadventures escape room"
            }
          ></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-[100px] md:py-20 lg:py-32 xl:py-40 relative z-20">
          <div className="page-benar-info">
            <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center">
              CHOOSE FROM {props.totalLocations} U.S. LOCATIONS
            </p>
            <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1000px] mx-auto">
              {props.pageData.pagetitle}
            </h1>
            <div
              className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pageData.pagesubtitle }}
            ></div>
          </div>
          <div className="max-w-md mx-auto mt-8 ">
            {/*============location search btn==========*/}
            <div className="con-vol-btn">
              <a
                href="#contact-v"
                className="bg-red-600 hover:bg-red-700 rounded-full p-4 w-[240px] mx-auto font-medium text-center text-white text-lg block"
              >
                CONTACT US
              </a>
            </div>
            {/*============location search btn==========*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteeringHero;
