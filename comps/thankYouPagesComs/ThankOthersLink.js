const ThankOthersLink = (props) => {
  return (
    <div className="thank-bottom grid grid-cols-1 md:grid-cols-2  gap-y-4 md:gap-y-0 md:gap-x-4 lg:gap-x-8 max-w-[760px] mx-auto">
      <div className="group thank-link-box relative">
        <div className="thank-ev-head absolute top-0 left-0 w-full z-10 pt-16 pb-12 md:pb-8 lg:pb-14">
          <h2 className="text-[#eeeeee] font-bold text-[26px] text-center">
            ESCAPE ROOMS
          </h2>
        </div>
        <div className="border-left-img absolute top-0 left-0 h-full z-10">
          <img
            className="block h-full"
            src="/assets/border/Game-Border-left-right.png"
          ></img>
        </div>
        <div className="border-right-img absolute top-0 right-0 h-full z-10">
          <img
            className="block ml-auto h-full"
            src="/assets/border/Game-Border-left-right.png"
          ></img>
        </div>
        <div className="border-top-img absolute top-0 left-0 w-full z-10">
          <img
            className="block w-full"
            src="/assets/border/game-border-top-bottom.png"
          ></img>
        </div>
        <div className="border-bottom-img absolute bottom-0 left-0 w-full z-10">
          <img
            className="block w-full"
            src="/assets/border/game-border-top-bottom.png"
          ></img>
        </div>
        <div className="border-top-left-img w-[12%] absolute top-0 left-0  z-10">
          <img
            className="block w-full"
            src="/assets/border/game-corner.png"
          ></img>
        </div>
        <div className="border-top-right-img w-[12%] absolute top-0 right-0  z-10">
          <img
            className="block w-full rotate-90"
            src="/assets/border/game-corner.png"
          ></img>
        </div>
        <div className="border-bottom-right-img w-[12%] absolute bottom-0 right-0  z-10">
          <img
            className="block w-full rotate-180"
            src="/assets/border/game-corner.png"
          ></img>
        </div>
        <div className="border-bottom-left-img w-[12%] absolute bottom-0 left-0  z-10">
          <img
            className="block w-full -rotate-90"
            src="/assets/border/game-corner.png"
          ></img>
        </div>

        <img
          className="w-full"
          src={
            props.escapeRoomCardImage
              ? props.escapeRoomCardImage.url
              : "/assets/border/all-in-adventures-all-games.jpg"
          }
          alt={
            props.escapeRoomCardImage.alt
              ? props.escapeRoomCardImage.alt
              : "allinadventures escape games"
          }
        ></img>

        <div className="pt-16 pb-10 w-full text-center items-center justify-center thank-btm-shadow absolute bottom-0 left-0 ">
          <a
            href="/activities"
            className=" text-[#eeeeee] text-[16px] font-medium text-center bg-red-600 group-hover:bg-red-700 block mx-auto w-[90%] py-3 lg:py-3 rounded-full"
          >
            VIEW ALL GAMES
          </a>
        </div>
      </div>
      {/*============events link box======== */}
      <div className="group thank-link-box relative">
        <div className=" absolute top-0 left-0 w-full z-20 pb-8">
          <img
            className="block w-full"
            src="/assets/border/event-card-header.png"
          ></img>
        </div>
        <div className="thank-ev-head absolute top-0 left-0 w-full z-10 pt-16 pb-12 md:pb-8 lg:pb-14">
          <h2 className="text-[#eeeeee] font-bold text-[26px] text-center">
            EVENTS AND PARTIES
          </h2>
        </div>
        <div className="border-top-img w-full absolute top-0 left-0  z-10">
          <img
            className="block w-full"
            src="/assets/border/event-card-Border-top.png"
          ></img>
        </div>
        <div className="border-bottom-img w-full absolute bottom-0 left-0  z-10">
          <img
            className="block w-full rotate-180"
            src="/assets/border/event-card-Border-top.png"
          ></img>
        </div>
        <div className="border-left-img h-full absolute top-0 left-0  z-10">
          <img
            className="block h-full"
            src="/assets/border/event-card-Border.png"
          ></img>
        </div>
        <div className="border-right-img h-full absolute top-0 right-[-4px]  z-10">
          <img
            className="block h-full rotate-180 ml-auto"
            src="/assets/border/event-card-Border.png"
          ></img>
        </div>

        <img
          className="w-full"
          src={
            props.eventCardImage
              ? props.eventCardImage.url
              : "/assets/border/all-in-adventures-all-event.jpg"
          }
          alt={
            props.eventCardImage.alt
              ? props.eventCardImage.alt
              : "Allinadventures events"
          }
        ></img>
        <div className="pt-16 pb-10 w-full text-center items-center justify-center thank-btm-shadow absolute bottom-0 left-0 ">
          <a
            href="/events"
            className=" text-[#eeeeee] text-[16px] font-medium text-center bg-red-600 group-hover:bg-red-700 block mx-auto w-[90%] py-3 lg:py-3 rounded-full"
          >
            VIEW ALL EVENTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankOthersLink;
