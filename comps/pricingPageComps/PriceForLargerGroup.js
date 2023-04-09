
import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";
const PriceForLargerGroup=()=>{

    return(
        <div className="price-for-larger-grop bg-black md:mt-0 py-16 md:py-20 lg:py-28 relative overflow-hidden">
            <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
            <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
            <div className="max-w-7xl mx-auto px-4 z-30">
                    <TitleSeparator title='PRICING FOR LARGER GROUP' color='golden-text' weight='font-bold'/>
                    <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-200 md:px-8">We love hosting large parties and corporate events. We have a full-time dedicated team to co-ordinate all of the details for your next event.</p>
                     </div>
                     {/* =================1st section================*/}
                     <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center mb-8 md:mb-16">
                        <div className="gift-poster md:w-1/2">
                            <img src="/assets/pricing-for-larger-group.png"></img>    
                         </div>
                         <div className="gift-info md:w-1/2">
                                <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4">WE HOST LARGE EVENTS</h3>
                                <p className="text-gray-200 lg:text-lg mb:4">All In Adventures is famous for hosting the city's most memorable parties and events. We can accommodate large groups with our multiple room settings and are happy to customize an event to suit your needs.</p>
                                <div className="flex  lg:text-lg text-gray-300 mt-4">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">We understand this is your special day, so let us handle all of the little details while you immerse yourself in all of the fun.</span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">Reach our guest experience team by calling <a href="tel:844-502-5546 ex. 709" className="font-medium text-red-600 hover:text-red-700">844-502-5546 ex. 709</a> or by emailing <a href="mailto:sales@allinadventures.com" className="font-medium text-red-600 hover:text-red-700">sales@allinadventures.com</a></span>
                                </div>
                               
                                <div className="gift-btn-box mt-8">
                                        <a href="/events" className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full font-medium">VIEW ALL EVENTS</a>
                                </div>
                         </div>
                     </div>
                       {/* =================1st section end================*/}
                         {/* =================2nd section================*/}
                         <div className="gift-row flex flex-col md:flex-row justify-center md:space-x-4 lg:space-x-8 items-center">
                        
                         <div className="gift-info md:w-1/2 order-2 md:order-1">
                                <h3 className="golden-text font-semibold mt-8 md:mt-0 text-xl lg:text-2xl mb-4">THE GIFT OF ADVENTURE</h3>
                                <p className="text-gray-200 lg:text-lg mb:4">The AIA Gift Card programs allows your gift recipients the freedom to choose a unique experience at any of our 27 locations. Whether your purchase is for someone's birthday, anniversary, holiday, or “just because” - give them the gift of adventure!</p>
                                <p className="text-gray-300 md:text-lg font-bold lg:text-xl mt-4 lg:mt-8">Two More Reasons to Consider an AIA Gift Card:</p>
                                <div className="flex  lg:text-lg text-gray-300 mt-4">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">This is a unique, exhilarating gift experience EVERYONE can enjoy! </span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">Chances are, you'll enjoy it too when your recipient (most likely) invites you to join in on the shared experience!</span>
                                </div>
                                <p className=" text-gray-300 lg:text-lg italic mt-4 lg:mt-8">* Experiences vary by location. Please ensure availability before purchase.</p>
                                <div className="gift-btn-box mt-8">
                                    
                                
                                        <a href="/gift-cards" className="bg-red-600 card-book-btnx  w-[300px] md:w-[320px] hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full font-medium">BUY GIFT CARDS</a>
                                    
                                    

                                </div>
                         </div>
                         <div className="gift-poster md:w-1/2 order-1 md:order-2">
                            <img src="/assets/allinadventures-gift-cards-section.png"></img>    
                         </div>
                     </div>
                         {/* =================2nd section end================*/}
             </div>

        </div>
    )
}

export default PriceForLargerGroup