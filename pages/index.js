import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>All in adventure</title>
        <meta name="description" content="All in one adventure escape games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <div className='home-hero'> 
            <div className='max-w-7xl mx-auto py-16'>
              <p className='font-medium text-2xl mb-2 text-white text-center'>CHOOSE FROM 30 US LOCATIONS</p> 
              <h1 className='golden-text font-bold text-center text-5xl mb-8 font-os'>ESCAPE ROOMS AND FUN ACTIVITES</h1>
              <p className='text-gray-400 max-w-xl mx-auto text-center'>#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend &amp; family today. </p>
            </div>

        </div>
        
    
    </div>
  )
}
