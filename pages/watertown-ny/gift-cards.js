
import Footer from '../../comps/Footer';
import Homenav from '../../comps/Homenav';
import BreadcumNew from '../../comps/util/BreadcumNew';

import { getLocationIndGiftPageData } from '../api/LocationIndData/getLocationIndGiftPageData';
import GameLocGiftHero from '../../comps/activitiyPageComps/GameLocGiftHero';
import GiftFaq from "../../comps/giftCardPageComps/GiftFaq";
import WhyAdvGiftCards from '../../comps/giftCardPageComps/WhyAdvGiftCards';

import BuyLocGift from '../../comps/activitiyPageComps/BuyLocGift';
import Seofields from '../../comps/util/SeoFields';

const viewLocGift=(props)=>{
   
    const getLoc=(slug)=>{
       
        
        var locname=slug.split('-')
        var st=locname[locname.length-1].toString()

        locname=locname.slice(0,-1)
        locname=locname.join(' ')
        return locname+", "+st
    }


    return(
        <>
        <Seofields meta={props.pagemeta}/>
            <Homenav locationslug={props.pagedata.locationslug} 
                     bookinggame={props.pagedata.bookingdata}
                     eventbooking={props.pagedata.eventbooking}
                     location={getLoc(props.pagedata.locationslug)}
                          activitylist={props.activitylist}
                          eventlist={props.eventlist}
                          locationlist={props.locationlist}
                          />
                 <div id="mainContent" className='main-content'>
 
                 {/* =======header content and breadcum======== */}
                                
                               <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                    <BreadcumNew/>
                                 </div>
                                 
                         {/* =======header content and breadcum======== end */}
                         {/* ===========Page Content here=========
                         <GameLocHero pagedata={props.pagedata}/>
                         */}
                         <GameLocGiftHero pagedata={props.pagedata}/>
                         <BuyLocGift locationslug={props.pagedata.locationslug} bookingdata={props.pagedata.bookingdata}/>
                         <WhyAdvGiftCards locationslug={props.pagedata.locationslug} bookingdata={props.pagedata.bookingdata}/>
                         <GiftFaq faqlist={props.faqlist}/>
                            
                           
                 </div>
 
             <Footer  location={getLoc(props.pagedata.locationslug)} locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
        
        </>
    )
}

export default viewLocGift

export const getStaticProps=async()=>{
    
    const locationGiftdata=getLocationIndGiftPageData("watertown-ny")
   
    return{
        props:{
          pagedata:locationGiftdata.pagedata,
          pagemeta:locationGiftdata.pagemeta,
          faqlist:locationGiftdata.gift_faq,
          activitylist:locationGiftdata.activitylist,
          eventlist:locationGiftdata.eventlist,
          locationlist:locationGiftdata.locationlist
         
        },
        revalidate: 30
    }

}