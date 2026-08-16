import { ImPlay3 } from "react-icons/im";
import { useState, useRef, useEffect } from "react";

const YoutubeVideoSection = (props) => {
  const [playVid, setPlayVid] = useState(false);

  const startVid = () => {
    setPlayVid(true);
  };

  return (
    <div className="game-yutube-video relative bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-repeat bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="w-auto xl:max-w-[75rem] 2xl:max-w-7xl mx-auto  px-3 rm:px-5 zm:px-7 lg:px-6 xl:px-4 py-16 lg:py-28 3xl:py-32 relative z-30">
        <div className="section-heading text-center">
          <div className="section-title">
            <h2 className="text-[#CA9342] text-2xl rm:text-[1.75rem] zm:text-[2rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.75rem] 3xl:text-[3rem] font-os uppercase leading-[1.1] font-bold">
              {props.videoData.videoTrailerTitle
                ? props.videoData.videoTrailerTitle
                : "GAME TRAILER"}
            </h2>
          </div>
          <div className="max-w-[800px]  mx-auto text-[#2e2e2e] md:text-lg 2xl:text-[1.25rem] mt-1 md:mt-2 text-center">
            <p className="text-gray-700 md:px-8">
              {props.videoData.videoTrailerSubTitle}
            </p>
          </div>
        </div>
        <div className="bg-[#121212] rounded-xl w-full md:w-[740px] lg:w-[900px] xl:w-[1100px] 3xl:w-[1120px] aspect-video mx-auto shadow-md relative mt-7 md:mt-10 2xl:mt-12">
          {!playVid && (
            <div className="vid-tumb absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
              <div className="vid-thubb-play relative w-full h-full">
                <div className="w-full ">
                  {props.videoData.thumbnail ? (
                    <>
                      <img
                        src={props.videoData.thumbnail.url}
                        alt={props.videoData.thumbnail.alt}
                      ></img>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                {/**=========================================play-btn============*/}
                <div
                  onClick={(e) => {
                    startVid();
                  }}
                  className="cursor-pointer text-[36px] md:text-[56px] lg:text-[66px] vid-play-btnx w-[54px] h-[54px] md:w-[84px] md:h-[84px] lg:w-[92px] lg:h-[92px] rounded-full bg-red-600 text-white z-20 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                  style={{ margin: "auto" }}
                >
                  <ImPlay3 className="ml-2" />
                </div>
                {/**=========================================play-btn===========*/}
              </div>
            </div>
          )}
          {/**=========================================youtube Video ====================*/}
          {playVid && props.videoData.youtubeVideoId !== "self" && (
            <iframe
              className="absolute w-full h-full top-0 left-0 rounded-xl"
              src={
                "https://www.youtube.com/embed/" +
                props.videoData.youtubeVideoId +
                "?autoplay=1&rel=0"
              }
              title="Treasure Island 1881 // Reality Escape Game"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          {/**=========================================self Video {playVid && props.videoData.youtubeVideoId == "self" && (
            <ActivityVideoSelf />
          )}
 =======================*/}
        </div>
        {/*============================================
        <div className="game-b-btnbox mt-8 md:mt-16 lg:mt-20">
          <div className="game-btn-all ">
            <a
              href={
                props.locationSlug
                  ? "/" + props.locationSlug + "/activities"
                  : "/activities"
              }
              className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center"
            >
              VIEW ALL GAMES
            </a>

            <a
              href={
                props.locationSlug
                  ? "/" + props.locationSlug + "/events"
                  : "/events"
              }
              className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center"
            >
              VIEW ALL EVENTS
            </a>
          </div>
        </div>

===================================================*/}
      </div>
    </div>
  );
};

export default YoutubeVideoSection;
