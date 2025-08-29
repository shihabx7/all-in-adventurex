import { useEffect, useState } from "react";
export default function EscapeGameListInfo({
  gameInfo,
  listCardBgImage,
  bookingInfo,
  locationSlug,
}) {
  const gTag = gameInfo.gameTheme.concat(gameInfo.recommendFor);
  const showLocation = (e) => {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  const exploreGame = (e, gameSlug) => {
    e.preventDefault();
    window.location.href = `/activities/${gameSlug}`;
  };
  const exploreLocGame = (e, locationSlug, gameSlug) => {
    e.preventDefault();
    window.location.href = `/${locationSlug}/activities/${gameSlug}`;
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
    <div className="egl-info-box relative">
      <div className="egl-info-bg-img absolute top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover object-bottom"
          alt={
            listCardBgImage
              ? listCardBgImage.alt
              : "all in adventure esgape room"
          }
          src={
            listCardBgImage
              ? listCardBgImage.url
              : "/assets/escape-games/card-bg/escape-from-alcatraz-list-card-bg.png"
          }
        ></img>
      </div>
      <div className="egl-info-content relative z-[20] px-2 py-4 rm:px-2 rm:py-5 zm:px-4 zm:py-5 lg:p-6  xl:p-10 2xl:p-10">
        <h3 className="egl-game-title leading-[1.1] font-bold text-[20px] rm:text-[22px] zm:text-[26px] xl:text-[30px]  2xl:text-[32px] uppercase text-[#f0f0f0]">
          {gameInfo.gameTitle}
        </h3>
        {/*=======================================Game-price*/}
        <div className="hidden md:block egl-price absolute top-[-40px]  left-[0px] zm:left-[unset] zm:right-[2px] zm:top-[14px] md:top-[12px] md:right-[10px] lg:top-[16px] lg:right-[16px]  xl:right-4 xl:top-4">
          <div className="egl-price-wrapper relative">
            <div className="bg-img ">
              <img
                className="w-[88px] zm:w-[84px] lg:w-[90px] xl:w-[100px] 2xl:w-[106px]"
                src={"/assets/escape-games/icons/escape-game-price-bg.svg"}
              ></img>
            </div>
            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center ">
              <p className="text-center text-[14px] zm:text-[14px] xl:text-[16px] text-[#101010] leading-[1.1]">
                From
              </p>
              <p className="text-center text-[16px] zm:text-[16px] lg:text-[18px] xl:text-[20px] text-[#DC2626] font-bold leading-[1.2]">
                ${gameInfo.price}
              </p>
            </div>
          </div>
        </div>
        {/*=======================================Game info*/}
        <div className="egl-info-row flex justify-between space-x-0 md:justify-start items-center md:space-x-[10px] xl:space-x-4 2xl:space-x-5 mt-[6px] lg:mt-1 2xl:mt-2 flex-wrap">
          {/*==================================================col 1*/}
          <div className="item-col flex w-[48%] rm:w-[46%] mt-1 md:w-auto items-center space-x-1 2xl:space-x-2">
            <img
              className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
              src={
                "/assets/escape-games/icons/escape-game-team-member-icon.svg"
              }
            ></img>
            <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
              <span>
                {gameInfo.teammeSizeLabel ? gameInfo.teameSizeLabel : "Team"}
                {": "}
              </span>
              <span>{gameInfo.teamSize}</span>
            </p>
          </div>
          {/*==================================================col 2*/}
          <div className="item-col flex w-[48%] rm:w-[46%] mt-1 md:w-auto items-center space-x-1 2xl:space-x-2">
            <img
              className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] 2xl:max-h-[22px]"
              src={"/assets/escape-games/icons/escape-game-age-range-icon.svg"}
            ></img>
            <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
              <span>Age: </span>
              <span>{gameInfo.age}</span>
            </p>
          </div>
          {/*==================================================col 3*/}
          <div className="item-col flex w-[48%] rm:w-[46%] mt-2 md:w-auto items-center space-x-1 2xl:space-x-2">
            <img
              className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
              src={"/assets/escape-games/icons/escape-game-duration-icon.svg"}
            ></img>
            <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
              <span>Duration: </span>
              <span>{gameInfo.duration}</span> <span>min</span>
            </p>
          </div>
          {/*==================================================col 4*/}
          <div className="item-col flex w-[48%] rm:w-[46%] mt-2 md:w-auto items-center space-x-1 2xl:space-x-2">
            <img
              className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
              src={
                "/assets/escape-games/icons/escape-game-success-rate-icon.svg"
              }
            ></img>
            <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
              <span>Success rate: </span>
              <span>{gameInfo.successRate}</span>
              <span>%</span>
            </p>
          </div>
        </div>
        {/*=======================================Game tag*/}
        <div className="egl-tag-row flex items-center mt-[8px] md:mt-1 xl:mt-2 2xl:mt-3 flex-wrap ">
          {gTag.map((tag, index) => {
            return (
              <p
                key={index}
                className="text-[#d9d9d9] text-[13px] xl:text-[14px] 2xl:text-[15px] px-[6px] rm:px-[8px] py-[2px] md:px-5 md:py-[3px] xl:px-[25px] xl:py-[5px] bg-[#1A1200] border-[1px] border-[#423109] mt-[5px] mr-[5px] md:mt-2 md:mr-2 lg:mt-3 lg:mr-3 2xl:mt-3 2xl:mr-4"
              >
                {tag}
              </p>
            );
          })}
        </div>
        {/*=========================================game short decription====*/}
        <div className="egl-shot-desc mt-4 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-8">
          <p className="text-[#ADADAD] text-sm lg:text-base 2xl:text-lg">
            {gameInfo.shortDescription}
          </p>
        </div>
        {/*=========================================game button===*/}
        <div className="egl-btn-pair mt-5 md:mt-5 mb-[8px] xl:mt-8 xl:mb-2">
          <div className="flex justify-between md:justify-start items-center space-x-2 md:space-x-3 lg:space-x-4 ">
            {bookingInfo ? (
              <button
                onClick={(e) => bookGame(e, bookingInfo)}
                className=" w-[48%] lm:w-[47%] md:w-auto border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 font-semibold text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center "
              >
                BOOK NOW
              </button>
            ) : (
              <button
                onClick={(e) => showLocation(e)}
                className=" w-[48%] lm:w-[47%] md:w-auto border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 font-semibold text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center "
              >
                BOOK NOW
              </button>
            )}
            {locationSlug ? (
              <a
                href={`/${locationSlug}/activities/${gameInfo.slug}`}
                className=" w-[48%] lm:w-[47%] md:w-auto  border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 font-semibold text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center"
              >
                EXPLORE
              </a>
            ) : (
              <a
                onClick={(e) => {
                  exploreGame(e, gameInfo.slug);
                }}
                href={`/activities/${gameInfo.slug}`}
                className=" w-[48%] lm:w-[47%] md:w-auto  border-[2px] border-red-600 rounded-full bg-transparent hover:bg-red-700 hover:border-red-700 font-semibold text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center"
              >
                EXPLORE
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
