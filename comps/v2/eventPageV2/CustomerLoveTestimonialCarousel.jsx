import LoveCarousel from "./elements/LoveCarousel";

const customerLoveCarouselData = [
  {
    id: 1,
    authorName: "Andrew S.",
    city: "Buffalo, NY, United States",
    text: "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
  },
  {
    id: 2,
    authorName: "Jessica M.",
    city: "Atlanta, GA",
    text: "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
  },
  {
    id: 3,
    authorName: "Andrew S.",
    city: "Buffalo, NY, United States",
    text: "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
  },
  {
    id: 4,
    authorName: "Jessica M.",
    city: "Atlanta, GA",
    text: "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
  },
  {
    id: 5,
    authorName: "Andrew S.",
    city: "Buffalo, NY, United States",
    text: "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
  },
];

export default function CustomerLoveTestimonialCarousel(props) {
  return (
    <div className="customer-love-testimonial-section bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px]">
      <div className="section-container max-w-[900px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-4 lg:px-8 2xl:px-4 mx-auto">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12 md:max-w-[760px] lg:max-w-[900px] mx-auto">
          <h2 className="dark-gold py-[2px]  text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
            {props.sectionData.title
              ? props.sectionData.title
              : "CUSTOMERS LOVE ALL IN ADVENTURES"}
          </h2>
          <p className="text-[#2E2E2E] mt-1 md:mt-2 text-center md:text-lg lg:text-xl  mx-auto">
            {props.sectionData.description
              ? props.sectionData.description
              : "CUSTOMERS LOVE ALL IN ADVENTURES"}
          </p>
        </div>
        <div className="customer-love-carousel-box mt-8 md:mt-16">
          <LoveCarousel
            customerLoveCarouselData={
              props.sectionData.reviewList
                ? props.sectionData.reviewList
                : customerLoveCarouselData
            }
          />
        </div>
      </div>
    </div>
  );
}
