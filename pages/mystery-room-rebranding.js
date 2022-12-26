import Head from "next/dist/shared/lib/head";
import Homenav from "../comps/Homenav";
import Footer from "../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page template=============
import { getRebrandingPageData } from "./api/getRebrandingPageData";
import OtherHero from "../comps/util/OtherHero";
import Rebranding from "../comps/util/Rebrannding";
import ThankLinkBox from "../comps/util/ThankLinkBox";
import TitleSeparator from "../comps/util/TitleSeparator";
import Seofields from "../comps/util/SeoFields";

const MysteryRoomRebrand =(props)=>{
    const toTitleCase=(title)=>{
        const titlefres=title.replace(/-/g,' ')
        const btitle=titlefres.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join(" ") // breadcum title capitalize
         
          return (
            
            <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
          )
         }

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
         
       
     <OtherHero gametotal="not" pagedata={props.pagedata}/>
     <Rebranding/>
    <div className="our-all-events relative overflow-hidden bg-cover" style={
            {
                background:"url('/assets/game-dt-bg.jpg')"
            }
           }>
          <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img></div>
            <div className="htb-bg-icon htb-bg-2 ot-hero-icon absolute right[-104px]"><img src="/assets/Compas-brown.png"></img></div>
          <div className="sec-container max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-30">
                    <div className="section-title-sep mt-4 md:mt-0">
                                    
                                     <TitleSeparator title="EVERYTHING WE OFFER" color="golden-text" weight="font-bold"/>
                                     <p className="max-w-[700px] mx-auto text-center lg:text-lg text-[#333333] mt-4">Play thrilling escape rooms with a variety of game themes that are perfect for having fun with your friends, family and coworkers. We host the most exciting birthday parties, team building activities and private events.</p>
                             </div>
              <ThankLinkBox/>
          </div>

    </div>
   

  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
            
            </>
         )

}

export default MysteryRoomRebrand

export const getStaticProps=async()=>{

    const rebrandingpagedata=await getRebrandingPageData()

    return{
        props:{
            pagedata:rebrandingpagedata.pagedata,
            pagemeta:rebrandingpagedata.pagemeta,
            locationlist:rebrandingpagedata.locationlist,
            activitylist:rebrandingpagedata.activitylistSlug,
            eventlist:rebrandingpagedata.eventlistSlug
            
        },
        revalidate:30
    }
}