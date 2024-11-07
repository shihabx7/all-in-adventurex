import SectionBorderBottom from "../util/SectionBorderBottom";
const MobileEscapeHero = () => {
  return (
    <div className="mer-hero  bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden">
      <SectionBorderBottom />
      <div className="mbl-h-container max-w-7xl mx-auto ">
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
            {/* ==================section title=====================*/}
            <p className="text-[#4A2F03] text-[20px] md:text-[24px] 2xl:text-[28px]">
              MOBILE ESCAPE ROOM
            </p>
            <h1
              className="text-[#CA9342] font-bold  text-2xl rm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              BRING THE THRILL OF AN ESCAPE ROOM TO YOU!
            </h1>

            {/* ==================icon list=====================*/}
            <div className="text-[#2e2e2e] mbl-h-list mt-6">
              <div className="icon-row flex space-x-2 items-center">
                <div className="w-[36px] md:w-[42px] ">
                  <img
                    className="w-full"
                    src="/assets/mobile-escape-room/icon/adventures-dark.svg"
                  ></img>
                </div>
                <div className="md:text-lg flex-1">
                  Thrilling Adventures Delivered to Your Doorstep
                </div>
              </div>
              <div className="icon-row flex space-x-2 items-center mt-3">
                <div className="w-[36px] md:w-[42px]">
                  <img
                    className="w-full"
                    src="/assets/mobile-escape-room/icon/team-building-dark.svg"
                  ></img>
                </div>
                <div className="md:text-lg flex-1">
                  Perfect for Team-Building, Parties, and Special Events
                </div>
              </div>
              <div className="icon-row flex space-x-2 items-center mt-3">
                <div className="w-[36px] md:w-[42px] ">
                  <img
                    className="w-full"
                    src="/assets/mobile-escape-room/icon/puzzle-dark.svg"
                  ></img>
                </div>
                <div className="md:text-lg flex-1">
                  Solve Challenging Puzzles Anywhere—Office, Classroom, or
                  Outdoors
                </div>
              </div>
            </div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn  mt-8 md:mt-10 2xl:mt-12">
              <a
                href="#mobile-escape-room-form"
                className="max-w-[340px] px-12 text-center border block text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700"
              >
                BOOK YOUR EVENT TODAY
              </a>
            </div>
          </div>
          <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center">
              <img src="/assets/mobile-escape-room/allin-adventures-mobile-escape-room-hero.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEscapeHero;
