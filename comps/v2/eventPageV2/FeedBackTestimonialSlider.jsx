import TestimonialSlider from "./elements/TestimonialSlider";
const testimonialTestData = [
  {
    id: 1,
    authorName: "Andrew S.",
    city: "Buffalo, NY",
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
    city: "Buffalo, NY",
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
    city: "Buffalo, NY",
    text: "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
  },
];
export default function FeedBackTestimonialSlider({
  sectionData,
  testimonialList,
  locationSlug,
}) {
  return (
    <div className="reward-work-section bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px]">
      <div className="section-container max-w-[640px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-4 mx-auto">
        <div className="section-row flex flex-col lg:flex-row justify-between lg:space-x-2">
          <div className="section-col max-w-[550px]">
            <img
              className="max-w-full"
              src={
                sectionData && sectionData.eventPoster.url
                  ? sectionData.eventPoster.url
                  : "/assets/event-page-v2/all-inadventure-barthday-party-celebration.png"
              }
              alt="party party poster"
            ></img>
          </div>
          <div className="section-col max-w-[670px]">
            <div className="section-head">
              <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[2.5rem] leading-[1.2] font-os font-bold uppercase ">
                {sectionData && sectionData.title
                  ? sectionData.title
                  : "Escape Room Events THAT WORKS FOR EVERY AGE ON THE GUEST LIST"}
              </h2>
              {sectionData && sectionData.descriptionHtml != null && (
                <div
                  className="text-[#2e2e2e] md:text-lg 2xl:text-[1.2rem] mt-1 md:mt-2"
                  dangerouslySetInnerHTML={{
                    __html: sectionData.descriptionHtml,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
        <div className="feedback-testimonial mt-10 xl:mt-12">
          <TestimonialSlider
            testimonialData={
              sectionData.testimonialData
                ? sectionData.testimonialData
                : testimonialTestData
            }
          />
        </div>
      </div>
    </div>
  );
}
