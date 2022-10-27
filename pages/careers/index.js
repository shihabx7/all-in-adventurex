import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import CareerHero from "../../comps/careersPageComps/CareerHero"
import WhoWeAre from "../../comps/careersPageComps/WhoWeAre";
import OpenPosition from "../../comps/careersPageComps/OpenPosition";
import { getCareerHomePageData } from "../api/getCareerHomePageData";

const Careers=(props)=>{

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
                 <title>All in adventure | Careers</title>
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
         <CareerHero 
            pagedata={props.pagedata}
            btnid="alljobs"
            
            />
         <WhoWeAre/>
         <OpenPosition jobs={props.jobs}/>

{/* =========================================================================================main content ======== end */}
</div>
  
  <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
  </>
      )
}

export default Careers

export const getStaticProps=async()=>{

    const cPageData=await getCareerHomePageData()

    return {
        props:{
            pagedata:cPageData.pagedata,
            pagemeta:cPageData.pagemeta,
            locationlist:cPageData.locationlist,
            activitylist:cPageData.activitylistSlug,
            eventlist:cPageData.eventlistSlug,
            jobs:cPageData.jobs
        }
    }
}