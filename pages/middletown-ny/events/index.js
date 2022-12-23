

import Footer from '../../../comps/Footer';
import Homenav from '../../../comps/Homenav';

import { getLocationsEventList } from '../../api/LocationIndData/getLocationsEventList';
import EventLocHero from '../../../comps/eventPageComps/EventLocHero';
import BreadcumNew from '../../../comps/util/BreadcumNew';
import EventList from '../../../comps/activitiyPageComps/EventList';
import EventContact from '../../../comps/eventPageComps/EventContact';
import Seofields from '../../../comps/util/SeoFields';

const LocEventList=(props)=>{
   
  
    const getLoc=(slug)=>{
       
        
        var locname=slug.split('-')
        var st=locname[locname.length-1].toString()

        locname=locname.slice(0,-1)
        locname=locname.join(' ')
        return locname+", "+st
    }
  
 
     return (
         <>
         <Seofields meta={props.pagemeta}/>
             <Homenav locationslug={props.pagedata.locationslug}
                     bookingall={props.pagedata.bookingall}
                     eventbooking={props.pagedata.eventbooking} 
                     location={getLoc(props.pagedata.locationslug)}
                     activitylist={props.activitylistSlug}
                     eventlist={props.eventlist}
                     locationlist={props.locationlist}
                     />
                 <div id="mainContent" className='main-content'>
 
                 {/* =======header content and breadcum======== */}
                           
                               <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                    <BreadcumNew/>
                                 </div>
                                 <div className='text-red'>{props.slug}</div>
                         {/* =======header content and breadcum======== end */}
                         {/* ===========Page Content here=========  <> */}
                         <EventLocHero pagedata={props.pagedata} eventbooking={props.pagedata.eventbooking}/>
                         <EventList events={props.eventLocList} eventbooking={props.pagedata.eventbooking}  locationslug="middletown-ny"/>
                         
                         <EventContact contactdata={props.contactdata} locationlist={props.locationlist} eventlist={props.eventlist}/>
                        
                 </div>
 
             <Footer location="middletown-ny" locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
         </>
 
     )

    

}

export default LocEventList

export const getStaticProps=async(context)=>{
   
  
    const locationHomedata=getLocationsEventList("middletown-ny")
   
  

    return{
        props:{
          pagedata:locationHomedata.pagedata,
          pagemeta:locationHomedata.pagemeta,
          eventLocList:locationHomedata.events_list,
          contactdata:locationHomedata.contactdata,
          activitylistSlug:locationHomedata.activitylist,
         // eventlistSlug:locationHomedata.eventlist,
          locationlist:locationHomedata.locationlist,
          eventlist:locationHomedata.eventlistSlug
         
        },
        revalidate: 30
    }

}