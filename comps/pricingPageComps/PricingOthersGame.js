import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";
const PricingOthersGame=()=>{

    return(
        <div className="inperson-others-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            
                {/**=================inpersone escape game price section==================== */}
                 <div className="section-container max-w-7xl mx-auto  pb-16 md:pb-20 lg:pb-28 relative z-30">
                    <div className="section-title px-4">
                        <TitleSeparator title="OTHER GAMES PRICING" color="golden-text" weight="font-bold"/>
                        
                    </div>
                    <div className="price-cl max-w-[800px] mx-auto mt-8">
                         {/** ============== inperson pricing-table- ============ */}
                         <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
                               <thead className="bg-[#EFE4CA]">
                                {/** ==============table-head============ */}
                                  <tr >
                                    <td className="border border-[#D2C6AA] w-[40%] md:w-[40%]  p-2 md:p-3">
                                        <h4 className="font-medium text-lg md:text-[24px] text-[#000000]">
                                        Games Name
                                        </h4>
                                      
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[60%] md:w-[60%]   p-2 md:p-4">
                                        <h4 className="font-medium text-lg md:text-[24px] text-[#000000]">
                                        Pricing
                                        <p className="text-[#222222] text-xs sm:text-sm md:text-lg">(Plus applicable taxes and fees)</p>
                                        </h4>
                                       
                                    </td>
                                    
                                        

                                  </tr>
                                  {/** ==============table-head end============ */}
                                  
                                </thead>
                                    <tbody className="bg-[#FBF2DC]">
                                        {/** ==============table-row============4+ players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA]  w-[44%] md:w-[40%] p-2 md:p-4">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               Beat The Seat
                                               </h4>
                                            
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[40%] md:w-[40%]  p-2 md:p-4">
                                              <ul className="text-xs md:text-lg">
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$5</span> / 1-pack for 1 person / 2 minutes</li>
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$10</span>/ 3-pack for 1 person / 3X</li>
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$35</span> / 30 minute for unlimited players</li>
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$65</span> / 60 minute for unlimited players</li>
                                              </ul>
                                           </td>
                                          


                                         </tr>
                                         {/** ==============table-row end============ */}
                                         {/** ==============table-row===========   3-4 Players */}
                                        <tr >
                                            <td className="border border-[#D2C6AA]  w-[44%] md:w-[50%] p-2 md:p-4">
                                                   <h4 className="font-medium md:text-[20px] text-[#000000]">
                                                   Game Show Room
                                                   </h4>
                                                   <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">Min. 4 players. Max. 16 players</p>

                                               </td>
                                               <td className="border border-[#D2C6AA] w-[60%] md:w-[60%]  p-2 md:p-4">
                                                  <ul className="text-xs md:text-lg">
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$33</span> / Per person</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$264</span> / Private room for 8</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$528</span> / Private room for 16</li>
                                                  
                                                  </ul>
                                               </td>


                                         </tr>
                                         {/** ==============table-row end============ */}
                                         
                                         {/** ==============table-row===========  10+ Players*/}
                                        <tr >
                                         
                                                <td className="border border-[#D2C6AA] w-[44%] md:w-[50%] p-2 md:p-4">
                                                   <h4 className="font-medium md:text-[20px] text-[#000000]">
                                                   Axe Throwing
                                                   </h4>
                                                   

                                               </td>
                                               <td className="border border-[#D2C6AA] w-[46%] md:w-[50%] p-2 md:p-4">
                                                  <ul className="text-xs md:text-lg">
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$29.89</span> / Per Person </li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$110</span>/ Full lane / 1 hours</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$210</span>/ Full lane / 2 hours</li>
                                                   
                                                  
                                                  </ul>
                                               </td>

                                         </tr>
                                         {/** ==============table-row end============ */}
                                      
                                    </tbody>
                            </table>
                               {/** ============== inperson pricing-table- end============ */}

                    </div>
                    {/** ============== inperson pricing-notice- ============ */}
                    <div className="pricing-notice max-w-[800px] px-4 mx-auto mt-4 md:mt-8">
                        
                        <div className="view-all flex justify-center ">
                       
                              <a href="/activities#others-physical-games" className="flex font-medium lg:text-lg justify-center space-x-1 items-center text-red-500 hover:text-red-700 "><span>View all other games</span> <FiChevronRight/></a>
                          
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>

              
               
            
        </div>
    )
}

export default PricingOthersGame