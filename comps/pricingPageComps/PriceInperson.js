import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";

const PriceInperson=()=>{

    return(
        <div className="inperson-activities-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
                {/**=================inpersone escape game price section==================== */}
                 <div className="section-container max-w-7xl mx-auto  py-16 md:py-20 lg:py-28 relative z-30">
                    <div className="section-title px-4">
                        <TitleSeparator title="IN PERSON ESCAPE ROOM PRICING" color="golden-text" weight="font-bold"/>
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
                                    <td className="border border-[#D2C6AA] w-[36%] md:w-[40%] p-2 md:p-3">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Group Size
                                        </h4>
                                        <p className="text-[#222222] font-regular text-xs sm:text-sm md:text-lg"> (Min. 2 Players)</p>
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Weekdays
                                        </h4>
                                        <p className="text-[#222222] font-regular text-xs sm:text-sm md:text-lg"> (Min. 2 Players)</p>
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Weekends / Holidays
                                        </h4>
                                        
                                    </td>
                                        

                                  </tr>
                                  {/** ==============table-head end============ */}
                                  
                                </thead>
                                    <tbody className="bg-[#FBF2DC]">
                                        {/** ==============table-row============4+ players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA] w-[36%] md:w-[40%] p-2 md:p-4">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               4+ Players
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> Private game</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                              <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                              $18
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> per person</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                                <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                                $30
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> per person</p>
                                           </td>


                                         </tr>
                                         {/** ==============table-row end============ */}
                                         {/** ==============table-row===========   3-4 Players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA] w-[36%] md:w-[40%] p-2 md:p-4">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               3-4 Players
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> Private game</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                              <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                              $22
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> per person</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                                <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                                $35
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> per person</p>
                                           </td>


                                         </tr>
                                         {/** ==============table-row end============ */}
                                          {/** ==============table-row===========   2 Players */}
                                        <tr >
                                           <td className="border border-[#D2C6AA] w-[36%] md:w-[40%] p-2 md:p-4">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               2 Players
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> Private game</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                              <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                              $32
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> per person</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                                <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                                $42
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> per person</p>
                                           </td>


                                         </tr>
                                         {/** ==============table-row end============ */}
                                         {/** ==============table-row===========  10+ Players*/}
                                        <tr >
                                           <td className="border border-[#D2C6AA] w-[36%] md:w-[40%] p-2 md:p-4">
                                               <h4 className="font-medium md:text-[20px] text-[#000000]">
                                               10+ Players
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg"> Private game</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                              <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                              Contact store
                                               </h4>
                                               <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">for special pricing</p>
                                           </td>
                                           <td className="border border-[#D2C6AA] w-[32%] md:w-[30%] p-2 md:p-4">
                                                <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                                Contact store
                                               </h4>
                                               <p className="text-[#222222]  font-light text-xs sm:text-sm md:text-lg">for special pricing</p>
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
                            <Link href="/activities"> 
                              <a className="flex lg:text-lg justify-center space-x-1 items-center text-red-500 hover:text-red-700"><span>View all In person escape rooms</span> <FiChevronRight/></a>
                            </Link>
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>

              
            
            
        </div>
    )
}

export default PriceInperson