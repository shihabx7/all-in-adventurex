const CareersHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        backgroundImage: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder relative">
        {/* shadow */}
        <div className="w-full h-full fyp-baner absolute top-0 left-0 md:hidden z-10"></div>
        {/* shadow */}
        <div className="homehero-img w-full min-h-[220px] md:hidden">
          <img
            src={props.pageData.pageHeroMobile.url}
            alt={
              props.pageData.pageHeroMobile.alt
                ? props.pageData.pageHeroMobile.alt
                : "Allinadventures escape room careers"
            }
          ></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-10">
          <div className="page-benar-info">
            <h1 className="text-gold aia-shadow font-bold text-center text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os uppercase max-w-[1100px] mx-auto">
              {props.pageData.pageTitle}
            </h1>
            <div
              className="text-gray-100 max-w-[840px] mx-auto text-center lg:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pageData.pageSubTitle }}
            ></div>
          </div>
          <div className="max-w-md mx-auto mt-8 ">
            {/*============alljob-  btn==========*/}
            {props.btnId ? (
              <a
                href={"#" + props.btnId}
                className="block py-3 px-10 bg-red-600 hover:bg-red-700 text-white text-center md:text-lg rounded-full"
              >
                {props.btnLabel}
              </a>
            ) : (
              <></>
            )}
            {props.btnLink ? (
              <a
                href={props.btnLink}
                className="block py-3 px-10 bg-red-600 hover:bg-red-700 text-white text-center md:text-lg rounded-full"
              >
                {props.btnLabel}
              </a>
            ) : (
              <></>
            )}

            {/*============alljob search btn==========*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
