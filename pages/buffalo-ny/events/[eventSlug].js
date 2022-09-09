import Footer from '../../../comps/Footer';
import Homenav from '../../../comps/Homenav';

import Head from 'next/head';
import BreadcumNew from '../../../comps/util/BreadcumNew';
import { getSingleEventPageData } from "../../api/LocationIndData/getSingleEventPageData"
import { getLocationEventSlugList } from "../../api/LocationIndData/getLocationEventSlugList"
import GameLocHero from '../../../comps/activitiyPageComps/GameLocHero';
import EventDetails from '../../../comps/eventPageComps/EventDetails';
import EventContact from '../../../comps/eventPageComps/EventContact';
import HomeReviewSlider from '../../../comps/homepagecomps/HomeReviewSlider';
const LocationSingleEvent=(props)=>{


    return (
        <>
            <Homenav locationslug={props.pagedata.locationslug} 
                        bookingall={props.pagedata.bookingall}
                     location={props.pagedata.location_serach_name}
                     activitylist={props.activitylist}
                     eventlist={props.eventlist}
                     
                     />
                <div id="mainContent" className='main-content'>

                {/* =======header content and breadcum======== */}
                            <Head>
                                <title>All in adventure | event </title>
                                <meta name="description" content="All in one adventure escape games" />
                                

                              </Head>
                              <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                   <BreadcumNew gameslug={props.pagedata.slug} locationslug={props.pagedata.locationslug} pagetype={"events"}/>
                                </div>
                                <div className='text-red'>{props.slug}</div>
                        {/* =======header content and breadcum======== end */}
                        {/* ===========Page Content here========= */}
                        {console.log(props.pagedata)}
                        <GameLocHero pagedata={props.pagedata} eventslug={props.pagedata.slug}/>
                        <EventDetails eventdata={props.eventdata} eventname={props.pagedata.eventname}/>
                        <EventContact contactdata={props.contactdata}/>
                        <HomeReviewSlider reviews={props.reviews}/>
                        
                     

                </div>

            <Footer  location="albany, ny"/>
        </>

    )
}

export default LocationSingleEvent

export const getStaticPaths=async()=>{
    const res= await getLocationEventSlugList("buffalo-ny");
  
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

  export const getStaticProps=async(context)=>{
  
  
    const eventsingleData=getSingleEventPageData(context.params.eventSlug,"buffalo-ny")
   
  

    return{
        props:{
          pagedata:eventsingleData.pagedata,
          pagemeta:eventsingleData.pagemeta,
          eventdata:eventsingleData.eventdata,
          reviews:eventsingleData.reviews,
          contactdata:eventsingleData.contactdata,
          activitylist:eventsingleData.activitylist,
          eventlist:eventsingleData.eventlist

         
        },
        revalidate: 30
    }

}


