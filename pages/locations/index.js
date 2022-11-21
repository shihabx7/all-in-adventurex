import Head from 'next/head'
import styles from '../../styles/alllocations.module.css'
import TitleSeparator from "../../comps/util/TitleSeparator";
import LocationListView from  "../../comps/locationsPage/LocationListView";
import Footer from '../../comps/Footer';
import Homenav from '../../comps/Homenav';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { getLocationsPageData } from '../api/getLocationsPageData';
import Link from 'next/link';

const Locations=(props)=>{
  

  const setTopPadding=()=>{
    let headerHeight=document.getElementById("header").offsetHeight;
    document.getElementById("mainContent").style.paddingTop=headerHeight+"px";
  }
  /* custom breadcum code */
 const toTitleCase=(title)=>{
  const btitle=title.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join("") // breadcum title capitalize
 
  return (
    
    <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
  )
 }
 /* customizing breadcum */

 const [showLocList, setShowLoclist]=useState("ALL")
 

const countTotalLocation=(arr)=>{
      var i;
      var total=0;
      for(i=0;i<arr.length;i++){
          total=total+arr[i].cities.length
      }
      return total
}
const ScrollTab=(id)=>{
  const tabBox=document.getElementById('loc-tab-list-box')
  const tabList=document.getElementById('loc-tab-list').children
  const tablength=0
  const scrollLeft=tabBox.scrollLeft
  for(var j=0;j<tabList.length;j++){
    tablength += parseInt(tabList[j].offsetWidth, 10)
  }
  console.log('tabBox '+tabBox.offsetWidth)
  console.log('tabList '+tablength)
  console.log('s '+scrollLeft)
  if(id>1 && id<tabList.length){
    
    
    document.getElementById('loc-tab-list-box').scrollLeft+=90
  }
  
  
}
/* ========================page content=================== */
return (
  <>
      <Homenav locationlist={props.states}
        activitylist={props.activitylist}
        eventlist={props.eventlist}/>
  
            <div id="mainContent" className='main-content nobtn-main-content'>

  {/* =======header content and breadcum======== */}
    <Head>
        <title>All in adventure Locations</title>
        <meta name="description" content="All in one adventure escape games" />
        
      </Head>
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
                
                <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-gray-800 text-center'>CHOOSE FROM {countTotalLocation(props.states)} U.S. LOCATIONS</p> 
                <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os'>ALL IN ADVENTURES LOCATIONS</h1>
                <p className='text-gray-700 max-w-[800px] mx-auto text-center lg:text-lg'>Browse all our escape room adventure centers across the United States. Grab your team today and head over to any of our locations to experience family and kids friendly interactive fun activities that you and your team will never forget!</p>
                </div>
                <div className='map-autocomplete-box pt-6 md:pt-6 lg:pt-8 z-20'>
                  
                <Link href="#gamelist">
                  <a  className='max-w-[280px] mx-auto block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg'>BROWSE LOCATIONS</a>
                </Link>
                </div>
            </div>
            
         </div>
    {/* ============page baner end=============*/}
    {/* ============Location list=============*/}
    <div id="gamelist"  className='all-location-list-section buy-gift relative overflow-hidden px-4 md:px-6'> 
                <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
              <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
       <div className='max-w-7xl mx-auto md:px-4 py-16 md:py-28'>
        <div className='section-head relative z-20'>  
              <TitleSeparator title='CHOOSE YOUR LOCATION' color='golden-text' weight='font-bold'/>
              <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
                    <p className="text-gray-300 md:px-8">We can cater to a minimum of 2 players, and our facility can host private parties and corporate events for up to 75 players at a time. Our escape rooms and other games are perfect for all ages and skill levels, so everyone can have fun and be involved. So what are you waiting for? </p>
                </div>
        </div>
        <div id="gamelist" className='location-grid-box mx-auto'>
          <div className='loc-list-tab mx-auto mb-4 md:mb-6 lg:mb-8 '> 
              <div className='flex'> 
              <div className='all-list'>
                <button onClick={() =>
                                    setShowLoclist("ALL")} className=' min-w-[98px] md:min-w-[112px] bg-red-600 hover:bg-red-700 focus:bg-red-700 focus:border-red-700 py-3 px-2 md:py-3 md:px-2 text-sm md:text-base lg:text-lg text-white rounded-l border border-red-600'>ALL<span> ({
                                      countTotalLocation(props.states)
                                      })</span></button>
                </div>
              <div  id="loc-tab-list-box" className='loc-tab-list-box w-full overflow-x-auto'> 
                    <div  id="loc-tab-list" className='loc-tab-list flex space-x-[1px] '> 
                    {
                      props.states.map((state)=>{

                        return(
                          <button key={state.id} onClick={() =>{
                            setShowLoclist(state.state)
                            ScrollTab(state.id)}
                          } className='bg-[#1c1c1c] hover:text-gold hover:bg-[#111] focus:text-gold focus:bg-[#111] py-3 px-1 md:px-1 text-sm md:text-base lg:text-lg text-[#7b7b7b] min-w-[96px] md:min-w-[102px]'>{state.state}<span> ({state.cities.length})</span></button>
                        )
                      })
                    }
 
                    </div>
                
                </div>

              </div>
          </div> 
        <div className="grid gap-y-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          
               {
                
                props.states.map((state)=>{
                    
                  return(
                    state.cities.map((city)=>{
                      
                     
                      return(
                        (showLocList=="ALL" || showLocList==state.state) && 
                          <LocationListView key={state.id+city.id} city={city} state={state.state} />

                     )
                    })
                  )
                })
               }
               
             
        </div>

        </div>
        </div>
    </div>
    {/* ============Location list end=============*/}

    </div>
   <Footer locationlist={props.states} totallocations={countTotalLocation(props.states)}/>
    </>
   
)

}

export default Locations

export const getStaticProps=async ()=>{

  const pagedata= await getLocationsPageData();
  return {
    props: {
      states:pagedata.states,
      locationlist:pagedata.states,
      activitylist:pagedata.activitylistSlug,
      eventlistSlug:pagedata.eventlistSlug,
      
   
    },
   
    // - At most once every 10 seconds
   // revalidate: 30, // In seconds
  }



}

