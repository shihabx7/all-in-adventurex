import TitleSeparator from "../util/TitleSeparator";
import Link from "next/dist/client/link";
import { FaPlay } from "react-icons/fa";
import { ImPlay3 } from "react-icons/im";
import { useState } from "react";
import autoprefixer from "autoprefixer";

const GameVideo = (props) => {
  const [playVid, setPlayVid] = useState(false);

  const startVid = () => {
    setPlayVid(true);
  };

  return (
    <div className="game-video relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-repeat bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
      </div>
      <div className="max-w-7xl mx-auto pb-16 md:pb-20 lg:pb-28 px-4 relative z-30">
        <div className="s-title">
          <TitleSeparator
            title="GAME TRAILER"
            color="dark-gold"
            weight="font-bold"
          />
          <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-8">
            <p className="text-gray-700 md:px-8">
              Watch a sneak peek of the thrills{" "}
              {props.activityname == "Game Show Room" ? " " : "and drama "}from{" "}
              {props.activityname && <span>{props.activityname}</span>}.
            </p>
          </div>
        </div>

        <div className="bg-[#000000] game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative">
          {!playVid && (
            <div className="vid-tumb absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="vid-thubb-play relative w-full h-full">
                <img className="w-full" src={props.videothumb} />
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
                props.videoid +
                "?autoplay=1&rel=0"
              }
              title="Treasure Island 1881 // Reality Escape Game"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="game-b-btnbox mt-8 md:mt-16 lg:mt-20">
          {props.location ? (
            <div className="game-btn-all ">
              <a
                href={"/" + props.location + "/activities/"}
                className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
              >
                VIEW ALL GAMES
              </a>

              <a
                href={"/" + props.location + "/events/"}
                className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center"
              >
                VIEW ALL EVENTS
              </a>
            </div>
          ) : (
            <div className="game-btn-all ">
              <a
                href="/activities/"
                className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
              >
                VIEW ALL GAMES
              </a>

              <a
                href="/events/"
                className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center"
              >
                VIEW ALL EVENTS
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameVideo;
