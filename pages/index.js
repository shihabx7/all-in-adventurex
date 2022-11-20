import Head from 'next/head'
import HomeHero from '../comps/homepagecomps/HomeHero'
import Howtobook from '../comps/homepagecomps/Howtobook'
import InpersonEscapeSlider from '../comps/homepagecomps/InpersonEscapeSlider'
import PlaningEventsSlider from '../comps/homepagecomps/PlaningEventsSlider'
import PysicalEscape from '../comps/homepagecomps/PysicalEscape'
import VirtualEscapeSlider from '../comps/homepagecomps/VirtualEscapeSlider'
import BuyGiftCard from '../comps/homepagecomps/BuyGiftCard'
import WhatIsEscape from '../comps/homepagecomps/WhatIsEscape'
import WhoCanplay from '../comps/homepagecomps/WhoCanPlay'
import HomeReviewSlider from '../comps/homepagecomps/HomeReviewSlider'
import Homenav from '../comps/Homenav'
import Footer from '../comps/Footer'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import {Homepagedata} from './api/homepagedata' 


export default function Home({mainprops,pagedata,inpersongames,othergames,virtualgames,events,reviews,locationlist,activitylistSlug,eventlistSlug,virtualgameListSlug}) {
 
 
 
  return (
    <> 
    <Homenav 
    locationlist={locationlist}
    activitylist={activitylistSlug}
    eventlist={eventlistSlug}
    />
   
    <div id="mainContent" className='main-content' >
      <Head>
        <title>All In Adventures</title>
        <meta name="description" content="All In Adventures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <div className='home-hero' style={
        {
          backgroundImage : "url('/assets/allinadventures-escape-room-home-hero.jpg')",
        }
       }>
        <div> {
            
             //console.log(mainprops)
          }
          {
            //console.log(reviews)
          }</div>
        <HomeHero pagedata={pagedata}></HomeHero>
        
       </div>
       <Howtobook></Howtobook>
       <InpersonEscapeSlider inpersongames={inpersongames}/>
       <PysicalEscape othergames={othergames}/>
       <VirtualEscapeSlider virtualgames={virtualgames}/>
       <PlaningEventsSlider events={events}/>
       <BuyGiftCard/>
       <WhatIsEscape/>
       <WhoCanplay/>
       <HomeReviewSlider reviews={reviews}/>
        
    
    </div>
    
    <Footer locationlist={locationlist} totallocations={pagedata.totalLocations} />
    
    </>
  )
}

export const getStaticProps=async ()=>{

  const pagedata= await Homepagedata();
  return {
    props: {
      mainprops:pagedata,
      pagedata:pagedata.homeagedata,
      inpersongames:pagedata.inpersongames,
      othergames:pagedata.otherphysicalgames,
      virtualgames:pagedata.virtualgames,
      events:pagedata.events,
      reviews:pagedata.homereviews,
      locationlist:pagedata.locationlist,
      eventlistSlug:pagedata.eventlistSlug,
      activitylistSlug:pagedata.activitylistSlug
    },
   
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }



}