import MainTestimonials from "./MainTestimonials";
import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
const PrivatePartyCustomersTestimonials = (props) => {
  return (
    <div className="all-escaperooms-tes relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="secttion-container max-w-7xl mx-auto py-8 md:pt-0 md:pb-20 lg:pb-28  px-4 relative z-30">
        <div className="section-title text-center max-w-[800px] mx-auto">
          <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
          <TitleSeparator
            title="PRIVATE PARTY CUSTOMERS"
            color="dark-gold"
            weight="font-bold"
          />
          <p className="text-gray-700 md:px-8 md:text-lg">
            Not only do we provide themed events for birthdays and corporate
            events, but also host mind bending and puzzle solving parties for
            just about any other occasion. Bring your friends, family and sense
            of adventure to your next special celebration, and don&apos;t forget
            to make it fun!
          </p>
        </div>
        <MainTestimonials category="party" testimonials={props.testimonials} />
        <div className="flex justify-center mt-2 md:mt-4">
          <PageLink link="/events" label="View all events" />
        </div>
      </div>
    </div>
  );
};

export default PrivatePartyCustomersTestimonials;
