import LocationBtn from "../util/LocationBtn";
const CorContactHero = (props) => {
  return (
    <>
      <div
        className="home-hero contact hero bg-[#111111]"
        style={{
          backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
        }}
      >
        <div className="home-hero-holder ">
          <div className="homehero-img md:hidden min-h-[280px] bg-[#000000]">
            <img
              src={props.pageData.pageHeroMobile.url}
              alt={props.pageData.pageHeroMobile.alt}
            ></img>
          </div>
          <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-20">
            <div className="page-benar-info">
              <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center uppercase">
                CHOOSE FROM {props.totalLocations} U.S. LOCATIONS
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1100px] mx-auto">
                {props.pageData.pageTitle}
              </h1>
              <div
                className="text-gray-100 max-w-[840px] mx-auto text-center lg:text-lg contact-store-hero-desc"
                dangerouslySetInnerHTML={{
                  __html: props.pageData.pageSubtitle,
                }}
              ></div>
            </div>
            <div className="max-w-md mx-auto mt-8 ">
              {/*============location search btn==========*/}
              <LocationBtn />

              {/*============location book btn==========*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorContactHero;
