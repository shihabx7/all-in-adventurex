const EarningPoints=()=>{

    return(
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
     
                <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
                    <div className="abt-row flex flex-col md:flex-row justify-between ">
                        <div className="abt-col md:w-[48%] lg:w-[48%] ">

                            <div className="abt-notice-list">
                                <h2 className="golden-text text-3xl lg:text-4xl font-os font-bold ">EARNING POINTS</h2>
                                <div className="earning-pts-box mt-4 lg:mt-8">
                                     <h3 className="font-medium text-[#464646] text-lg lg:text-xl">Based on the experience played, you can earn:</h3> 
                                     <ul className="star-list pl-4 text-[#464646] mt-4">
                                             <li className="lg:text-lg my-2 md:my-3 ">25 Points for Beat the Seat</li>
                                             <li className="lg:text-lg my-2 md:my-3 ">50 Points for Escape Room and Axe Throwing</li>
                                             
                                             <li className="lg:text-lg my-2 md:my-3 ">75 Points for Game Show Room</li>

                                     </ul>
                                </div>
                                <div className="earning-pts-box mt-4 lg:mt-6">
                                     <h3 className="font-medium text-[#464646] text-lg lg:text-xl">Earn bonus points when you achieve the following:</h3> 
                                     <ul className="star-list pl-4 text-[#464646] mt-4">
                                             <li className="lg:text-lg my-2 md:my-3 ">100 bonus points for beating the quarterly Local Wall of Fame record</li>
                                             <li className="lg:text-lg my-2 md:my-3 ">150 bonus points for beating the quarterly Global Wall of Fame record</li>
                                             

                                     </ul>
                                </div>
                                <div className="earning-pts-box mt-4 lg:mt-6">
                                     <p  className="lg:text-lg text-[#464646]">Plus, take advantage of our surprise offers to earn additional points or redeem additional discounts!</p>
                                </div>
                               


                            </div>
                        </div>
                        <div className="abt-col md:w-[48%] lg:w-[48%] order-1 md:order-2 mt-8 md:mt-0" id="redeeming">
                        <h2 className="golden-text text-3xl lg:text-4xl font-os font-bold ">REDEEMING POINTS</h2>
                                <div className="earning-pts-box mt-4 lg:mt-8">
                                     <h3 className="font-medium text-[#464646] text-lg lg:text-xl">Once you have accumulated your points, you may redeem them for the following rewards:</h3> 
                                     <ul className="star-list pl-4 text-[#464646] mt-4">
                                             <li className="lg:text-lg my-2 md:my-3 ">50 points - $5 off one (1) admission (choose any game experience)</li>
                                             <li className="lg:text-lg my-2 md:my-3 ">100 points - 50% off one (1) admission (choose any game experience)</li>
                                             <li className="lg:text-lg my-2 md:my-3 ">150 points - One (1) free admission (choose any game experience)</li>
                                             <li className="lg:text-lg my-2 md:my-3 ">250 points - One (1) free merchandise item</li>
                                             <li className="lg:text-lg my-2 md:my-3 ">500 Points - One (1) free private room experience*</li>

                                     </ul>
                                </div>
                        </div>
                        
                    </div>
                    <div className="reedim-note text-[#464646] mt-4 md:mt-8">
                        <p className="lg:text-lg italic">The Rewards Program remains the property of All In Adventures. 
                        All In Adventures reserves the right at all times and in its absolute discretion and without notice
                         to either amend these terms or with reasonable notice to terminate, withdraw or cancel the program.</p>
                        <ul className="star-list pl-4 text-[#464646] mt-4">
                                             <li className="lg:text-lg my-2 md:my-3 font-medium">Exclusions may apply. See store for more details.</li>
                                             

                                     </ul>
                    </div>
            </div>

        <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )

}

export default EarningPoints