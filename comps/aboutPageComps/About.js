

const About=()=>{

    return(
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
        <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>

            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
                {/**===================who we are============================= */}
                <div className="abt-row flex flex-col md:flex-row justify-between items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                        <h2 className="golden-text text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">WHO WE ARE</h2>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-8">Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.</p>
                        <div className="abt-notice mt-4 md:mt-6 lg:mt-8"> 
                                             
                                             <div className="flex  lg:text-lg text-[#464646] mt-4 justify-between">
                                                <div className="mt-[6px] -[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-medium">Kids and children age 7+ can play when they're accompanied.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-medium">All our locations are wheelchair accessible.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-medium">Car parking facility available in our location at the mall.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-medium">Car parking facility available in our location at the mall.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-medium">Car parking facility available in our location at the mall.</div>
                                             </div>

                                             
                        </div>
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img src="/assets/abt-mission.jpg"></img>
                    </div>


                </div>
                   {/**===================who we are end============================= */}
                     {/**===================our mission============================= */}
                <div className="abt-row flex flex-col md:flex-row justify-between mt-16 md:mt-20 items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                        <h2 className="golden-text text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">OUR MISSION</h2>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-8">Welcome to the world of Treasure Island. 
                        Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your 
                        way out you will be able to explore the entire ship while the pirates are on the island for the rest
                         of the gold. Keep an eye out for the gold already aboard.</p>
                         <p className="text-gray-700 lg:text-lg mt-4">Welcome to the world of Treasure Island. 
                         Your adventure begins in a shadowy storage room aboard a weathered pirate ship. 
                         Once you find your way out you will be able to explore the entire ship while the 
                         pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.</p>
                       
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img src="/assets/abt-mission.jpg"></img>
                    </div>


                </div>
                   {/**===================our mission end============================= */}
            </div>


        </div>
    )
}

export default About