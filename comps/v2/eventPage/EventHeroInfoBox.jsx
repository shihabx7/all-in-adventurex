export default function EventHeroInfoBox({ heroInfoList }) {
  return (
    <div className="event-hero-info-box w-full">
      <div className=" max-w-[360px] zm:max-w-[480px] md:max-w-[840px] lg:max-w-[970px] xl:max-w-[1060px] mx-auto px-3 rm:px-4 ">
        <div className="box-container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[.64rem] lg:gap-4 xl:gap-6">
          {heroInfoList.map((item, index) => {
            return (
              <div key={index} className={"event-intro-box-col h-full"}>
                <div className="bg-[#231800] h-full rounded-[13px] p-5 py-6 rm:px-6 rm:py-7 zm:p-8 md:px-3 md:py-6 lg:p-6 xl:p-8">
                  <div className="event-intro-icon text-center">
                    <img
                      className=" h-[50px] zm:h-[54px] xl:h-[56px] mx-auto"
                      alt={
                        item.icon.alt
                          ? item.icon.alt
                          : "all in adventure event icon"
                      }
                      src={
                        item.icon.url
                          ? item.icon.url
                          : "/assets/escape-game-events/all-in-adventure-event-info-icon.svg"
                      }
                    ></img>
                  </div>
                  <div className="event-intro-icon text-center mt-4 zm:mt-5">
                    <h4 className="text-[1.2rem]  rm:text-[1.34rem] md:text-[1.15rem] lg:text-[1.25rem] xl:text-[1.3rem] leading-[1.3] font-medium text-[#d9d9d9]">
                      {item.title}
                    </h4>
                    <p className="text-[15px]  xl:text-[16px] leading-[1.46]  text-[#adadad] mt-3">
                      {item.text}
                    </p>
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
