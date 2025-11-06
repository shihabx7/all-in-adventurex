import MobileTitleSeparatorCenter from "./MobileTitleSeparatorCenter";
import MobileEscapeGameTestimonialCar from "./MobileEscapeGameTestimonialCar";
import { mobileEscapeTestimonialList } from "../../lib/tempData/mobileEscapeTempData";
import PartnerOrg from "./PartnerOrg";
  
const MobileEscapeTestimonialSlider = ({
  testimonialSectionData,
  locationName,
}) => {
  return (
    <div className="bg-[#FAECCA] py-16 md:py-20 lg:py-28 "> 
      <div className="mbl-row 2xl:max-w-[1240px] mx-auto  mbl-partners  mb-16 md:mb-20 lg:mb-16 xl:mb-24">
            <PartnerOrg />
          </div>
  <div className="mer-games-slider ">
      <div className=" max-w-7xl mx-auto  z-20 px-1 md:px-4 ">
        <div className="section-head mb-3 rm:mb-4 md:mb-6 lg:mb-7  md:max-w-[800px] lg:max-w-none mx-auto px-4 ">
          <MobileTitleSeparatorCenter
            title={"DISCOVER WHY ADVENTURERS LOVE MOBILE MYSTERY"}
            textColor={"#CA9342"}
          />

       
        </div>
        {/*  testimonialList={testimonialSectionData.testimonialList} */}

        <div className="megc px-3 lg:px-8 xl:px-0 relative">
          <MobileEscapeGameTestimonialCar
            testimonialList={mobileEscapeTestimonialList}
          />
        </div>
      </div>
    </div>
    </div>
  
  );
};
export default MobileEscapeTestimonialSlider;
