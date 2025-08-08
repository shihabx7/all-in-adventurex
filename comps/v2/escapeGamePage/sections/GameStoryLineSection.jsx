export default function GameStoryLineSection({ gameInfo }) {
  const gTag = gameInfo.gameTheme.concat(gameInfo.recommendFor);

  return (
    <div className="game-story-line-section egs-section relative">
      {/*=======================================Game section bg*/}
      <div className="egs-section-bg absolute w-full h-full top-0 left-0">
        <img
          className="w-full h-full object-cover object-bottom md:object-top"
          alt={
            gameInfo.storyLineBgImage.alt
              ? gameInfo.storyLineBgImage.alt
              : "escape from alcatraz storyline"
          }
          src={
            gameInfo.storyLineBgImage
              ? gameInfo.storyLineBgImage.url
              : "/assets/escape-game/storyline/escape-from-alcatraz-storyline-bg.jpg"
          }
        ></img>
      </div>
      <div className="egs-bg-overlay absolute w-full h-full top-0 left-0 sotry-bg-overlay"></div>
      <div className="egs-content pt-16 pb-2 md:py-20 lg:py-24 xl:pt-32 xl:pb-28 px-4 relative z-[20] ">
        <div className="zm:max-w-[580px] md:max-w-[760px] lg:max-w-[980px] xl:w-[1220px] 2xl:w-[1240px] mx-auto">
          <div className="egs-col md:max-w-[500px] lg:ax-w-[540px] xl:max-w-[580px]">
            <div className="section-title mb-5 md:mb-6 lg:mb-8">
              <h2 className="text-[#e0bf62] uppercase font-bold text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
                THE STORYLINE
              </h2>
            </div>
            <div className="story-card bg-[rgba(0,0,0,0.2)] md:bg-[rgba(0,0,0,0.18)] border-[1px] border-[#FFB5484D] p-3 rm:p-4  xl:p-5">
              {/*=======================================Game info*/}
              <div className="egs-info-row flex justify-between  items-center mt-[6px] lg:mt-1 2xl:mt-2 flex-wrap">
                {/*==================================================col 1*/}
                <div className="item-col flex w-[48%] rm:w-[46%] mt-1 items-center space-x-1 2xl:space-x-2">
                  <img
                    className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
                    src={
                      "/assets/escape-game/icons/escape-game-team-member-icon.svg"
                    }
                  ></img>
                  <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                    <span>
                      {gameInfo.teamSizeLabel ? gameInfo.teamSizeLabel : "Team"}{" "}
                    </span>
                    <span>{gameInfo.teamSize}</span>
                  </p>
                </div>
                {/*==================================================col 2*/}
                <div className="item-col flex w-[48%] rm:w-[46%] mt-1  items-center space-x-1 2xl:space-x-2">
                  <img
                    className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] 2xl:max-h-[22px]"
                    src={
                      "/assets/escape-game/icons/escape-game-age-range-icon.svg"
                    }
                  ></img>
                  <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                    <span>Age: </span>
                    <span>{gameInfo.age}</span>
                  </p>
                </div>
                {/*==================================================col 3*/}
                <div className="item-col flex w-[48%] rm:w-[46%] mt-2  items-center space-x-1 2xl:space-x-2">
                  <img
                    className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
                    src={
                      "/assets/escape-game/icons/escape-game-duration-icon.svg"
                    }
                  ></img>
                  <p className="text-[#d9d9d9] text-[12px] rm:text-[14px] md:text-[13px] lg:text-[14px] 2xl:text-[15px]">
                    <span>Duration: </span>
                    <span>{gameInfo.duration}</span> <span>min</span>
                  </p>
                </div>
                {/*==================================================col 4*/}
                <div className="item-col flex w-[48%] rm:w-[46%] mt-2 items-center space-x-1 2xl:space-x-2">
                  <img
                    className="max-h-[16px] rm:max-h-[18px] md:max-h-[16px] lg:max-h-[19px] 2xl:max-h-[22px]"
                    src={
                      "/assets/escape-game/icons/escape-game-success-rate-icon.svg"
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
              <div className="egl-shot-desc mt-3 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6">
                <h4 className="text-[20px] rm:text-[22px] md:text-[24px] lg:text-[28px] font-medium text-[#FFB548] mb-2">
                  {gameInfo.storyLineTitle}
                </h4>
                <div
                  className="text-[#cdcdcd] text-sm lg:text-base 2xl:text-lg flex flex-col space-y-2 md:space-y-4"
                  dangerouslySetInnerHTML={{ __html: gameInfo.storyLine }}
                ></div>
              </div>
              {/*=========================================game button===*/}
              <div className="egl-btn-pair mt-4 md:mt-5 mb-[8px] xl:mt-8 xl:mb-2">
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ">
                  <button
                    onClick={(e) => showLocation(e)}
                    className="border-[2px] border-red-600 rounded-full bg-red-600 hover:bg-red-700 hover:border-red-700 text-sm md:text-base xl:text-lg text-white px-6 rm:px-8 md:px-10 py-[11px] xl:px-12 xl:py-3 text-center "
                  >
                    BOOK THIS GAME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
