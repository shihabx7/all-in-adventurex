import Head from "next/dist/shared/lib/head";
import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
// page tamplete content
import GameDetails from "../../comps/activitiyPageComps/GameDetails";
import GameHomeHero from "../../comps/activitiyPageComps/GameHomeHero";
import GameGallery from "../../comps/activitiyPageComps/GameGallery";
import GameVideo from "../../comps/activitiyPageComps/GameVideo";
import { getALlActivityList } from "../api/getAllActivityList";
import { getActivityData } from "../api/getActivitiyPageData";
import GameFaq from "../../comps/activitiyPageComps/GameFaq";

      
const sinleActivities=(props)=>{

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
               <title>All in adventure Activities | {props.pagedata.activityname}</title>
                <meta name="description" content="All in adventure escape games" />
      
        </Head>
         <Homenav locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}
         />
            {/* =======header content ======== end */}
  
  <div id="mainContent" className='main-content nobtn-main-content'>
         {/* =======breadcum content and breadcum======== end */}
         <div className='breadcums  py-1 md:py-2 bg-[#fffceb]'>
           <Breadcrumbs  replaceCharacterList={[{ from: '-', to: ' ' }]} 
                  listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg" 
                  inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700" 
                  activeItemClassName="inline-block text-[#212121]"  
                  rootLabel="home" 
                  transformLabel={(title) => { return toTitleCase(title)} } >
            </Breadcrumbs>
      </div>
       {/* =======breadcum content and breadcum======== end */}

        <GameHomeHero pagedata={props.pagedata} category={props.activitydata.category} />

         <GameDetails activityname={props.pagedata.activityname} activitydata={props.activitydata} />
        <GameGallery galleryitem={props.activitygallery} activityname={props.pagedata.activityname} category={props.activitydata.category}/>
        <GameVideo videoid={props.activitydata.videoid} activityname={props.pagedata.activityname} />
              {
                          props.activitydata.faqlist &&
                                <>
                                    <GameFaq faqlist={props.activitydata.faqlist}/>
                                </>
                         }

      </div>

        <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
        </>
    )
}

export default sinleActivities;

export const getStaticPaths=async()=>{
  const res= await getALlActivityList();

  const paths=res.map(activityurlslug=>{
          return {
              params:{activitiesName: activityurlslug.activity_slug.toString()}
          }
  } )

  return {
      paths,
      fallback:false,
      
  }

}

export const getStaticProps=async(context)=>{

  const activityPageData=await getActivityData(context.params.activitiesName)

  return{
      props:{
        pagemeta:activityPageData.pagemeta,
        pagedata:activityPageData.pagedata,
        activitydata:activityPageData.activitydata,
        activitygallery:activityPageData.activitygallery,
        locationlist:activityPageData.locationlist,
         activitylist:activityPageData.activitylistSlug,
        eventlist:activityPageData.eventlistSlug
        


      },
      revalidate: 30
  }

}