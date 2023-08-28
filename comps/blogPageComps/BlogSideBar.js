const BlogSideBar = () => {
  return (
    <>
      <div className="font-os pb-4 md:pb-2 pt-10 md:pt-[108px] text-2xl lg:text-2xl xl:text-3xl text-[#4E4D4B] font-semibold md:text-center">
        SEE WHAT WE OFFER{" "}
      </div>
      <div className="thank-bottom grid grid-cols-1  gap-y-8 md:gap-y-4 mt-2 ">
        <div className="group thank-link-box relative">
          <div className="thank-ev-head absolute top-0 left-0 w-full z-10 pt-10 pb-8 md:pb-8 lg:pb-12">
            <h2 className="text-[#eeeeee] font-bold text-[20px] text-center">
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
            src="/assets/border/all-in-adventures-all-games.jpg"
          ></img>
          <div className="pt-6 pb-4 w-full text-center items-center justify-center thank-btm-shadow absolute bottom-0 left-0 ">
            <a
              href="/activities"
              className=" text-[#eeeeee] font-medium text-center bg-red-600 group-hover:bg-red-700 block mx-auto w-[90%] py-3 lg:py-3 rounded-full"
            >
              VIEW ALL GAMES
            </a>
          </div>
        </div>
        <div className="group thank-link-box relative">
          <div className=" absolute top-0 left-0 w-full z-20 pb-8">
            <img
              className="block w-full"
              src="/assets/border/event-card-header.png"
            ></img>
          </div>
          <div className="thank-ev-head absolute top-0 left-0 w-full z-10 pt-10 pb-8 md:pb-8 lg:pb-12">
            <h2 className="text-[#eeeeee] font-bold text-[20px] text-center">
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
            src="/assets/border/all-in-adventures-all-event.jpg"
          ></img>
          <div className="pt-6 pb-4 w-full text-center items-center justify-center thank-btm-shadow absolute bottom-0 left-0 ">
            <a
              href="/events"
              className=" text-[#eeeeee]  font-medium text-center bg-red-600 group-hover:bg-red-700 block mx-auto w-[90%] py-3 lg:py-3 rounded-full"
            >
              VIEW ALL EVENTS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
