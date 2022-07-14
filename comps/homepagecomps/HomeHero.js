import LocationBtn from "../util/LocationBtn";
const HomeHero=()=>{

    return(
        <div className='home-hero-holder px-4'> 
            <div className='max-w-7xl mx-auto py-20 lg:py-32 xl:py-40 relative'>
                 <p className='mt-20 md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center'>CHOOSE FROM 30 US LOCATIONS</p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os'>ESCAPE ROOMS AND FUN ACTIVITES</h1>
                 <p className='text-gray-100 max-w-2xl mx-auto text-center lg:text-lg'>#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend &amp; family today. </p>

                <div className="max-w-sm mx-auto mt-8 pb-8 ">

                        {/*============location search btn==========*/}
                        <LocationBtn borderbg='bg-red-500' borderbghover='bg-red-900' innerbg='bg-white' innerborder='border-white' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-black"/>
                         {/*============location search btn==========*/}


                </div>

                <div style={{
                    background:"#FFFBF3"
                         }} 
                    className="un-games  max-w-2xl mx-auto bottom--4 left-0 right-0 absolute bg-white p-2 md:py-4 md:px-4 lg:py-6  rounded">
                    <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                        <div className="text-center flex justify-center"> 
                        <div>  

                        <p className="golden-text text-xl md:text-4xl font-os font-bold">11</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg ">Unique Games</p>
                        </div>
                            

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-xl md:text-4xl font-os font-bold">98K+</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg">5-Star Reviews</p>

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-xl md:text-4xl font-os font-bold">90K+</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg">Players Escaped</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeHero;