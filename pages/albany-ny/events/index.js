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
       
        var sp=router.pathname.split('/')
        var locname=sp[1].split('-')
        var st=locname[locname.length-1].toString()

        locname=locname.slice(0,-1).join(' ')
        return locname+", "+st
    }
    //console.log(locname)
    /* custom breadcum code */
 const toTitleCase=(title)=>{
    const titlefres=title.replace(/-/g,' ')
     const btitle=titlefres.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join(" ") // breadcum title capitalize
     
    
     return (
 
       <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
     )
    }
    /* customizing breadcum */
 
     return (
         <>
             <Homenav locationslug={props.pagedata.locationslug}
                     bookingall={props.pagedata.bookingall} 
                     location={getLoc(props.locationslug)}
                     activitylist={props.activitylistSlug}
                     eventlist={props.eventlistSlug}
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
                         <EventList events={props.eventlist} locationslug="albany-ny"/>
                         <EventContact contactdata={props.contactdata}/>
                        
                 </div>
 
             <Footer  location={getLoc(props.locationslug)}/>
         </>
 
     )

    

}

export default LocEventList

export const getStaticProps=async(context)=>{
    //var router = useRouter()
   // routerSlug=routerSlug.split('-')
  
    const locationHomedata=getLocationsEventList("albany-ny")
   
  

    return{
        props:{
          pagedata:locationHomedata.pagedata,
          pagemeta:locationHomedata.pagemeta,
          eventlist:locationHomedata.events_list,
          contactdata:locationHomedata.contactdata,
          activitylistSlug:locationHomedata.activitylist,
          eventlistSlug:locationHomedata.eventlist
         
        },
        revalidate: 30
    }

}