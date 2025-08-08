import EscapeGameFilter from "./EscapeGameFilter";
import EscapeGameListVideo from "./EscapeGameListVideo";
import EscapeGameListInfo from "./EscapeGameListInfo";
import { useState, useEffect } from "react";
export default function EscapeGameList({
  escapeGameList,
  gameThemeList,
  recommendList,
  locationSlug,
}) {
  const [currentFilter, setCurrentFilter] = useState("All Games");
  const [currentVideoRef, setCurrentVideoRef] = useState(null);
  const [gameList, setGameList] = useState(escapeGameList);
  const [allGameList, setAllGameList] = useState(escapeGameList);

  const filterGame = () => {
    let fgArr = [];
    if (currentFilter !== "All Games") {
      for (let i = 0; i < gameList.length; i++) {
        if (
          escapeGameList[i].gameInfo.gameTheme.indexOf(currentFilter) !== -1 ||
          escapeGameList[i].gameInfo.recommendList.indexOf(currentFilter) !== -1
        ) {
          fgArr.push(gameList[i]);
        }
      }
    } else {
      fgArr = escapeGameList;
    }
    return fgArr;
  };

  useEffect(() => {
    setCurrentFilter("All Games");
    setCurrentVideoRef(null);
    setGameList(escapeGameList);
    setAllGameList(escapeGameList);
  }, []);

  useEffect(() => {
    const filterGame = () => {
      if (!currentFilter || currentFilter == "All Games") {
        setGameList(allGameList);
        return;
      }
      const filteredGame = allGameList.filter(
        (game) =>
          game.gameInfo.gameTheme.includes(currentFilter) ||
          game.gameInfo.recommendFor.includes(currentFilter)
      );

      setGameList(filteredGame);

      // setGameList(filteredGame);
    };

    filterGame();
  }, [currentFilter]);

  return (
    <div className="escape-game-list-wrapper">
      <EscapeGameFilter
        gameThemeList={gameThemeList}
        recommendList={recommendList}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />

      <div className="egl-list-item-box mt-2 flex flex-col space-y-5 md:space-y-8 2xl:space-y-10">
        {gameList.map((item, index) => {
          return (
            <div
              key={index}
              className="egl-item-row flex flex-col md:flex-row items-center "
            >
              <div className="egl-item-col  md:min-w-[320px] lg:min-w-[410px] xl:min-w-[460px] 2xl:min-w-[480px]">
                <EscapeGameListVideo
                  videoData={item.videoData}
                  currentVideoRef={currentVideoRef}
                  setCurrentVideoRef={setCurrentVideoRef}
                />
              </div>

              <div className="egl-item-col grow">
                <EscapeGameListInfo
                  gameInfo={item.gameInfo}
                  listCardBgImage={item.listCardBgImage}
                  bookingInfo={item.bookingInfo ? item.bookingInfo : false}
                  locationSlug={locationSlug ? locationSlug : false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
