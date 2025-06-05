import HomeVideoBg from "../HomeVideoBg";
import HomeSectionContent from "../HomeSectionContent";
import SectionTittleCenterLight from "../../common/SectionTitleCenterLight";
export default function ToyMakerHomeSection({
  sectionData,
  bookingData,
  locationSlug,
}) {
  return (
    <div className="tw-home-Section relative">
      {/*======================= bg img============== */}
      <div className="section-full-screen-bg-image w-full h-full bg-[#231800] absolute left-0 top-0">
        <img
          className="w-full h-full object-cover object-center"
          src={"/assets/toymakers-workshop/home/toymaker-home-section-bg.jpg"}
          alt={"toymaker home section bg"}
        ></img>
      </div>

      {/*======================= bg img end============== */}
      <div className="max-w-full xl:max-w-[1210px] 2xl:max-w-[1240px]  mx-auto py-16  md:py-20 lg:py-24  xl:py-28   relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[740px] lg:max-w-[840px] mx-auto px-4 xl:px-0">
          <SectionTittleCenterLight title={sectionData.sectionTitle} />
          {sectionData.sectionSubTitle !== null ? (
            <div
              className="text-[#e5e7eb] mt-3 md:mt-3 xl:mt-4 text-center md:text-lg lg:text-xl max-w-[860px] mx-auto"
              dangerouslySetInnerHTML={{
                __html: sectionData.sectionSubTitle,
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>

        <div className="tw-home-video-sction">
          <div className="relative w-full vide-sec-bg-wrap">
            <div className="tw-video-box w-full h-full absolute left-0 left-0 z-[30]">
              <HomeVideoBg videoBgData={sectionData.videoBgData} />
            </div>

            <div className="tw-video-bg-mask w-full h-full absolute left-0 top-0 z-[40] bg-[rgba(0,0,0,0.82)]">
              <img
                className="hidden md:block w-full h-full object-cover lg:object-cover object-center"
                src={"/assets/toymakers-workshop/home/home-vid-mask.png"}
                alt={"toymaker home section bg"}
              ></img>
              <img
                className=" md:hidden w-full h-full object-fit lg:object-cover object-center"
                src={"/assets/toymakers-workshop/home/home-vid-mask-m.png"}
                alt={"toymaker home section bg"}
              ></img>
            </div>
            <div className="tw-content pt-[78px] pb-[64px] md:pt-[84px] md:pb-[72px] xl:pt-[124px] xl:pb-[96px]  2xl:pt-[146px] 2xl:pb-[110px]  relative z-[50]">
              <HomeSectionContent
                bookingData={bookingData}
                locationSlug={locationSlug}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
