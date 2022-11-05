import { useRouter } from 'next/router'

import Footer from '../../../comps/Footer';
import Homenav from '../../../comps/Homenav';

import Head from 'next/head';
import { FiChevronRight } from "react-icons/fi";
import { getLocationsEventList } from '../../api/LocationIndData/getLocationsEventList';
import GameLocHero from '../../../comps/activitiyPageComps/GameLocHero';
import GameLocList from '../../../comps/activitiyPageComps/GameLocList';
import BreadcumNew from '../../../comps/util/BreadcumNew';
import EventList from '../../../comps/activitiyPageComps/EventList';
import EventContact from '../../../comps/eventPageComps/EventContact';

const LocEventList=(props)=>{
   
  
    const getLoc=(slug)=>{
       
        
        var locname=slug.split('-')
        var st=locname[locname.length-1].toString()

        locname=locname.slice(0,-1)
        locname=locname.join(' ')
        return locname+", "+st
    }
    //console.log(locname)
    /* custom breadcum code */
 
     return (
         <>
             <Homenav locationslug={props.pagedata.locationslug}
                     bookingall={props.pagedata.bookingall} 
                     location={getLoc(props.pagedata.locationslug)}
                     activitylist={props.activitylistSlug}
                     eventlist={props.eventlist}
                     locationlist={props.locationlist}
                     />
                 <div id="mainContent" className='main-content'>
 
                 {/* =======header content and breadcum======== */}
                             <Head>
                                 <title>All in adventure Locations</title>
                                 <meta name="description" content="All in one adventure escape games" />
                                 
 
                               </Head>
                               <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                    <BreadcumNew/>
                                 </div>
                                 <div className='text-red'>{props.slug}</div>
                         {/* =======header content and breadcum======== end */}
                         {/* ===========Page Content here=========  <> */}
                         <GameLocHero pagedata={props.pagedata}/>
                         <EventList events={props.eventLocList} locationslug="west-nyack-ny"/>
                         
                         <EventContact contactdata={props.contactdata} locationlist={props.locationlist} eventlist={props.eventlist}/>
                        
                 </div>
 
             <Footer location="west nyack, ny"  locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
         </>
 
     )

    

}

export default LocEventList

export const getStaticProps=async(context)=>{
    //var router = useRouter()
   // routerSlug=routerSlug.split('-')
  
    const locationHomedata=getLocationsEventList("west-nyack-ny")
   
  

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