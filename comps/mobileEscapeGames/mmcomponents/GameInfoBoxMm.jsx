const GameInfoBoxMm = () => {
return (
    <div className="max-w-[1240px] mx-auto  relative z-30 px-4 md:px-3 xl:px-4 2xl:px-0">
      <div className="section-title mb-5 rm:mb-6 md:mb-8 lg:mb-10  md:max-w-[720px] lg:max-w-[1000px] mx-auto text-center">
        <h2 className="text-[#E0BF62] pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase leading-[1.3]">
          MORE THAN A GAME: A FULLY INTERACTIVE, HOSTED ADVENTURE
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-3 xl:gap-4">
        {/*=======================ite 1============== */}
        <div className="mer-pric-list-item bg-[#FAECCA] rounded-[18px]">
          <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-6 2xl:px-6 2xl:py-8">
            <div className="mar-wv-text ">
              <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.4] text-[#CA9342]">
                Authentic Props & Clues
              </h3>
              <p className="text-[#2E2E2E] mt-1 rm:mt-2 xl:mt-3  text-sm rm:text-base md:text-[15px] xl:text-lg">
                Unlock the next step with your hands, not dice! Teams work with
                actual tactile objects, dossiers, ciphers, and printed documents
                used for real-world puzzle-solving.
              </p>
            </div>
          </div>
        </div>
        {/*=======================ite 2============== */}
        <div className="mer-game-info-box bg-[#FAECCA] rounded-[18px]">
          <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-6 2xl:px-6 2xl:py-8">
            <div className="mar-wv-text ">
              <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.4] text-[#CA9342]">
                Digital Locks & Boxes
              </h3>
              <p className="text-[#2E2E2E] mt-1 rm:mt-2 xl:mt-3 text-sm rm:text-base md:text-[15px] xl:text-lg">
                The heart of the experience is our seamless online
                platform—teams enter codes, unlock digital locks, and race the
                clock, simulating a real escape room challenge.
              </p>
            </div>
          </div>
        </div>
        {/*=======================ite 3============== */}
        <div className="mer-pric-list-item bg-[#FAECCA] rounded-[18px]">
          <div className="item-wrapper px-4 py-6 rm:px-5 rm:py-8 md:px-3 md:py-6 lg:px-5 lg:py-7 xl:px-6 2xl:px-6 2xl:py-8">
            <div className="mar-wv-text ">
              <h3 className="font-bold text-[20px] rm:text-[22px] md:text-[22px] lg:text-[1.4rem] xl:text-[1.55rem]  3xl:text-[1.7rem] leading-[1.4] text-[#CA9342]">
                Fully Hosted
              </h3>
              <p className="text-[#2E2E2E] mt-1 rm:mt-2 xl:mt-3  text-sm rm:text-base md:text-[15px] xl:text-lg">
                Every session is led by a professional Game Master. They set the
                scene, monitor team progress, provide hints, and ensure a
                high-energy and truly interactive experience from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*=======================Section btn============== */}
    </div>
);
};

export default GameInfoBoxMm;
