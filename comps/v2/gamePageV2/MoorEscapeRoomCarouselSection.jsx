import EscapeGamePosterCarousel from "./elements/EscapeGamePosterCarousel";
export default function MoorEscapeRoomCarouselSection({
  sectionData,
  sectionHeadData,
}) {
  return (
    <div
      id={"escape-game-booking"}
      className="moor-escape-room-carousel-section min-h-[50vh] bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px] relative"
    >
      <div className="section-container xl:max-w-[1200px] 2xl:max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-2.5 rm:px-4 zm:px-6 xl:px-4">
        <div className="section-head max-w-[960px]">
          <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[2.5rem] leading-[1.2] font-os font-bold uppercase ">
            {sectionData.sectionTitle
              ? sectionData.sectionTitle
              : "Book Escape Room Only"}
          </h2>
          {sectionData.sectionSubTitle && (
            <div
              className="text-[#2e2e2e] md:text-lg lg:text-xl mt-1"
              dangerouslySetInnerHTML={{ __html: sectionData.sectionSubTitle }}
            ></div>
          )}
          {!sectionData && (
            <p className="text-[#2e2e2e] md:text-lg lg:text-xl mt-1">
              Skip the party packages and book 60 minutes of pure escape room
              fun — no party room, no catering, just the game. Perfect for small
              groups, last-minute plans, or anyone looking to celebrate with
              nonstop adventure.
            </p>
          )}
        </div>
        <div className="escape-room-carousel-box egc-carousel-box  mt-10">
          <EscapeGamePosterCarousel
            gameCarouselData={
              sectionData.moreEscapeGameList
                ? sectionData.moreEscapeGameList
                : false
            }
          />
        </div>
      </div>
    </div>
  );
}
