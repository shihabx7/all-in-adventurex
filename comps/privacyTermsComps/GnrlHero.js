const GnrlHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        background: "url('" + props.pageData.pageHeroDesktop.url + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="homehero-img w-full min-h-[280px] md:hidden bg-[#111111]">
          <img
            src={props.pageData.pageHeroMobile.url}
            alt={
              props.pageData.pageHeroMobile.alt
                ? props.pageData.pageHeroMobile.alt
                : "Allinadventures escape room "
            }
          ></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-20">
          <div className="page-benar-info">
            <h1 className="golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase max-w-[1000px] mx-auto">
              {props.pageData.pageTitle}
            </h1>
            <div
              className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pageData.pageSubTitle }}
            ></div>
          </div>

          {props.pageData.notice ? (
            <div
              className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg"
              dangerouslySetInnerHTML={{ __html: props.pageData.notice }}
            ></div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default GnrlHero;
