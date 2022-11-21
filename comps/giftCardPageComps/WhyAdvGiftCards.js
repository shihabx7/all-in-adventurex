import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"


const WhyAdvGiftCards=(props)=>{


    const showLocation=()=>{

        document.getElementById('locmenu').classList.remove('hidden')
        
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
        <div className="why-adv-gift py-16 md:py-20 lg:py-28 px-4 bg-cover bg-center" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
            <div className="section-container max-w-7xl mx-auto relative z-30">
                <div className="section-title">
                  <TitleSeparator title='WHY ALL IN ADVENTURES GIFT CARDS' color='golden-text' weight='font-bold'/>
                    <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-700 md:px-8">What makes a better gift than material items? The answer is any of our many available experiences, including Escape Rooms, Game Show Room, Beat The Seat, and more!* </p>
                     </div>
                 </div>
                 <div className="content-container flex flex-col md:flex-row md:space-x-4 lg:space-x-8 space-y-2 md:space-y-0 justify-between">
                        <div className="gift-info md:w-1/2 order-2 md:order-1">
                              <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-2 lg:mb-4">THERE IS A SCIENCE TO GIFT GIVING</h3>
                              <p className="lg:text-lg">Give your loved ones an unforgettable adventure and let them enjoy a unique experience at any one of our 26 U.S. locations. Whether it is someone's Birthday, Anniversary, Holiday, Christmas, Date Night - give them the gift of adventure.
                              </p>
                              <p className="md:text-lg font-bold lg:text-xl mt-4 lg:mt-8">The All In Adventures Gift Card is a great gift for two reasons:</p>
                              <div className="event-notice mt-4 md:mt-4 lg:mt-8"> 
                                             
                                             <div className="flex  lg:text-lg  mt-3 justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] lg:w-[96%] ">The one you care about gets a unique, exhilarating experience as a gift.</div>
                                             </div>
                                             <div className="flex  lg:text-lg mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] lg:w-[96%]">There is a good chance they will invite you along to play</div>
                                             </div>    
                                 </div>
                                 <p className="lg:text-lg italic mt-4 lg:mt-8">Experiences vary by location. Please ensure availability before purchase.
                              </p>
                        </div>
                        <div className="gift-poster md:w-1/2 order-1 md:order-2 ">
                            <img src="/assets/gift-card-w.jpg"></img>
                        </div>
                 </div>
                 <div className="why-gift-link mt-12 ">

                 {
                            props.bookingdata &&
                            <button onClick={()=>bookGame(props.bookingdata)} className="block w-[380px] mx-auto py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">BUY GIFT CARD</button>
                        }
                             
                        {
                            !props.bookingdata &&
                            <button onClick={()=>showLocation()} className="block w-[380px] mx-auto py-3 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">BUY GIFT CARD</button>
                        }
                        {
                            props.locationslug &&
                                    <Link href={"/"+props.locationslug+"/activities"} hpassHref>
                                        <a className="ln block mx-auto bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 max-w-[360px] lg:max-w-sm text-center text-gray-800 hover:text-gray-100 rounded-full font-medium">VIEW ALL GAMES</a>
                                    </Link>
                        }
                        {
                            !props.locationslug &&
                                 <Link href="/activities" hpassHref>
                                    <a className="block mx-auto bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 max-w-[360px] lg:max-w-sm text-center text-gray-800 hover:text-gray-100 rounded-full font-medium">VIEW ALL GAMES</a>
                             </Link>
                        }
                                    
                </div>

            </div>

        </div>
    )

}

export default WhyAdvGiftCards