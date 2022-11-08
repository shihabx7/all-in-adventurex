

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
import FaqList from '../../../comps/faqComps/FaqList';
import TitleSeparator from '../../../comps/util/TitleSeparator';

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
                        <GameVideo videoid={props.activitydata.videoid} location={props.pagedata.locationslug}/>
                        {
                            props.activitydata.faqlist &&
                               <div id="game-faq" className="all-faq relative bg-black py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px]" style={{

                                        background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
                                        backgroundPosition:"bottom center,center center",
                                        backgroundRepeat:"no-repeat"
                                    }}>
                                    <div className="gift-lt max-w-[72px] md:max-w-[120px] lg:max-w-[130px] opacity-[0.4] absolute top-0 left-0"><img className="w-full" src="/assets/faq-q.png"></img></div>
                                     <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
                                         <div className="max-w-7xl mx-auto relative z-30">
                                             <div className="section-title mb-8 md:mb-12">
                                                  <TitleSeparator title="HAVE QUESTIONS ABOUT HOW THE GAME SHOW WORKS? " color="golden-text" weight="font-bold"/>
                                                  <p className="mt-4 text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">Browse through these FAQs to find answers to commonly raised questions. If you don't see what's on your mind, reach out to us anytime on phone or email.</p>

                                              </div>
                                            <div className="gift-faq-box max-w-[1000px] mx-auto"> 

                                                <FaqList faqlist={props.activitydata.faqlist}/>

                                            </div>


                                        </div>
                               </div>
                           }
                       
 
                 </div>
 
             <Footer  location="middletown, ny" locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
         </>
 
     )

    

}

export default LocSingleActivity

export const getStaticPaths=async()=>{
    const res= await getLocationActivitySlugList("middletown-ny");
  
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
    //var router = useRouter()
   // routerSlug=routerSlug.split('-')
  
    const locationHomedata=getLocationSingleActivitypageData(context.params.activitySlug,"middletown-ny")
   
    

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