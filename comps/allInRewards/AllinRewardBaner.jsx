import UnlockRewardBtn from "./elements/UnlockRewardBtn";
export default function AllinRewardBaner() {
  return (
    <div className="all-in-reward-baner-section relative bg-[#090909]">
      <div className="section-container max-w-[760px] lg:max-w-7xl mx-auto pb-16 pt-2 md:py-20 lg:py-28 px-4 lg:px-8 2xl:px-4">
        <div className="section-row flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-4 items-center">
          <div className="section-img w-full lg:w-[45%]">
            <img
              className="w-full "
              src="/assets/all-in-rewards/all-in-rewards-baner.png"
              alt="All In Rewards Baner"
            ></img>
          </div>
          <div className="section-content w-full lg:w-[48%]">
           
            <div>
              <h2 className=" text-2xl rm:text-[1.75rem]  md:text-[2.5rem] lg:text-[2.875rem] leading-[1.2] font-os font-bold text-[#E0BF62] uppercase mt-6">
                <span className="text-[#F0E8D5] block">
                  Unlock Free Rooms with
                </span>
                <span className="block">ALL IN Rewards!</span>
              </h2>
              <p className="text-white xl:text-lg mt-6">
                With All In Adventures' ALL IN Rewards, every escape gets you
                closer to a free room. Each player in your group earns you 1
                punch and after just 5 punches, your next admission is on us!
                Plus, make every visit count and let the fun keep going with
                seasonal offers and exclusive discounts. Sign up today to start
                unlocking savings and bonus offers all year long!
              </p>
            </div>
            <div className="btn-pair flex flex-col md:flex-row justify-start items-center space-y-5 sm:space-y-0 sm:space-x-4 mt-8 md:mt-10 lg:mt-12">
              <div className="booking-btn w-full sm:w-[270px]">
                <UnlockRewardBtn />
              </div>
              <a
                href="/all-in-rewards"
                className="w-full sm:w-[176px] md:w-[194px] px-3 md:px-6 py-[12px] md:py-3 text-center block text-white border-2 border-red-600 hover:border-red-700 rounded-full font-semibold md:text-lg bg-transparent hover:bg-red-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
