import Link from "next/link";
import LocationBtn from "../util/LocationBtn";
const LocationHomeHero=(props)=>{
    
    const bookAll=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         // flow:  bookingData.flow, 
          view: 'items'
        });
      }

      const bookGame=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         flow:  bookingData.flow, 
          view: {item:bookingData.item}
        });
      }
    

    return(
        <div className='home-hero relative' style={
            {
                background:"url('"+props.pagedata.coverimageL+"')"
            }
           }>
            <div className="max-w-[68px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[36px] lg:top-[60px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto">
             <img src="/assets/kids-and-familly-friendly-escape-rooms-allinadventures.png"></img>
             </div>
        <div className='home-hero-holder '> 
        <div className="homehero-img md:hidden">
                <img src={props.pagedata.coverimageM}></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pb-16 pt-16 md:pb-24 md:pt-[160px] lg:pb-28 lg:pt-[210px] relative z-10'>
                <div className="page-benar-info"> 
                
                 <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center uppercase'>AT {props.pagedata.locationaddress} IN {props.pagedata.locationcity} {props.pagedata.locationstate}</p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-8 font-os uppercase max-w-[800px] mx-auto'>ESCAPE ROOM AND FUN THINGS TO DO IN {props.pagedata.locationcity} {props.pagedata.locationstate}</h1>
                 <p className='text-gray-100 max-w-2xl mx-auto text-center lg:text-lg'>
                        At All In Adventures {props.pagedata.locationcity} (formerly Mystery Room {props.pagedata.locationcity}),
                         experience the #1 family and kids friendly escape rooms for all ages and skill levels.
                          We host the most exciting birthday parties, private events and team building activities in {props.pagedata.locationcity} <span className="uppercase">{props.pagedata.locationstate}</span>.

                 </p>
                 </div>
                <div className="max-w-md mx-auto mt-8 pb-8 ">

                        {/*============location search btn==========*/}
                        <div className="booking-btn">
                        {
                            props.pagedata.bookingall &&
                          
                           <a href={"/"+props.pagedata.slug+"/activities"} className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">VIEW ALL GAMES</a>
                        }
                         </div>
                         <div className="booking-btn mt-4">
                                
                         <a href={"/"+props.pagedata.slug+"/events"} className="block py-3 rounded-full text-center  text-white font-medium border-2 border-red-600  hover:bg-red-700 hover:border-red-700 text-lg">VIEW ALL EVENTS</a>
                               
                         </div>
                         {/*============location search btn==========*/}


                </div>

                <div style={{
                    background:"#FFFBF3"
                         }} 
                    className="un-games  max-w-2xl mx-auto bottom--4 left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
                    <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                        <div className="text-center flex justify-center"> 
                        <div>  

                        <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalUniqueGames }</p>
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
        </div>
    )
}

export default LocationHomeHero;