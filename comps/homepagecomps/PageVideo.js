import TitleSeparator from "../util/TitleSeparator";
import { FaPlay } from "react-icons/fa";
import TeaserVideo from "../util/TeaserVideo";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { ImPlay3 } from "react-icons/im";
import HowtobookSteps from "./HowtobookSteps";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const bookAll = (bookingData) => {
  FH.open({
    shortname: bookingData.shortName,
    fallback: "simple",
    fullItems: "yes",
    flow: bookingData.flow,
    view: "items",
  });
};

const PageVideo = (props) => {
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
        <SectionBorderTop />
        <SectionBorderBottom />
        {/*======================= boder img end============== */}
        <div className="htb-bg-icon htb-bg-1 absolute">
          <img
            alt="Vintage-style calendar page for the year 2050, marked with a check on the 24th, suggesting a special event or date reminder, related to All In Adventures Escape Rooms."
            src="/assets/calendar.png"
          ></img>
        </div>
        <div className="htb-bg-icon htb-bg-2 absolute">
          <img
            alt="Decorative compass rose design with ornate details, highlighting directions relevant to All In Adventures escape rooms."
            src="/assets/Compas-brown.png"
          ></img>
        </div>
        <div className="htb-bg-icon htb-bg-3 absolute">
          <img
            alt="A brown-coloured compass representing the theme of Escape Rooms at All In Adventures."
            src="/assets/Navigation.png"
          ></img>
        </div>
        <div className="htb-bg-icon htb-bg-4 absolute">
          <img
            alt="A skull and crossbones symbolizing the excitement of an escape room game at All In Adventures."
            src="/assets/Skull.png"
          ></img>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="hbt-container pt-16 md:pt-16 relative z-20">
            <TitleSeparator title={props.pageVideo.title} />
            <div className="max-w-[860px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
              <div
                className="text-gray-700 md:px-8"
                dangerouslySetInnerHTML={{ __html: props.pageVideo.subTitle }}
              ></div>
            </div>
            {/* How to book 3 steps */}
            <HowtobookSteps />
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

export default PageVideo;
