

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
                                                  <p className="mt-4 text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg">No worries. Your professional game host will explain the rules before each game, emcee all game questions, and enthusiastically guide playing contestants through a series of fun challenges until a winner is revealed at the end of the show. Here are the FAQs.</p>

                                              </div>
                                            <div className="gift-faq-box max-w-[1000px] mx-auto"> 

                                                <FaqList faqlist={props.activitydata.faqlist}/>

                                            </div>


                                        </div>
                               </div>
                           }
                       
 
                 </div>
 
             <Footer  location="west nyack, ny" locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
         </>
 
     )

    

}

export default LocSingleActivity

export const getStaticPaths=async()=>{
    const res= await getLocationActivitySlugList("west-nyack-ny");
  
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
  
    const locationHomedata=getLocationSingleActivitypageData(context.params.activitySlug,"west-nyack-ny")
   
    

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