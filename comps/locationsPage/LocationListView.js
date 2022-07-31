import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleRight,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope, FaAngleDown } from "react-icons/fa"
import { FiChevronDown,FiX } from "react-icons/fi";

const LocationListView=({city,state})=>{
    
    const [showHour,setShwoHour]=useState(null)
   

    return (
       
        <div
        className="locationlist ease-in-out duration-100 rounded-b bg-[#FFF9EB]"
        > 
            <div className="location-img">
                <img src={city.coverimg}></img>
            </div>
            <div className="locationview-info py-4 px-4"> 
                <div className="location-name group">
                    <Link href={"/locations/"+city.slug}>
                        <a> 
                             <div className="flex space-x-1 items-center text-2xl lg:text-3xl font-medium">
                                 <h3 className="golden-text">{city.city}, {state}</h3> <p className="text-gold"><FaAngleRight/></p>
                             </div>
                              <div className="text-lg text-[#4a4a4a] group-hover:text-red-700">{city.address}</div>

                        </a>
                    </Link> 
                   
                </div>
                <div className="loaction-business-hour mt-1 relative"> 
                    <div className="location-review-ind flex items-center space-x-2 lg:text-lg">
                        <span className="text-[#7b7b7b] font-medium">5.0</span>
                        <span><img src="/assets/reviews/fivestar.svg"></img></span>
                        <span className="text-[#7b7b7b] font-medium">({city.fivestar})</span>
                    </div>
                    <div className="location-hour-ind flex items-center space-x-2 lg:text-lg">
                            <div className="flex space-x-2 items-center">
                                <div className="openh text-[#1B823A]">Open</div>
                                <div className="closeh text-[#7b7b7b]">Close <span className="uppercase">11pm</span></div>
                                <div id={city.city} onClick={() => setShwoHour(city.city)} className="open-b text-[#7b7b7b] hover:cursor-pointer hover:text-red-700 text-[24px]"><FiChevronDown/></div>
                            </div>

                           
                       
                    </div>
                  { showHour==city.city && 
                  (
                    <div className="bhour-list absolute top-0 right-0 shadow-md bg-[#FFF9EB] ">
                            <div className="relative p-3">  
                                <button onClick={() => setShwoHour(null)} className="closeHour p-1 bg-[#eeeeee] text-[#424242] absolute -top-3 -right-3"><FiX/></button>
                        <table className="bhour-row table-auto border-collapse border border-[#7b7b7b] text-[#7b7b7b]">
                        <tbody>
                        <tr>  
                                          <td className=" border-b border-[#7b7b7b] capitalize p-2">
                                             Day
                                             </td>
                                             <td className="p-2 border-b border-[#7b7b7b]" >
                                             Open
                                             </td>
                                             <td className=" p-2 border-b border-[#7b7b7b]">
                                             Close
                                             </td>
                                            </tr>
                    {
                                city.hours.map((hour,index)=>{

                                    return(
                                        
                                       <tr key={index}>  
                                          <td  className=" border-b border-[#7b7b7b] capitalize p-2">
                                             {hour.day}
                                             </td>
                                             <td className="p-2 border-b border-[#7b7b7b]" >
                                             {hour.open}
                                             </td>
                                             <td className=" p-2 border-b border-[#7b7b7b]">
                                             {hour.close}
                                             </td>
                                            </tr>
                                       
                                       )
                                })
                            }
                             </tbody>
                            </table>

                            </div>
                    </div>
                  )
                    }

                        

                 </div>
                 
                <div className="location-contact-info py-1 mt-1">
                        <div className="location-contact-link mb-2"> 
                           
                                <a target="_blank" href={"https://www.google.com/maps/dir//"+city.address.split(' ').join('+')+',+'+city.city+',+'+state+'+'+city.zip} className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 ">
                                     <span className="mt-[4px] text-blue-600"><FaMapMarkerAlt/></span>
                                     <p className="hover:underline underline-offset-4"><span className="text-blue-600 font-medium">Direction: </span>{city.address+", "+city.city+", "+state+" "+city.zip+", USA"} </p>
                                </a>
                            
                        </div>
                        <div className="location-contact-link mb-2"> 
                            <div className="flex space-x-2 items-center">
                                 <div className="flex space-x-2 items-center"><span className="mt-[0px] text-[#424242] text-sm"><FaPhoneAlt/> </span>  <span className="text-[#424242] font-medium">Phone: </span> </div> 
                                        <Link href={"tel:"+city.phone}> 
                                             <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 hover:underline underline-offset-4">    
                                                     {city.phone}
                                             </a>
                                         </Link>
                            </div>
                            
                        </div>
                        <div className="location-contact-link mb-2"> 
                            <div className="flex space-x-2 items-center">
                                 <div className="flex space-x-2 items-center"><span className="mt-[0px] text-[#424242] text-sm"><FaEnvelope/> </span>  <span className="text-[#424242] font-medium">Email: </span> </div> 
                                        <Link href={"mailto:"+city.email}> 
                                             <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 hover:underline underline-offset-4">    
                                                    {city.email}
                                             </a>
                                         </Link>
                            </div>
                            
                        </div>
                        

                </div>


            </div>
            <div className="locationview-link px-4 pb-6"> 
                    <div className="flex justify-between">
                        <Link href={"/locations/"+city.slug}>
                                <a className="w-[46%] rounded py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-center text-white fonr-medium">BOOK GAMES</a>
                         </Link>
                         <Link href={"/"+city.slug+"/events"}>
                                <a className="w-[46%] rounded py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-center text-white fonr-medium">BOOK EVENTS</a>
                         </Link>

                    </div>

            </div>
        </div>
    )

}
export default LocationListView;