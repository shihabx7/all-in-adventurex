import UerTimer from "./UerTimer";
import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";
import UerBtn from "./UerBtn";

const UnlimitedPlayPassFullSection = (props) => {
  return (
    <div className="uer-gn-section bg-[#090909]">
      <div className="uer-h-container max-w-[390px] zm:max-w-[500px] md:max-w-[800px] lg:max-w-[990px] xl:max-w-7xl mx-auto pt-8 pb-16 md:py-24 lg:py-28 relative ">
        <div className="uer-row  flex flex-col lg:flex-row lg:items-center jsutify-between  space-x-2 lg:space-x-2 xl:space-x-3 2xl:space-x-4 items-center px-3 rm:px-4  md:px-8 lg:px-5 2xl:px-6 ">
          <div className="uer-col  w-full lg:w-1/2  mb-4 md:mb-4 lg:mb-0 ">
            <div className="mbl-h-img text-center relative ">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2  mt-2 md:mt-2 lg:mt-0 px-0 rm:px-2 md:pl-8 lg:pl-2 xl:pl-3">
            {/* ==================section title=====================*/}

            <h2
              className="text-[#CA9342] pt-2 lg:pt-8 md:max-w-[620px]  font-bold font-os  text-[20px] rm:text-[24px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              BUY YOUR UNLIMITED PLAY PASS—ONE DAY OR ONE YEAR
            </h2>

            <div className="text-slate-100 md:text-lg mt-4 md:mt-6 xl:text-lg xl:max-w-[530px]">
              With All In Adventures' Unlimited Play Pass, you can dive into as
              many Escape Room adventures as you want. Pick the Day Pass for $50
              or the Annual Pass for $79, and let the fun begin!
            </div>

            {/* ==================button=====================*/}
            <div className="uer-h-btn  mt-6 md:mt-6 2xl:mt-8 flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center sm:space-x-4 lg:space-x-2 xl:space-x-4">
              <div className="w-full sm:w-auto ">
                <UerBtn setShowUerBookingList={props.setShowUerBookingList} />
              </div>
              <div className="w-full sm:w-auto ">
                <a
                  className="bg-transparent cursor-pointer  w-full sm:w-auto px-5 rm:px-6 md:px-8 lg:px-5 xl:px-8 text-center border-2 block md:inline-block text-[14px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700 transition duration-300"
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
export default UnlimitedPlayPassFullSection;
