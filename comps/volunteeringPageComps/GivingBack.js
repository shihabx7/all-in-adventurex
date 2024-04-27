import GameTitleSeparator from "../util/GameTitleSeparator";

import { FiChevronDown, FiMapPin } from "react-icons/fi";

const GivingBack = (props) => {
  const showVolunteeringMenu = () => {
    const body = document.getElementsByTagName("body")[0];

    body.classList.add("overflow-hidden");
    document.getElementById("volunteeringdloc").classList.remove("hidden");
  };

  return (
    <div className="Giving-back relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
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
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
        <div className="abt-row flex flex-col md:flex-row justify-between ">
          <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
            <div className="section-title-sep mt-4 md:mt-0">
              <p className="text-lg text-[#938056] uppercase">Volunteering</p>
              <GameTitleSeparator
                title="GIVING BACK TO COMMUNITIES"
                color="dark-gold"
                weight="font-bold"
              />
            </div>
            <p className="text-gray-700 lg:text-lg mt-4  lg:mt-8">
              As you know, at All In Adventures, we connect family, friends, and
              co-workers through shared, interactive escape rooms, game show
              rooms, axe throwing adventures and more!
            </p>
            <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">
              Within our own work culture, we take pride in regularly helping
              each other by eagerly sharing our knowledge, ideas and fun game
              tips! You name it and we tend to go "all in" to help each other
              out!
            </p>
            <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">
              The company's community outreach program, ALL IN TOGETHER, aims to
              "spread that spirit of giving" by providing non-profit 501(c)(3)
              charities with a few spare hands when assistance is needed with
              small projects or local fundraising initiatives.
            </p>
            <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">
              If your organization could benefit from some of our shared time,
              energy and efforts, we would love to hear about it. Not sure if
              your group is a good match? Keep reading below!
            </p>

            <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">
              <span className="font-medium">NOTE:</span>{" "}
              <span className="font-thin italic">
                {" "}
                All In Adventures / All In Together reserves the right to not
                affiliate itself with religious, political or with organizations
                rooted in hate and/or intolerance.
              </span>
            </p>

            {/*<button onClick={showVolunteeringMenu} className="mt-6 md:mt-8 rounded-full  text-center py-3 md:py-3 lg:py-4 px-4 md:px-8 lg:px-10 flex justify-between items-center space-x-8 md:space-x-12 lg:space-x-16 bg-red-600 hover:bg-red-700 text-white uppercase">
                                <div className="flex space-x-2 items-center">

                                     <span className="text-xl"><FiMapPin/></span>
                                    <span className="lg:text-lg">CHOOSE YOUR LOCATION</span>
                                </div>
                                <div>
                                    <span className="lg:text-2xl"><FiChevronDown/></span>

                                </div>

                         </button>*/}
          </div>
          <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
            <img
              className="mx-auto"
              src="/assets/allinadventur-volunteering-community.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingBack;
