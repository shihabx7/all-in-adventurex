import Link from "next/link";
import TitleSeparator from "../util/TitleSeparator";
const BuyGiftCard=()=>{

    return(

        <div className="buy-gift py-20 md:py-28  relative overflow-hidden"> 
            <div className="gift-lt absolute top-0 left-0"> 
                <img src="/assets/gift-balon-bg.png"></img>
            </div>
            <div className="gift-rt absolute"> 
                <img src="/assets/Compas-brown.png"></img>
            </div>
            <div className="max-w-7xl mx-auto px-4 z-50">
                    <TitleSeparator title='GIFT CARD' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-16">
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
                                <p className="flex items-start space-x-2 lg:text-lg text-gray-300 mt-4">
                                    <span className="mt-2"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span>Kids and children age 7+ can play when they're accompanied by a guardian age 18+</span>
                                </p>
                                <p className="flex items-start space-x-2 lg:text-lg text-gray-300 mt-3">
                                    <span className="mt-2"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span>All our locations are wheelchair accessible.</span>
                                </p>
                                <p className="flex items-start space-x-2 lg:text-lg text-gray-300 mt-3">
                                    <span className="mt-2"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span>Car parking facility available in our location at the mall.</span>
                                </p>
                                <div className="gift-btn-box mt-8">
                                    <Link href="#">
                                        <a className="bg-red-600 card-book-btn  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">BUY GIFT CARD</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="bg-transparent mt-4  hover:bg-red-700 hover:border-red-700 border-2 border-red-600 py-3 px-12 block max-w-sm text-center text-gray-100 rounded-full">LEARN MORE</a>
                                    </Link>

                                </div>
                         </div>
                     </div>
             </div>

        </div>
    )

}

export default BuyGiftCard;