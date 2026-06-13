import TitleSeparator from "../util/TitleSeparator";
import { locationBookingInfo } from "../../lib/v2/data/locationBookingInfo";

const EventLocList = (props) => {
  // ======================================================= section function
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: "items",
    });
  };
  const bookEventFlow = (locationSlug) => {
    let bookingData = locationBookingInfo[locationSlug];
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.partyPackageFlow,
    });
  };
  // ======================================================= section function

  return (
    <div className="all-events relative   md:pt-8 lg:pt-12 bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>

      {/*======================= boder img end============== */}
      {/**=================== all event list============*/}
      <div className="all-games-container max-w-7xl mx-auto relative  z-30 pt-[110px] pb-4  md:pt-20 lg:pt-28 px-4">
        {/**=================== ===================================section head============*/}
        <div className="section-title pt-12 md:pt-5 text-center max-w-[960px] mx-auto ">
          <h2 className="dark-gold text-2xl uppercase md:text-[40px] lg:text-[44px] font-os font-bold">
            {props.eventListData.title
              ? props.eventListData.title
              : "AN INCREDIBLE ESCAPE ROOM PARTY VENUE"}
          </h2>
          <div
            className="text-gray-800 mt-3 md:mt-4 lg:mt-5 md:text-lg xl:text-[1.2rem]"
            dangerouslySetInnerHTML={{ __html: props.eventListData.subTitle }}
          ></div>
        </div>

        {/**===================  ===================================================================event list grids============*/}
        <div className="all-gamelist-box  mt-8 md:mt-10 lg:mt-12  grid grid-cols-1 gap-y-6 md:gap-y-7 lg:gap-y-10">
          {props.eventListData.eventList.map((event) => {
            return (
              <div
                key={event.id}
                className="all-game-list bg-center bg-cover px-2 lm:px-3 xm:px-4 py-6 md:p-6 lg:p-8 rounded-[10px]"
                style={{
                  backgroundImage:
                    "linear-gradient(12deg, rgba(0,0,0,0.98),rgba(0,0,0,0.84),rgba(0,0,0,0.71),rgba(0,0,0,0),rgba(0,0,0,0)),url('" +
                    event.eventListImage.url +
                    "')",
                  boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.25)",
                }}
              >
                <div className="all-game-list-gap py-[128px] md:py-[120px] lg:py-[120px]"></div>
                <div className="all-game-list-bottom">
                  <div className=" text-center md:text-left">
                    <h3 className="card-game-title text-[1.2rem] rm:text-[1.25rem] md:text-3xl lg:text-4xl font-bold uppercase text-gold">
                      {event.eventName}
                    </h3>
                    <p className="text-gray-200 text-sm rm:text-[.94rem] md:text-base lg:text-lg mx-auto md:mx-0 max-w-[490px]">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center space-x-0 space-y-4 md:space-y-0 md:items-start md:justify-start md:flex-row md:space-x-3 lg:space-x-4 mt-6 text-left">
                    <a
                      href={
                        "/" + props.locationSlug + "/events/" + event.eventSlug
                      }
                      className="text-center border-2   border-red-600 bg-transparent py-2 md:py-3 px-12 rounded-full font-medium text-lg  hover:bg-red-700 hover:border-red-700 text-white"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="link-btn mt-10 md:mt-12 lg:mt-16">
          <a
            href={"/" + props.locationSlug + "/activities"}
            className="border-2 max-w-[280px] text-center  block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
          >
            VIEW ALL GAMES
          </a>
        </div>
      </div>
      {/**=================== all event list============*/}
    </div>
  );
};

export default EventLocList;
