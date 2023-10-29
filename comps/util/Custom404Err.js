import ThankLinkBox from "./ThankLinkBox";

const Custom404Err = () => {
  return (
    <div
      className="custom-err-sec relative bg-cover"
      style={{ background: "url('/assets/game-dt-bg.jpg')" }}
    >
      <div className="absolute top-0 left-0">
        {" "}
        <img className="w-full" src="/assets/game-home-or1.jpg"></img>
      </div>
      <div className="custom-err-box max-w-[1040px] mx-auto py-16 md:py-24 px-4 lg:py-28 relative z-30">
        <div className="cerr">
          <h1 className="text-center text-[#231800] text-6xl md:text-8xl font-extrabold">
            404
          </h1>
          <p className="md:text-xl text-gray-700 text-center">
            OOPS! It looks like you've reached a URL that doesn't exist. Please
            use the navigation above to find your way back to our amaizeing
            website.
          </p>
        </div>
        <div className="cerr-linking mt-8">
          <div className="mb-8">
            <h2 className="text-gold text-center font-os text-3xl md:text-4xl font-bold">
              SEE ALL GAMES AND EVENTS
            </h2>
          </div>
          <ThankLinkBox />
        </div>
      </div>
      <div className=" absolute bottom-0 left-0">
        {" "}
        <img className="w-full" src="/assets/game-home-or2.jpg"></img>
      </div>
    </div>
  );
};

export default Custom404Err;
