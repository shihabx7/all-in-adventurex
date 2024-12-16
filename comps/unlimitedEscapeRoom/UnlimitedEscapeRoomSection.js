import UerTimer from "./UerTimer";
import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";

const UnlimitedEscapeRoomSection = (props) => {
  return (
    <div className="uer-gn-section ">
      <div className="uer-h-container max-w-7xl mx-auto ">
        <div className="uer-row bg-black rounded-[16px] flex flex-col lg:flex-row lg:items-center jsutify-between  space-x-2 lg:space-x-3 2xl:space-x-4 items-center px-3 pt-10 pb-12 md:px-8 md:pt-10 md:pb-16 lg:px-8 lg:py-10 2xl:px-10 2xl:py-12">
          <div className="uer-col order-2 lg:order-1 w-full lg:w-1/2  mt-2 md:mt-2 lg:mt-0 px-0 rm:px-2 md:pl-8 lg:pl-4 xl:pl-6">
            {/* ==================section title=====================*/}

            <h1
              className="text-[#CA9342] md:max-w-[620px]  font-bold font-os  text-2xl rm:text-[25px] sm:text-[36px] md:text-[40px] lg:text-[42px]  font-os outline-tile "
              style={{ lineHeight: 1.2 }}
            >
              UNLIMITED PLAY PASS{" "}
              <span className="text-red uer-grad">JUST $79 </span>
            </h1>

            <div className="text-slate-100  mt-3 md:mt-4 2xl:text-lg xl:max-w-[530px]">
              Click “Buy Gift Card” to be routed to your local All In Adventures
              location.
            </div>
            <h4 className="text-slate-100  mt-3 md:mt-5 xl:text-lg xl:max-w-[530px] font-semibold">
              Below are a few things to keep in mind:
            </h4>
            <div className="uer-list mt-4 md:mt-4">
              <ul className="pl-6 md:pl-4 uer-star-list text-[#eeeeee]">
                <li className="my-3 md:my-3">
                  <p className="text-sm md:text-base">
                    Access to unlimited Mystery Room experiences for 1 year.
                  </p>
                </li>
                <li className="my-3 md:my-3">
                  <p className="text-sm md:text-base">
                    Just $79 for endless fun and adventure!
                  </p>
                </li>
                <li className="my-3 md:my-3">
                  <p className="text-sm md:text-base">
                    Valid at any All In Adventures location (with support for
                    transfers).
                  </p>
                </li>
                <li className="my-2 md:my-3">
                  <p className="text-sm md:text-base">
                    Perfect for escape room enthusiasts, families, friends and
                    co-workers.
                  </p>
                </li>
              </ul>
            </div>

            {/* ==================button=====================*/}
            <div className="uer-h-btn  mt-6 md:mt-6 2xl:mt-8">
              <button className=" px-4 rm:px-6 md:px-8 text-center border inline-block text-[14px] rm:text-[15px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700">
                Get Your Unlimited Play Pass Today!
              </button>
            </div>
          </div>
          <div className="uer-col order-1 lg:order-2  w-full lg:w-1/2  mb-6 md:mb-8 lg:mb-0 pb-[44px] md:pb-[54px] lg:pb-[70px]">
            <div className="mbl-h-img text-center relative ">
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
        </div>
      </div>
    </div>
  );
};
export default UnlimitedEscapeRoomSection;
