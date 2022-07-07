import Head from 'next/head'
import Image from 'next/image'

import HomeHero from '../comps/util/HomeHero'

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
        
    
    </div>
  )
}
