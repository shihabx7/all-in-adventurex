
import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";
const PriceForLargerGroup=()=>{

    return(
        <div className="price-for-larger-grop md:mt-0 py-16 md:py-20 lg:py-28 relative overflow-hidden" style={{backgroundImage:"url('/assets/svg/gift-bg.svg'),linear-gradient(65deg,rgba(0, 0, 0,1),rgba(0, 0, 0,1))"}}>
            <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
            <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
            <div className="max-w-7xl mx-auto px-4 z-30">
                    <TitleSeparator title='PRICES FOR LARGER GROUP' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-200 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                     </div>
                     {/* =================1st section================*/}
                     <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center mb-8 md:mb-16">
                        <div className="gift-poster md:w-1/2">
                            <img src="/assets/pricing-for-larger-group.png"></img>    
                         </div>
                         <div className="gift-info md:w-1/2">
                                <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4">PRICES FOR LARGER GROUP</h3>
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
                                    
                                       
                                    
                                    <Link href="/corporate-contact">
                                        <a className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">CONTACT US</a>
                                    </Link>
                                    <Link href="/events">
                                        <a className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[300px]  md:w-[320px] text-center text-gray-100 rounded-full">VIEW ALL EVENTS</a>
                                    </Link>

                                </div>
                         </div>
                     </div>
                       {/* =================1st section end================*/}
                         {/* =================2nd section================*/}
                         <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center">
                        
                         <div className="gift-info md:w-1/2 order-2 md:order-1">
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
                                    
                                <Link href="/corporate-contact">
                                        <a className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">CONTACT US</a>
                                    </Link>
                                    <Link href="/events">
                                        <a className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block w-[300px]  md:w-[320px] text-center text-gray-100 rounded-full">VIEW ALL EVENTS</a>
                                    </Link>

                                </div>
                         </div>
                         <div className="gift-poster md:w-1/2 order-1 md:order-2">
                            <img src="/assets/pricing-for-larger-group.png"></img>    
                         </div>
                     </div>
                         {/* =================2nd section end================*/}
             </div>

        </div>
    )
}

export default PriceForLargerGroup