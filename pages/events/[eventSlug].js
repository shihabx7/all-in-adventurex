import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import { geEventPagetData } from "../api/getEventPageData";
import EventContact from "../../comps/eventPageComps/EventContact";
import { getAllEventList } from "../api/getAllEventList";
import GameHomeHero from "../../comps/activitiyPageComps/GameHomeHero";
import HomeReviewSlider from "../../comps/homepagecomps/HomeReviewSlider";
import EventDetails from "../../comps/eventPageComps/EventDetails";


const showSingleEvent=(props)=>{

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
                 <title>All in adventure | Events</title>
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

            <GameHomeHero pagedata={props.pagedata}/>
            <EventDetails eventdata={props.eventdata} eventname={props.pagedata.eventname}/>
            <EventContact/>
            <HomeReviewSlider reviews={props.reviews}/>
            
         {/* =========================================================================================main content ======== end */}
        </div>
  
  <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
       
       </>
    )
}

export default showSingleEvent

export const getStaticPaths= async()=>{

    const res=await getAllEventList()

    const paths=res.map(eventSlug=>{
        return {
            params:{eventSlug: eventSlug.event_slug.toString()}
        }
} )

return {
    paths,
    fallback:false,
    
}

}

export const getStaticProps=async (context)=>{

        const eventPageData=await geEventPagetData(context.params.eventSlug)

        return{
            props:{
              pagemeta:eventPageData.pagemeta,
              pagedata:eventPageData.pagedata,
              eventdata:eventPageData.eventdata,
              reviews:eventPageData.reviews,
              locationlist:eventPageData.locationlist
      
      
            },
            revalidate: 30
        }
}