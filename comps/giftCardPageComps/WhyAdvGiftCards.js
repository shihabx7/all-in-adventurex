import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"


const WhyAdvGiftCards=(props)=>{


    const showLocation=()=>{
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden')
        document.getElementById('giftmenu').classList.remove('hidden')
        
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
                         <p className="text-gray-700 md:px-8">This isn't your average gift card. Our gift card program offers you the chance to “share an experience” with friends/family/coworkers, etc. Gift recipients will enjoy choosing from many available experiences such as Escape Rooms, Game Show Room, Beat The Seat, and more! * </p>
                     </div>
                 </div>
                 <div className="content-container flex flex-col md:flex-row md:space-x-4 lg:space-x-8 space-y-2 md:space-y-0 justify-between">
                        <div className="gift-info md:w-1/2 order-2 md:order-1">
                              <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-2 lg:mb-4">THE GIFT OF ADVENTURE</h3>
                              <p className="lg:text-lg">
                              The AIA Gift Card programs allows your gift recipients the freedom to choose a unique experience at any of our 27 locations. Whether your purchase is for someone's birthday, anniversary, holiday, or “just because” - give them the gift of adventure!
                              </p>
                              <p className="md:text-lg font-bold lg:text-xl mt-4 lg:mt-8">Two More Reasons to Consider an AIA Gift Card:</p>
                              <div className="event-notice mt-4 md:mt-4 lg:mt-8"> 
                                             
                                             <div className="flex  lg:text-lg  mt-3 justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] lg:w-[96%] ">This is a unique, exhilarating gift experience EVERYONE can enjoy! </div>
                                             </div>
                                             <div className="flex  lg:text-lg mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] lg:w-[96%]">Chances are, you'll enjoy it too when your recipient (most likely) invites you to join in on the shared experience!</div>
                                             </div>    
                                 </div>
                                 <p className="lg:text-lg italic mt-4 lg:mt-8">* Experiences vary by location. Please ensure availability before purchase.
                              </p>
                        </div>
                        <div className="gift-poster md:w-1/2 order-1 md:order-2 ">
                            <img src="/assets/gift-card-w.jpg"></img>
                        </div>
                 </div>
                 <div className="why-gift-link mt-12 ">

                 {
                            props.bookingdata &&
                            <button onClick={()=>bookGame(props.bookingdata)} className="block w-[290px] lg:max-w-sm mx-auto py-3 px-12 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">BUY GIFT CARD</button>
                        }
                             
                        {
                            !props.bookingdata &&
                            <button onClick={()=>showLocation()} className="block w-[290px] lg:max-w-sm mx-auto py-3 px-16 rounded-full text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">BUY GIFT CARD</button>
                        }
                        {
                            props.locationslug &&
                                    <Link href={"/"+props.locationslug+"/activities"} hpassHref>
                                        <a className="ln block mx-auto bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 w-[290px] lg:max-w-sm text-center text-gray-800 hover:text-gray-100 rounded-full font-medium">VIEW ALL GAMES</a>
                                    </Link>
                        }
                        {
                            !props.locationslug &&
                                 <Link href="/activities" hpassHref>
                                    <a className="block mx-auto bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 w-[290px] lg:max-w-sm text-center text-gray-800 hover:text-gray-100 rounded-full font-medium">VIEW ALL GAMES</a>
                             </Link>
                        }
                                    
                </div>

            </div>

        </div>
    )

}

export default WhyAdvGiftCards