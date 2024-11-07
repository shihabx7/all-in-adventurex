import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
import GameTitleSeparator from "../util/GameTitleSeparator";
const MobileEscapEx = () => {
  return (
    <div className="mer-hero  bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden">
      <SectionBorderBottom />
      <SectionBorderTop />
      <div className="mbl-h-container max-w-7xl mx-auto ">
        {/* =====================++++section row 1++++=====================*/}
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
            {/* ==================section title=====================*/}
            <GameTitleSeparator title={"EXPERIENCE THE THRILL ANYWHERE!"} />

            {/* ==================text=====================*/}
            <div className="text-[#2e2e2e] mbl-h-list mt-6">
              <p className="text-[#2E2E2E] lg:text-lg">
                Our mobile escape room game brings the adventure directly to
                you. Simply use your own device to connect to our platform and
                immerse yourself in a world of puzzles and challenges. No
                downloads or installations required. Solve intricate riddles,
                crack codes, and decipher clues to unlock the secrets of
                mysterious worlds. With stunning visuals and engaging gameplay,
                our escape room game offers tons of fun and excitement! Try it
                today and see if you have what it takes to escape!
              </p>
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
              <img
                className="w-full"
                src="/assets/mobile-escape-room/allinadventures-mobile-escape-room-experience-1.jpg"
              ></img>
            </div>
          </div>
        </div>
        {/* ==================+++section row 2+++=====================*/}
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center mt-8 md:mt-12 lg:mt-16 2xl:mt-20">
          <div className="mbl-col w-full lg:w-1/2  mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center w-full">
              <img
                className="w-full"
                src="/assets/mobile-escape-room/allinadventures-mobile-escape-room-experience-2.jpg"
              ></img>
            </div>
          </div>
          <div className="mbl-col w-full lg:w-1/2 ">
            {/* ==================section title=====================*/}
            <GameTitleSeparator
              title={"BRING THE ESCAPE ROOM FUN TO YOUR LOCATION"}
            />

            {/* ==================text====================*/}
            <div className="text-[#2e2e2e] mbl-h-list mt-6">
              <p className="text-[#2E2E2E] lg:text-lg">
                Our mobile escape room offers a unique and engaging experience,
                perfect for corporate events, birthday parties, and
                team-building activities. Tailored to your needs, our exciting
                themes and challenging puzzles create unforgettable moments that
                keep your group talking long after the event. Enjoy the fun
                without leaving your location, as our portable game modules
                easily set up in various spaces, from outdoor areas to
                conference rooms.
              </p>
              <p className="text-[#2E2E2E] lg:text-lg mt-3 lg:mt-6">
                Foster teamwork and collaboration in a fun environment with our
                mobile escape room, enhancing relationships among colleagues and
                friends. Book your adventure today and let the excitement come
                to you!
              </p>
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
        </div>
      </div>
    </div>
  );
};

export default MobileEscapEx;
