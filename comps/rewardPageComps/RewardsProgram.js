import GameTitleSeparator from "../util/GameTitleSeparator"
const RewardsProgram=()=>{


    return (
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
          <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>

          <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
          <div className="abt-row flex flex-col md:flex-row justify-between items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                      <div className="section-title-sep mt-4 md:mt-0">
                            <p className="text-lg text-[#938056]">NEW VIP</p>
                            <GameTitleSeparator title="REWARDS PROGRAM" color="golden-text" weight="font-bold"/>    
                         </div>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">Welcome to our ALL-NEW digital Rewards Program that will provide you with more value on every visit. 
                        This program will apply to all experiences All In Adventures has to offer including Escape Rooms,
                         Game Show Room, Axe Throwing and more that will be coming soon! We have partnered with an industry
                          leading rewards program company named Fivestars. Download their free app on your phone so you can
                           track and manage all your rewards in one convenient place.Welcome to our all-new digital Rewards
                            Program that will provide you with more value on every visit. This program will apply to all
                             experiences All In Adventures has to offer including Escape Rooms, Game Show Room
                             , Axe Throwing and more that will be coming soon! We have partnered with an industry
                              leading rewards program company named FIVESTARS. Download their free app on your
                               phone so you can track and manage all your rewards in one convenient place.</p>
                        <div className="abt-notice-list mt-4 md:mt-4 lg:mt-6">
                            <h3 className="font-medium text-[#464646] text-xl">Here are just a few of the reasons why you should join:</h3> 
                            <ul className="star-list pl-4 text-[#464646] mt-4">
                                    <li className="lg:text-lg my-2 md:my-3 ">FREE to join!</li>
                                    <li className="lg:text-lg my-2 md:my-3 ">Earn points on ALL experiences</li>
                                    <li className="lg:text-lg my-2 md:my-3 ">FREE experience on your birthday</li>
                                    <li className="lg:text-lg my-2 md:my-3 ">Surprise offers - earn bonus points or additional discounts!</li>
                                    
                            </ul>


                        </div>
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img className="mx-auto" src="/assets/reward-five-star.jpg"></img>
                    </div>


                </div>

        </div>
        </div>
    )
}

export default RewardsProgram