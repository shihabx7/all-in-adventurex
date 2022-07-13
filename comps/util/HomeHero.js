import LocationBtn from "./LocationBtn";
const HomeHero=()=>{

    return(
        <div className='home-hero-holder px-4'> 
            <div className='max-w-7xl mx-auto py-24 relative'>
                 <p className='font-medium text-2xl mb-2 text-white text-center'>CHOOSE FROM 30 US LOCATIONS</p> 
                 <h1 className='golden-text font-bold text-center text-5xl mb-8 font-os'>ALL ESCAPE ROOMS AND ACTIVITES</h1>
                 <p className='text-gray-100 max-w-2xl mx-auto text-center text-lg'>#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend &amp; family today. </p>

                <div className="max-w-sm mx-auto mt-8 pb-8 ">

                        {/*============location search btn==========*/}
                        <LocationBtn borderbg='bg-red-500' borderbghover='bg-red-900' innerbg='bg-white' innerborder='border-white' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-black"/>
                         {/*============location search btn==========*/}


                </div>

                <div className="un-games  max-w-2xl mx-auto bottom--4 left-0 right-0 absolute bg-white py-4 px-4 rounded">
                    <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                        <div className="text-center flex justify-center"> 
                        <div>  

                        <p className="golden-text text-4xl font-bold">11</p>
                            <p className="text-gray-700 font-lg ">Unique Games</p>
                        </div>
                            

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-4xl font-bold">98K+</p>
                            <p className="text-gray-700 font-lg ">5-Star Reviews</p>

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-4xl font-bold">90K+</p>
                            <p className="text-gray-700 font-lg ">Players Escaped</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeHero;