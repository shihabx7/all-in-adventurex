import { FaPlay } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
const WhatIsEscape = () => {
  return (
    <div
      className="what-is-escape overflow-hidden"
      style={{
        backgroundImage: "url('/assets/map-bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-32">
        <div className="paper-back-bg relative  lg:max-w-full px-4  mx-auto">
          {/* ===========ornamental icon=============== */}
          <div className="or-el or-el-1 absolute top-[-10%] left-[-6%]">
            <img
              alt="Icon of a collection of rocks symbolizing the challenge of an escape room game at All In Adventures."
              src="/assets/svg/vin-hill.svg"
            ></img>
          </div>
          <div className="or-el or-el-2 absolute top-[12%] left-[-10%]">
            <img
              alt="Icon of a bomb wrapped with a black coloured pirate flag, symbolizing the excitement of an escape room game at All In Adventures."
              src="/assets/svg/vin-skull-bomb.svg"
            ></img>
          </div>
          <div className="or-el or-el-3 absolute top-[56%] left-[-11%]">
            <img
              alt="Crossbones symbolizing a risky area on the map of an escape room at All In Adventures."
              src="/assets/svg/vin-skull-cross.svg"
            ></img>
          </div>
          <div className="or-el or-el-4 absolute top-[94%] left-[-6%]">
            <img
              alt="A ship’s steering wheel representing the Treasure Island escape room game at All In Adventures."
              src="/assets/svg/vin-stear.svg"
            ></img>
          </div>
          <div className="or-el or-el-5 absolute top-[-4%] right-[22%]">
            <img
              alt="A red cross symbolizing a restricted area on the map of an escape room at All In Adventures."
              src="/assets/svg/vin-cross.svg"
            ></img>
          </div>
          <div className="or-el or-el-6 absolute top-[12%] right-[-8%]">
            <img
              alt="A wooden barrel with a war sign on it, featuring the excitement of the Treasure Island escape room at All In Adventures."
              src="/assets/svg/vin-drum.svg"
            ></img>
          </div>
          <div className="or-el or-el-7 absolute top-[52%] right-[-6%]">
            <img
              alt="A red cross symbolizing a restricted area on the map of an escape room at All In Adventures."
              className="max-w-[24px]"
              src="/assets/svg/vin-cross.svg"
            ></img>
          </div>
          <div className="or-el or-el-8 absolute top-[90%] right-[-4%]">
            <img
              className="max-w-[24px]"
              alt="A sea lighthouse vector icon representing a spine-chilling moment of the Treasure Island escape room game at All In Adventures."
              src="/assets/svg/vin-light-house.svg"
            ></img>
          </div>
          <div className="or-el or-el-9 absolute top-[84%] right-[12%]">
            <img src="/assets/svg/vin-treasure.svg"></img>
          </div>
          <div className="or-el or-el-10 absolute top-[104%] left-[28%]">
            <img src="/assets/svg/vin-cross.svg"></img>
          </div>
          {/* ===========ornamental icon end=============== */}
          <img
            className="w-full hidden md:block"
            alt="An unfolded, golden-coloured vintage paper, with a treasure crate, symbolizing the fun and excitement of the escape rooms at All In Adventures."
            src="/assets/vintage-paper.png"
          ></img>
          <img
            className="block md:hidden"
            alt="An unfolded, golden-coloured vintage paper, with a treasure crate, symbolizing the fun and excitement of the escape rooms at All In Adventures."
            src="/assets/vintage-paper-v.png"
          ></img>
          <div className="absolute what-is-container z-20 w-full h-full top-0 left-0 flex flex-col md:flex-row justify-center space-y-4 sm:space-y-8 md:space-y-0 md:justify-between items-center md:py-0 px-8 md:px-[10%]">
            {/* content 1 */}
            <div className="what-is content md:max-w-[49%] lg:max-w-[46%] text-center">
              <h2 className=" text-[20px] md:text-[24px] lg:text-[28px] font-bold pb-1 md:pb-3 lg:pb-4">
                ABOUT ALL IN ADVENTURES
              </h2>
              <p className="text-sm md:text-[18px] lg:text-[19px] lg:leading-8 md:leading-6 md:mt-4">
                At All In Adventures (formerly Mystery Room), we bring the
                thrill of adventure to life! Our mission is to deliver
                unforgettable experiences through exceptional guest service,
                engaging games, and non-stop fun that keeps you coming back for
                more.
              </p>
              <div className="video-play-btn  justify-center my-3 md:my-6 lg:my-8 hidden">
                <div className=" paly-btn play-rt flex space-x-2 items-center py-3 md:py-4  px-6 md:px-6 lg:px-8 rounded font-semibold ">
                  <span className="text-lg md:text-xl lg:text-2xl">
                    {" "}
                    <FaPlay />{" "}
                  </span>
                  <span className="text-sm md:text-base">
                    PLAY TEASER VIDEO
                  </span>
                </div>
              </div>
              <div className="view-all flex justify-center mt-4 md:mt-8">
                <a
                  href="/about"
                  className="flex font-medium text-lg justify-center space-x-2 items-center text-red-600 hover:text-red-700"
                >
                  <span>Learn more</span> <FaAngleRight />
                </a>
              </div>
            </div>
            {/* content 2 */}
            <div className="what-is what-is-2 content md:max-w-[49%] lg:max-w-[46%] text-center">
              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold pb-1 md:pb-3 lg:pb-4">
                WHAT IS AN ESCAPE ROOM
              </h2>
              <p className="text-sm md:text-[18px] lg:text-[19px] lg:leading-8 md:leading-6 md:mt-4">
                An escape room is an exciting challenge where you and your team
                join forces to uncover hidden clues, solve mind-bending puzzles,
                and crack codes—all in a race against time. It's a fun adventure
                packed with surprises, teamwork, and pure adrenaline!
              </p>
              <div className="video-play-btn  justify-center my-3 md:my-6 lg:my-8 hidden">
                <div className="paly-btn play-rt flex space-x-2 items-center py-3 md:py-4  px-6 md:px-6 lg:px-8 rounded font-semibold">
                  <span className="text-lg md:text-xl lg:text-2xl">
                    {" "}
                    <FaPlay />{" "}
                  </span>
                  <span className="text-sm md:text-base">
                    PLAY TEASER VIDEO
                  </span>
                </div>
              </div>
              <div className="view-all flex justify-center mt-4 md:mt-8">
                <a
                  href="/what-is-an-escape-room"
                  className="flex font-medium text-lg justify-center space-x-2 items-center text-red-600 hover:text-red-700"
                >
                  <span>Learn more</span> <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsEscape;
