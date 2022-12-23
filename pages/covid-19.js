
import styles from '../styles/alllocations.module.css'
import TitleSeparator from "../comps/util/TitleSeparator";
import Footer from '../comps/Footer';
import Homenav from '../comps/Homenav';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { FiChevronRight } from "react-icons/fi";

import { getCovidPageData } from './api/getCovidPageData';
import Seofields from '../comps/util/SeoFields';
import Link from 'next/link';



const covid19=(props)=>{
 /* custom breadcum code */
 const toTitleCase=(title)=>{
    const btitle=title.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join("") // breadcum title capitalize
   
    return (
      
      <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
    )
   }
   /* customizing breadcum */

   return(
    <>
    <Seofields meta={props.pagemeta}/>
         <Homenav locationlist={props.locationlist}
           activitylist={props.activitylist}
           eventlist={props.eventlist}/>
  
                 <div id="mainContent" className='main-content nobtn-main-content'>

                     {/* =======header content and breadcum======== */}
    
      <div className='breadcums  py-1 md:py-2 bg-[#fffceb]'>
             <Breadcrumbs  replaceCharacterList={[{ from: '-', to: ' ' }]} 
                    listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg" 
                    inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700" 
                    activeItemClassName="inline-block text-[#212121]"  
                    rootLabel="home" 
                    transformLabel={(title) => { return toTitleCase(title)} } >
              </Breadcrumbs>
        </div>
        {/* =======header content and breadcum======== end */}
         {/* ============page baner=============*/}
      <div className={styles.alllocations+' relative overflow-hidden'}> 
      <div className={styles.alllocationscompas+" gift-rt absolute"}><img src="/assets/Compas-brown.png"></img></div>
            <div className='max-w-7xl mx-auto py-16 md:py-16 px-4 relative z-10'>
            <div className="page-benar-info"> 
                
                <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-gray-800 text-center'>CHOOSE FROM {props.pagedata.totalLocations} U.S LOCATIONS</p> 
                <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase'>COVID-19 Update</h1>
                <p className='text-gray-700 max-w-2xl mx-auto text-center lg:text-lg'> </p>
                </div>
                
            </div>
            
         </div>
    {/* ============page baner end=============*/}
    {/* ============Location list=============*/}
    <div className='all-location-list-section buy-gift relative overflow-hidden px-4 md:px-6'> 
                <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
              <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
       <div className='max-w-7xl mx-auto md:px-4 py-16 md:py-28'>
        <div className='section-head relative z-20'>  
              <TitleSeparator title='All In Adventures COVID-19 Update' color='golden-text' weight='font-bold'/>
              <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
                    <p className="text-gray-300 md:px-8"></p>
                </div>
        </div>
        <div className='cov-content max-w-[990px] text-[#dddddd] bg-[#111111] mx-auto py-6 px-4 md:py-8 md:px-8'>
        <p className='text-[#dddddd] lg:text-lg'>We want to thank all of our customers and employees for their patience while we work diligently
                                to get back to some version of the new normal. At this point in time we have pretty much reopened
                                all of our stores with REVISED hours of operation (see location page for specific hours
                                of operation for a particular store). As we continue thru this process I want to reiterate
                                that the health and safety of our customers and employees is our top priority. We are taking
                                a very careful and thoughtful approach to reopening and have made many changes to our
                                operations to ensure everyone feels safe and comfortable. Some of these changes include:</p>
        <ul className='star-list  pl-4 mt-8'>
            <li className='my-2 md:my-3 lg:text-lg'>Allowing all PRIVATE room bookings to avoid playing with people you don&apos;t know regardless of the size of your group</li>
            <li className='my-2 md:my-3 lg:text-lg'>Deep cleaning all rooms between experiences and continuously disinfecting high touch areas</li>
            <li className='my-2 md:my-3 lg:text-lg'>Staff wearing masks and gloves and washing hands frequently</li>
            <li className='my-2 md:my-3 lg:text-lg'>Customer&apos;s required to wear masks based on State and Local mandated guidelines</li>
            <li className='my-2 md:my-3 lg:text-lg'>Diligently following all Social Distancing guidelines</li>
            <li className='my-2 md:my-3 lg:text-lg'>On-going training of employees on health and safety procedures</li>
            <li className='my-2 md:my-3 lg:text-lg'>We have gone CASHLESS but have enabled our stores to accept additional payment methods in addition to Credit/Debit Cards including:</li>
                              
        </ul>
        <p className='my-2 md:my-3 lg:text-lg'>On-going training of employees on health and safety procedures</p> 
        <ul className='star-list  pl-8 mt-4'>
            <li className='my-2 md:my-3 lg:text-lg'>PayPal</li>
            <li className='my-2 md:my-3 lg:text-lg'>Venmo</li>
            <li className='my-2 md:my-3 lg:text-lg'>Zelle</li>
            <li className='my-2 md:my-3 lg:text-lg'>Cash App</li>
            <li className='my-2 md:my-3 lg:text-lg'>Apple Pay and Samsung Pay (in some stores)</li>
            
                              
        </ul>                
        </div>
        <div className='cov-vid'>
        <div className="max-w-7xl mx-auto mt-10 md:mt-12 lg:mt-16 px-4 relative z-30"> 
        
                <div className="s-title"> 
               
                    <TitleSeparator title="COVID PRECAUTIONS" color="golden-text" weight="font-bold"/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-8">
                               
                    </div>
                </div>
          
                <div className="game-video-box pb-[57%] md:pb-[416px] lg:pb-[472px] w-[100%] md:w-[740px] lg:w-[840px] mx-auto shadow-lg relative"> 
                             <iframe className="absolute w-full h-full top-0 left-0"
                              src={"https://www.youtube.com/embed/"+props.pagedata.videoid+"?rel=0"} 
                              title="Treasure Island 1881 // Reality Escape Game" 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen>
                                
                             </iframe>

               
                </div>
                <div className="game-b-btnbox mt-8 md:mt-16 lg:mt-20">
                        {
                            props.location?
                            <div className="game-btn-all ">
                           <Link href={"/"+props.location+"/activities/"}> 
                              <a  className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center">VIEW ALL GAMES</a>
                              </Link>
                              <Link href={"/"+props.location+"/events/"}> 
                                <a  className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#424242] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center">VIEW ALL EVENTS</a>
                                </Link>
                        </div>
                             :
                             <div className="game-btn-all ">
                                 <Link href="/activities/"> 
                                   <a  className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-white font-medium border-2 border-red-600 hover:border-red-700 bg-red-600 hover:bg-red-700 rounded-full text-center">VIEW ALL GAMES</a>
                                   </Link>
                                 <Link href="/events/"> 
                                     <a className="max-w-[260px] md:max-w-[280px] my-4 block mx-auto uppercase py-3 md:py-4 px-6 text-lg text-[#dddddd] hover:text-white font-medium border-2 border-red-600 hover:border-red-700 hover:bg-red-700 rounded-full text-center">VIEW ALL EVENTS</a>
                                     </Link>
                             </div>

                        } 

                </div>
                

        </div>
        </div>
            
    
        </div>
       
    </div>
    {/* ============Location list end=============*/}
        </div>
        <Footer locationlist={props.locationlist} totallocations={props.pagedata.totalLocations}/>
        

    </>
   )



}

export default covid19

export const getStaticProps=async ()=>{

    const covPagedata= await getCovidPageData();
    return {
      props: {
             pagedata:covPagedata.pagedata,
            pagemeta:covPagedata.pagemeta,
            locationlist:covPagedata.locationlist,
            activitylist:covPagedata.activitylistSlug,

      },
     
      // - At most once every 10 seconds
     // revalidate: 30, // In seconds
    }
  
  
  
  }