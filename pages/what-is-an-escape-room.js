
import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============

import { getWhatisEscape } from "./api/getWhatisEscape";
import GameHomeHero from "../comps/activitiyPageComps/GameHomeHero";
import WhatisEscapeBlog from "../comps/util/WhatisEscapeBlog";
import Seofields from "../comps/util/SeoFields";


const WhtatisEscape=(props)=>{
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
        <Seofields meta={props.pagemeta}/>
          
           <Homenav 
           locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}
           />
              {/* =======header content ======== end */}
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
         
        <GameHomeHero gametotal="not" pagedata={props.pagedata}/>
        <WhatisEscapeBlog/>
       
   

  {/* =========================================================================================main content ======== end */}
        </div>


        <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
    </>
 )


}

export default WhtatisEscape

export const getStaticProps=async()=>{

    const volunteeringPageData=await getWhatisEscape()

    return{
        props:{
            pagedata:volunteeringPageData.pagedata,
            pagemeta:volunteeringPageData.pagemeta,
            locationlist:volunteeringPageData.locationlist,
            activitylist:volunteeringPageData.activitylistSlug,
            eventlist:volunteeringPageData.eventlistSlug
            
        },
        revalidate:30
    }
}