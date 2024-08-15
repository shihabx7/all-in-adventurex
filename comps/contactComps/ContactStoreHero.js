const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};
const bookEvent = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: { item: bookingData.itemNo },
  });
};

const ContactStoreHero = (props) => {
  return (
    <>
      <div
        className="home-hero bg-[#111111]"
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
              {!props.isPublished ? (
                <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4">
                  <img
                    className="max-w-[400px] mx-auto"
                    src="/assets/svg/coming-soon.svg"
                  ></img>
                </div>
              ) : (
                ""
              )}

              <p className="leading-[1.2] md:mt-0 font-semibold text-lg md:text-2xl mb-1 text-white text-center uppercase">
                At {props.pageData.mall} in {props.locationName}
              </p>
              <h1 className="text-gold aia-shadow font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-2 rm:mb-2 md:mb-4 lg:mb-6 font-os uppercase max-w-[1000px] mx-auto">
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
              {props.isPublished ? (
                <>
                  <button
                    onClick={() => bookAll(props.allBooking)}
                    className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                  >
                    BOOK YOUR GAMES
                  </button>
                  {props.eventBooking.isActive ? (
                    <button
                      onClick={() => {
                        bookEvent(props.eventBooking);
                      }}
                      className="block w-full mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                    >
                      BOOK YOUR PARTY
                    </button>
                  ) : (
                    <>
                      <a
                        href={"/" + props.locationSlug + "/events"}
                        className="block w-full mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                      >
                        BOOK YOUR PARTY
                      </a>
                    </>
                  )}
                </>
              ) : (
                <>
                  <a
                    href={"/" + props.locationSlug + "/activities"}
                    className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg"
                  >
                    VIEW ALL ACTIVITIES
                  </a>
                  <a
                    href={"/" + props.locationSlug + "/events"}
                    className="block mt-4 py-3 rounded-full text-center text-white font-medium border-2 border-red-600 hover:bg-red-700 hover:border-red-700 text-lg"
                  >
                    VIEW ALL EVENTS
                  </a>
                </>
              )}

              {/*============location book btn==========*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactStoreHero;
