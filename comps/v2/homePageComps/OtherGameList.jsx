import { useSiteData } from "../../../contexts/SiteDataContext";

export default function OtherGameList({ otherGameList, locationSlug }) {
  const { openModalMenu, setModalMenuType, setModalGame } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showLocModal = (activitySlug) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setModalGame(activitySlug);
    setModalMenuType("game");
    openModalMenu();
  };
  const showLocation = (e) => {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };

  const bookGame = (e, bookingData) => {
    e.preventDefault();
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };

  return (
    <div className="ogl-info-row w-full flex justify-center flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-5 xl:space-x-8">
      {otherGameList.map((item, index) => {
        return (
          <div
            key={index}
            className="ogl-item-col w-full  relative shadow-golden"
          >
            <div className="ogl-info-bg-img  w-full h-full absolute top-0 left-0 z-[10]">
              <img
                className="w-full h-full object-cover object-center"
                alt={
                  item.listCardBgImage
                    ? item.listCardBgImage.url
                    : "/assets/escape-game/card-bg/escape-from-alcatraz-list-card-bg.png"
                }
                src={
                  item.listCardBgImage
                    ? item.listCardBgImage.url
                    : "/assets/escape-game/card-bg/escape-from-alcatraz-list-card-bg.png"
                }
              ></img>
            </div>
            <div className=" w-full h-full absolute top-0 left-0 z-[20] overlay-53d"></div>
            <div className="ogl-info-content relative z-[30] p-2 rm:p-2  zm:p-4 md:p-4  xl:p-4">
              <div className="top-section flex justify-end space-x-6">
                {/*=======================================Game info*/}
                <div className="ogl-info-row grow">
                  {/*==================================================col 1*/}
                  <div className="item-col flex  mt-1 md:w-auto items-center space-x-1 2xl:space-x-2">
                    <img
                      className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
                      src={
                        "/assets/escape-games/icons/escape-game-team-member-icon.svg"
                      }
                    ></img>
                    <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                      <span>
                        {item.gameInfo.timeSizeLabel
                          ? item.gameInfo.timeSizeLabel
                          : "Team"}{" "}
                      </span>
                      <span>{item.gameInfo.teamSize}</span>
                    </p>
                  </div>
                  {/*==================================================col 2*/}
                  <div className="item-col flex  mt-1 md:w-auto items-center space-x-1 2xl:space-x-2">
                    <img
                      className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] 2xl:max-h-[22px]"
                      src={
                        "/assets/escape-games/icons/escape-game-age-range-icon.svg"
                      }
                    ></img>
                    <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                      <span>Age: </span>
                      <span>{item.gameInfo.age}</span>
                    </p>
                  </div>
                  {/*==================================================col 3*/}
                  <div className="item-col flex  mt-2 md:w-auto items-center space-x-1 2xl:space-x-2">
                    <img
                      className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
                      src={
                        "/assets/escape-games/icons/escape-game-duration-icon.svg"
                      }
                    ></img>
                    <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                      <span>Duration: </span>
                      <span>{item.gameInfo.duration}</span> <span>min</span>
                    </p>
                  </div>
                  {/*==================================================col 4*/}
                  {item.gameInfo.successRate !== null && (
                    <div className="item-col flex  mt-2  items-center space-x-1 2xl:space-x-2">
                      <img
                        className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
                        src={
                          "/assets/escape-games/icons/escape-game-success-rate-icon.svg"
                        }
                      ></img>
                      <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                        <span>Success rate: </span>
                        <span>{item.gameInfo.successRate}</span>
                        <span>%</span>
                      </p>
                    </div>
                  )}
                </div>
                {/*=======================================Game-price*/}
                <div className="ogl-price ">
                  <div className="egl-price-wrapper relative">
                    <div className="bg-img ">
                      <img
                        className="w-[82px] zm:w-[84px] lg:w-[90px] xl:w-[100px] 2xl:w-[106px]"
                        src={
                          "/assets/escape-games/icons/escape-game-price-bg.svg"
                        }
                      ></img>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center ">
                      <p className="text-center text-[#AAA7A7] text-[.9rem] rm:text-[.94rem] md:text-[.96rem] xl:text-[1rem] 3xl:text-[1.1rem] leading-[1.1]">
                        From
                      </p>
                      <p className="text-center text-[#D4B56A] font-bold text-[1rem] rm:text-[1.15rem] md:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.28rem] leading-[1.2]">
                        ${item.gameInfo.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-card-gap h-[100px] rm:h-[116px] md:h-[120px]"></div>
              {/*=========================================game  decription====*/}
              <div className="bottom-section md:max-w-[480px] lg:max-w-[700px]">
                <h3 className="egl-game-title leading-[1.1] font-bold text-[20px] rm:text-[22px] zm:text-[26px] xl:text-[28px]  2xl:text-[30px] uppercase text-[#f0f0f0]">
                  {item.gameInfo.gameTitle}
                </h3>
                {/*=========================================game short decription====*/}
                <div className="egl-shot-desc mt-2 md:mt-2 xl:mt-3">
                  <p className="text-[#E5E7EB] text-sm lg:text-base 2xl:text-lg">
                    {item.gameInfo.shortDescription}
                  </p>
                </div>
                {/*=========================================game button===*/}
                <div className="egl-btn-pair mt-7 md:mt-6 mb-3 xl:mt-8 xl:mb-2">
                  <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                    {item.bookingInfo ? (
                      <button
                        onClick={(e) => bookGame(e, item.bookingInfo)}
                        className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                      >
                        BOOK NOW
                      </button>
                    ) : (
                      <button
                        onClick={(e) => showLocModal(item.gameInfo.slug)}
                        className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                      >
                        BOOK NOW
                      </button>
                    )}

                    {locationSlug ? (
                      <a
                        href={`/${locationSlug}/activities/${item.gameInfo.slug}`}
                        className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                      >
                        EXPLORE
                      </a>
                    ) : (
                      <a
                        href={`/activities/${item.gameInfo.slug}`}
                        className="border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700
                         text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center font-semibold"
                      >
                        EXPLORE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
