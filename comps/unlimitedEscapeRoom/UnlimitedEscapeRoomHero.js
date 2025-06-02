import UerTimer from "./UerTimer";
import UerBtn from "./UerBtn";
const UnlimitedEscapeRoomHero = (props) => {
  return (
    <div className="uer-hero  bg-black relative pt-12 pb-[70px] md:pt-20 md:pb-[100px] lg:pt-20 lg:pb-[150px] 3xl:pt-20 3xl:pb-[164px]  overflow-hidden">
      <div className="uer-h-container max-w-7xl mx-auto px-1 rm:px-3 md:px-10 lg:px-12 xl:px-16 2xl:px-0">
        <div className="uer-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-3 xl:space-x-8 2xl:space-x-12 items-center">
          <div className="uer-col w-full lg:w-1/2 order-2 lg:order-1 mt-12 rm:mt-14 md:mt-20 lg:mt-0 px-3 md:px-8 lg:px-0">
            {/* ==================section title=====================*/}

            <h1
              className="text-[#CA9342] pt-2 lg:pt-8 md:max-w-[620px]  font-bold font-os  text-[20px] rm:text-[24px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              BUY YOUR UNLIMITED PLAY PASS—ONE DAY OR ONE YEAR
            </h1>

            <div className="text-slate-100 md:text-lg mt-4 md:mt-6 xl:text-lg xl:max-w-[530px]">
              With All In Adventures' Unlimited Play Pass, you can dive into as
              many Escape Room adventures as you want. Pick the Day Pass for $50
              or the Annual Pass for $79, and let the fun begin!
            </div>

            {/* ==================button=====================*/}
            <div className="uer-h-btn  mt-6 md:mt-6 2xl:mt-8">
              <UerBtn
                setShowUerBookingList={
                  props.setShowUerBookingList
                    ? props.setShowUerBookingList
                    : false
                }
              />
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2 order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center relative">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
              {/* <div className="uer-timer w-[210px] rm:w-[220px] h-[80px] md:w-[300px]  md:h-[100px] absolute left-0 right-0  bottom-[-40px] md:bottom-[-50px] mx-auto">
                <div className="uer-timer-box  px-2 pt-4 md:pt-4 pb-2 xl:pt-5 rounded-[10px] border border-1 border-[#453A23] bg-[#161616] relative">
                  <div className="text-red-600 uer-grad2  absolute top-[-16px] md:top-[-18px] xl:top-[-21px] left-0 right-0 mx-auto font-os text-[18px] md:text-[22px] xl:text-[24px] font-bold">
                    TIME LEFT
                  </div>
                  <UerTimer />
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnlimitedEscapeRoomHero;
