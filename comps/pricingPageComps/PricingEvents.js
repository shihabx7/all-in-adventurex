import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";

const PricingEvents=()=>{

    return(
        <div className="events-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            
                {/**=================inpersone escape game price section==================== */}
                 <div className="section-container max-w-7xl mx-auto  pb-16 md:pb-20 lg:pb-28 relative z-30">
                    <div className="section-title px-4 mb-8">
                        <TitleSeparator title="ALL EVENT AND PARTY PRICING" color="golden-text" weight="font-bold"/>
                        
                    </div>
                    <div className="price-cl max-w-[900px] mx-auto">
                         {/** ============== inperson pricing-table- ============ */}
                         <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
                               <thead className="bg-[#EFE4CA]">
                                {/** ==============table-head============ */}
                                  <tr >
                                    <td className="border border-[#D2C6AA] w-[36%] md:w-[36%] p-2 md:p-3">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Event Types
                                        </h4>
                                        
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[32%] md:w-[32%] p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Party Room Rental

                                        </h4>
                                        <p className="text-[#222222]  text-xs sm:text-sm md:text-lg"> (Package 1)</p>
                                        
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[32%] md:w-[32%] p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Food Per Person
                                        </h4>
                                        <p className="text-[#222222]  text-xs sm:text-sm md:text-lg"> (Package 2)</p>
                                    </td>
                                        

                                  </tr>
                                  {/** ==============table-head end============ */}
                                  
                                </thead>
                                    <tbody className="bg-[#FBF2DC]">
                                        {/** ==============table-row============4+ players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA] w-[36%] md:w-[35%] p-2 md:p-4 text align-top">
                                           
                                               <h4 className="my-2 leading-[1.5] text-sm md:text-[20px] text-[#222222]">Birthday Party</h4>
                                               <h4 className="my-2 leading-[1.5] text-sm md:text-[20px] text-[#222222]">Team Building </h4>
                                               <h4 className="my-2 leading-[1.5] text-sm md:text-[20px] text-[#222222]">Corporate Events</h4>
                                               <h4 className="my-2 leading-[1.5] text-sm md:text-[20px] text-[#222222]">Family Events</h4>
                                               <h4 className="my-2 leading-[1.5] text-sm md:text-[20px] text-[#222222]">And Others Private Events</h4>
                                              
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[32%] p-2 md:p-4 align-top">
                                            
                                              <h4 className="mt-2 font-light text-xs sm:text-sm md:text-[20px] text-[#000000]"> <span className="font-medium">$75.00</span> + Tax / Guests varies</h4>
                                               <ul className="star-list list-inside md:list-outside mt-4 md:pl-5">
                                                    <li className="my-2 md:my-3 text-xs sm:text-sm lg:text-lg font-light">Party room rental for 2 hours</li>
                                                    <li className="my-2 md:my-3 text-xs sm:text-sm lg:text-lg font-light">Bring your own store bought food</li>
                                                    <li className="my-2 md:my-3 text-xs sm:text-sm lg:text-lg font-light">Basic supplies (plates, napkins, utensils, etc.)</li>
                                                    <li className="my-2 md:my-3 text-xs sm:text-sm lg:text-lg font-light">FREE All In Adventures birthday invitations (digital - can be printed)</li>
                                                    <li className="my-2 md:my-3 text-xs sm:text-sm lg:text-lg font-light">$30 gift card for birthday child</li>
                                               </ul>
                                               
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[32%] p-2 md:p-4 align-top">
                                                 <h4 className="mt-2 font-light text-xs sm:text-sm md:text-[20px] text-[#000000]"> <span className="font-medium">$18.99</span> / Guests varies</h4>
                                               <ul className="star-list mt-4 pl-5">
                                                    <li className="my-3 text-xs sm:text-sm lg:text-lg font-light">Party room rental for 2 hours</li>
                                                    <li className="my-3 text-xs sm:text-sm lg:text-lg font-light">Food includes pizza, cookie cake, and a drink for each guest</li>
                                                    <li className="my-3 text-xs sm:text-sm lg:text-lg font-light">Minimum Guest Count: 6 people</li>
                                                    <li className="my-3 text-xs sm:text-sm lg:text-lg font-light">Basic supplies (plates, napkins, utensils, etc.)</li>
                                                    <li className="my-3 text-xs sm:text-sm lg:text-lg font-light">FREE All In Adventures birthday invitations (digital - can be printed)</li>
                                                    <li className="my-3 text-xs sm:text-sm lg:text-lg font-light">$35 gift card for birthday child</li>
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
                            
                              <a href="/events" className="flex text-lg justify-center space-x-1 items-center text-red-600 hover:text-red-700 font-medium"><span>View all events</span> <FiChevronRight/></a>
                           
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>

              
            
            
        </div>
    )
}

export default PricingEvents