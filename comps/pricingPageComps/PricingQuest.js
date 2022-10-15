import TitleSeparator from "../util/TitleSeparator"
import { FiChevronRight } from "react-icons/fi";
const PricingQuest=(props)=>{

    return(
        <div className="inperson-activities-pricing relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            <div className="section-container max-w-7xl mx-auto  pb-16 md:pb-24 lg:pb-28 relative z-30">
                    <div className="section-title px-4 mb-8">
                        <TitleSeparator title="PORTABLE QUEST PRICING" color="golden-text" weight="font-bold"/>
                        
                    </div>
                    <div className="price-cl max-w-[640px] mx-auto">
                         {/** ============== next gen pricing-table- ============ */}
                         <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
                               <thead className="bg-[#EFE4CA]">
                                {/** ==============table-head============ */}
                                  <tr >
                                    <td className="border border-[#D2C6AA] w-[55%] md:w-[53%] p-2 md:p-3">
                                        <h4 className="font-medium text-lg md:text-[24px] text-[#000000]">
                                        Group Size
                                        </h4>
                                        
                                    </td>
                                    <td className="border border-[#D2C6AA] w-[45%] md:w-[47%] p-2 md:p-4">
                                        <h4 className="font-medium text-lg md:text-[24px] text-[#000000]">
                                        Pricing
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
                                                            <td className="border border-[#D2C6AA] w-[55%] md:w-[53%] p-2 md:p-4">
                                                                <h4 className="font-medium md:text-[20px] text-[#000000]">
                                                                {item.group_size}
                                                                </h4>
                                                                <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">{item.group_text}</p>
                                                            </td>
                                                            <td className="border border-[#D2C6AA] w-[47%] md:w-[45%] p-2 md:p-4">
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
                       
                        <div className="view-all flex justify-center ">
                            
                              <a href="/activities" className="flex lg:text-lg justify-center space-x-1 items-center text-red-500 hover:text-red-700 font-medium"><span>View all In person escape rooms</span> <FiChevronRight/></a>
                            
                         </div>
                    </div>
                    {/** ============== inperson pricing-notice- end ============ */}

                </div>
        </div>
    )

}

export default PricingQuest