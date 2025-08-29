import EventFaqListView from "../EventFaqListView";
export default function EventFaqSection({ sectionData }) {
  return (
    <div className="bg-[#FFF9EB] event-faq-section ">
      <div className="event-faq-section-bg relative  overflow-hidden bg-[url('/assets/escape-game-events/old-paper-texture-bg.svg')] bg-center bg-cover">
        {/*======================= boder img============== */}

        {/*======================= boder img end============== */}
        <div className="section-container py-16 md:py-24 lg:py-32  zm:max-w-[580px] md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1230px] 2xl:max-w-[1240px] mx-auto px-4 lg:px-0 relative z-30">
          <div className="section-head-lg">
            <div className="section-title">
              <h2 className="text-[#ca9342] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
                {sectionData.sectionTitle
                  ? sectionData.sectionTitle
                  : "FREQUENTLY ASKED QUESTIONS"}
              </h2>
            </div>
            {sectionData.sectionSubTitle && (
              <div
                className="text-gray-700 sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 max-w-[800px] text-center mx-auto"
                dangerouslySetInnerHTML={{
                  __html: sectionData.sectionSubTitle,
                }}
              ></div>
            )}
          </div>
          <div className="evfaq-carousel-box mt-2 xl:mt-10 max-w-[860px] mx-auto">
            <EventFaqListView faqList={sectionData.eventFaqList} />
          </div>
        </div>
      </div>
    </div>
  );
}
