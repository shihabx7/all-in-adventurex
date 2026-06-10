import MobileEventCard from "./elements/MobileEventCard";
export default function MobileMysteryEventSection({
  sectionData,
  locationSlug,
}) {
  return (
    <div className="eventpage-mbl-mystery-section bg-[#231800] relative">
      <div className="section-container min-h-[50vh] max-w-[860px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-3 xl:px-6 mx-auto">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12 max-w-[1020px] ">
          <h2 className="text-[#E0BF62] pt-0 text-[1.5rem] md:text-[2.5rem] xl:text-[2.6rem] 2xl:text-[2.7rem] leading-[1.25] font-os font-bold uppercase">
            {sectionData.sectionTitle
              ? sectionData.sectionTitle
              : "Can't Come to Us? We'll Bring the Adventure to You."}
          </h2>

          {sectionData.descriptionHtml && (
            <div
              className="text-[#B5B5B5] flex flex-col space-y-4 md:space-y-5 mt-4 md:mt-5 md:text-lg lg:text-xl"
              dangerouslySetInnerHTML={{ __html: sectionData.descriptionHtml }}
            ></div>
          )}
        </div>
        {/**===============================================================gallery  sectionData.descriptionHtml*/}
        <div className="mobile-mystery-card">
          <MobileEventCard locationSlug={locationSlug ? locationSlug : false} />
        </div>
      </div>
    </div>
  );
}
