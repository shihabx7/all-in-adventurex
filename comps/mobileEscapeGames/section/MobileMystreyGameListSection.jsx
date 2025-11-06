import GameInfoBoxMm from "../mmcomponents/GameInfoBoxMm";
import MobileMysteryGameGrid from "../mmcomponents/MobileMysteryGameGrid";
import BookingButtonPair from "../mmcomponents/BookingButtonPair";
import OpenMenuButtonPair from "../mmcomponents/OpenMenuButtonPair";

export default function MobileMystreyGameListSection  ({ locationName, locationSlug,setShowMobileEecapeMenu,setGoMobileEecapeForm })  {
  return (
    <div className="mm-game-list bg-[#251A03]   relative">
      <div className="py-16   lg:pt-20 3xl:pt-24 lg:pb-28 xl:pb-28  3xl:pb-28  z-20 ">
        <div className="mm-game-info">
          <GameInfoBoxMm />
        </div>
        {/*   escapeGameList={gameCarouselSectionData.escapeGameList} */}
        <div className="mm-game-list-section mt-16 md:mt-20 lg:mt-24 2xl:mt-28">
          <div className="section-head mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[1040px] mx-auto px-4 lg:px-0">
            <div className="section-title  md:max-w-[720px] lg:max-w-[1000px] mx-auto text-center">
              <h2 className="text-[#E0BF62] text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase leading-[1.3]">
                CHOOSE YOUR MOBILE MYSTERY
              </h2>
            </div>
            {/*  __html: gameCarouselSectionData.sectionSubTitle, */}
            <div className="text-gray-200 mt-1 md:mt-2 lg:mt-2  text-center md:text-lg lg:text-xl max-w-[800px] xl:max-w-[990px] mx-auto">
              <p>
                Select up to six unique, fully facilitated Mobile Mystery
                Experiences. Each 60-minute adventure is complete with physical
                props, digital locks, and an engaging storyline designed to
                maximize teamwork and fun.
              </p>
            </div>
          </div>
          <MobileMysteryGameGrid />
        </div>
        {/*  button pair center */}
        <div className="card-game-link mt-7 rm:mt-10 md:mt-12 xl:mt-12 ">
          {locationSlug ? (
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 rm:space-y-5 md:space-y-0 md:space-x-5 xl:space-x-6">
              <BookingButtonPair locationSlug={locationSlug} />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 rm:space-y-5 md:space-y-0 md:space-x-5 xl:space-x-6">
              <OpenMenuButtonPair setShowMobileEecapeMenu={setShowMobileEecapeMenu} setGoMobileEecapeForm={setGoMobileEecapeForm}/>
            </div>
          )}
        </div>
        <div className="mbl-sect-note mt-5 rm:mt-7 md:mt-8 xl:mt-10 ">
          <p className="text-[#aeaeae] zm:max-w-[500px] md:max-w-[760px] text-sm lg:max-w-[990px] mx-auto md:text-base text-center font-thin  italic">
            * Online booking through BOOK NOW opens 14 days in advance. Need
            something sooner? Click GET A QUOTE
          </p>
        </div>
      </div>
    </div>
  );
};
 
