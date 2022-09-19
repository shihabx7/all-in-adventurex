import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
/// page default 

import { getVirtualGameSlug } from "../api/VirtualGames/getVirtualGameSlug";
import { getVirtualGamePageDetailData } from "../api/VirtualGames/getVirtualGamePageDetailData";
import VirtualHero from "../../comps/virtualPgeComps/VirtualHero";
import VirtualGameDetails from "../../comps/virtualPgeComps/VirtualGameDetails";
import VgameGallery from "../../comps/virtualPgeComps/VgameGallery";
import VgameVideo from "../../comps/virtualPgeComps/VgameVideo";


const showSingleVitualGame=(props)=>{

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
       <Head>
                 <title>All in adventure | {props.pagemeta.title}</title>
                  <meta name="description" content="All in adventure escape games" />
        
          </Head>
           <Homenav locationlist={props.locationlist}/>
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
          
              <VirtualGameDetails activityname={props.pagedata.activityname} vgamedata={props.vgamedata}/>
              <VgameGallery galleryitem={props.activitygallery} activityname={props.pagedata.activityname}/>
              <VgameVideo videoid={props.vgamedata.videoid} activityname={props.pagedata.activityname}/>
              
            
         {/* =========================================================================================main content ======== end */}
        </div>
  
  <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
       
       </>
    )
}

export default showSingleVitualGame

export const getStaticPaths= async()=>{

    const res=await getVirtualGameSlug()

    const paths=res.map(vgame_slug=>{
        return {
            params:{virtualgameSlug: vgame_slug.slug.toString()}
        }
} )

return {
    paths,
    fallback:false,
    
}

}

export const getStaticProps=async (context)=>{

        const VgamePageData=await getVirtualGamePageDetailData(context.params.virtualgameSlug)

        return{
            props:{
              pagemeta:VgamePageData.pagemeta,
              pagedata:VgamePageData.pagedata,
              vgamedata:VgamePageData.vgamedata,
              activitygallery:VgamePageData.vgamegallery,
              locationlist:VgamePageData.locationlist
      
      
            },
            revalidate: 30
        }
}