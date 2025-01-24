import UerTimer from "./UerTimer";
import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";
import UerBtn from "./UerBtn";

const UnlimitedEscapeRoomSection = (props) => {
  return (
    <div className="uer-gn-section ">
      <div className="uer-h-container max-w-7xl mx-auto ">
        <div className="uer-row bg-black rounded-[16px] flex flex-col lg:flex-row lg:items-center jsutify-between  space-x-2 lg:space-x-2 xl:space-x-3 2xl:space-x-4 items-center px-2 pt-10 pb-12 md:px-8 md:pt-10 md:pb-16 lg:px-5 lg:py-10 2xl:px-6 2xl:py-12">
          <div className="uer-col  w-full lg:w-1/2  mb-4 md:mb-4 lg:mb-0 ">
            <div className="mbl-h-img text-center relative ">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
              {/* <div className="uer-timer w-[260px] h-[80px] md:w-[300px]  md:h-[100px] absolute left-0 right-0  bottom-[-40px] md:bottom-[-50px] mx-auto">
                <div className="uer-timer-box  px-2 pt-3 md:pt-4 pb-2 xl:pt-5 rounded-[10px] border border-1 border-[#453A23] bg-[#161616] relative">
                  <div className="text-red-600 uer-grad2  absolute top-[-16px] md:top-[-18px] xl:top-[-21px] left-0 right-0 mx-auto font-os text-[18px] md:text-[22px] xl:text-[24px] font-bold">
                    TIME LEFT
                  </div>
                  <UerTimer />
                </div>
              </div>*/}
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2  mt-2 md:mt-2 lg:mt-0 px-0 rm:px-2 md:pl-8 lg:pl-2 xl:pl-3">
            {/* ==================section title=====================*/}

            <h1
              className="text-[#CA9342] pt-2 lg:pt-8 md:max-w-[620px]  font-bold font-os  text-[20px] rm:text-[24px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
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
                <UerBtn setShowUerBookingList={props.setShowUerBookingList} />
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
export default UnlimitedEscapeRoomSection;
