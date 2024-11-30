import GameTitleSeparator from "../util/GameTitleSeparator";
import MobileTitleSeparatorLeft from "./MobileTitleSeparatorLeft";
import MobileEscapeHomeCarousel from "./MobileEscapeHomeCarousel";

const MobileEscapeGameHomeSection = (props) => {
  return (
    <>
      <div className="mbl-h">
        <div className="mbl-h-container max-w-7xl mx-auto pt-16 md:pt-28 2xl:pt-32 px-4 md:px-12 lg:px-4">
          <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
            <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
              {/* ==================section title=====================*/}
              <div className="section-title-container">
                <div className="md:max-w-[76%] lg:max-w-[100%]">
                  <MobileTitleSeparatorLeft
                    title={
                      props.mobileEscapeRoomData.sectionTitle
                        ? props.mobileEscapeRoomData.sectionTitle
                        : "EXPERIENCE OUR MOBILE ESCAPE ROOMS"
                    }
                    label={"NEW"}
                    fontRM="3xl"
                  />
                </div>
                {props.mobileEscapeRoomData.sectionSubTitle ? (
                  <div
                    className="text-slate-100 md:text-lg mt-6"
                    dangerouslySetInnerHTML={{
                      __html: props.mobileEscapeRoomData.sectionSubTitle,
                    }}
                  ></div>
                ) : (
                  <></>
                )}
              </div>
              {/* ==================icon list=====================*/}
              <div className="text-slate-100 mbl-h-list mt-6">
                {props.mobileEscapeRoomData.iconList.length > 0 ? (
                  <>
                    {props.mobileEscapeRoomData.iconList.map((item, index) => {
                      return (
                        <div
                          key={item.id}
                          className="icon-row flex space-x-2 items-center my-3 2xl:my-3"
                        >
                          <div className="w-[42px] md:w-[44px] ">
                            <img
                              className="w-full"
                              alt={
                                item.icon.alt !== null
                                  ? item.icon.alt
                                  : "Allinadventures mobile escape room icon"
                              }
                              src={
                                item.icon.hasImage
                                  ? item.icon.url
                                  : "/assets/mobile-escape-room/icon/adventures.svg"
                              }
                            ></img>
                          </div>
                          <div
                            className="md:text-lg flex-1"
                            style={{ lineHeight: 1.3 }}
                          >
                            {item.text}
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
              <div className="mbl-h-btn flex space-x-2 justify-between md:justify-start md:space-x-6 mt-8">
                <a
                  href={
                    "/" +
                    props.locationSlug +
                    "/activities/mobile-escape-room#mobile-escape-room-form"
                  }
                  className="w-[48%] md:max-w-[220px] text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  INQUIRE NOW
                </a>
                <a
                  href={
                    "/" + props.locationSlug + "/activities/mobile-escape-room"
                  }
                  className="w-[48%] md:max-w-[220px] text-center block border text-white border-red-600 bg-transparent py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mt-3 md:mt-0 mb-6 md:mb-8 lg:mb-0">
              <div className="mbl-h-img">
                <img
                  alt={
                    props.mobileEscapeRoomData.sectionImage.alt !== null
                      ? props.mobileEscapeRoomData.sectionImage.alt
                      : "Allinadventures mobile escape room"
                  }
                  src={
                    props.mobileEscapeRoomData.sectionImage.hasImage
                      ? props.mobileEscapeRoomData.sectionImage.url
                      : "/assets/mobile-escape-room/allinadventures-mobile-escape-room.jpg"
                  }
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="mbl-carousel pb-16 md:pb-28 2xl:pb-32  mt-6 md:mt-10 2xl:mt-12">
          {props.mobileEscapeRoomData.infoList.length > 0 ? (
            <MobileEscapeHomeCarousel
              infoList={props.mobileEscapeRoomData.infoList}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      {/*home hero*/}
    </>
  );
};

export default MobileEscapeGameHomeSection;
