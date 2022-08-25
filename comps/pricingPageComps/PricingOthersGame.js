import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";
const PricingOthersGame=()=>{

    return(
        <div className="inperson-others-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            
                {/**=================inpersone escape game price section==================== */}
                 <div className="section-container max-w-7xl mx-auto  pb-16 md:pb-20 lg:pb-28 relative z-30">
                    <div className="section-title px-4">
                        <TitleSeparator title="OTHER PHYSICAL GAME PRICING" color="golden-text" weight="font-bold"/>
                        <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 text-gray-700">
                        Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure 
                        </p>
                    </div>
                    <div className="price-cl max-w-[800px] mx-auto">
                         {/** ============== inperson pricing-table- ============ */}
                         <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
                               <thead className="bg-[#EFE4CA]">
                                {/** ==============table-head============ */}
                                  <tr >
                                    <td className="border border-[#D2C6AA] w-[44%] md:w-[50%]  p-2 md:p-3">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Games Name
                                        </h4>
                                      
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]   p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Private Booking Pacakge
                                        </h4>
                                        <p className="text-[#222222]  text-xs sm:text-sm md:text-lg"> (60 minutes for 2-12 players)</p>
                                    </td>
                                    
                                        

                                  </tr>
                                  {/** ==============table-head end============ */}
                                  
                                </thead>
                                    <tbody className="bg-[#FBF2DC]">
                                        {/** ==============table-row============4+ players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA]  w-[44%] md:w-[50%] p-2 md:p-4">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               Beat The Seat
                                               </h4>
                                            
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]  p-2 md:p-4">
                                              <ul className="text-xs md:text-lg">
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$5</span> / 1-pack for 1 person</li>
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$10</span>/ 3-pack for 1 person</li>
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
                                               <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]  p-2 md:p-4">
                                                  <ul className="text-xs md:text-lg">
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$135</span> / For first 4 person</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$33</span>/ For each additional person</li>
                                                  
                                                  </ul>
                                               </td>


                                         </tr>
                                         {/** ==============table-row end============ */}
                                          {/** ==============table-row===========   2 Players */}
                                        <tr >
                                          
                                              <td className="border border-[#D2C6AA]  w-[44%] md:w-[50%] p-2 md:p-4">
                                                   <h4 className="font-medium md:text-[20px] text-[#000000]">
                                                   Virtual Reality
                                                   </h4>
                                                   

                                               </td>
                                               <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]  p-2 md:p-4">
                                                  <ul className="text-xs md:text-lg">
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$8</span> / 10 minute</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$20</span>/ 30 minute</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$30</span>/ 60 minute</li>
                                                  
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
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$25</span> / 30 minute for 1 person</li>
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$40</span>/ 60 minute for 1 person</li>
                                                   
                                                  
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
                        <ul className="star-list pl-4 md:pl-6 md:text-lg text-[#222222] font-light">
                            <li className="mt-3">Price per person depends on the number of people in your group and whether it's a weekend/holiday or weekday.</li>
                            <li className="mt-3">All of our escape rooms are private when you book an escape game.</li>
                        </ul>
                        <div className="view-all flex justify-center pt-4 md:pt-8">
                            <Link href="/activitiess#others-physical-games"> 
                              <a className="flex lg:text-lg justify-center space-x-1 items-center text-red-500 hover:text-red-700"><span>View all others physical games</span> <FiChevronRight/></a>
                            </Link>
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>

              
                <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
            
        </div>
    )
}

export default PricingOthersGame