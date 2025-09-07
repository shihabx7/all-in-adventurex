import { useEffect, useState, useRef } from "react";

const EventCardList = ({ eventCardlList }) => {
  // ==================button action
  const showLocation = (e) => {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const exploreEvent = (e, slug) => {
    e.preventDefault();
    window.location.href = "/events/" + slug;
  };
  //=============================================
  return (
    <div className="aia-new-event event-cardlist--container">
      {eventCardlList.map((item, index) => {
        return (
          <div
            key={index}
            className=" rounded-[16px]  group  bg-cover relative p-1 zm:p-2 xl:p-3 my-3"
          >
            <div className="hec-item-row grid grid-cols-1 md:grid-cols-[45%_55%] lg:grid-cols-[47%_53%] gap-0">
              {/*====================================================================carousel-image */}
              <div className="hec-item-col  ">
                <img
                  className="max-w-full object-contain"
                  alt={
                    item.cardImage.alt
                      ? item.cardImage.alt
                      : "all in adventures escape room event"
                  }
                  src={
                    item.cardImage.url
                      ? item.cardImage.url
                      : "/assets/escape-game-events/carousel/escape-room-birthday-party-event.png"
                  }
                ></img>
              </div>
              {/*====================================================================carousel-text */}
              <div className="hec-item-col bg-[#1C1402] p-7  md:w-full md:h-full flex flex-col justify-center items-center">
                <div>
                  <div className="hec-head">
                    <p className="text-red-600 text-[1.1rem] font-medium lg:text-[1.2rem] uppercase">
                      {item.eventType ? item.eventType : "ESCAPE ROOM"}
                    </p>
                    <h4 className="text-[#E0BF62] egl-game-title leading-[1.1] font-bold text-[1.3rem] rm:text-[1.56rem] zm:text-[1.65rem] lg:text-[1.8rem] xl:text-[2rem]  uppercase">
                      {item.cardTitle ? item.cardTitle : item.eventName}
                    </h4>
                  </div>
                  <div
                    className="hec-text text-[15px] zm:text-base xl:text-lg text-[#ADADAD] mt-3 zm:mt-3 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-4"
                    dangerouslySetInnerHTML={{ __html: item.cardText }}
                  ></div>
                  {/*=========================================event book button===*/}
                  <div className="hec-btn-pair mt-5 md:mt-3 xl:mt-5 ">
                    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                      <button
                        onClick={(e) => showLocation(e)}
                        className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                      >
                        BOOK NOW
                      </button>
                      <a
                        href={`/events/${item.slug}`}
                        className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-[#fafafa] hover:text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                      >
                        EXPLORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventCardList;
