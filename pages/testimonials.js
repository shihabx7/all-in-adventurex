import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page data
import { getTestimonialPageData } from "./api/getTestimonialPageData";
import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import TitleSeparator from "../comps/util/TitleSeparator";
import MainTestimonials from "../comps/testimonialPageComps/MainTestimonials";
import Link from "next/link";

const testimonials=(props)=>{
  
    const toTitleCase=(title)=>{
        const titlefres=title.replace(/-/g,' ')
        const btitle=titlefres.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join(" ") // breadcum title capitalize
         
          return (
            
            <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
          )
         }
         /* customizing breadcum */
 
  
      return(
          <>
              {/* =======header content======== */}
           <Head>
                 <title>All in adventure | Gallery</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}/>
              {/* =======header content ======== end */}
    
     {/* =========================================================================================main content ======== end */}
    <div id="mainContent" className='main-content nobtn-main-content bg-center' style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
           {/* =======breadcum content and breadcum========  */}
           <div className='breadcums  py-1 md:py-2 bg-[#fffceb]'>
             <Breadcrumbs  replaceCharacterList={[{ from: '-', to: ' ' }]} 
                    listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg" 
                    inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700" 
                    activeItemClassName="inline-block text-[#212121]"  
                    rootLabel="home" 
                    transformLabel={(title) => { return toTitleCase(title)} } >
              </Breadcrumbs>
        </div>
         {/* =======breadcum content and breadcum root page template======== end */}
 
         <GameHomeHero gametotal="not" pagedata={props.pagedata}/>
         {/*===================all escaperooms testimonils-=========== */}
          <div className="all-escaperooms-tes relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
          <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
            <div className="secttion-container max-w-7xl mx-auto pt-16 pb-8 md:py-20 lg:py-28 px-4 relative z-30">
                <div className="section-title text-center max-w-[800px] mx-auto">
                    <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
                    <TitleSeparator title="ESCAPE ROOM CUSTOMERS" color="golden-text" weight="font-bold" />
                    <p className="text-gray-700 md:px-8 md:text-lg">Escape rooms create long-lasting memories among players and an irreplaceable experience for years to come. Hopefully, the following stories might inspire you to give escape room a try with your friends, families or co-workers.</p>
                </div>
                <MainTestimonials category="escaperoom"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    
                      <a href="/activities" className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all In person escape rooms</span><span><FiChevronRight/></span></a>
                    

                </div>

            </div>

          </div>
         {/*===================all escaperooms testimonils======================== */}
         {/*===================all BIRTHDAY PARTY CUSTOMERS testimonils-=========== */}
         <div className="all-escaperooms-tes relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
         
            <div className="secttion-container max-w-7xl mx-auto py-8 md:pt-0 md:pb-20 lg:pb-28 px-4 relative z-30">
                <div className="section-title text-center max-w-[800px] mx-auto">
                    <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
                    <TitleSeparator title="BIRTHDAY PARTY CUSTOMERS" color="golden-text" weight="font-bold" />
                    <p className="text-gray-700 md:px-8 md:text-lg">All In Adventures is famous for hosting the most memorable birthday party for all ages. With multiple escape room themes, you can plan the perfect birthday celebration for yourself, friends, or family members.</p>
                </div>
                <MainTestimonials category="birthday"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                 
                      <a href="/events/birthday-party" className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>Learn more about birthday party</span><span><FiChevronRight/></span></a>
                 

                </div>

            </div>

          </div>
         {/*===================all BIRTHDAY PARTY CUSTOMERS testimonils======================== */}
         {/*===================all team-building testimonils-=========== */}
         <div className="all-escaperooms-tes relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
         
            <div className="secttion-container max-w-7xl mx-auto  py-8 md:pt-0 md:pb-20 lg:pb-28  px-4 relative z-30">
                <div className="section-title text-center max-w-[800px] mx-auto">
                    <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
                    <TitleSeparator title="CORPORATE TEAM BUILDING CUSTOMERS" color="golden-text" weight="font-bold" />
                    <p className="text-gray-700 md:px-8 md:text-lg">Creative bonding experience starts with an ability to find, solve, and create solutions for any possible problem ahead. Our escape games make you think outside the box, use your imagination and bring out the best in you and your teammates.</p>
                </div>
                <MainTestimonials category="team"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    
                      <a href="/events/events" className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all events</span><span><FiChevronRight/></span></a>
                    

                </div>

            </div>

          </div>
         {/*===================all all team-building testimonils end======================== */}
         {/*===================all PRIVATE PARTY CUSTOMERS testimonils-=========== */}
         <div className="all-escaperooms-tes relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
         
            <div className="secttion-container max-w-7xl mx-auto py-8 md:pt-0 md:pb-20 lg:pb-28  px-4 relative z-30">
                <div className="section-title text-center max-w-[800px] mx-auto">
                    <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
                    <TitleSeparator title="PRIVATE PARTY CUSTOMERS" color="golden-text" weight="font-bold" />
                    <p className="text-gray-700 md:px-8 md:text-lg">Not only we provide themed events for birthdays and corporate events, but also host parties of mind-bending, puzzle solving for just about any other occasion. Bring your friends, family and sense of adventure to your next special celebration, and don't forget to make it fun!</p>
                </div>
                <MainTestimonials category="party"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    
                      <a href="/events" className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all events</span><span><FiChevronRight/></span></a>
                    

                </div>

            </div>

          </div>
         {/*===================all PRIVATE PARTY CUSTOMERS testimonils end======================== */}
          {/*===================all GAME SHOW ROOM CUSTOMERS testimonils-=========== */}
          <div className="all-escaperooms-tes relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
         
         <div className="secttion-container max-w-7xl mx-auto  pt-8 pb-16 md:pt-0 md:pb-20 lg:pb-28  px-4 relative z-30">
             <div className="section-title text-center max-w-[800px] mx-auto">
                 <p className="text-lg text-[#938056] text-center">TESTIMONIALS</p>
                 <TitleSeparator title="GAME SHOW ROOM CUSTOMERS" color="golden-text" weight="font-bold" />
                 <p className="text-gray-700 md:px-8 md:text-lg">We offer a special, unpredictable, family-friendly live game show experience for guests of all different ages, background and group sizes. You’ll have a blast and make long-lasting memories while actively participating.</p>
             </div>
             <MainTestimonials category="gameshowroom"  testimonials={props.testimonials}/>
             <div className="flex justify-center mt-2 md:mt-4">

                 
                   <a href="/virtual-escape-games" className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all virtual games</span><span><FiChevronRight/></span></a>
                 

             </div>

         </div>
         <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
       </div>
      {/*===================all GAME SHOW ROOM CUSTOMERS testimonils end======================== */}
          
        

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
          </>
    )

}

export default testimonials

export const getStaticProps=async()=>{

  const testimonialPgaeData=getTestimonialPageData();

  return {
    props:{
      pagedata:testimonialPgaeData.pagedata,
      pagemeta:testimonialPgaeData.pagemeta,
      locationlist:testimonialPgaeData.locationlist,
      activitylist:testimonialPgaeData.activitylistSlug,
      eventlist:testimonialPgaeData.eventlistSlug,
      testimonials:testimonialPgaeData.testimonials
    },
    revalidate: 30, // In seconds
  }

}