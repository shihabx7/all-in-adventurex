import SectionBorderBottom from "../util/SectionBorderBottom";
const MobileEscapeHero = ({ pageHero, locationName }) => {
  return (
    <div className="mer-hero  bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 xl:py-24 3xl:py-28 px-4 overflow-hidden">
      <SectionBorderBottom />
      <div className="mbl-h-container max-w-7xl mx-auto ">
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
            {/* ==================section title=====================*/}
            <p className="text-[#4A2F03] text-[14px] rm:text-[15px] md:text-[22px] 2xl:text-[26px]">
              MOBILE ESCAPE ROOM IN{" "}
              <span className="uppercase">{locationName}</span>
            </p>
            <h1
              className="text-[#CA9342] font-bold  text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              {pageHero.pageTitle}
            </h1>
            {pageHero.pageSubTitle ? (
              <div
                className="text-slate-100 md:text-lg mt-6"
                dangerouslySetInnerHTML={{
                  __html: pageHero.pageSubTitle,
                }}
              ></div>
            ) : (
              <></>
            )}
            {/* ==================icon list=====================*/}
            <div className="text-[#2e2e2e] mbl-h-list mt-6">
              {pageHero.iconList.length > 0 ? (
                <>
                  {pageHero.iconList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="icon-row flex space-x-2 items-center my-3"
                      >
                        <div className="w-[36px] md:w-[42px]">
                          <img
                            className="w-full"
                            alt={
                              item.icon.hasImage
                                ? item.icon.alt
                                : "Allinadventures mobile escape room icon"
                            }
                            src={
                              item.icon.hasImage
                                ? item.icon.url
                                : "/assets/mobile-escape-room/icon/team-building-dark.svg"
                            }
                          ></img>
                        </div>
                        <div className="md:text-lg flex-1">
                          {item.text !== null
                            ? item.text
                            : " Perfect for Team-Building, Parties, and Special Events"}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-8 md:mt-10 2xl:mt-12">
              <a
                href="#mobile-escape-room-form"
                className="max-w-[240px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
              >
                GET A QUOTE
              </a>
            </div>
          </div>
          <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center">
              <img
                alt={
                  pageHero.pageHeroImage.hasImage
                    ? pageHero.pageHeroImage.alt
                    : "Allinadventure mobile escape room in" + locationName
                }
                src={
                  pageHero.pageHeroImage.hasImage
                    ? pageHero.pageHeroImage.url
                    : "/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png"
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeHero;
