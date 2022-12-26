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
    const getOtherActivity=(actArr)=>{
        console.log(actArr)
        var i
        var tempArr=[]
       var ret=""
        for(i=0;i<actArr.length;i++){
            if(actArr[i].category=="other"){
                 tempArr.push(actArr[i].activity_name)   
            }
        }
        console.log(tempArr)
        if(tempArr.length>0){
            tempArr[tempArr.length-1]="and "+tempArr[tempArr.length-1]
            if(tempArr.length>2){
                ret=", "+tempArr.join(",")
            }
        else if(tempArr.length==2){
            ret=", "+tempArr.join(" ")
        }
        else{
            ret=" "+tempArr.join(" ")
        }
            
        }

        return ret
       
    }

    return(
        <div className='home-hero relative' style={
            {
                background:"url('"+props.pagedata.coverimageL+"')"
            }
           }>
            <div className="max-w-[84px] md:max-w-[120px] lg:max-w-[144px] absolute top-[4px] md:top-[36px] lg:top-[60px] left-0 right-[4px] md:right-0 ml-auto md:mx-auto">
             <img src="/assets/kids-and-familly-friendly-escape-rooms-allinadventures.png"></img>
             </div>
        <div className='home-hero-holder '> 
        <div className="homehero-img md:hidden w-full min-h-[220px] bg-[#111111]">
                <img src={props.pagedata.coverimageM}></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pb-16 pt-0 md:pb-24 md:pt-[160px] lg:pb-28 lg:pt-[210px] relative z-10'>
                <div className="page-benar-info"> 
                    {
                        !props.pagedata.publish_status &&
                            <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4"><img className="max-w-[400px] mx-auto" src="/assets/svg/coming-soon.svg"></img></div>
                    }
                 <p className=' md:mt-0 font-semibold text-lg md:text-2xl  mb-2 text-white text-center uppercase '>AT {props.pagedata.locationaddress} IN {props.pagedata.locationcity}, {props.pagedata.locationstate}</p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8 font-os uppercase max-w-[1000px] mx-auto'>ESCAPE ROOMS AND FUN THINGS TO DO IN {props.pagedata.locationcity}, {props.pagedata.locationstate}</h1>
                 <div className='text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg' dangerouslySetInnerHTML={{ __html: props.pagedata.pagesubtitle }}>
                     

                 </div>
                 </div>
                <div className="max-w-md mx-auto mt-8 pb-8 ">

                        {/*============location search btn==========*/}
                        <div className="booking-btn">
                        
                          
                           <a href={"/"+props.pagedata.slug+"/activities"} className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">VIEW ALL GAMES</a>
                        
                        
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