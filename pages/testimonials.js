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
           <Homenav/>
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
                    <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
                <MainTestimonials category="escaperoom"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    <Link href="/activities">
                      <a className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all In person escape rooms</span><span><FiChevronRight/></span></a>
                    </Link>

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
                    <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
                <MainTestimonials category="birthday"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    <Link href="/events/birthday-party">
                      <a className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>Learn more about birthday party</span><span><FiChevronRight/></span></a>
                    </Link>

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
                    <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
                <MainTestimonials category="birthday"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    <Link href="/events/events">
                      <a className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all events</span><span><FiChevronRight/></span></a>
                    </Link>

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
                    <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
                <MainTestimonials category="birthday"  testimonials={props.testimonials}/>
                <div className="flex justify-center mt-2 md:mt-4">

                    <Link href="/events">
                      <a className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all events</span><span><FiChevronRight/></span></a>
                    </Link>

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
                 <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
             </div>
             <MainTestimonials category="birthday"  testimonials={props.testimonials}/>
             <div className="flex justify-center mt-2 md:mt-4">

                 <Link href="/virtual-escape-games">
                   <a className="flex items-center space-x-1 text-red-600 hover-text-red-700 lg:text-lg font-medium"><span>View all virtual games</span><span><FiChevronRight/></span></a>
                 </Link>

             </div>

         </div>
         <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
       </div>
      {/*===================all GAME SHOW ROOM CUSTOMERS testimonils end======================== */}
          
        

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer/>
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
      testimonials:testimonialPgaeData.testimonials
    },
    revalidate: 30, // In seconds
  }

}