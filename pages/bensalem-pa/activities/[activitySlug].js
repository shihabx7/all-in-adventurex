

import Footer from '../../../comps/Footer';
import Homenav from '../../../comps/Homenav';

import Head from 'next/head';

import { getLocationActivitySlugList } from '../../api/LocationIndData/getLocationActivitySlugList';
import { getLocationSingleActivitypageData } from '../../api/LocationIndData/getLocationSingleActivitypageData';
import GameLocHero from '../../../comps/activitiyPageComps/GameLocHero';
import BreadcumNew from '../../../comps/util/BreadcumNew';
import GameLocDetails from '../../../comps/activitiyPageComps/GameLocDetails';
import GameGallery from '../../../comps/activitiyPageComps/GameGallery';
import GameVideo from '../../../comps/activitiyPageComps/GameVideo';
import GameFaq from '../../../comps/activitiyPageComps/GameFaq';

const LocSingleActivity=(props)=>{
   

  
  
 
     return (
         <>
             <Homenav locationslug={props.pagedata.locationslug} 
                        bookinggame={props.pagedata.bookingdata} 
                        location={props.pagedata.location_serach_name}
                        activitylist={props.activitylist}
                        eventlist={props.eventlist}
                        locationlist={props.locationlist}
                        />
                 <div id="mainContent" className='main-content'>
 
                 {/* =======header content and breadcum======== */}
                             <Head>
                                 <title>All in adventure | Albany NY</title>
                                 <meta name="description" content="All in one adventure escape games" />
                                 
 
                               </Head>
                               <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                    <BreadcumNew gameslug={props.pagedata.slug} locationslug={props.pagedata.locationslug} pagetype={"activities"}/>
                                 </div>
                                 <div className='text-red'>{props.slug}</div>
                         {/* =======header content and breadcum======== end */}
                         {/* ===========Page Content here========= */}
                        
                         <GameLocHero pagedata={props.pagedata} category={props.activitydata.category}/>
                         <GameLocDetails bookingdata={props.pagedata.bookingdata} activityname={props.pagedata.activityname} activitydata={props.activitydata} />
                        <GameGallery galleryitem={props.activitygallery} activityname={props.pagedata.activityname} category={props.activitydata.category}/>
                        <GameVideo  videoid={props.activitydata.videoid} videothumb={props.activitydata.videothumb} activityname={props.pagedata.activityname} location={props.pagedata.locationslug}/>
                        {
                          props.activitydata.faqlist &&
                                <>
                                    <GameFaq faqlist={props.activitydata.faqlist}/>
                                </>
                         }
                       
 
                 </div>
 
             <Footer  location="bensalem, pa" locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
         </>
 
     )

    

}

export default LocSingleActivity

export const getStaticPaths=async()=>{
    const res= await getLocationActivitySlugList("bensalem-pa");
  
    const paths=res.map(activityurlslug=>{
            return {
                params:{activitySlug: activityurlslug.activity_slug.toString()}
            }
    } )
  
    return {
        paths,
        fallback:false,
        
    }
  
  }

  export const getStaticProps=async(context)=>{
   
  
    const locationHomedata=getLocationSingleActivitypageData(context.params.activitySlug,"bensalem-pa")
   
    

    return{
        props:{
          pagedata:locationHomedata.pagedata,
          pagemeta:locationHomedata.pagemeta,
          activitydata:locationHomedata.activitydata,
          activitygallery:locationHomedata.activitygallery,
          activitylist:locationHomedata.activitylist,
          eventlist:locationHomedata.eventlist,
          eventlist:locationHomedata.eventlist,
          locationlist:locationHomedata.locationlist
         
        },
        revalidate: 30
    }

}