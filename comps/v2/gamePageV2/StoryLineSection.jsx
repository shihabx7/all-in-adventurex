import { useState, useEffect } from "react";
import GameBookingBtn from "./elements/GameBookingBtn";
import VideoAutoPlay from "./elements/VideoAutoPlay";
export default function StoryLineSection({ sectionData, gameBooking }) {
  const [gameTag, setGameTag] = useState([
    ...sectionData.gameTheme,
    ...sectionData.recommendFor,
  ]);
  const gameTags = [
    "Thrill",
    "Adventure",
    "Family Friendly",
    "Indoor",
    "Outdoor",
    "Team Building",
  ];
  return (
    <div className="game-storyline-section bg-[#090909] min-h-[400px] relative">
      <div className="section-container-box flex  justify-center items-center">
        <div className="section-container  w-auto xl:max-w-[75rem] 2xl:max-w-7xl px-3 rm:px-5 zm:px-7 lg:px-6 xl:px-4 py-16 lg:py-28 3xl:py-32">
          <div className="content-row mt-5 zm:mt-8 md:mt-10 lg:mt-12 flex flex-col lg:flex-row  justify-between items-center  lg:space-x-2">
            {/*=============================================================================Story line text*/}
            <div className="content-col  w-full lg:w-[46%] xl:w-[47%] order-2 lg:order-1 mt-5 zm:mt-6 md:mt-7 lg:mt-0">
              <div className="section-title">
                <h2 className="text-gold text-2xl rm:text-[1.75rem] zm:text-[2rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.75rem] 3xl:text-[3rem] font-os uppercase leading-[1.1] font-bold">
                  {sectionData.sectionTitle
                    ? sectionData.sectionTitle
                    : "THE STORYLINE"}
                </h2>
              </div>
              {/*======================================game tag list*/}
              <div className="game-tag-list flex flex-wrap mt-2 md:mt-3 lg:mt-4 2xl:mt-5">
                {gameTag.map((tag, index) => {
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
              <div className="game-storyline-text mt-5 rm:mt-6 md:mt-8 lg:mt-9 xl:mt-10 3xl:mt-12">
                <h3 className="text-gold text-xl rm:text-[1.25rem] zm:text-[1.35rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.75rem] 3xl:text-[1.875rem] font-os uppercase leading-[1.1] font-bold">
                  Breakout or Bust!
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sectionData.storyLineText,
                  }}
                  className="flex flex-col space-y-3 md:space-y-5 text-[#CACACA] text-[1.035rem] rm:text-[1.05rem] zm:text-[1.075rem] md:text-[1.1rem] 3xl:text-[1.2rem] leading-[1.5] mt-2 md:mt-4 2xl:mt-5"
                ></div>
              </div>
              <div className="game-storyline-btn-row mt-5 rm:mt-6 md:mt-8 lg:mt-9 xl:mt-10  3xl:mt-12">
                <GameBookingBtn btnType="slim" btnLabel="BOOK THIS GAME" />
              </div>
            </div>
            {/*=============================================================================Story line video*/}
            <div className="content-col w-full lg:w-[49%] xl:w-[46%] order-1 lg:order-2">
              <VideoAutoPlay gamePoster={sectionData?.gamePoster} gameVideo={sectionData?.gameVideo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
