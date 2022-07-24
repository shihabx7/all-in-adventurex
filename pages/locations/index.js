import Head from 'next/head'
import styles from '../../styles/alllocations.module.css'
import TitleSeparator from "../../comps/util/TitleSeparator";
import LocationListView from  "../../comps/locationsPage/LocationListView";
import MapAuto from '../../comps/locationsPage/MapAuto';
const Locations=()=>{

return (
    <div id="mainContent" className='main-content'>
  
    <Head>
        <title>All in adventure Locations</title>
        <meta name="description" content="All in one adventure escape games" />
        
      </Head>
    {/* ============page baner=============*/}
      <div className={styles.alllocations+' relative overflow-hidden'}> 
      <div className={styles.alllocationscompas+" gift-rt absolute"}><img src="/assets/Compas-brown.png"></img></div>
            <div className='max-w-7xl mx-auto py-16 md:py-28 px-4 relative z-10'>
            <div className="page-benar-info"> 
                
                <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-gray-800 text-center'>CHOOSE FROM 30 US LOCATIONS</p> 
                <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os'>ESCAPE ROOMS AND FUN ACTIVITES</h1>
                <p className='text-gray-700 max-w-2xl mx-auto text-center lg:text-lg'>#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend &amp; family today. </p>
                </div>
                <div className='map-autocomplete-box pt-8 md:pt-12 lg:pt-16 z-20'>
                  

                </div>
            </div>
            
         </div>
    {/* ============page baner end=============*/}
    {/* ============Location list=============*/}
    <div className='all-location-list-section buy-gift relative overflow-hidden px-4 md:px-6'> 
                <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
              <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
       <div className='max-w-7xl mx-auto py-16 md:py-28'>
        <div className='section-head relative z-20'>  
              <TitleSeparator title='ALL IN ADVENTURE LOCATIONS' color='golden-text' weight='font-bold'/>
              <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
                    <p className="text-gray-300 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
        </div>
        <div className='location-grid-box '> 
        <div class="grid gap-y-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
             <LocationListView/>
             <LocationListView/>
             <LocationListView/>
             <LocationListView/>
             <LocationListView/>
             <LocationListView/>
        </div>

        </div>
        </div>
    </div>
    {/* ============Location list end=============*/}

    </div>
)

}

export default Locations