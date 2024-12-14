import UerTimer from "./UerTimer";
import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";

const UnlimitedEscapeRoomHome = (props) => {
  return (
    <div className="uer-home-hero   bg-black game-bg-pattern-dark  relative py-16 md:py-20 xl:py-24 3xl:py-28 px-1 overflow-hidden">
      <div className="uer-h-container max-w-7xl mx-auto ">
        <div className="section-head relative">
          <h3 className="font-os hidden md:block  uer-stork-grad font-bold text-gold text-[36px] md:text-[74px] lg:text-[92px] xl:text-[100px] 2xl:text-[116px] text-center ">
            UNLIMITED FUN AWAITS
          </h3>
          <div className="uer-head-img md:hidden">
            <img
              className="w-full"
              alt="unlimited escape room fun"
              src="/assets/unlimited-escape-room/allinadventures-unlimited-fun-awaits.svg"
            ></img>
          </div>
          <div className="uer-bg-head-shadow absolute w-full h-full top-0 left-0"></div>
        </div>
        <div className="mt-[-8px] md:mt-[-26px] lg:mt-[-30px] relative z-10 section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter
            title={"INTRODUCING THE UNLIMITED PLAY PASS!"}
            textColor={"#E0BF62"}
          />
          <div className="mt-4 md:mt-6 text-[#e2e2e2] text-center lg:text-lg 3xl:text-xl">
            Play Unlimited Mystery Rooms for an Entire Year for Just $79!
          </div>
        </div>
        <div className="uer-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center">
          <div className="uer-col  w-full lg:w-1/2  mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center relative">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
              <div className="uer-timer w-[260px] h-[80px] md:w-[300px]  md:h-[100px] absolute left-0 right-0  bottom-[-40px] md:bottom-[-50px] mx-auto">
                <div className="uer-timer-box  px-2 pt-3 md:pt-4 pb-2 xl:pt-5 rounded-[10px] border border-1 border-[#453A23] bg-[#161616] relative">
                  <div className="text-red-600 uer-grad2  absolute top-[-16px] md:top-[-18px] xl:top-[-21px] left-0 right-0 mx-auto font-os text-[18px] md:text-[22px] xl:text-[24px] font-bold">
                    TIME LEFT
                  </div>
                  <UerTimer />
                </div>
              </div>
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2  mt-10 md:mt-12 lg:mt-0 px-3 md:px-8 lg:px-0">
            {/* ==================section title=====================*/}
            <p className="text-[#ffffff] font-os text-[14px] rm:text-[15px] md:text-[18px] 3xl:text-[20px] font-semibold">
              MEMBERSHIP: UNLIMITED PLAY PASS
            </p>
            <h1
              className="text-[#CA9342] md:max-w-[620px]  font-bold font-os  text-2xl rm:text-[25px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              PLAY UNLIMITED ESCAPE ROOMS FOR{" "}
              <span className="text-red uer-grad">JUST $79 </span>PER PERSON
            </h1>
            <p className="text-[#CA9342] text-[13px] rm:text-[14px] md:text-[15px] xl:texxt-[16px] 3xl:text-[17px] font-medium mt-1 md:mt-0">
              — VALID FOR AN ENTIRE YEAR!
            </p>

            <div className="text-slate-100 md:text-lg mt-4 md:mt-6 xl:text-lg xl:max-w-[530px]">
              Experience 9 thrilling escape room themes at our All In Adventures
              location in Albany, NY! Normally, each game is $32.99 per person,
              which totals $296.91 for all 9 games. But with our Unlimited Play
              Pass,{" "}
              <span className="text-[#CA9342]">
                you save an incredible $217.91!
              </span>
            </div>

            {/* ==================button=====================*/}
            <div className="uer-h-btn  mt-6 md:mt-6 2xl:mt-8">
              <button className=" px-5 rm:px-6 md:px-8 text-center border inline-block text-[15px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700">
                Get Your Unlimited Play Pass Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnlimitedEscapeRoomHome;
