import TitleSeparator from "../util/TitleSeparator";

const EventRootList = (props) => {
  const showLocation = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");

    document.getElementById("locmenu").classList.remove("hidden");
  };

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
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      {/**=================== all event list============*/}
      <div className="all-games-container max-w-7xl mx-auto relative  z-30 pt-[110px] pb-16 md:py-20 lg:py-28 px-4">
        <div className="all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
          <div className="section-title  text-center max-w-[840px] mx-auto">
            <TitleSeparator title={props.eventListData.title} />
            <div
              className="text-gray-700 mt-4 md:mt-6 mb-4 md:mb-6 md:px-8 md:text-lg"
              dangerouslySetInnerHTML={{ __html: props.eventListData.subTitle }}
            ></div>
          </div>
          {props.eventListData.eventList.map((event) => {
            return (
              <div
                key={event.id}
                className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8"
                style={{
                  backgroundImage:
                    "linear-gradient(12deg, rgba(0,0,0,0.98),rgba(0,0,0,0.84),rgba(0,0,0,0.71),rgba(0,0,0,0),rgba(0,0,0,0)),url('" +
                    event.eventListImage.url +
                    "')",
                  boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.25)",
                }}
              >
                <div className="all-game-list-gap py-[104px] md:py-[12%] lg:py-[116px]"></div>
                <div className="all-game-list-bottom">
                  <div className=" text-center md:text-left">
                    <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
                      {event.eventName}
                    </h3>
                    <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[490px]">
                      {event.description}
                    </p>
                  </div>

                  <div className="card-game-link mt-4 text-left">
                    <button
                      onClick={showLocation}
                      className="border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white"
                    >
                      BOOK EVENT
                    </button>

                    <a
                      href={"/events/" + event.eventSlug}
                      className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="link-btn mt-8 md:mt-16">
          <a
            href="/activities"
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

export default EventRootList;
