import Link from "next/link";
import TitleSeparator from "../util/TitleSeparator";

const EventList = (props) => {
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");

    document.getElementById("locmenu").classList.remove("hidden");
  };
  const bookGame = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.item },
    });
  };
  return (
    <div
      className="all-events relative bg-center bg-cover  md:pt-8 lg:pt-12"
      style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
    >
      <div className="w-full absolute top-0 left-0 ">
        <img className="w-full" src="/assets/game-home-or1.jpg"></img>{" "}
      </div>
      <div className="all-games-container max-w-7xl mx-auto relative  z-30 pt-[110px] pb-16 md:py-20 lg:py-28 px-4">
        <div className="all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
          <div className="section-title  text-center max-w-[800px] mx-auto">
            <TitleSeparator
              title="AN INCREDIBLE ESCAPE ROOM PARTY VENUE"
              color="golden-text"
              weight="font-bold"
            />
            <p className="text-gray-700 mt-4 md:mt-6 mb-4 md:mb-6 md:px-8 md:text-lg">
              Host a new-age party like never before! Choose a game room based
              on the theme, group size and occasion. Our friendly game host will
              guide you throughout the experience. While playing, you and your
              team must work together to find clues and solve mysteries that
              help you move forward in the exciting adventure.
            </p>
          </div>
          {props.events.map((event) => {
            return (
              <div
                key={event.id}
                className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8"
                style={{
                  backgroundImage:
                    "linear-gradient(12deg, rgba(0,0,0,0.98),rgba(0,0,0,0.84),rgba(0,0,0,0.71),rgba(0,0,0,0),rgba(0,0,0,0)),url('" +
                    event.event_cover_image +
                    "')",
                  boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.25)",
                }}
              >
                <div className="all-game-list-gap py-[104px] md:py-[12%] lg:py-[116px]"></div>
                <div className="all-game-list-bottom">
                  <div className=" text-center md:text-left">
                    <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
                      {event.event_name}
                    </h3>
                    <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[490px]">
                      {event.event_desc}
                    </p>
                  </div>

                  {props.locationslug && props.eventbooking && (
                    <div className="card-game-link mt-4 text-left">
                      {props.eventbooking.eventstatus == true && (
                        <button
                          onClick={() => {
                            bookGame(props.eventbooking);
                          }}
                          className="border-2 w-[240px] block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
                        >
                          BOOK NOW
                        </button>
                      )}
                      {props.eventbooking.eventstatus == false && (
                        <a
                          href={
                            "/" +
                            props.locationslug +
                            "/events/" +
                            event.event_slug +
                            "#eventform"
                          }
                          className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-red-600 py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                        >
                          BOOK NOW
                        </a>
                      )}

                      <a
                        href={
                          "/" +
                          props.locationslug +
                          "/events/" +
                          event.event_slug
                        }
                        className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        LEARN MORE
                      </a>
                    </div>
                  )}
                  {props.locationslug && !props.eventbooking && (
                    <div className="card-game-link mt-4 text-left">
                      <a
                        href={
                          "/" +
                          props.locationslug +
                          "/events/" +
                          event.event_slug +
                          "#eventform"
                        }
                        className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-red-600 py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        BOOK NOW
                      </a>
                      <a
                        href={
                          "/" +
                          props.locationslug +
                          "/events/" +
                          event.event_slug
                        }
                        className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        LEARN MORE
                      </a>
                    </div>
                  )}

                  {!props.locationslug && (
                    <div className="card-game-link mt-4 text-left">
                      <button
                        onClick={showLocation}
                        className="border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        BOOK NOW
                      </button>

                      <a
                        href={"/events/" + event.event_slug}
                        className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                      >
                        LEARN MORE
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="link-btn mt-8 md:mt-16">
          {props.locationslug && (
            <a
              href={"/" + props.locationslug + "/activities"}
              className="border-2 max-w-[280px] text-center  block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
            >
              VIEW ALL GAMES
            </a>
          )}
          {!props.locationslug && (
            <a
              href="/activities"
              className="border-2 max-w-[280px] text-center  block  mx-auto  border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
            >
              VIEW ALL GAMES
            </a>
          )}
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 ">
        <img className="w-full" src="/assets/game-home-or2.jpg"></img>{" "}
      </div>
    </div>
  );
};

export default EventList;
