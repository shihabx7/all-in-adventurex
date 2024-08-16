import MainTestimonials from "./MainTestimonials";
import PageLink from "../util/PageLink";
import TitleSeparator from "../util/TitleSeparator";
const BirthdayPartyTestimonials = (props) => {
  return (
    <div className="all-escaperooms-tes relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      <div className="secttion-container max-w-7xl mx-auto py-8 md:pt-0 md:pb-20 lg:pb-28 px-4 relative z-30">
        <div className="section-title text-center max-w-[800px] mx-auto">
          <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
          <TitleSeparator title="BIRTHDAY PARTY CUSTOMERS" />
          <p className="text-gray-700 md:px-8 md:text-lg">
            All In Adventures is famous for hosting the most memorable birthday
            party for all ages. With multiple escape room themes, you can plan
            the perfect birthday celebration for yourself, friends, or family
            members.
          </p>
        </div>
        <MainTestimonials
          category="birthday"
          testimonials={props.testimonials}
        />
        <div className="flex justify-center mt-2 md:mt-4">
          <PageLink
            link="/events/birthday-party"
            label="Learn more about birthday party"
          />
        </div>
      </div>
    </div>
  );
};

export default BirthdayPartyTestimonials;
