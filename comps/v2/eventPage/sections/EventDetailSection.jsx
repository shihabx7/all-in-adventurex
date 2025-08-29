export default function EventDetailSection({ sectionData }) {
  return (
    <div className="page-section">
      <div className="section-bg relative ">
        <div className="section-content  relative z-[10]">
          <div className="section-container max-w-[740px] lg:max-w-[990px]  xl:max-w-[1200px] 2xl:max-w-[1240px]  px-4 zm:px-8 md:px-4 lg:px-0  mx-auto">
            {/*============event Page Intro section Row btn==========*/}
            <div className="mt-[0px] md:mt-[16px] flex flex-col space-y-4 rm:space-y-5 md:spcace-y-6 xl:space-y-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 md:space-y-6 lg:space-y-0 lg:space-x-5 xl:space-x-6 2xl:spce-x-8">
                <div className="sec-img w-full lg:w-[49%] xl:w-[48%] 2xl:w-[44%]">
                  <img
                    className="w-full "
                    alt={
                      sectionData.sectionImage.alt
                        ? sectionData.sectionImage.alt
                        : "All in adventures escape room event"
                    }
                    src={
                      sectionData.sectionImage.url
                        ? sectionData.sectionImage.url
                        : "/assets/home-page/aia-intro-section-img.jpg"
                    }
                  ></img>
                </div>
                <div className="sec-text flex flex-col space-y-4 rm:spcae-y-5 md:space-y-6 xl:space-y-7 w-full lg:w-[50%] 2xl:w-[53%]">
                  <div className="intro-text-col">
                    <h2 className="text-[#ca9342] uppercase font-bold text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-[44px] xl:text-[48px] lg:leading-[1.15] font-os outline-tile">
                      {sectionData.sectionTitle}
                    </h2>

                    <div
                      className="text-[#374151]  xl:text-lg mt-3 md:mt-4 lg:mt-5 xl:mt-7"
                      dangerouslySetInnerHTML={{
                        __html: sectionData.eventDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
