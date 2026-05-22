import UnlockRewardBtn from "./elements/UnlockRewardBtn";

export default function RewardsHero(props) {
  return (
    <div className="rewards-hero bg-black relative">
      <div className="section-container min-h-[75vh] md:min-h-[76vh] lg:min-h-[88vh] flex  justify-center items-center bg-[url('/assets/all-in-rewards/all-in-reward-hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="section-content max-w-7xl py-16 md:py-20 lg:py-28 px-4 ">
          <div className="es-equation flex justify-center items-center ">
            <img
              className="max-w-[230px] sm:max-w-[256px] lg:max-w-[300px]"
              src={"/assets/all-in-rewards/rewards-equation.svg"}
              alt="Rewards Equation"
            />
          </div>
          <div className="hero-text text-center my-7 md:my-10">
            <p className="text-[.875rem] sm:text-[1.2rem] lg:text-2xl font-bold text-white">
              ALL IN REWARDS — EXCLUSIVE MEMBER PROGRAM
            </p>
            <h1 className="uppercase text-3xl md:text-4xl lg:text-6xl font-os font-semibold  text-gold my-3 lg:my-6">
              Unlock Free Rooms with ALL IN Rewards!
            </h1>
            <p className=" text-white md:texty-lg xl:text-xl max-w-[830px] mx-auto">
              With All In Adventures' ALL IN Rewards, every escape gets you
              closer to a free room. After you enjoy any 2 paid Escape Room
              adventures, your 3rd one is on us! adventure!
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
