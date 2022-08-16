
import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";
const BuyGiftCards=()=>{
    const showLocation=()=>{

        document.getElementById('locmenu').classList.remove('hidden')
        
      }

    return(
        <div className="buy-gift -mt-12 md:mt-0 py-16 md:py-20 lg:py-28 relative overflow-hidden" style={{backgroundImage:"url('/assets/svg/gift-bg.svg'),linear-gradient(65deg,rgba(0, 0, 0,1),rgba(0, 0, 0,1))"}}>
            <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
            <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
            <div className="max-w-7xl mx-auto px-4 z-30">
                    <TitleSeparator title='BUY GIFT CARDS' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-200 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                     </div>
                     {/* =================1st section================*/}
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
                                    
                                        <button onClick={showLocation} className="bg-red-600 card-book-btn max-w-sm  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">BUY GIFT CARD</button>
                                    
                                    <Link href="/activities" hpassHref>
                                        <a className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">VIEW ALL GAMES</a>
                                    </Link>

                                </div>
                         </div>
                     </div>
                       {/* =================1st section end================*/}
                         {/* =================2nd section================*/}
                        <div className="gift-card-option pt-16 md:pt-20">
                                <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center ">
                                    <div className="gift-option order-2 md:order-1 md:w-1/2">
                                        <div className="gift-option-box mb-8 lg:mb-12">
                                             <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4 uppercase">
                                                OPTION 1 (TRADITIONAL)
                                             </h3>
                                             <p className="text-[#BEBEBE] lg:text-lg">
                                             Once you complete your purchase you will be sent an email with the booking codes. 
                                             When making your booking you can give the codes to the booking agent. 
                                             If you are giving them as a gift, you can print and mail them or simply forward the email to the recipient.
                                             </p>
                                        </div>
                                        <div className="gift-option-box mb-8 lg:mb-12">
                                             <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4 uppercase">
                                                OPTION 2 (TRADITIONAL)
                                             </h3>
                                             <p className="text-[#BEBEBE] lg:text-lg">
                                             Once you complete your purchase you will be sent an email with the booking codes. 
                                             When making your booking you can give the codes to the booking agent. 
                                             If you are giving them as a gift, you can print and mail them or simply forward the email to the recipient.
                                             </p>
                                        </div>
                                        <div className="gift-option-link flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between">
                                             <div> 
                                                <Link href="#">
                                                    <a className="flex items-center space-x-1 text-red-600 hover:text-red-700 lg:text-lg"><span>How to buy gift cards</span><span><FiChevronRight/></span></a>
                                                </Link>
                                             </div>
                                             <div> 
                                                <Link href="#">
                                                    <a className="flex space-x-1  items-center text-red-600 hover:text-red-700 lg:text-lg"><span>How to redeem gift cards</span><span><FiChevronRight/></span></a>
                                                </Link>
                                             </div>
                                        </div>
                                    </div>
                                    <div className="gift-option-poster order-1 md:order-2 md:w-1/2 text-end">
                                        <img  src="/assets/gift-option-poster.jpg"></img>
                                    </div>

                                </div>

                        </div>
                         {/* =================2nd section end================*/}
             </div>

        </div>
    )
}

export default BuyGiftCards