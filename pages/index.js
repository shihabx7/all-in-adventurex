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

export default function Home() {
  return (
    <div id="mainContent" className='main-content'>
      <Head>
        <title>All in adventure</title>
        <meta name="description" content="All in one adventure escape games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <div className='home-hero' style={
        {
          backgroundImage : "url('/assets/home-benar-bg.jpg')",
        }
       }>
        <HomeHero></HomeHero>
        
       </div>
       <Howtobook></Howtobook>
       <InpersonEscapeSlider/>
       <PysicalEscape/>
       <VirtualEscapeSlider/>
       <PlaningEventsSlider/>
       <BuyGiftCard/>
       <WhatIsEscape/>
       <WhoCanplay/>
       <HomeReviewSlider/>
        
    
    </div>
  )
}
