import TitleSeparator from "../util/TitleSeparator";
import Link from "next/link";
const WhoCanplay =()=>{

    return(

        <div className="buy-gift py-20 md:py-28  relative overflow-hidden"> 
            <div className="gift-lt absolute top-0 left-0"> 
                <img src="/assets/gift-balon-bg.png"></img>
            </div>
            <div className="gift-rt absolute"> 
                <img src="/assets/Compas-brown.png"></img>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-50">
                    <TitleSeparator title='WHO CAN PLAY AN ESCAPE ROOM' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
                         <p className="text-gray-200 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                     </div>
                     <div className="wcp-row">
                        <div className="wcp-list-container mb-4 md:mb-8 lg:mb-12 py-6 md:py-8 px-6 lg:py-12 lg:px-10 bg-[#080808] rounded">
                            <div className="flex flex-col md:flex-row justify-between md:space-x-2 ">
                                <div className="wcp-list-box w-full md:w-[47%] lg:w-[42%]"> 
                                        <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/fn-icon.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl">KIDS AND CHILDREN </p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/parental-control.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">FAMILY AND FRIENDS </p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-6 md:mb-0">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/team-icon.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">TEAM AND CO-WORKERS </p>
                                            </div>
                                        </div>
                                </div>
                                <div className="wcp-list-box w-full md:w-[47%] lg:w-[42%]"> 
                                         <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/fn-icon.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">KIDS AND CHILDREN </p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden ">
                                                <img src="/assets/svg/parental-control.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">FAMILY AND FRIENDS </p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-0">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/team-icon.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">TEAM AND CO-WORKERS </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                              
                        </div>
                         <div className="wcp-info px-4">
                               
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
                               
                         </div>
                     </div>
             </div>

        </div>
    )


}

export default WhoCanplay;