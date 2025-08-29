import EventTestimonialCarousel from "../EventTestimonialCarousel";
export default function EventTestimonialCarouselSection({ sectionData }) {
  return (
    <div className="event-ts-cr-section">
      <div className="section-bg zm:max-w-[580px] md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1230px] 2xl:max-w-[1240px] mx-auto px-4 lg:px-0">
        <div className="section-head-lg">
          <div className="section-title">
            <h2 className="text-[#E0BF62] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
              {sectionData.sectionTitle}
            </h2>
          </div>
          {sectionData.sectionSubTitle && (
            <div
              className="text-[#d9d9d9] text-center sm:text-lg xl:text-xl 2xl:text-[1.3rem] mt-3 md:mt-3 xl:mt-4 max-w-[680px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          )}
        </div>
        <div className="egc-carousel-box mt-2 md:mt-3 ">
          <EventTestimonialCarousel
            testimonialList={sectionData.testimonialList}
          />
        </div>
      </div>
    </div>
  );
}
