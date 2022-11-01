import TitleSeparator from "../util/TitleSeparator";
import Link from "next/link";
const WhoCanplay =()=>{

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
            <div className="max-w-7xl mx-auto px-4 relative z-40">
                    <TitleSeparator title='WHO CAN PLAY AN ESCAPE ROOM' color='golden-text' weight='font-bold'/>
                    <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
                         <p className="text-gray-200 md:px-8">Escape rooms are perfect for having interactive adventures and fun with your friends, family, kids or even a team building exercise with your co-workers</p>
                     </div>
                     <div className="wcp-row">
                        <div className="wcp-list-container mb-4 md:mb-8 lg:mb-12 py-6 md:py-8 px-6 lg:py-12 lg:px-10 bg-[#080808] rounded">
                            <div className="flex flex-col md:flex-row justify-between md:space-x-2 ">
                                <div className="wcp-list-box w-full md:w-[47%] lg:w-[42%]"> 
                                        <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/escape-games-for-kids-and-children.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl">KIDS AND CHILDREN</p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/escape-games-for-friend-and-family.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">FAMILY AND FRIENDS</p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-6 md:mb-0">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/escape-games-for-team.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">TEAM AND CO-WORKERS </p>
                                            </div>
                                        </div>
                                </div>
                                <div className="wcp-list-box w-full md:w-[47%] lg:w-[42%]"> 
                                         <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/escape-games-for-dventurers.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">ADVENTURERS</p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden ">
                                                <img src="/assets/svg/escape-games-for-event-parties.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">EVENT PARTICIPANTS</p>
                                            </div>
                                        </div>
                                        <div className="wcp-list flex items-center mb-0">
                                            <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                                                <img src="/assets/svg/escape-games-for-tourist.svg"></img>
                                            </div>
                                            <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full"> 
                                                 <p className="golden-text text-xl ">TOURISTS AND TRAVELERS</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                              
                        </div>
                         <div className="wcp-info px-4">
                               
                                <p className="text-gray-200 lg:text-lg mb:4">For your health and safety, all bookings will be private room bookings regardless of your group size!</p>
                                <div className="flex  lg:text-lg text-gray-300 mt-4">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">All our escape rooms are great for first-time Escape Roomers and are the most kids friendly escape rooms.</span>
                                </div>
                                <div className="flex  lg:text-lg text-gray-300 mt-3">
                                    <span className="block mt-1 w-6 md:w-8"><img src="/assets/svg/star-bullet.svg"></img></span>
                                    <span className="block w-[90%]">At All In Adventures, we can cater to over 75+ people at a time in most locations for holiday parties, team building, birthday parties, summer camps, school educational outings or other large events.</span>
                                </div>
                                
                               
                         </div>
                     </div>
             </div>

        </div>
    )


}

export default WhoCanplay;