const PtHero = (props) => {
  return (
    <div
      className="home-hero bg-[#111111]"
      style={{
        background: "url('" + props.pageData.coverimageL + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="homehero-img w-full min-h-[280px] md:hidden bg-[#111111]">
          <img src={props.pageData.coverimageM}></img>
        </div>
        <div className="max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-20">
          <div className="page-benar-info">
            <h1 className="golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase max-w-[1000px] mx-auto">
              {props.pageData.pagetitle}{" "}
            </h1>
            {props.pageData.pagesubtitle ? (
              <p className="text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">
                {props.pageData.pagesubtitle}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PtHero;
