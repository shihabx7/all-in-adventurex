import TitleSeparator from "../util/TitleSeparator";
import { FaPlay } from "react-icons/fa";
import TeaserVideo from "../util/TeaserVideo";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { ImPlay3 } from "react-icons/im";

const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};

const PageVideoHome = (props) => {
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

  const showloc = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    document.getElementById("locmenu").classList.remove("hidden");
  };
  return (
    <>
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
      <div className=" bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative pt-[100px] pb-16 md:py-20 lg:py-28 px-4 overflow-hidden">
        {/*======================= boder img============== */}
        <div className="sec-divider-top w-full absolute top-0 left-0 ">
          <img
            className="w-full hidden md:block"
            src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
          ></img>
          <img
            className="w-full rotate-180 md:hidden"
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
          ></img>
        </div>
        <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
          <img
            className="w-full hidden md:block"
            src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
          ></img>
          <img
            className="w-full  md:hidden"
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
          ></img>
        </div>
        {/*======================= boder img end============== */}
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
          <div className="hbt-container pt-5 md:pt-16 relative z-20">
            <TitleSeparator title={props.pageVideo.title} />
            <div className="max-w-[860px] md:text-lg mx-auto text-center mt-4 md:mt-8  mb-8 md:mb-12 lg:mb-16">
              <div
                className="text-gray-700 md:px-8"
                dangerouslySetInnerHTML={{ __html: props.pageVideo.subTitle }}
              ></div>
            </div>
            {/* How to book 3 steps */}
            <div className="htb-steps  sm:max-w-[98%] md:max-w-[740px] lg:max-w-[840px] mx-auto ">
              <div class="flex  mb-10 md:mb-12 lg:mb-16">
                <div class="steps-1 w-[28%] md:w-[220px]  flex flex-col">
                  <div className="htb-icon text-center w-[86%] mx-auto">
                    <img
                      className="w-[90px] mx-auto"
                      src="/assets/svg/choose-location.svg"
                    ></img>
                  </div>
                  <h3 className="golden-text text-3xl font-bold mt-2 text-center">
                    1
                  </h3>
                  <p className="htb-text-x text-[8px] rm:text-[10px] lm:text-[12px] sm:text-[14px] lg:text-lg text-center text-gray-700 mt-2  font-medium">
                    CHOOSE YOUR <br></br> LOCATION
                  </p>
                </div>
                <div class="lin  flex-grow flex flex-col">
                  <div className="line-img w-full h-full relative">
                    <div className="absolute top-[62%] lm:top-[60%] xm:top-[55%] md:top-[60%] lg:top-[57%] w-[200%] xm:w-[140%] md:w-[190px] lg:w-[240px] left-[-40%] xm:left-[-20%] md:left-[-72px] lg:left-[-78px]">
                      <img
                        className="hidden md:block"
                        src="/assets/svg/htb-line-1.svg"
                      ></img>
                      <img
                        className="w-full md:hidden"
                        src="/assets/svg/step-line-mb.svg"
                      ></img>
                    </div>
                  </div>
                </div>
                <div class="steps-2 w-[28%] md:w-[220px]   flex flex-col">
                  <div className="htb-icon text-center w-[86%] mx-auto">
                    <img
                      className="w-[90px] mx-auto"
                      src="/assets/svg/select-game.svg"
                    ></img>
                  </div>
                  <h3 className="golden-text text-3xl font-bold mt-2 text-center">
                    2
                  </h3>
                  <p className="htb-text-x text-[8px] rm:text-[10px] lm:text-[12px] sm:text-[14px] lg:text-lg text-center text-gray-700 mt-2  font-medium">
                    SELECT YOUR <br></br> GAME
                  </p>
                </div>
                <div class="lin   flex-grow flex flex-col">
                  <div className="line-img w-full h-full relative">
                    <div className="absolute top-[62%] lm:top-[60%] xm:top-[55%] md:top-[60%] lg:top-[57%] w-[200%] xm:w-[140%] md:w-[190px] lg:w-[240px] left-[-40%] xm:left-[-20%] md:left-[-72px] lg:left-[-78px]">
                      <img
                        className="hidden md:block"
                        src="/assets/svg/htb-line-1.svg"
                      ></img>
                      <img
                        className="w-full md:hidden"
                        src="/assets/svg/step-line-mb.svg"
                      ></img>
                    </div>
                  </div>
                </div>
                <div class="steps-3 w-[28%] md:w-[220px] flex flex-col">
                  <div className="htb-icon w-[86%] mx-auto">
                    <img
                      className="w-[90px] mx-auto"
                      src="/assets/svg/pick-date.svg"
                    ></img>
                  </div>
                  <h3 className="golden-text text-3xl font-bold mt-2 text-center">
                    3
                  </h3>
                  <p className="htb-text-x text-[8px] rm:text-[10px] lm:text-[12px] sm:text-[14px] lg:text-lg text-center  text-gray-700 mt-2  font-medium">
                    PICK YOUR <br></br>DATE &amp; TIME
                  </p>
                </div>
              </div>
            </div>

            {/* How to book 3 steps  end*/}

            <div className="bg-[#000000] game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative">
              {!playVid && (
                <div className="vid-tumb absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="vid-thubb-play relative w-full h-full">
                    <img
                      className="w-full"
                      alt={props.pageVideo.thumbnail.alt}
                      src={props.pageVideo.thumbnail.url}
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
                    "https://www.youtube.com/embed/" +
                    props.pageVideo.youtubeVideoId +
                    "?autoplay=1&rel=0"
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
                {props.allBooking ? (
                  <button
                    onClick={() => bookAll(props.allBooking)}
                    className="w-full my-4 block  uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
                  >
                    BOOK YOUR ADVENTURES
                  </button>
                ) : (
                  <button
                    onClick={showloc}
                    className="w-full my-4 block  uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
                  >
                    BOOK YOUR ADVENTURES
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageVideoHome;
