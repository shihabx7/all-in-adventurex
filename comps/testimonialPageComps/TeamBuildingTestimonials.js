import MainTestimonials from "./MainTestimonials";
import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
const TeamBuildingTestimonials = (props) => {
  return (
    <div className="all-escaperooms-tes relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="secttion-container max-w-7xl mx-auto  py-8 md:pt-0 md:pb-20 lg:pb-28  px-4 relative z-30">
        <div className="section-title text-center max-w-[800px] mx-auto">
          <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
          <TitleSeparator
            title="CORPORATE TEAM BUILDING CUSTOMERS"
            color="dark-gold"
            weight="font-bold"
          />
          <p className="text-gray-700 md:px-8 md:text-lg">
            Creative bonding experience starts with an ability to find, solve,
            and create solutions for any possible problem ahead. Our escape
            games make you think outside the box, use your imagination and bring
            out the best in you and your teammates.
          </p>
        </div>
        <MainTestimonials category="team" testimonials={props.testimonials} />
        <div className="flex justify-center mt-2 md:mt-4">
          <PageLink link="/events" label="View all events" />
        </div>
      </div>
    </div>
  );
};

export default TeamBuildingTestimonials;
