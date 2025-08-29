import GameCarousel from "../MoreEscapeGameCarousel";
import MoreEscapeGameCarousel from "../MoreEscapeGameCarousel";

export default function MoreEscapeGameCarouselSection({ sectionData }) {
  return (
    <div className="game-carousel-section egcr-section relative ">
      {/*=======================================Game gallery bg*/}
      <div className="section-bg  bg-repeat ">
        <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1230px] 2xl:max-w-[1240px] mx-auto px-4">
          <div className="section-head-lg">
            <div className="section-title">
              <h2 className="text-[#ca9342] uppercase font-bold text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-[44px] xl:text-[48px] lg:leading-[1.15] font-os outline-tile">
                {sectionData.sectionTitle}
              </h2>
            </div>
            {sectionData.sectionSubTitle && (
              <div
                className="text-[#d9d9d9] sm:text-lg xl:text-xl mt-3 md:mt-3 xl:mt-4 max-w-[800px]"
                dangerouslySetInnerHTML={{
                  __html: sectionData.sectionSubTitle,
                }}
              ></div>
            )}
          </div>

          <div className="egc-carousel-box mt-2 md:mt-3 ">
            <MoreEscapeGameCarousel
              gameCarouselData={
                sectionData.moreEscapeGameList
                  ? sectionData.moreEscapeGameList
                  : sectionData.escapeGameList
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
