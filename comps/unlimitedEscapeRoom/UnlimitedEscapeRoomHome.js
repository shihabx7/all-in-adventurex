import UerTimer from "./UerTimer";
import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";
import UerBtn from "./UerBtn";

const UnlimitedEscapeRoomHome = (props) => {
  return (
    <div className="uer-home-hero   bg-black game-bg-pattern-dark  relative py-16 md:py-16 md:pb-[106px] lg:pb-[136px]  xl:py-20 xl:pb-[158px] 3xl:pt-24 3xl:pb-[164px]  overflow-hidden">
      <div className="uer-h-container max-w-7xl mx-auto px-1 rm:px-2 md:px-4 lg:px-10 xl:px-12">
        <div className="section-head relative">
          <h3 className="font-os hidden md:block  uer-stork-grad font-bold text-gold text-[36px] md:text-[74px] lg:text-[92px] xl:text-[100px] 2xl:text-[116px] text-center ">
            UNLIMITED FUN AWAITS
          </h3>
          <div className="uer-head-img hidden">
            <img
              className="w-full"
              alt="unlimited escape room fun"
              src="/assets/unlimited-escape-room/allinadventures-unlimited-fun-awaits.svg"
            ></img>
          </div>
          <div className="uer-bg-head-shadow absolute w-full h-full top-0 left-0"></div>
        </div>
        <div className="mt-[0px] md:mt-[-26px] lg:mt-[-30px] relative z-10 section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter
            title={"INTRODUCING THE UNLIMITED PLAY PASS!"}
            textColor={"#E0BF62"}
          />
          <div className="mt-4 md:mt-6 text-[#e2e2e2] text-center lg:text-lg 3xl:text-xl">
            Play escape room games as much as you want!
          </div>
        </div>
        <div className="uer-row   flex flex-col lg:flex-row lg:items-center jsutify-between  space-x-2 lg:space-x-2 xl:space-x-3 2xl:space-x-4 items-center pt-10 pb-12 md:pt-10 md:pb-16  lg:py-10  2xl:py-12">
          <div className="uer-col  w-full lg:w-1/2  mb-4 md:mb-4 lg:mb-0 ">
            <div className="mbl-h-img text-center relative ">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
              {/*<div className="uer-timer w-[260px] h-[80px] md:w-[300px]  md:h-[100px] absolute left-0 right-0  bottom-[-40px] md:bottom-[-50px] mx-auto">
                <div className="uer-timer-box  px-2 pt-3 md:pt-4 pb-2 xl:pt-5 rounded-[10px] border border-1 border-[#453A23] bg-[#161616] relative">
                  <div className="text-red-600 uer-grad2  absolute top-[-16px] md:top-[-18px] xl:top-[-21px] left-0 right-0 mx-auto font-os text-[18px] md:text-[22px] xl:text-[24px] font-bold">
                    TIME LEFT
                  </div>
                  <UerTimer />
                </div>
              </div>*/}
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2  px-0 rm:px-2 md:pl-8 lg:pl-2 xl:pl-3">
            {/* ==================section title=====================*/}

            <h1
              className="text-[#CA9342] pt-2  md:max-w-[620px]  font-bold font-os  text-[20px] rm:text-[24px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              BUY YOUR UNLIMITED PLAY PASS <br /> ONE DAY OR ONE YEAR
            </h1>

            <p className="text-[#CA9342] text-[13px] rm:text-[14px] md:text-[15px] xl:texxt-[16px] 3xl:text-[17px] font-medium mt-1 md:mt-0">
              — IT'S YOUR CHOICE!
            </p>
            <div className="text-slate-100 md:text-lg mt-4 md:mt-6 xl:text-lg xl:max-w-[530px]">
              With All In Adventures' Unlimited Play Pass, you can dive into as
              many Escape Room adventures as you want. Pick the Day Pass for $50
              or the Annual Pass for $79, and let the fun begin!
            </div>

            {/* ==================button=====================*/}
            <div className="uer-h-btn  mt-6 md:mt-6 2xl:mt-8 flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:space-x-4 lg:space-x-2 xl:space-x-4">
              <div>
                <UerBtn
                  setShowUerBookingList={props.setShowUerBookingList}
                  locationSlug={props.locationSlug ? props.locationSlug : false}
                />
              </div>
              <div>
                <a
                  className="bg-transparent cursor-pointer px-5 rm:px-6 md:px-8 lg:px-5 xl:px-8 text-center border-2 block md:inline-block text-[14px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700 transition duration-300"
                  href="/unlimited-play-pass"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnlimitedEscapeRoomHome;
