import TitleSeparator from "../util/TitleSeparator";
const HappyTeam = () => {
  return (
    <div className="happy-team bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 ">
        <div className="section-title">
          <TitleSeparator
            title="TRUSTED BY MANY LARGE ORGANIZATIONS"
            color="dark-gold"
            weight="font-bold"
          />
          <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">
            Our escape rooms are incredibly awesome for motivating teams and
            providing them with a great sense of achievement. That's why teams
            from all across the U.S. love All In Adventures.{" "}
          </p>
        </div>
        <div className="happy-team-logo-box flex items-center justify-center space-x-4 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Apple_logo_black.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Amazon_logo.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Google__G__Logo.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Siemens-logo.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Dell_Logo.svg"></img>
          </div>
        </div>
        <div className="mt-6 md:mt-10 happy-team-logo-box flex items-center justify-center space-x-4 md:space-y-0 md:space-x-6 lg:space-x-12">
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Allianz.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/BMW.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Coca-Cola_logo.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/McDonald's_Golden_Arches.svg"></img>
          </div>
          <div className="happy-team-logo-img w-1/2 md:w-auto">
            <img src="/assets/partner-logo/Nike-logo.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyTeam;
