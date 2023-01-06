import TitleSeparator from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronRight } from "react-icons/fi";

const PriceInperson=(props)=>{

    return(
        <div className="inperson-activities-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
            <div className="w-full absolute bottom-0 left-0 rotate-180"><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
                {/**=================inpersone escape game price section==================== */}
                 <div className="section-container max-w-7xl mx-auto  py-16 md:py-24 lg:py-28 relative z-30">
                    <div className="section-title px-4 mb-8">
                        <TitleSeparator title="MOST POPULAR ESCAPE ROOM PRICING" color="golden-text" weight="font-bold"/>
                        
                    </div>
                    <div className="price-cl max-w-[740px] mx-auto">
                         {/** ============== inperson pricing-table- ============ */}
                         <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
                               <thead className="bg-[#EFE4CA]">
                                {/** ==============table-head============ */}
                                  <tr >
                                    <td className="border border-[#D2C6AA] w-[40%] md:w-[50%] p-2 md:p-3">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Group Size
                                        </h4>
                                        
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[60%] md:w-[50%] p-2 md:p-4">
                                        <h4 className="font-medium sm:text-lg md:text-[24px] text-[#000000]">
                                        Pricing
                                        <p className="text-[#222222] text-xs sm:text-sm md:text-lg">(Plus applicable taxes and fees)</p>
                                        </h4>
                                        
                                    </td>
                                    
                                        

                                  </tr>
                                  {/** ==============table-head end============ */}
                                  
                                </thead>
                                    <tbody className="bg-[#FBF2DC]">
                                        {/** ==============table-row============4+ players */}
                                        
                                        {props.pricing && 
                                      
                                                props.pricing.map((item)=>{

                                                    return(
                                                        <tr key={item.id}>
                                                            <td className="border border-[#D2C6AA] w-[40%] md:w-[50%] p-2 md:p-4">
                                                                <h4 className="font-medium md:text-[20px] text-[#000000]">
                                                                {item.group_size}
                                                                </h4>
                                                                <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">{item.group_text}</p>
                                                            </td>
                                                            <td className="border border-[#D2C6AA] w-[60%] md:w-[50%] p-2 md:p-4">
                                                               <h4 className="font-medium  md:text-[20px] text-[#000000]">
                                                               ${item.price}
                                                                </h4>
                                                                <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">{item.person}</p>
                                                            </td>
                                                         </tr>
                                                    )
                                                })
                                        
                                            
                                        }
                                          
                                         
                                         {/** ==============table-row end============ */}
                                      
                                    </tbody>
                            </table>
                               {/** ============== inperson pricing-table- end============ */}

                    </div>
                    {/** ============== inperson pricing-notice- ============ */}
                    <div className="pricing-notice max-w-[640px] px-4 md:px-0 mx-auto mt-4 md:mt-8">
                        <ul className="star-list pl-4 md:pl-6 md:text-lg text-[#000000] font-light">
                            <li className="mt-3">Cancellations: There are no refunds or cancellations. If you contact us 48 hours prior to your reservation time, we will do our best to reschedule your reservation.</li>
                            <li className="mt-3">Applicable taxes and fees may apply based on your particular location</li>
                          
                            <li className="mt-3">For your Health and Safety all bookings will be private room bookings regardless of your group size!</li>
                            <li className="mt-3">Children ages 6 and under play FREE with Adults' paid admission.</li>
                        </ul>
                        <div className="view-all flex justify-center pt-4 md:pt-8">
                             
                              <a href="/activities" className="flex font-medium text-lg justify-center space-x-1 items-center text-red-600 hover:text-red-700"><span>View all in-person escape rooms</span> <FiChevronRight/></a>
                           
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>
        </div>
    )
}

export default PriceInperson