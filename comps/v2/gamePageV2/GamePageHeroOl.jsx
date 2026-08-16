import HeroBgFull from "./elements/GamePageHeroBgImg";
//import GamePageHeroBookingBtn from "./elements/GamePageHeroBookingBtn";
export default function GamePageHeroOl({ pageHeroData, gameBooking }) {
  return (
    <div className="game-page-hero-v2 bg-black relative">
      {/* ========================= =======================================================================section bg====================== */}
      <div className="bg-image w-full h-full absolute top-0 left-0 z-20">
        <GamePageHeroBgImg
          heroBgImage={
            pageHeroData?.heroBgImage ? pageHeroData.heroBgImage : null
          }
        />
      </div>
      <div className="bg-image-filter w-full h-full absolute inset-0 bg-gradient-to-t from-black/90 to-black/75 z-30"></div>
      {/* ========================= =======================================================================section bg end====================== */}
      {/* ========================= section content====================== */}
      <div className="section-container w-full min-h-[70vh] md:min-h-[60vh]  xl:min-h-[86vh] flex flex-col justify-center items-center  relative z-40">
        <div className="max-w-7xl px-3 rm:px-5 zm:px-7 lg:px-6 xl:px-4 py-16 lg:py-28 3xl:py-32">
          <div className="content-box flex flex-col justify-center items-center">
            <div className="page-title-v2 text-center">
              <h1 className="font-os font-bold text-[#E0BF62] leading-[1.25] text-[2.35rem] rm:text-[2.5rem] zm:text-[3rem] md:text-[3.5rem] xl:text-[3.75rem] 3xl:text-[4rem]">
                ESCAPE FROM ALCATRAZ
              </h1>
            </div>

            <div className="page-sub-title-v2 max-w-full zm:max-w-[540px] md:max-w-[720px] xl:max-w-[880px] 3xl:max-w-[900px] text-center text-[#CACACA] text-[1.05rem] rm:text-[1.1rem] zm:text-[1.15rem] md:text-lg xl:text-[1.16rem] 3xl:text-[1.2rem] mt-2">
              <p className="page-sub-title">
                You are prison guards at Alcatraz and the Warden's keys have
                gone missing! Can you find them before there is an escape
                attempt?
              </p>
            </div>
            {/* ========================= game - stats==================
            <div className="game-hero-booking-btn-row-v2 flex justify-center items-center mt-8 md:mt-9 xl:mt-12 3xl:mt-14">
              <GamePageHeroBookingBtn />
            </div>
           ============ game - stats====================== */}
          </div>
        </div>
      </div>
      {/* ========================= game - stats====================== */}
      <div className="gst-container bg-red-600/35 w-[95%] rm:w-[90%] sm:w-[520px] md:w-[700px] xl:w-[880px] 3xl:w-[900px] absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[120]"></div>
      {/* ========================= game-states-container w-[95%] rm:w-[90%] sm:w-[520px] md:w-[700px] xl:w-[880px] 3xl:w-[900px] h-[140px] bg-red-500 absolute bottom-0 left-[50%]  translate-x-[-50%] translate-y-[50%] z-[120]game - info end====================== */}
    </div>
  );
}
