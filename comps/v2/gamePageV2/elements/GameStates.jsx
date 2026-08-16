import Image from "next/image";
export default function GameStates({ gameStatData }) {
  return (
    <div className="game-stats w-full relative">
      <div className="game-stat-bg-img w-full h-auto relative">
        <Image
          src={
            gameStatData.gameStateBgImage.url
              ? gameStatData.gameStateBgImage.url
              : "/assets/escape-games-v2/escape-from-alcatraz/escape-from-alcatraz-stat-bg-img.png"
          }
          alt="stat bg image"
          width={1000}
          height={160}
          layout="responsive"
          priority
        />
      </div>
      <div className="game-stats-content absolute top-0 left-0 w-full h-full flex justify-center items-center space-x-4 rm:space-x-5 zm:space-x-8 md:space-x-10 xl:space-x-14 3xl:space-x-16 ">
        {/* ========================= game-stats-item====================== Team  Size*/}
        <div className="gst-item text-center">
          <p className="font-os font-semibold text-white leading-[1.2] text-[1rem] rm:text-[1.15rem] zm:text-[1.6rem] md:text-[1.875rem] xl:text-[2.25rem] 3xl:text-[2.5rem]">
            {gameStatData.teamSize ? gameStatData.teamSize : "2-10"}
          </p>
          <p className="mt-1 md:mt-2 xl:mt-3 text-[#D9D9D9] leading-[1] text-[.72rem] rm:text-[.86rem] zm:text-[1rem] md:text-[1.25rem] xl:text-[1.4rem] 3xl:text-[1.5rem]">
            Team
          </p>
        </div>
        {/* ========================= game-stats-item====================== Duration */}
        <div className="gst-item text-center">
          <p className="font-os font-semibold text-white leading-[1.2] text-[1rem] rm:text-[1.15rem] zm:text-[1.6rem] md:text-[1.875rem] xl:text-[2.25rem] 3xl:text-[2.5rem]">
            {gameStatData.duration ? gameStatData.duration : "60 min"}
          </p>
          <p className="mt-1 md:mt-2 xl:mt-3 text-[#D9D9D9] leading-[1] text-[.72rem] rm:text-[.86rem] zm:text-[1rem] md:text-[1.25rem] xl:text-[1.4rem] 3xl:text-[1.5rem]">
            Time
          </p>
        </div>
        {/* ========================= game-stats-item====================== Age */}
        <div className="gst-item text-center">
          <p className="font-os font-semibold text-white leading-[1.25] text-[1rem] rm:text-[1.15rem] zm:text-[1.6rem] md:text-[1.875rem] xl:text-[2.25rem] 3xl:text-[2.5rem]">
            {gameStatData.age ? gameStatData.age : "6+"}
          </p>
          <p className="mt-1 md:mt-2 xl:mt-3 text-[#D9D9D9] leading-[1] text-[.72rem] rm:text-[.86rem] zm:text-[1rem] md:text-[1.25rem] xl:text-[1.4rem] 3xl:text-[1.5rem]">
            Age
          </p>
        </div>
        {/* ========================= game-stats-item====================== Price */}
        <div className="gst-item text-center">
          <p className="font-os font-semibold text-white leading-[1.25] text-[1rem] rm:text-[1.15rem] zm:text-[1.6rem] md:text-[1.875rem] xl:text-[2.25rem] 3xl:text-[2.5rem]">
            {gameStatData.price ? gameStatData.price : "$26.99"}
          </p>
          <p className="mt-1 md:mt-2 xl:mt-3 text-[#D9D9D9] leading-[1] text-[.72rem] rm:text-[.85rem] zm:text-[1rem] md:text-[1.25rem] xl:text-[1.4rem] 3xl:text-[1.5rem]">
            From
          </p>
        </div>
      </div>
    </div>
  );
}
