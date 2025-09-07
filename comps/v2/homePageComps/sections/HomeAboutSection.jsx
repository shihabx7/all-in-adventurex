import StoreDetail from "../StoreDetail";
import { useState } from "react";
import LocationHoursModal from "../LocationHoursModal";
export default function HomeAboutSection({
  sectionData,
  locationInfo,
  businessHours,
  holidayHours,
  locationName,
}) {
  const [showHours, setShowHours] = useState(false);
  const [hourTable, setHourTable] = useState(null);

  return (
    <>
      {showHours && (
        <LocationHoursModal
          locationName={locationName}
          mall={locationInfo.mall}
          businessHours={businessHours}
          holidayHours={holidayHours}
          showHours={showHours}
          setShowHours={setShowHours}
          hourTable={hourTable}
          setHourTable={setHourTable}
        />
      )}
      <div className="about-section">
        <div className="section-bg relative bg-[#FFF9EB]">
          {/*============Home Page Intro bg ==========*/}
          <div className="section-full-screen-bg-image w-full h-full bg-[#FFF9EB] absolute left-0 top-0 bg-[url('/assets/home-page/aia-brown-bg-pattern.svg')] bg-center bg-[length:200px_200px] md:bg-[length:360px_360px] lg:bg-[length:400px_400px] bg-repeat bg-opacity-50"></div>
          {/*============Home Page Intro content ==========*/}
          <div className="section-content  relative z-[10]">
            <div className="section-container max-w-[750px] lg:max-w-[990px]  xl:max-w-[1220px] 2xl:max-w-[1240px] py-16 md:py-20 lg:py-24 lg:pt-28 xl:py-28 px-4 zm:px-8 md:px-4 lg:px-0  mx-auto">
              {/*============Home Page Intro text ==========*/}
              <div className="mt-[24px] md:mt-[30px] w-full grid grid-cols-1 lg:grid-cols-[49%_51%] lg:gap-4 xl:gap-12">
                {/*============about img ===================*/}

                <div className="sec-img w-full   lg:h-full  ">
                  <div className="sec-img-wrp w-full lg:h-full flex flex-col lg:justify-between lg:items-stretch space-y-3 rm:spcae-y-4 md:space-y-5 xl:space-y-6">
                    <div className="about-img-img w-full lg:min-h-[47.5%] bottom-2  border-red-500">
                      <img
                        className="w-full h-full object-cover"
                        alt={
                          sectionData.sectionImage.alt
                            ? sectionData.sectionImage.alt
                            : "All in adventures escape room"
                        }
                        src={
                          sectionData.sectionImage.url
                            ? sectionData.sectionImage.url
                            : "/assets/home-page/aia-intro-section-img.jpg"
                        }
                      ></img>
                    </div>
                    {locationInfo && (
                      <div className="hidden lg:block store-img lg:min-h-[47.5%]">
                        <img
                          className=" w-full h-full object-cover "
                          alt={
                            sectionData.storeImage.alt
                              ? sectionData.sectionImage.alt
                              : "All in adventures escape room"
                          }
                          src={
                            sectionData.storeImage.url
                              ? sectionData.storeImage.url
                              : "/assets/home-page/aia-intro-section-img.jpg"
                          }
                        ></img>
                      </div>
                    )}
                  </div>
                </div>
                {/*============about img  end===================*/}
                {/*===================================================================text info==========*/}
                <div className="sec-text w-full lg:h-full  flex flex-col justify-center space-y-4 rm:spcae-y-6 md:space-y-6 lg:space-y-7 xl:space-y-8">
                  <div className="flex flex-col justify-center space-y-4 rm:spcae-y-4 md:space-y-6 lg:space-y-6 xl:space-y-7">
                    {sectionData.sectionTexts.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="about-text-box mt-4 md:mt-6 lg:mt-0"
                        >
                          <h3 className="text-[#ca9342] text-[1.2rem] rm:text-[1.3rem] md:text-[1.75rem] lg:text-[1.6rem] xl:text-[1.75rem] font-bold leading-[1.3]">
                            {item.title}
                          </h3>
                          <div
                            className="text-[#374151] text-[.9rem] rm:text-[1rem] md:text-[1.2rem] lg:text-[1.05rem] xl:text-[1.2rem] mt-1"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                  {/*============Home Page Intro text ==========*/}
                  {locationInfo && (
                    <div className="intro-text-col store-dtl-col pt-5 md:pt-8 lg:pt-2 lg:mt-0">
                      <div className="block lg:hidden store-img lg:min-h-[47.5%]">
                        <img
                          className=" w-full h-full object-cover "
                          alt={
                            sectionData.storeImage.alt
                              ? sectionData.sectionImage.alt
                              : "All in adventures escape room"
                          }
                          src={
                            sectionData.storeImage.url
                              ? sectionData.storeImage.url
                              : "/assets/home-page/aia-intro-section-img.jpg"
                          }
                        ></img>
                      </div>
                      <div className="mt-4 md:mt-6 lg:mt-0">
                        <StoreDetail
                          locationInfo={locationInfo}
                          setShowHours={setShowHours}
                          setHourTable={setHourTable}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/*============Home Page Intro section Row end==========*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
