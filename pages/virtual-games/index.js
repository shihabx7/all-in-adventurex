
import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page default

import { getVirtualGamesHomePageData } from "../api/VirtualGames/getVirtualGamesHomePageData";
import VirtualHero from "../../comps/virtualPgeComps/VirtualHero";
import VirtualGameList from "../../comps/virtualPgeComps/VirtualGameList";

const VirtualEscapeGames=(props)=>{
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
                  {/* =======header content======== */}
               <Head>
                     <title>All in adventure | Virtual Escape Games</title>
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
             <VirtualHero pagedata={props.pagedata}/>
             <VirtualGameList vgamelist={props.vgamelist}/>
             
       
    
    {
        console.log(props)
    }
                
             
                
            
      
    
    
      {/* =========================================================================================main content ======== end */}
            </div>
      
              <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
              </>
          )
}

export default VirtualEscapeGames

export const getStaticProps = async()=>{

    const allVgames=await getVirtualGamesHomePageData();
    
    return{
      props:{
        pagemeta:allVgames.pagemeta,
        pagedata:allVgames.pagedata,
        vgamelist:allVgames.virtual_game_list,
        locationlist:allVgames.locationlist,
        activitylist:allVgames.activitylistSlug,
      eventlistSlug:allVgames.eventlistSlug,

      },
      revalidate: 30
  }
}