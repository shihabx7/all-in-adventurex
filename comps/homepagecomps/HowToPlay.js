import TitleSeparator from "../util/TitleSeparator";

import TeaserVideo from "../util/TeaserVideo";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { ImPlay3 } from "react-icons/im";

const HowToPlay = (props) => {
  const [showTeaser, setShowTeaser] = useState(false);
  const [playVid, setPlayVid] = useState(false);

  const playTeaser = () => {
    setShowTeaser(true);
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("ytv").classList.remove("mhide");
    document.getElementById("ytv").classList.add("mshow");
  };
  const closeTeaser = () => {
    setShowTeaser(false);
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    document.getElementById("ytv").classList.remove("mshow");
    document.getElementById("ytv").classList.add("mhide");
  };

  const startVid = () => {
    setPlayVid(true);
  };
  const bookAll = (bookingData) => {
    FH.open({
      shortname: bookingData.shortname,
      fallback: "simple",
      fullItems: "yes",
      // flow:  bookingData.flow,
      view: "items",
    });
  };
  return (
    <>
      {" "}
      {/*======================= teaser videow modal============== */}
      <div
        id="ytv"
        className="fixed top-0 bg-[rgba(0,0,0,0.8)] w-screen h-screen z-[12000] mhide"
      >
        <div
          onClick={closeTeaser}
          className="absolute top-4 right-4 text-xl md:text-2xl lg:text-3xl"
        >
          <span className="inline-block p-1 border-2 border-red-600 text-red-600 rounded-full cursor-pointer hover:border-light-gold hover:text-gold">
            <FiX />
          </span>
        </div>
        <div className="max-w-[1200px] h-full mx-auto text-center flex items-center justify-center">
          <div className="teaser-content w-[90%] md:w-auto">
            <h2 className="mb-2 md:mb-4 text-[24px] md:text-[42px] font-bold golden-text font-os">
              ALL IN ADVENTURES TEASER
            </h2>
            {showTeaser && <TeaserVideo videoid="D6hImT3hfKg" />}
          </div>
        </div>
      </div>
      {/*======================= teaser videow modal end============== */}
      <div
        className="htb relative pt-[100px] pb-16 md:py-20 lg:py-28 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(65deg,rgba(255, 249, 235,.1),rgba(255, 249, 235,.2)),url('/assets/gridbg.jpg')",
        }}
      >
        <div className="htb-bg-icon htb-bg-1 absolute">
          <img src="/assets/calendar.png"></img>
        </div>
        <div className="htb-bg-icon htb-bg-2 absolute">
          <img src="/assets/Compas-brown.png"></img>
        </div>
        <div className="htb-bg-icon htb-bg-3 absolute">
          <img src="/assets/Navigation.png"></img>
        </div>
        <div className="htb-bg-icon htb-bg-4 absolute">
          <img src="/assets/Skull.png"></img>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="hbt-container pt-4 md:pt-16 relative z-20">
            <TitleSeparator
              title="HOW TO PLAY AN ESCAPE ROOM"
              color="dark-gold"
              weight="font-bold"
            />
            <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
              <p className="text-gray-700 md:px-8">
                Team up with your friends, family (including kids age 6+) or
                co-workers, select any of our
                {props.city && <> {props.city}</>} Escape Rooms and book your
                game. While playing, use the clues and keys you find to solve
                the puzzles and make your escape before time runs out!
              </p>
            </div>
            {/* How to book 3 steps */}
            <div className="htb-steps flex justify-btween mb-10 md:justify-center items-center max-w-4xl mx-auto">
              <div className="htb-step">
                <div className="htb-icon">
                  <img src="/assets/svg/assemble-team.svg"></img>
                </div>
                <h3 className="golden-text text-3xl font-bold mt-2">1</h3>
                <div className="htb-text text-gray-700 mt-2 mb-12 font-medium">
                  ASSEMBLE YOUR TEAM{" "}
                </div>
              </div>

              <div className="htb-step-line">
                <img
                  className="hidden md:block"
                  src="/assets/svg/htb-line-1.svg"
                ></img>
                <img
                  className="md:hidden"
                  src="/assets/svg/step-line-mb.svg"
                ></img>
              </div>

              <div className="htb-step">
                <div className="htb-icon">
                  <img src="/assets/svg/choose-game.svg"></img>
                </div>
                <h3 className="golden-text text-3xl font-bold mt-2">2</h3>
                <div className="htb-text text-gray-700 mt-2 mb-12 font-medium">
                  CHOOSE YOUR GAME{" "}
                </div>
              </div>

              <div className="htb-step-line">
                <img
                  className="hidden md:block"
                  src="/assets/svg/htb-line-2.svg"
                ></img>
                <img
                  className="md:hidden"
                  src="/assets/svg/step-line-mb.svg"
                ></img>
              </div>

              <div className="htb-step">
                <div className="htb-icon">
                  <img src="/assets/svg/make-escape.svg"></img>
                </div>
                <h3 className="golden-text text-3xl font-bold mt-2">3</h3>
                <div className="htb-text  text-gray-700 mt-2 mb-12 font-medium">
                  MAKE YOUR ESCAPE
                </div>
              </div>
            </div>
            {/* How to book 3 steps  end*/}
            {/*<div className="video-play-btn flex justify-center mt-4 mb-4 md:mb-12" onClick={()=>{playTeaser()}}> 
                    <div className="paly-btn flex space-x-2 items-center py-4 px-8 rounded font-semibold">
                            <span className="text-2xl"> <FaPlay/> </span>
                            <span>PLAY TEASER VIDEO</span>
                        </div> 
                </div>*/}

            <div className="bg-[#000000] game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative">
              {!playVid && (
                <div className="vid-tumb absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="vid-thubb-play relative w-full h-full">
                    <img
                      className="w-full"
                      src="/assets/video-thumb/all-inadventure-escape-room-trailer.jpg"
                    />
                    <div
                      onClick={() => {
                        setPlayVid(true);
                      }}
                      className="cursor-pointer text-[40px] md:text-[60px] lg:text-[72px] vid-play-btn w-[60px] h-[60px] md:w-[104px] md:h-[104px] lg:w-[116px] lg:h-[116px] rounded-full bg-[#000000] text-red-600 z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                      style={{ margin: "auto" }}
                    >
                      <ImPlay3 className="ml-2" />
                    </div>
                  </div>
                </div>
              )}

              {playVid && (
                <iframe
                  className="absolute w-full h-full top-0 left-0"
                  src={
                    "https://www.youtube.com/embed/CbtwmWf6KUQ?autoplay=1&rel=0"
                  }
                  title="Treasure Island 1881 // Reality Escape Game"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="game-book-btnbox mt-8 md:mt-16 lg:mt-20">
              <div className="game-btn-all max-w-sm mx-auto">
                <button
                  onClick={() => bookAll(props.bookingall)}
                  className="w-full my-4 block  uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
                >
                  BOOK YOUR ADVENTURES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlay;
