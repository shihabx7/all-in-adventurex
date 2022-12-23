import Footer from '../../../comps/Footer';
import Homenav from '../../../comps/Homenav';

import BreadcumNew from '../../../comps/util/BreadcumNew';
import { getSingleEventPageData } from "../../api/LocationIndData/getSingleEventPageData"
import { getLocationEventSlugList } from "../../api/LocationIndData/getLocationEventSlugList"
import EventLocHero from '../../../comps/eventPageComps/EventLocHero';
import EventDetails from '../../../comps/eventPageComps/EventDetails';
import EventContact from '../../../comps/eventPageComps/EventContact';
import HomeReviewSlider from '../../../comps/homepagecomps/HomeReviewSlider';
import Seofields from '../../../comps/util/SeoFields';
const LocationSingleEvent=(props)=>{


    return (
        <>
        <Seofields meta={props.pagemeta}/>
            <Homenav locationslug={props.pagedata.locationslug} 
                        bookingall={props.pagedata.bookingall}
                        eventbooking={props.pagedata.eventbooking}
                     location={props.pagedata.location_serach_name}
                     activitylist={props.activitylist}
                     eventlist={props.eventlist}
                     locationlist={props.locationlist}
                     />
                <div id="mainContent" className='main-content'>

                {/* =======header content and breadcum======== */}
                            
                              <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                   <BreadcumNew gameslug={props.pagedata.slug} locationslug={props.pagedata.locationslug} pagetype={"events"}/>
                                </div>
                                <div className='text-red'>{props.slug}</div>
                        {/* =======header content and breadcum======== end */}
                        {/* ===========Page Content here========= */}
                        <EventLocHero pagedata={props.pagedata} eventbooking={props.pagedata.eventbooking}/>
                        <EventDetails eventdata={props.eventdata} eventbooking={props.pagedata.eventbooking} eventname={props.pagedata.eventname}/>
                        <EventContact contactdata={props.contactdata} eventname={props.pagedata.event_name} eventslug={props.pagedata.event_slug} locationlist={props.locationlist} eventlist={props.eventlist}/>
                        <HomeReviewSlider reviews={props.reviews}/>
                        
                     

                </div>

            <Footer  location="hadley, ma" locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
        </>

    )
}

export default LocationSingleEvent

export const getStaticPaths=async()=>{
    const res= await getLocationEventSlugList("hadley-ma");
  
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
  
  
    const eventsingleData=getSingleEventPageData(context.params.eventSlug,"hadley-ma")
   
  

    return{
        props:{
          pagedata:eventsingleData.pagedata,
          pagemeta:eventsingleData.pagemeta,
          eventdata:eventsingleData.eventdata,
          reviews:eventsingleData.reviews,
          contactdata:eventsingleData.contactdata,
          activitylist:eventsingleData.activitylist,
          eventlist:eventsingleData.eventlist,
          locationlist:eventsingleData.locationlist,

         
        },
        revalidate: 30
    }

}


