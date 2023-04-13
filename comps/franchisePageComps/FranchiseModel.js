import GameTitleSeparator from "../util/GameTitleSeparator"
import Link from "next/link"
import BusinessTab from "./BusinessTab"
const FranchiseModel=()=>{

    return(
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
        <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>

            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
                {/**===================who we are============================= */}
                <div className="abt-row flex flex-col md:flex-row justify-between items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                        <div className="section-title-sep mt-4 md:mt-0">
                            <p className="text-lg text-[#938056]">OVERVIEW</p>
                            <GameTitleSeparator title="ALL IN ADVENTURES FRANCHISE BUSINESS MODEL" color="dark-gold" weight="font-bold"/>    
                         </div>
                        <div className="fran-model mt-4 md:mt-6 lg:mt-8"> 
                                             
                                 <p className="text-gray-700 lg:text-lg mt-4 ">
                                 All In Adventures is distinguished from other entertainment zones in that we have the
                                  proven business model and processes in place that make us sustainable. We already have
                                   relationships with over 10 mall companies and aren't slowing down! Our games and experiences
                                    are changing every few months. This keeps the local consumer base coming back for new entertainment
                                     experiences.
                                </p>
                                <p className="text-gray-700 lg:text-lg mt-4 ">
                                As a franchise partner, you are stepping into the continued expansion of a brand that has all the right elements in place to be the best of the best! Gain insight from our leadership team as you build your business. You will see just how amazing All In Adventures will be as your business!
                                </p>
                                             
                        </div>
                        <div className="inline-block min-w-[280px] text-center bg-golden hover:bg-golden-alt  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full mt-4 md:mt-6 lg:mt-8"> 
                           <div className="bg-[#FEF6E9] hover:bg-golden-alt font-medium  rounded-full items-center py-2 px-6 md:py-3 md:px-8 text-[#424242] md:text-lg gont-medium">
                                     
                                         <a href="/franchise-contact " className="block"> INQUIRE NOW</a>
                                    
    
                            </div>
                         </div>
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img src="/assets/francise-1.jpg"></img>
                    </div>


                </div>
                   {/**===================who we are end============================= */}
                     {/**===================our mission============================= */}
                <div className="abt-row flex flex-col md:flex-row justify-between mt-16 md:mt-20 lg:mt-24 items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                        <div className="section-title-sep mt-4 md:mt-0">
                            <p className="text-lg text-[#938056]">OVERVIEW</p>
                            <GameTitleSeparator title="WHY BECOME AN ALL IN ADVENTURES FRANCHISE OWNER" color="golden-text" weight="font-bold"/>    
                         </div>
                         <div className="fran-model mt-4 md:mt-6 lg:mt-8"> 
                                             
                                             <p className="text-gray-700 lg:text-lg mt-4 ">
                                             Why is All In Adventures worth investing in? Because we understand what it takes to be successful within this emerging industry. Escape rooms, axe throwing, game show experiences, and 2-minute escape rooms are all streams for revenue while we keep the operation simple to run through. Our experiences cater to a truly family-focused environment. It is a perfect place for any type of event from just a night out to a party or celebration event to a corporate event.
                                            </p>
                                            <p className="text-gray-700 lg:text-lg mt-4 ">
                                            We offer exhaustive support and hands-on training. We will ensure that every franchisee is equipped with the proper industry knowledge, skills and expertise to operate the business successfully.
                                            </p>
                                           
                                                         
                            </div>
                            <div className="inline-block min-w-[280px] text-center bg-golden hover:bg-golden-alt  search-loc hover:cursor-pointer hover:shadow boder-p rounded-full mt-4 md:mt-6 lg:mt-8"> 
                           <div className="bg-[#FEF6E9] font-medium hover:bg-golden-alt  rounded-full items-center py-2 px-6 md:py-3 md:px-8 text-[#424242] md:text-lg gont-medium">
                                     
                                         <a href="/franchise-contact" className="block"> INQUIRE NOW</a>
                                    
    
                            </div>
                         </div>
                       
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img src="/assets/francise-2.jpg"></img>
                    </div>


                </div>
                   {/**===================our mission end============================= */}
                   {/* =======================5 step=============== */}
                        <BusinessTab/>
                   {/* =======================5 step=============== */}
            </div>


        </div>
    )

}

export default FranchiseModel