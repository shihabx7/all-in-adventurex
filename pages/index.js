import Head from 'next/head'
import HomeHero from '../comps/homepagecomps/HomeHero'
import Howtobook from '../comps/homepagecomps/Howtobook'
import InpersonEscapeSlider from '../comps/homepagecomps/InpersonEscapeSlider'
import PlaningEventsSlider from '../comps/homepagecomps/PlaningEventsSlider'
import PysicalEscape from '../comps/homepagecomps/PysicalEscape'
import VirtualEscapeSlider from '../comps/homepagecomps/VirtualEscapeSlider'
import BuyGiftCard from '../comps/homepagecomps/BuyGiftCard'
import WhatIsEscape from '../comps/homepagecomps/WhatIsEscape'

export default function Home() {
  return (
    <div >
      <Head>
        <title>All in adventure</title>
        <meta name="description" content="All in one adventure escape games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <div className='home-hero'>
        <HomeHero></HomeHero>
        
       </div>
       <Howtobook></Howtobook>
       <InpersonEscapeSlider/>
       <VirtualEscapeSlider/>
       <PysicalEscape/>
       <PlaningEventsSlider/>
       <BuyGiftCard/>
       <WhatIsEscape/>
        
    
    </div>
  )
}
