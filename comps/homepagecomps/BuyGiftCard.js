import Link from "next/link";
import TitleSeparator from "../util/TitleSeparator";
const BuyGiftCard=(props)=>{
    const showLocation=()=>{

        document.getElementById('locmenu').classList.remove('hidden')
        
      }
      const bkdata=()=>{
        
        if(props.bookingData){
            return props.bookingData['gift-card']
        }
      }
      
      const openBooking=(shortname,booking)=>{
        FH.open({
          shortname: shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
          flow: booking.flow, 
          view: { item: booking.item }
        });
      }

    return(

        <div className="buy-gift py-20 md:py-28  relative overflow-hidden" style={
            {
                backgroundImage :  "url('/assets/svg/gift-bg.svg'),linear-gradient(65deg,rgba(0, 0, 0,1),rgba(0, 0, 0,1))",
            }}> 
            <div className="gift-lt absolute top-0 left-0"> 
                <img src="/assets/gift-balon-bg.png"></img>
            </div>
            <div className="gift-rt absolute"> 
                <img src="/assets/Compas-brown.png"></img>
            </div>
            <div className="max-w-7xl mx-auto px-4 z-30">
                    <TitleSeparator title='GIFT CARD' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-200 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                     </div>
                     <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center">
                        <div className="gift-poster md:w-1/2">
                            <img src="/assets/gift-poster.png"></img>    
                         </div>
                         <div className="gift-info md:w-1/2">
                                <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4"> ADVENTURE GIFT FOR EVERY OCCASION</h3>
                                <p className="text-gray-200 lg:text-lg mb:4">Once you complete your purchase you will be sent an email with the booking codes. 
                                When making your booking you can give the codes to the booking agent.</p>
                                <div className="flex  lg:text-lg text-gray-300 mt-4">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">Kids and children age 7+ can play when they're accompanied by a guardian age 18+</span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">All our locations are wheelchair accessible.</span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">Car parking facility available in our location at the mall.</span>
                                </div>
                                <div className="gift-btn-box mt-8">
                                    { 
                                        props.bookingData &&
                                        <button onClick={()=>openBooking(props.bookingData.shortname,bkdata())} className="bg-red-600  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full">BUY GIFT CARD</button>
                                    }
                                    { 
                                       !props.bookingData &&
                                        <button onClick={()=>showLocation()} className=" bg-red-600 hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full">BUY GIFT CARD</button>
                                    }
                                    {
                                        props.locationslug &&
                                        <Link href={"/"+props.locationslug+"/gift-cards"}>
                                              <a className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full">LEARN MORE</a>
                                         </Link>
                                    }
                                    {
                                        !props.locationslug &&
                                        <Link href="/gift-cards">
                                              <a className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[280px] md:w-[300px] lg:w-[340px] text-center text-gray-100 rounded-full">LEARN MORE</a>
                                        </Link>
                                    }
                                    

                                </div>
                         </div>
                     </div>
             </div>

        </div>
    )

}

export default BuyGiftCard;