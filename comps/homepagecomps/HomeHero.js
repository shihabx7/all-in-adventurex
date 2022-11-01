import LocationBtn from "../util/LocationBtn";
const HomeHero=(props)=>{

    return(
        
        <div className='home-hero-holder relative'> 
            <div className="homehero-img md:hidden ">
                <img src="/assets/home-hero.jpg"></img>
             </div>
             <div className="max-w-[84px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[36px] lg:top-[60px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto">
             <img src="/assets/kids-and-familly-friendly-escape-rooms-allinadventures.png"></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pb-16 pt-16 md:pb-24 md:pt-[160px] lg:pb-28 lg:pt-[210px] relative z-10'>
                <div className="page-benar-info"> 
                
                 <p className=' md:mt-4 lg:mt-6 xl:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center'>CHOOSE FROM {props.pagedata.totalLocations} U.S. LOCATIONS</p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os outline-tile'>ESCAPE ROOMS AND ADVENTURE ACTIVITIES
                    </h1>
                 <p className='text-gray-100 max-w-2xl mx-auto text-center lg:text-lg'>{props.pagedata.subtitle}</p>
                 </div>
                <div className="max-w-md mx-auto mt-8 pb-8 ">

                        {/*============location search btn==========*/}
                        <LocationBtn borderbg='bg-red-600' borderbghover='bg-red-900' innerbg='bg-white' innerborder='border-white' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-black"/>
                         {/*============location search btn==========*/}


                </div>

                <div style={{
                    background:"#FFFBF3"
                         }} 
                    className="un-games  max-w-2xl mx-auto bottom--4 left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
                    <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                        <div className="text-center flex justify-center"> 
                        <div>  

                        <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalUniqueGames}</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg ">Unique Games</p>
                        </div>
                            

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalFiveStarReview}</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg">5-Star Reviews</p>

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalPlayerEscaped}</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg">Players Escaped</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeHero;