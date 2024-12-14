import UerTimer from "./UerTimer";
import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";

const UnlimitedEscapeRoomSection = (props) => {
  return (
    <div className="uer-gn-section ">
      <div className="uer-h-container max-w-7xl mx-auto ">
        <div className="uer-row bg-black rounded-[16px] flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-6 2xl:space-x-8 items-center px-2 py-3 md:px-8 md:py-6 lg:px-7 lg:py-6">
          <div className="uer-col  w-full lg:w-1/2  mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center relative lg:pb-4">
              <img
                className="w-full"
                alt={"Unlimited escape room"}
                src={
                  "/assets/unlimited-escape-room/allinadventure-unlimited-escape-room-hero.png"
                }
              ></img>
            </div>
          </div>
          <div className="uer-col w-full lg:w-1/2  mt-2 md:mt-6 lg:mt-0 px-3 md:px-8 lg:px-0">
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
            <div className="uer-list mt-3 md:mt-4">
              <ul className="pl-4 uer-star-list text-[#eeeeee]">
                <li className="my-2 md:my-3">
                  <p className="text-sm md:text-base">
                    Access to unlimited Mystery Room experiences for 1 year.
                  </p>
                </li>
                <li className="my-2 md:my-3">
                  <p className="text-sm md:text-base">
                    Just $79 for endless fun and adventure!
                  </p>
                </li>
                <li className="my-2 md:my-3">
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
export default UnlimitedEscapeRoomSection;
