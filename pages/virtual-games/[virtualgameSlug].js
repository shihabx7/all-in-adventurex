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
import TitleSeparator from "../../comps/util/TitleSeparator";
import FaqList from "../../comps/faqComps/FaqList";


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
          {
            props.vgamedata.booking &&
            <VirtualHero booking={props.vgamedata.booking} pagedata={props.pagedata}/>
          }
          {
            props.vgamedata.bookinglink &&
            <VirtualHero bookinglink={props.vgamedata.bookinglink} pagedata={props.pagedata}/>
          }
          
            
          
              <VirtualGameDetails activityname={props.pagedata.activityname} vgamedata={props.vgamedata} shortname={props.pagedata.shortname? props.pagedata.shortname:false} category={props.pagedata.category}/>
              <VgameGallery galleryitem={props.activitygallery} activityname={props.pagedata.activityname} shortname={props.pagedata.shortname? props.pagedata.shortname:false}/>
              <VgameVideo videoid={props.vgamedata.videoid} activityname={props.pagedata.activityname} shortname={props.pagedata.shortname? props.pagedata.shortname:false}/>
              {
                props.vgamedata.faqlist &&
                <div id="game-faq" className="all-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px]" style={{

                  background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
                  backgroundPosition:"bottom center,center center",
                  backgroundRepeat:"no-repeat"
              }}>
                  <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0"><img className="w-full" src="/assets/faq-q.png"></img></div>
                   <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
                       <div className="max-w-7xl mx-auto relative z-30">
                           <div className="section-title mb-8 md:mb-12">
                                <TitleSeparator title="HAVE QUESTIONS ABOUT HOW THE VIRTUAL GAME SHOW WORKS?" color="golden-text" weight="font-bold"/>
                                <p className="mt-4 text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">No worries. Your professional game host will explain the rules before each game, emcee all game questions, and enthusiastically guide playing contestants through a series of fun challenges until a winner is revealed at the end of the show. Here are the FAQs.</p>
      
                            </div>
                          <div className="gift-faq-box max-w-[1000px] mx-auto"> 
      
                              <FaqList faqlist={props.vgamedata.faqlist}/>
      
                          </div>
                      
                           
                      </div>
              </div>
              }
            
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
              locationlist:VgamePageData.locationlist,
              activitylist:VgamePageData.activitylistSlug,
             eventlistSlug:VgamePageData.eventlistSlug,

      
      
            },
            revalidate: 30
        }
}