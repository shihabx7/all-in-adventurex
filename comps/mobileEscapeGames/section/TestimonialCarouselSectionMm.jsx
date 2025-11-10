import MobileTitleSeparatorCenter from "../MobileTitleSeparatorCenter";
import TestimonialCarouselMm from "../mmcomponents/TestimonialCarouselMm";

import { mobileEscapeTestimonialList } from "../../../lib/tempData/mobileEscapeTempData";
import PartnerOrgMm from "../mmcomponents/PartnerOrgMm";

export default function TestimonialCarouselSectionMm() {
  return (
    <div className="bg-[#FAECCA] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px]  lg:bg-[400px_400px] py-16 md:py-20 lg:py-28 ">
      <div className="mbl-row 2xl:max-w-[1240px] mx-auto  mbl-partners  mb-16 md:mb-20 lg:mb-16 xl:mb-24">
        <PartnerOrgMm />
      </div>
      <div className="mer-games-slider ">
        <div className=" max-w-7xl mx-auto  z-20 px-1 md:px-4 ">
          <div className="section-head mb-3 rm:mb-4 md:mb-6 lg:mb-7  md:max-w-[700px] lg:max-w-[800px] xl:max-w-none mx-auto px-4 ">
            <h2 className="text-[#CA9342] text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase leading-[1.25] text-center">DISCOVER WHY ADVENTURERS LOVE MOBILE MYSTERY</h2>
          </div>
          {/*  testimonialList={testimonialSectionData.testimonialList} */}

          <div className="megc px-3 lg:px-8 xl:px-0 relative">
            <TestimonialCarouselMm
              testimonialList={mobileEscapeTestimonialList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
