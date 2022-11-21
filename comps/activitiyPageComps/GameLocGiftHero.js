import Link from "next/link";
import LocationBtn from "../util/LocationBtn";
import Script from "next/script";

const GameLocGiftHero=(props)=>{
    
   

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
        <> <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
        <div className='home-hero' style={
            {
                background:"url('"+props.pagedata.coverimageL+"')"
            }
           }>
        <div className='home-hero-holder '> 
        <div className="homehero-img md:hidden">
                  <img src={props.pagedata.coverimageM}></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-10'>
                <div className="page-benar-info"> 
                {
                        props.pagedata.publish_status==false &&
                        <div className="text-center font-bold text-red-600 text-[32px] md:text-[52px] font-os cm-title py-4"><img className="max-w-[400px] mx-auto" src="/assets/svg/coming-soon.svg"></img></div>
                      }
                          
                 <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center uppercase'>At {props.pagedata.mall} in {props.pagedata.location_name}</p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase'>{
                 
                        props.pagedata.pagetitle 
                 
                 } </h1>
                 <p className='text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg'>{props.pagedata.pagesubtitle } </p>
                 </div>
                <div className="max-w-md mx-auto mt-8 ">

                        {/*============location search btn==========*/}
                        
                        {
                            (props.pagedata.bookingdata && props.pagedata.publish_status==true) &&
                            <button onClick={()=>bookGame(props.pagedata.bookingdata)} className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">BUY GIFT CARDS NOW</button>
                        }
                        {
                            (props.pagedata.bookingdata && props.pagedata.publish_status==false) &&
                            <button className="block w-full py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">COMMING SOON</button>
                        }
                        
                       
                       
                        
                        {/*============location book btn==========*/}

                </div>
               
                
              
            </div>
        </div>
        </div>
        </>
    )
}

export default GameLocGiftHero;