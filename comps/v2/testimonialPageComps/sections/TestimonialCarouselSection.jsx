import TestimonialCarousel from "../TestimonialCarousel";

export default function TestimonialCarouselSection({ sectionData }) {
  return (
    <div className="testimonial-home-carousel-section ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="secttion-container ">
        {/*===================Section Title======================== */}
        <div className="section-title text-center max-w-[890px] mx-auto">
          <h2 className="text-[#ca9342] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
            {sectionData.sectionTitle}
          </h2>
          {sectionData.sectionSubTitle &&
            sectionData.sectionSubTitle != null && (
              <div
                className="text-gray-700 section-sub-title md:px-8 sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 mb-4"
                dangerouslySetInnerHTML={{
                  __html: sectionData.sectionSubTitle,
                }}
              ></div>
            )}
        </div>
        {/*===================video Carousel======================== */}
        <div className="testimonial-carousel-container">
          <TestimonialCarousel testimonialList={sectionData.testimonialList} />
        </div>
      </div>
    </div>
  );
}
