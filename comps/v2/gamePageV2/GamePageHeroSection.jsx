import GamePageHeroBgImg from "./elements/GamePageHeroBgImg";
import GameBookingBtn from "./elements/GameBookingBtn";
import GameStates from "./elements/GameStates";
//GamePageHeroSection({ pageHeroData, gameBooking })
export default function GamePageHeroSection({ pageHeroData, gameStatData }) {
  return (
    <div className="game-page-hero-v2 bg-black max-w-screen   relative z-10">
      {/* ========================= =======================================================================section bg====================== */}
      <div className="hero-bg-image w-full h-full absolute top-0 left-0 ">
        <GamePageHeroBgImg
          heroBgImageDesktop={pageHeroData.heroBgImageDesktop}
          heroBgImageMobile={pageHeroData.heroBgImageMobile}
        />
      </div>
      {/* ========================= =======================================================================section bg end====================== */}
      {/* ========================= section content====================== */}
      <div className="section-bg-shadow w-full  bg-gradient-to-t from-black/90 to-black/60  relative z-20">
        <div className=" w-full min-h-[70vh] md:min-h-[60vh]  xl:min-h-[86vh] flex flex-col justify-center items-center">
          <div className=" w-auto xl:max-w-[75rem] 2xl:max-w-7xl px-3 rm:px-5 zm:px-7 lg:px-6 xl:px-4 py-16 lg:py-28 3xl:py-32">
            <div className="content-box flex flex-col justify-center items-center">
              <div className="page-title-v2 text-center">
                <h1 className="font-os font-bold text-[#E0BF62] leading-[1.25] text-[2.25rem] rm:text-[2.35rem] zm:text-[2.75rem] md:text-[3.5rem] xl:text-[3.75rem] 3xl:text-[4rem]">
                  {pageHeroData.pageTitle}
                </h1>
              </div>

              <div className="page-sub-title-v2 max-w-full zm:max-w-[540px] md:max-w-[720px] xl:max-w-[880px] 3xl:max-w-[900px] text-center text-[#CACACA] text-[1.05rem] rm:text-[1.1rem] zm:text-[1.15rem] md:text-[1.175rem] xl:text-[1.25rem] 3xl:text-[1.35rem] mt-2">
                <div
                  className="page-sub-title"
                  dangerouslySetInnerHTML={{
                    __html: pageHeroData.pageSubTitle,
                  }}
                ></div>
              </div>
              {/* ========================= game - stats================== ============ game - stats====================== */}
              <div className="game-hero-booking-btn-row-v2 w-full max-w-full sm:max-w-[380px] md:max-w-[420px] 2xl:max-w-[440px] mt-8 md:mt-9 xl:mt-12 3xl:mt-14">
                <GameBookingBtn btnType="fat" btnLabel="BOOK THIS GAME" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================= game - stats====================== */}
      <div className="gst-container  w-[99%] rm:w-[97%] sm:w-[560px] md:w-[720px] xl:w-[880px] 3xl:w-[900px]  absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2   z-[999]">
        <GameStates gameStatData={gameStatData} />
      </div>
      {/* =========================     game-states-container w-[95%] rm:w-[90%] sm:w-[520px] md:w-[700px] xl:w-[880px] 3xl:w-[900px] h-[140px] bg-red-500 absolute bottom-0 left-[50%]  translate-x-[-50%] translate-y-[50%] z-[120]game - info end====================== */}
    </div>
  );
}
