import GameTitleSeparator from "../util/GameTitleSeparator";
const RewardsProgram = () => {
  return (
    <div className="our-mission-vission relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>

      {/*======================= boder img end============== */}
      <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
        <div className="abt-row flex flex-col md:flex-row justify-between items-center">
          <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
            <div className="section-title-sep mt-4 md:mt-0">
              <p className="text-lg text-[#938056]">NEW VIP</p>
              <GameTitleSeparator
                title="REWARDS PROGRAM"
                color="dark-gold"
                weight="font-bold"
              />
            </div>
            <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">
              Welcome to our digital Rewards Program which provides you with
              more value each time you visit/play at an All In Adventures
              location. This program applies to all experiences All In
              Adventures offers, which currently includes escape rooms, game
              show rooms, axe throwing - and more that will be coming soon!
              We've partnered with FIVESTARS, an industry leading rewards
              program company. Download the free FIVESTARS app to your phone
              today so you can track and manage all your rewards in one
              convenient place.
            </p>
            <div className="abt-notice-list mt-4 md:mt-4 lg:mt-6">
              <h3 className="font-medium text-[#464646] text-xl">
                A few reasons why you should join:
              </h3>
              <ul className="star-list pl-4 text-[#464646] mt-4">
                <li className="lg:text-lg my-2 md:my-3 ">
                  FREE to sign up/join!
                </li>
                <li className="lg:text-lg my-2 md:my-3 ">
                  Earn points on ALL experiences!
                </li>
                <li className="lg:text-lg my-2 md:my-3 ">
                  FREE experience on your birthday!
                </li>
                <li className="lg:text-lg my-2 md:my-3 ">
                  Receive SURPRISE offers - earn bonus points or additional
                  discounts!
                </li>
              </ul>
            </div>
          </div>
          <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
            <img className="mx-auto" src="/assets/reward-five-star.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsProgram;
