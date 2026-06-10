import { useSiteData } from "../../../contexts/SiteDataContext";
import { locationBookingInfo } from "../../../lib/v2/data/locationBookingInfo";
export default function HomePageEventLisSection(props) {
  const { openModalMenu, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalMenuType("partyPackage-list");
    openModalMenu();
  };
  const bookEventFlow = (e, locationSlug) => {
    e.preventDefault();
    let bookingData = locationBookingInfo[locationSlug];
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.partyPackageFlow,
    });
  };
  return (
    <div className="event-list-section-v2 bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px]">
      <div className="section-container max-w-[600px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-4 xl:px-6 mx-auto">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12 md:max-w-[720px] lg:max-w-[800px] mx-auto">
          <h2 className="dark-gold py-[2px]  text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
            ESCAPE ROOM EVENTS AND PARTIES
          </h2>
          <p className="text-[#2E2E2E] mt-1 md:mt-2 text-center md:text-lg lg:text-xl  md:max-w-[700px]  mx-auto">
            Make your next celebration unforgettable. From birthdays to
            team-building, we've got the perfect party experience for everyone.
          </p>
        </div>
        {/*==========================================================================================================event  list====*/}
        <div className="event-list-grid-v2-box">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 xl:gap-4 rounded-lg ">
            {/*======================================================================================== =event  col  1-====*/}
            {/*======================================================================================== item.listCardBgImage ? item.listCardBgImage.url========= item.listCardBgImage ? item.listCardBgImage.url====*/}
            <div className="event-item-col w-full rounded-lg bg-[#090909] relative">
              <div className="event-card-bg-img rounded-lg w-full h-full absolute top-0 left-0 z-[10]">
                <img
                  className="w-full h-full rounded-lg object-cover object-center"
                  alt={"birthday party"}
                  src={
                    "/assets/event-page-v2/birthday/birthday-party-list-card-v.jpg"
                  }
                ></img>
              </div>
              <div className="bg-img-over-lay rounded-lg w-full h-full absolute top-0 left-0 z-[20] overlay-dark-bottom "></div>

              <div className="event-info-content h-full flex flex-col justify-between relative z-[30] p-2 rm:p-3 zm:p-4 md:px-3 md:py-5 xl:px-5 xl:py-6">
                <div className="list-card-gap h-[180px] rm:h-[200px] md:h-[300px] xl:h-[320px]"></div>
                {/*=========================================game  decription====*/}
                <div className="bottom-section md:max-w-[440px] lg:max-w-[700px] flex flex-col justify-end space-y-6">
                  <div className="txt">
                    <h3 className="egl-game-title leading-[1.1] font-bold text-[1.1rem] rm:text-[1.2rem] zm:text-[1.1rem] xl:text-[1.1875rem]  2xl:text-[1.2rem] uppercase text-[#E0BF62]">
                      {/*item.partyName*/}
                      BIRTHDAY PARTIES
                    </h3>
                    {/*=========================================game short decription====*/}
                    <div className="egl-shot-desc mt-2 md:mt-2 xl:mt-3">
                      <p className="text-[#ADADAD] text-sm  xl:text-base">
                        {/*============item.desc======*/}A perfect party venue
                        for the young at heart. No matter your age, get an
                        unforgettable adventure!
                      </p>
                    </div>
                  </div>

                  {/*=========================================game button===*/}

                  <div className="egl-btn-pair mt-7 md:mt-6 mb-3 xl:mt-8 xl:mb-2">
                    {!props.locationSlug && (
                      <div className="flex justify-between md:justify-start lg:justify-center items-center space-x-2 md:space-x-1 lg:space-x-2 ">
                        <button
                          onClick={showLocModal}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 py-[11px] xl:px-4 xl:py-3 text-center font-medium"
                        >
                          BOOK NOW
                        </button>

                        <a
                          href={`/events/birthday-party`}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 md:px-4 py-[11px] xl:px-6 xl:py-3 text-center font-medium"
                        >
                          EXPLORE
                        </a>
                      </div>
                    )}
                    {props.locationSlug && (
                      <div className="flex justify-between md:justify-start lg:justify-center items-center space-x-2 md:space-x-1 lg:space-x-2 ">
                        <button
                          onClick={(e) => bookEventFlow(e, props.locationSlug)}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 py-[11px] xl:px-4 xl:py-3 text-center font-medium"
                        >
                          BOOK NOW
                        </button>

                        <a
                          href={
                            "/" + props.locationSlug + "/events/birthday-party"
                          }
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 md:px-4 py-[11px] xl:px-6 xl:py-3 text-center font-medium"
                        >
                          EXPLORE
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*==========================================================================================================event  col  2-====*/}
            <div className="event-item-col w-full rounded-lg bg-[#090909] relative">
              <div className="event-card-bg-img rounded-lg w-full h-full absolute top-0 left-0 z-[10]">
                <img
                  className="w-full h-full rounded-lg object-cover object-center"
                  alt={"Corporate Events & Team Building "}
                  src={
                    "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-list-card-v.jpg"
                  }
                ></img>
              </div>
              <div className="bg-img-over-lay rounded-lg w-full h-full absolute top-0 left-0 z-[20] overlay-dark-bottom "></div>

              <div className="event-info-content h-full flex flex-col justify-between  relative z-[30] p-2 rm:p-3 zm:p-4 md:px-3 md:py-5 xl:px-5 xl:py-6">
                <div className="list-card-gap h-[180px] rm:h-[200px] md:h-[300px] xl:h-[320px]"></div>
                {/*=========================================game  decription====*/}
                <div className="bottom-section md:max-w-[440px] lg:max-w-[700px] flex flex-col justify-end space-y-6">
                  <div className="txt">
                    <h3 className="egl-game-title leading-[1.1] font-bold text-[1.1rem] rm:text-[1.2rem] zm:text-[1.1rem] xl:text-[1.1875rem]  2xl:text-[1.2rem] uppercase text-[#E0BF62]">
                      {/*item.partyName*/}
                      Team Building & Group Events
                    </h3>
                    {/*=========================================game short decription====*/}
                    <div className="egl-shot-desc mt-2 md:mt-2 xl:mt-3">
                      <p className="text-[#ADADAD] text-sm xl:text-base ">
                        {/*============item.desc======*/}A perfect party venue
                        for This fun and exciting interactive form of team
                        building will bring your corporate team closer!
                      </p>
                    </div>
                  </div>

                  {/*=============================================================================book button===*/}
                  <div className="egl-btn-pair mt-7 md:mt-6 mb-3 xl:mt-8 xl:mb-2">
                    {!props.locationSlug && (
                      <div className="flex justify-between md:justify-start lg:justify-center items-center space-x-2 md:space-x-1 lg:space-x-2 ">
                        <button
                          onClick={showLocModal}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 py-[11px] xl:px-4 xl:py-3 text-center font-medium"
                        >
                          BOOK NOW
                        </button>

                        <a
                          href={`/events/birthday-party`}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 md:px-4 py-[11px] xl:px-6 xl:py-3 text-center font-medium"
                        >
                          EXPLORE
                        </a>
                      </div>
                    )}
                    {props.locationSlug && (
                      <div className="flex justify-between md:justify-start lg:justify-center items-center space-x-2 md:space-x-1 lg:space-x-2 ">
                        <button
                          onClick={(e) => bookEventFlow(e, props.locationSlug)}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 py-[11px] xl:px-4 xl:py-3 text-center font-medium"
                        >
                          BOOK NOW
                        </button>

                        <a
                          href={
                            "/" + props.locationSlug + "/events/team-building"
                          }
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 md:px-4 py-[11px] xl:px-6 xl:py-3 text-center font-medium"
                        >
                          EXPLORE
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*==========================================================================================================event  col  3-====*/}
            <div className="event-item-col w-full rounded-lg bg-[#090909] relative">
              <div className="event-card-bg-img rounded-lg w-full h-full absolute top-0 left-0 z-[10]">
                <img
                  className="w-full h-full rounded-lg object-cover object-center"
                  alt={"school event"}
                  src={
                    "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-event-list-card-v.jpg"
                  }
                ></img>
              </div>
              <div className="bg-img-over-lay rounded-lg w-full h-full absolute top-0 left-0 z-[20] overlay-dark-bottom "></div>

              <div className="event-info-content  h-full flex flex-col justify-between relative z-[30] p-2 rm:p-3 zm:p-4 md:px-3 md:py-5 xl:px-5 xl:py-6">
                <div className="list-card-gap h-[180px] rm:h-[200px] md:h-[300px] xl:h-[320px]"></div>
                {/*=========================================game  decription====*/}
                <div className="bottom-section md:max-w-[440px] lg:max-w-[700px] flex flex-col justify-end space-y-6">
                  <div className="txt">
                    <h3 className="egl-game-title leading-[1.1] font-bold text-[1.1rem] rm:text-[1.2rem] zm:text-[1.1rem] xl:text-[1.1875rem]  2xl:text-[1.2rem] uppercase text-[#E0BF62]">
                      {/*item.partyName*/}
                      School Events & Field Trips
                    </h3>
                    {/*=========================================game short decription====*/}
                    <div className="egl-shot-desc mt-2 md:mt-2 xl:mt-3">
                      <p className="text-[#ADADAD]  text-sm xl:text-base ">
                        {/*============item.desc======*/}Students exercise
                        critical thinking and act to become the super-spies they
                        see in the movies!
                      </p>
                    </div>
                  </div>

                  {/*=========================================game button===*/}
                  <div className="egl-btn-pair mt-7 md:mt-6 mb-3 xl:mt-8 xl:mb-2">
                    {!props.locationSlug && (
                      <div className="flex justify-between md:justify-start lg:justify-center items-center space-x-2 md:space-x-1 lg:space-x-2 ">
                        <button
                          onClick={showLocModal}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 py-[11px] xl:px-4 xl:py-3 text-center font-medium"
                        >
                          BOOK NOW
                        </button>

                        <a
                          href={`/events/school-events`}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 md:px-4 py-[11px] xl:px-6 xl:py-3 text-center font-medium"
                        >
                          EXPLORE
                        </a>
                      </div>
                    )}
                    {props.locationSlug && (
                      <div className="flex justify-between md:justify-start lg:justify-center items-center space-x-2 md:space-x-1 lg:space-x-2 ">
                        <button
                          onClick={(e) => bookEventFlow(e, props.locationSlug)}
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 py-[11px] xl:px-4 xl:py-3 text-center font-medium"
                        >
                          BOOK NOW
                        </button>

                        <a
                          href={
                            "/" + props.locationSlug + "/events/school-events"
                          }
                          className=" w-[48%] lm:w-[47%] md:w-[48%] border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm xl:text-base  text-white px-5 md:px-4 py-[11px] xl:px-6 xl:py-3 text-center font-medium"
                        >
                          EXPLORE
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
