import StoreDetail from "../StoreDetail";
export default function HomeAboutSection({ sectionData, locationInfo }) {
  return (
    <div className="page-section">
      <div className="section-bg relative bg-[#FFF9EB]">
        {/*============Home Page Intro bg ==========*/}
        <div className="section-full-screen-bg-image w-full h-full bg-stone-800 absolute left-0 top-0">
          <img
            className="w-full h-full object-cover object-center"
            src={"/assets/home-page/aia-intro-section-bg.jpg"}
            alt={"/assets/home-page/aia-intro-section-bg.jpg"}
          ></img>
        </div>
        {/*============Home Page Intro content ==========*/}
        <div className="section-content  relative z-[10]">
          <div className="section-container max-w-[740px] lg:max-w-[990px]  xl:max-w-[1200px] 2xl:max-w-[1220px] py-16 md:py-20 lg:py-24 lg:pt-28 xl:py-28 px-4 zm:px-8 md:px-4 lg:px-0  mx-auto">
            {/*============Home Page Intro text ==========*/}
            <div className="mt-[24px] md:mt-[30px] flex flex-col lg:flex-row justify-between items-center space-y-5 md:space-y-6 lg:space-y-0 lg:space-x-5 xl:space-x-6 2xl:spce-x-8">
              <div className="sec-img w-full lg:h-full lg:w-[47%] ">
                <div className="sec-img-wrp w-full lg:h-full flex flex-col lg:justify-between space-y-3 rm:spcae-y-4 md:space-y-6 xl:space-y-10">
                  {sectionData.sectionImages.map((item, index) => {
                    return (
                      <div key={index} className="hintro-img">
                        <img
                          className="w-full "
                          alt={
                            item.alt
                              ? item.alt
                              : "All in adventures escape room"
                          }
                          src={
                            item.url
                              ? item.url
                              : "/assets/home-page/aia-intro-section-img.jpg"
                          }
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="sec-text w-full lg:h-full lg:w-[51%] 2xl:w-[50%] flex flex-col space-y-4 rm:spcae-y-5 md:space-y-6 xl:space-y-7 ">
                {sectionData.sectionTexts.map((item, index) => {
                  return (
                    <div key={index} className="intro-text-col">
                      <h3 className="text-[#ca9342] text-[22px] md:text-[24px] xl:text-[28px] font-bold leading-[1.3]">
                        {item.title}
                      </h3>
                      <div
                        className="text-[#374151]  xl:text-[18px] mt-1"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></div>
                    </div>
                  );
                })}
                {/*============Home Page Intro text ==========*/}
                {locationInfo && (
                  <div className="intro-text-col store-dt-col">
                    <StoreDetail locationInfo={locationInfo} />
                  </div>
                )}
              </div>
            </div>
            {/*============Home Page Intro section Row end==========*/}
          </div>
        </div>
      </div>
    </div>
  );
}
