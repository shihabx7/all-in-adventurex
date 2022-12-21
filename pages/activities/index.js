import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import GameHomeHero from "../../comps/activitiyPageComps/GameHomeHero";
import GameList from "../../comps/activitiyPageComps/GameList";
import { getAllActivity } from "../api/getAllActivity";
import Seofields from "../../comps/util/SeoFields";





const viewAllActivities=(props)=>{

      /* custom breadcum code */
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
          <Seofields meta={props.pagemeta}/>
              {/* =======header content======== */}
           
           <Homenav locationlist={props.locationlist}
           activitylist={props.activitylistSlug}
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
         
   

            <GameHomeHero pagedata={props.pagedata}/>
            <GameList activitylist={props.activitylist}/>
         
            
        
  


  {/* =========================================================================================main content ======== end */}
        </div>
  
          <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
          </>
      )
}

export default viewAllActivities;


export const getStaticProps = async()=>{

    const allActivity=await getAllActivity();
    
    return{
      props:{
        pagemeta:allActivity.pagemeta,
        pagedata:allActivity.pagedata,
        activitylist:allActivity.activity_list,
        locationlist:allActivity.locationlist,
      eventlist:allActivity.eventlistSlug,
      activitylistSlug:allActivity.activitylistSlug


      },
      revalidate: 30
  }
}