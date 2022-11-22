import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import { getJobApplicationData } from "../api/getJobApplicationData";
import GameHomeHero  from "../../comps/activitiyPageComps/GameHomeHero";
import CareerHero from "../../comps/careersPageComps/CareerHero";

import LocationStoreMenu from "../../comps/headerComps/LocationStoreMenu";


const apply=(props)=>{
    /* customizing breadcum */
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
                 <title>All In Adventures | Apply</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
          
           <Homenav 
           locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}
           />
              {/* =======header content ======== end */}
    
     {/* =========================================================================================main content ======== end */}
    <div id="mainContent" className='main-content nobtn-main-content bg-center relative' >
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
         

        <div id="volunteeringdloc" className="rewardloc z-[10000] fixed w-screen h-screen top-0 left-0 overflow-scroll hidden">
            <LocationStoreMenu locationlist={props.locationlist}/>

        </div>
        <CareerHero jobname="apply" pagedata={props.pagedata}/>
        
   

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
          </>
    )
}

export default apply

export const getStaticProps=async()=>{

    const jobApplicationData=await getJobApplicationData()

    return{
        props:{
            pagedata:jobApplicationData.pagedata,
            pagemeta:jobApplicationData.pagemeta,
            locationlist:jobApplicationData.locationlist,
            activitylist:jobApplicationData.activitylistSlug,
            eventlist:jobApplicationData.eventlistSlug
            
        },
        revalidate:30
    }
}