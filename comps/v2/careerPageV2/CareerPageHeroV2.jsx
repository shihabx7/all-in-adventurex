
import CrPageHeroBgImg from "./elements/CrPageHeroBgImg";

export default function CareerPageHeroV2(props) {
 

  //=============================================================== ui
  return (
    <div className="event-list-hero  bg-[#111111] w-full relative">
      {/*=====================================hero bg======================== */}
      <div className="hero-bg-image w-full h-full absolute top-0 left-0 ">
        <CrPageHeroBgImg
          heroBgImageDesktop={props.pageHeroData.pageHeroDesktop}
          heroBgImageMobile={props.pageHeroData.pageHeroMobile}
        />
      </div>
      {/*=====================================hero bg======================== */}
      {/*===================================== section cotent======================== */}
      <div className="section-bg-shadow w-full  bg-gradient-to-t from-black/50 to-black/70  z-10  relative">
        <div className="w-full min-h-[80vh] rm:min-h-[570px] lm:min-h-[600px] zm:min-h-[64vh] md:min-h-[47vh] lg:min-h-[46vh] xl:min-h-[72vh] 2xl:min-h-[67vh] flex flex-col justify-center items-center">
          <div className="w-auto xl:max-w-[75rem] 2xl:max-w-7xl  px-3 rm:px-5 zm:px-7 lg:px-6 xl:px-4 py-16 lg:py-28 3xl:py-32">
            <div className="page-benar-info">
              <h1 className="text-gold aia-shadow font-bold text-center text-2xl rm:text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl  mb-3 xm:mb-4 md:mb-6 lg:mb-6 font-os uppercase  max-w-[1070px] mx-auto">
                {/*================================================props.pageHeroData.pageTitle*/}
                CAREERS AT ALL IN ADVENTURES
              </h1>
              <div className="text-gray-100 lsth max-w-[700px] lg:max-w-[740px] 3xl:max-w-[820px] mx-auto text-center lg:text-lg 3xl:text-[1.2rem]">
                <p>
                  Passion led us here! We're incredibly passionate about placing
                  great people in their dream roles and believe in serving our
                  guests and each other every day. We love our awesome team!
                  Join us.
                </p>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
      {/*===================================== info baner======================== */}
    
      
    </div>
  );
}
