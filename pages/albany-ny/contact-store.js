import { useRouter } from 'next/router'

import Footer from '../../comps/Footer';
import Homenav from '../../comps/Homenav';
import BreadcumNew from '../../comps/util/BreadcumNew';
import Head from 'next/head';
import { getLocationIndContactPageData } from '../api/LocationIndData/getLocationIndContactPageData';
import GameLocHero from '../../comps/activitiyPageComps/GameLocHero';
import StoreContact from '../../comps/contactComps/StoreContact';


const ViewContactStore=(props)=>{
    
    const getLoc=(slug)=>{
        
        var sp=router.pathname.split('/')
        var locname=sp[1].split('-')
        var st=locname[locname.length-1].toString()

        locname=locname.slice(0,-1).join(' ')
        return locname+", "+st
    }


    return(
        <>
            <Homenav locationslug={props.pagedata.locationslug}
                     location={getLoc(props.pagedata.locationslug)}
                      bookingall={props.pagedata.bookingall}
                      activitylist={props.activitylist}
                      eventlist={props.eventlist}
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
                                 
                         {/* =======header content and breadcum======== end */}
                         {/* ===========Page Content here=========*/}
                         <GameLocHero pagedata={props.pagedata} gametotal="not"/>
                         <StoreContact contactdata={props.contactdata}/>
                         
                       
                         
                            
 
                 </div>
 
             <Footer  location={getLoc(props.pagedata.locationslug)}/>
        
        </>
    )
}

export default ViewContactStore

export const getStaticProps=async()=>{
    //var router = useRouter()
   // routerSlug=routerSlug.split('-')
  
    const locationContactdata=getLocationIndContactPageData("albany-ny")
   
    

    return{
        props:{
          pagedata:locationContactdata.pagedata,
          pagemeta:locationContactdata.pagemeta,
          contactdata:locationContactdata.contactdata,
          activitylist:locationContactdata.activitylist,
          eventlist:locationContactdata.eventlist
          
         
        },
        revalidate: 30
    }

}