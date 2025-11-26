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
      <div className="max-w-[800px]  lg:max-w-[1000px] xl:max-w-[1210px] 2xl:max-w-[1240px]  mx-auto py-16  md:py-20 lg:pt-24 lg:pb-10 xl:pt-28 xl:pb-16   relative z-30">
        <div className="section-title mb-10 zm:mb-4  md:max-w-[760px] lg:max-w-[980px] mx-auto px-4 xl:px-0">
          <h2 className="text-[#e0bf62] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
            MEET YOUR CHILD'S FIRST ESCAPE ROOM
          </h2>
          {sectionData.sectionSubTitle !== null ? (
            <div className="text-[#e5e7eb] mt-3 md:mt-3 xl:mt-4 text-center md:text-lg lg:text-xl max-w-[860px] mx-auto">
              This enchanting storybook adventure is packed with low-pressure,
              interactive challenges designed to spark critical thinking and
              wonder for junior detectives <strong>aged six and under.</strong>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="tw-home-video-sction">
          <div className="relative w-full vide-sec-bg-wrap">
            <div className="tw-video-box ">
              <HomeVideoBg videoBgData={sectionData.videoBgData} />
            </div>

            <div className="tw-video-bg-mask w-full h-full absolute left-0 top-0 z-[20] bg-[rgba(0,0,0,0.82)]">
              <img
                className="hidden xm:block w-full xm:h-full object-fit zm:object-cover lg:object-cover object-center"
                src={
                  "/assets/toymakers-workshop/home/home-video-bg-mask-fi.png"
                }
                alt={"toymaker home section bg"}
              ></img>
              <img
                className=" xm:hidden w-full h-full object-fit lg:object-cover object-center"
                src={
                  "/assets/toymakers-workshop/home/home-video-bg-mask-fim.png"
                }
                alt={"toymaker home section bg"}
              ></img>
            </div>
            <div className="tw-content w-full h-full absolute left-0 top-0 z-[50] flex justify-center items-center">
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
