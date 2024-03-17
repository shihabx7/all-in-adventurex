import { FiChevronDown, FiMapPin } from "react-icons/fi";
import GameTitleSeparator from "../util/GameTitleSeparator";
const Vhelp = () => {
  const showVolunteeringMenu = () => {
    const body = document.getElementsByTagName("body")[0];

    body.classList.add("overflow-hidden");
    document.getElementById("volunteeringdloc").classList.remove("hidden");
  };

  return (
    <div
      className="fran-tes bg-cover"
      style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
    >
      <div className="section-container max-w-7xl mx-auto px-4 pt-16 md:pt-20 lg:pt-28">
        <div className="v-help flex flex-col md:flex-row justify-between items-center space-x-0 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left">
              <div className="section-title-sep mt-4 md:mt-0 inline-block md:block mx-auto md:mx-0">
                <p className="text-lg text-[#938056] uppercase">Volunteering</p>
                <GameTitleSeparator
                  title="WANT OUR HELP?"
                  color="dark-gold"
                  weight="font-bold"
                />
              </div>
            </div>
            <div className="v-gam-list mt-4 md:mt-0">
              <ul className="star-list pl-6">
                <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                  Complete the form below to reach out directly to your local
                  All In Adventures.
                </li>
                <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                  The store will contact you and gather details regarding your
                  request and determine if we are the right fit for your
                  organization.
                </li>
                <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                  Keep in mind, our teams are smaller so, in most cases, we will
                  only be able to offer one or two sets of hands at any time.
                  However, this won't stop us from going ALL IN!
                </li>
                <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                  After receiving your request, our team members will then help
                  you prepare and execute your event - anything from setup to
                  clean up!
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full"
              src="assets/allinadventur-volunteering.jpg"
            ></img>
          </div>
        </div>
        <div className="vh-img mt-8">
          <div className="vh-img-row flex flex-col space-y-2 sm:flex-row sm:space-y-0 md:space-x-4 items-center justify-between">
            <div className="vgl-item w-full sm:w-[48%] lg:w-[23%]">
              <img
                className="max-w-full"
                src="/assets/volunteering/All-In-Adventures-Volunteerinng1.jpg"
              ></img>
            </div>
            <div className="vgl-item w-full sm:w-[48%] lg:w-[23%]">
              <img
                className="max-w-full"
                src="/assets/volunteering/All-In-Adventures-Volunteerinng2.jpg"
              ></img>
            </div>
            <div className="vgl-item w-full sm:w-[48%] lg:w-[23%]">
              <img
                className="max-w-full"
                src="/assets/volunteering/All-In-Adventures-Volunteerinng3.jpg"
              ></img>
            </div>
            <div className="vgl-item w-full sm:w-[48%] lg:w-[23%]">
              <img
                className="max-w-full"
                src="/assets/volunteering/All-In-Adventures-Volunteerinng4.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vhelp;
