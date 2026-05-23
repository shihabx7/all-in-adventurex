import UnlockRewardBtn from "./elements/UnlockRewardBtn";

export default function RewardsHero(props) {
  return (
    <div className="rewards-hero bg-black relative">
      <div className="section-container min-h-[50vh] md:min-h-[50vh] lg:min-h-[54vh] xl:min-h-[86vh] flex  justify-center items-center bg-[url('/assets/all-in-rewards/all-in-reward-hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="section-content max-w-7xl py-16 md:py-20 lg:py-28 px-4 ">
         
          <div className="hero-text text-center mb-6 md:mb-8 lg:mb-10">
            <p className="text-[.86rem] sm:text-[1.15rem] md:text[1.25rem] lg:text-2xl font-bold text-white">
              ALL IN REWARDS — EXCLUSIVE MEMBER PROGRAM
            </p>
            <h1 className="uppercase text-3xl md:text-4xl lg:text-6xl font-os font-semibold  text-gold mb-3 md:mb-4 lg:mb-6 mt-1 md:mt-5 lg:mt-6">
              Unlock Free Rooms with ALL IN Rewards!
            </h1>
            <p className=" text-white text-sm md:text-lg xl:text-xl max-w-[700px] lg:max-w-[830px] mx-auto">
              With All In Adventures' ALL IN Rewards, every escape gets you
              closer to a free room. Earn punches towards free admissions plus additional exclusive offers all year long!
            </p>
          </div>
          <div className="hero-btn md:w-[420px] mx-auto ">
            <UnlockRewardBtn />
          </div>
        </div>
     
      </div>

    </div>
  );
}
