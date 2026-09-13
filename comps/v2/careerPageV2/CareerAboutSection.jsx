import CareerCtaBaner from "./elements/CareerCtaBaner";
import JoinAIAteam from "./elements/JoinAIAteam";
import WhoWeAre from "./elements/WhoWeAre";
import JobCompetencies from "./elements/JobCompetencies";
export default function CareerAboutSection({ job }) {
  return (
    <div className="career-about-section bg-[#FFF9EB] relative z-20">
      <div className="cta-benar w-[97%]  rm:w-[94%] sm:w-[90%] md:w-[740px] lg:w-[900px] xl:w-[972px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2   z-[999]">
        <CareerCtaBaner />
      </div>
       <div className="h-[6.5rem] zm:h-[6rem] md:h-[6.5rem] lg:h-[6rem] 2xl:h-[7rem]"></div>
      <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-24 xl:py-28 3xl:py-32 px-3 lm:px-4 md:px-6 xl:px-4">
        <div>
          <JoinAIAteam />
        </div>
        <div className="mt-10 md:mt-12 lg:mt-16">
          <WhoWeAre />
        </div>
        <div className="mt-10 md:mt-12 lg:mt-16">
          <JobCompetencies />
        </div>
      </div>
    </div>
  );
}
