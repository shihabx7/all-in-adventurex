import MobileEventCard from "./elements/MobileEventCard";
export default function MobileMysteryEventSection({
  sectionData,
  locationSlug,
}) {
  return (
    <div className="eventpage-mbl-mystery-section bg-[#231800] relative">
      <div className="section-container min-h-[50vh] max-w-[800px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-3 xl:px-6 mx-auto">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12 ">
          <h2 className="text-[#E0BF62] pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase text-center">
            {sectionData.title
              ? sectionData.title
              : "Can't Come to Us? We'll Bring the Adventure to You."}
          </h2>
          <p className=" text-[#B5B5B5] mt-2 md:mt-3 lg:mt-4 text-center md:text-lg lg:text-xl md:max-w-[720px] lg:max-w-[960px] mx-auto">
            {sectionData.description
              ? sectionData.description
              : "Introducing Mobile Mystery — our portable escape room experience that comes directly to your office, conference room, or event venue. No travel. No logistics. No coordinating transportation for your entire team. Same immersive, high-energy team building challenge — delivered right to your door."}
          </p>
        </div>
        {/**===============================================================gallery */}
        <div className="mobile-mystery-card">
          <MobileEventCard locationSlug={locationSlug ? locationSlug : false} />
        </div>
      </div>
    </div>
  );
}
