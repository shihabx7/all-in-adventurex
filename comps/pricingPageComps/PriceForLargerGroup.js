
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
                         <p className="text-gray-200 md:px-8">We love hosting large parties and corporate events. We have a full-time team dedicated to helping coordinate all of the details for you.</p>
                     </div>
                     {/* =================1st section================*/}
                     <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center mb-8 md:mb-16">
                        <div className="gift-poster md:w-1/2">
                            <img src="/assets/pricing-for-larger-group.png"></img>    
                         </div>
                         <div className="gift-info md:w-1/2">
                                <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4">PRICES FOR LARGER GROUP</h3>
                                <p className="text-gray-200 lg:text-lg mb:4">All In Adventures is famous for hosting the city's most memorable parties and events. We can accommodate large groups with our multiple room settings and are happy to customize an event to suit your needs.</p>
                                <div className="flex  lg:text-lg text-gray-300 mt-4">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">We understand this is your special day, so let us handle all of the little details while you immerse yourself in all of the fun.</span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">Reach our guest experience team by calling <a href="tel:844-502-5546 ex. 709" className="font-medium text-blue-600 hover:text-blue-700">844-502-5546 ex. 709</a> or by emailing <a href="mailto:sales@allinadventures.com" className="font-medium text-blue-600 hover:text-blue-700">sales@allinadventures.com</a></span>
                                </div>
                               
                                <div className="gift-btn-box mt-8">
                                        <a href="/events" className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">VIEW ALL EVENTS</a>
                                </div>
                         </div>
                     </div>
                       {/* =================1st section end================*/}
                         {/* =================2nd section================*/}
                         <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center">
                        
                         <div className="gift-info md:w-1/2 order-2 md:order-1">
                                <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4"> ADVENTURE GIFT FOR EVERY OCCASION</h3>
                                <p className="text-gray-200 lg:text-lg mb:4">Birthdays, holidays, surprises and everything in between - we've got your
                                 gift needs covered. Recipients can choose from all available in-person games when they redeem their escape
                                  room gift cards, and they can be used any time with any group. Our gift cards never expire!</p>
                                <div className="flex  lg:text-lg text-gray-300 mt-4">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">The one you care about gets a unique, exhilarating experience as a gift</span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">There is a big chance he or she will invite you to play along, so you will enjoy it too!</span>
                                </div>
                                
                                <div className="gift-btn-box mt-8">
                                    
                                
                                        <a href="/gift-cards" className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">BUY GIFT CARDS</a>
                                    
                                    

                                </div>
                         </div>
                         <div className="gift-poster md:w-1/2 order-1 md:order-2">
                            <img src="/assets/gift-poster.png"></img>    
                         </div>
                     </div>
                         {/* =================2nd section end================*/}
             </div>

        </div>
    )
}

export default PriceForLargerGroup