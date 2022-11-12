import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";
const PrivcingVirtualGames=()=>{

    return(
        <div className="inperson-others-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            
                {/**=================inpersone escape game price section==================== */}
                 <div className="section-container max-w-7xl mx-auto  pb-16 md:pb-20 lg:pb-28 relative z-30">
                    <div className="section-title px-4 mb-8">
                        <TitleSeparator title="VIRTUAL GAME PRICING" color="golden-text" weight="font-bold"/>
                        
                    </div>
                    <div className="price-cl max-w-[800px] mx-auto">
                         {/** ============== inperson pricing-table- ============ */}
                         <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
                               <thead className="bg-[#EFE4CA]">
                                {/** ==============table-head============ */}
                                  <tr >
                                    <td className="border border-[#D2C6AA] w-[44%] md:w-[50%]  p-2 md:p-3 align-top">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Virtual Game Name
                                        </h4>
                                      
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]   p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Private Booking Pacakge
                                        </h4>
                                        <p className="text-[#222222]  text-xs sm:text-sm md:text-lg"> (60 minutes)</p>
                                    </td>
                                    
                                        

                                  </tr>
                                  {/** ==============table-head end============ */}
                                  
                                </thead>
                                    <tbody className="bg-[#FBF2DC]">
                                        {/** ==============table-row============4+ players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA]  w-[44%] md:w-[50%] p-2 md:p-4 align-top">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               Virtual Game Show Room
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">Min 4 players Max 12 players</p>
                                            
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]  p-2 md:p-4">
                                              <ul className="text-xs md:text-lg">
                                                <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$20</span> / Person</li>
                                                
                                            
                                              </ul>
                                           </td>
                                          


                                         </tr>
                                         {/** ==============table-row end============ */}
                                         {/** ==============table-row===========   3-4 Players */}
                                        <tr >
                                            <td className="border border-[#D2C6AA]  w-[44%] md:w-[50%] p-2 md:p-4 align-top">
                                                   <h4 className="font-medium md:text-[20px] text-[#000000]">
                                                   Virtual Escape Room
                                                   </h4>
                                                   <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">Choose from any of 6 games</p>

                                               </td>
                                               <td className="border border-[#D2C6AA] w-[46%] md:w-[50%]  p-2 md:p-4 align-top">
                                                  <ul className="text-xs md:text-lg">
                                                    <li className="text-[#222222] font-light mt-1"><span className="font-semibold">$147</span> / Private room for 2 - 6 person</li>
                                               
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
                        
                        <div className="view-all flex justify-center">
                            
                              <a href="/virtual-games" className="flex font-medium lg:text-lg justify-center space-x-1 items-center text-red-500 hover:text-red-700"><span>View all virtual game</span> <FiChevronRight/></a>
                            
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>
        </div>
    )
}

export default PrivcingVirtualGames