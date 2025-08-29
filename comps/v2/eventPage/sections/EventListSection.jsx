export default function EventListSection({ sectionData, locationSlug }) {
  return (
    <div className="event-list-section">
      <div className="section-container px-4 max-w-7xl mx-auto">
        <div className="section-head text-center max-w-[400px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[830px] mx-auto px-4 md:px-8 lg:px-0 ">
          <h2 className="text-[#ca9342] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
            {sectionData.sectionTitle}
          </h2>
          <div
            className="text-[#374151] sm:text-lg xl:text-xl text-center mt-3 xl:mt-4"
            dangerouslySetInnerHTML={{
              __html: sectionData.sectionSubTitle,
            }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8 xl:gap-12  mt-8  xl:mt-12">
          {sectionData.eventList.map((item, index) => {
            return (
              <div
                key={index}
                className="even-list-item bg-[#FBF2DC] border border-[#D2C6AA] rounded-lg drop-shadow-md flex flex-col md:flex-row justify-between "
              >
                <div className="event-image bg-[#231800] p-4 md:w-2/5 h-full rounded-t-lg md:rounded-l-lg ">
                  <div className="hec-item-col w-full h-full ">
                    <img
                      className="w-full h-full object-contain object-center"
                      alt={
                        item.carouselImage.alt
                          ? item.carouselImage.alt
                          : "all in adventures escape room event"
                      }
                      src={
                        item.carouselImage.url
                          ? item.carouselImage.url
                          : "/assets/escape-game-events/carousel/escape-room-birthday-party-event.png"
                      }
                    ></img>
                  </div>
                </div>
                <div className="md:w-3/5  event-text px-3 rm:px-4 pt-4 pb-6 zm:p-5  lg:py-5 lg:px-4 md:py-6 md:px-5 lg:p-8 xl:p-10 ">
                  <div className="hec-head">
                    <p className="text-[#374151] text-[1rem] font-medium lg:text-[1.15rem] uppercase">
                      {item.eventType ? item.eventType : "ESCAPE ROOM"}
                    </p>
                    <h4 className="text-[#CA9342] egl-game-title leading-[1.1] font-bold text-[1.25rem] rm:text-[1.35rem] zm:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.76rem]  uppercase">
                      {item.carouselTitle ? item.carouselTitle : item.eventName}
                    </h4>
                  </div>
                  <div
                    className="hec-text text-[15px] zm:text-base xl:text-lg text-[#374151] mt-2 zm:mt-2 md:mt-3 lg:mt-2 xl:mt-3 "
                    dangerouslySetInnerHTML={{ __html: item.carouselText }}
                  ></div>
                  {/*=========================================event book button===*/}
                  <div className="hec-btn-pair mt-5 md:mt-5  xl:mt-8 ">
                    <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                      {!locationSlug && (
                        <>
                          <button
                            onClick={(e) => showLocation(e)}
                            className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                          >
                            BOOK NOW
                          </button>
                          <a
                            href={`/events/${item.slug}`}
                            className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-[#374151] hover:text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                          >
                            EXPLORE
                          </a>
                        </>
                      )}
                      {locationSlug && (
                        <>
                          <a
                            href={`/${locationSlug}/events/${item.slug}#eventbooking`}
                            className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                          >
                            BOOK NOW
                          </a>
                          <a
                            href={`/${locationSlug}/events/${item.slug}`}
                            className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-[#374151] hover:text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-medium transition duration-400 ease-in-out"
                          >
                            EXPLORE
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
