import TitleSeparator from "../util/TitleSeparator"
import { useLoadScript } from "@react-google-maps/api"
import LocationMap from "./LocationMap"
import Link from "next/link"
import { FiChevronDown,FiX  } from "react-icons/fi"
import { useState } from "react"

const LocationDetails=(props)=>{
    const[showHour,setShwoHour]=useState(false)

    const locationMap=()=> {
        const { isLoaded } = useLoadScript({
          googleMapsApiKey: "AIzaSyCYSGDPwfMMqKRb7ApqkuH3d5YsMjLiEiY" // Add your API key
        });
      
        return isLoaded ? <LocationMap locdetail={props.locdetail} position={props.locdetail.position} locname={props.locdetail.slug.split("-").join(' ')}/> : null;

        //return isLoaded ? <div className='text-white'>Map loaded</div> : null;
      }
      const getAddress=(address,slug,zip,city)=>{

   
        var scity=slug.split('-')
        var st=scity[scity.length-1].toString().toUpperCase()

        var add=address+', '+city+', '+st+' '+zip
        return add
      }
      const locState=(slug)=>{
        var scity=slug.split('-')
        var st=scity[scity.length-1].toString().toUpperCase()
        return st
      }
      const getDirection=(address,slug,zip,city)=>{

            var addr=address.toString().split(' ').join('+')+','
            var st=slug.toString().split('-')
            var ct=city+','
            st=[st.length-1].toString().toUpperCase()
            var zp=zip+','

            var gslug=addr+'+'+ct+'+'+st+'+'+zp+'+'+'USA'
            var gUrl="https://www.google.com/maps/dir//"+gslug

            return gUrl

      }

    return(
        <div className="location-details relative"
                style={{backgroundImage:"linear-gradient(65deg, rgba(255, 249, 235, 0.1), rgba(255, 249, 235, 0.2)), url('/assets/game-dt-bg.jpg')"}}
            > 
            <div className=" w-full absolute bottom-0 left-0"><img className="w-full" src="/assets/game-home-or2.jpg"></img></div>
            <div className="max-w-[900px] mx-auto pb-28 relative z-30 px-4">
                <div className="section-title max-w-[800px] mx-auto"> 
                     <TitleSeparator title={'ALL IN ADVENTURES '+props.locdetail.city+' LOCATION DETAILS'} color='golden-text' weight='font-bold'/>
                        <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
                           <p className="text-gray-[600] md:px-8">We are conveniently located at {props.locdetail.mall} in {props.locdetail.city} {locState(props.locdetail.slug)}. {props.locdetail.city_include}</p>
                      </div>
                </div> 
                <div className="location-spc-map drop-shadow-md border-2 border-gold">

                    {
                        locationMap()
                    }
                    
                </div>   
                <div className="loc-dt-table grid grid-cols-1 md:grid-cols-2  mt-8">
                       
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 px-2 lg:py-3 md:text-lg ">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-pin.svg"></img>
                                </div>
                                <div className="loc-dt-text text-[#232323]">
                                    <a target="_blank" href={getDirection(props.locdetail.address,props.locdetail.slug,props.locdetail.zip,props.locdetail.city)} className="hover:text-blue-700"><span className="text-blue-600 font-medium">Direction: </span>{getAddress(props.locdetail.address,props.locdetail.slug,props.locdetail.zip,props.locdetail.city)}</a>
                                    
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 px-2 lg:py-3 relative">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-watch.svg"></img>
                                </div>
                                <div className="loc-dt-text text-[#232323] md:text-lg"> 
                                <div className="flex justify-between item-center space-x-3 md:space-x-4 hover:cursor-pointer group" onClick={()=>setShwoHour(true)}>
                                    <p className="text-[#1B823A]">Open Hours</p> <p className="flex items-center space-x-2 group-hover:text-blue-700">View Local Time <span className="text-xl"><FiChevronDown/></span></p>
                                </div>
                                    
                                </div>
                                {
                                    showHour && 
                                            <div className="bhour-list absolute top-[-10px] right-0 shadow-md bg-[#FFF9EB] drop-shadow">
                                                 <div className="relative p-3">  
                                                   <div className="map-h-notice mb-2">
                                                       <p className="font-medium text-sm md:text-base text-[#222222]">Typical Business Hours</p>
                                                       <p className="text-sm text-[#464646]">Actual hours may vary occasionally</p>
                                                     </div>
                                                     <button onClick={() => setShwoHour(false)} className="closeHour p-1 bg-gold text-[#424242] absolute -top-3 -right-3"><FiX/></button>
                                             <table className="bhour-row table-auto border-collapse border border-[#CB9443] text-[#464646]">
                                             <tbody>
                                             <tr>  
                                                     <td className=" border-b border-[#CB9443] capitalize px-2 py-1 font-medium">
                                                                  Day
                                                                  </td>
                                                                  <td className=" border-b border-[#CB9443] px-2 py-1 font-medium" >
                                                                  Open
                                                                  </td>
                                                                  <td className=" border-b border-[#CB9443] px-2 py-1 font-medium">
                                                                  Close
                                                                  </td>
                                                                 </tr>
                                         {
                                                     props.locdetail.hours.map((hours,index)=>{

                                                         return(

                                                            <tr key={index}>  
                                                                <td  className=" border-b border-[#CB9443] capitalize px-2 py-1">
                                                                  {hours.day}
                                                                  </td>
                                                                  <td className="px-2 py-1 border-b border-[#CB9443]" >
                                                                  {hours.open}
                                                                  </td>
                                                                  <td className="px-2 py-1 border-b border-[#CB9443]">
                                                                  {hours.close}
                                                                  </td>
                                                                 </tr>

                                                            )
                                                     })
                                                 }
                                                  </tbody>
                                                 </table>

                                                 </div>
                                         </div>
                                }
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2  px-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-phone.svg"></img>
                                </div>
                                <div className="loc-dt-text text-[#232323] md:text-lg"> 
                                    <p>
                                    <a className="md:text-lg hover:text-blue-700" href={"tel:"+props.locdetail.phone}>{props.locdetail.phone}</a>
                                    </p>
                                </div>
                            </div>

                         

                        <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-email.svg"></img>
                                </div>
                                <div className="loc-dt-text"> 
                                    <p>
                                        <a  className="md:text-lg hover:text-blue-700" href={"mailto:"+props.locdetail.email.toString().toLowerCase()}>{props.locdetail.email}</a>
                                        </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-parking.svg"></img>
                                </div>
                                <div className="loc-dt-text md:text-lg"> 
                                    <p>{props.locdetail.mall} Parking </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 px-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-chair.svg"></img>
                                </div>
                                <div className="loc-dt-text md:text-lg"> 
                                    <p>Wheelchair Accessibility</p>
                                </div>
                            </div>

 

                </div>

                <div className="loc-notice mt-4 md:mt-8"> 

                <ul className="star-list pl-6 lg:text-lg text-[#424242] font-thin">
                    <li className="my-2">
                    {props.locdetail.entry_guid} 
                    </li>
                    <li className="my-2">
                    We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.

                    </li>

                </ul>
             

                                             
                </div>
                <div className="loc-cont flex justify-center mt-16">
                        
                    
                        <a href={"/"+props.locdetail.slug+"/contact-store"} className="uppercase text-lg font-medium text-white bg-red-600 py-3 px-10 rounded-full">Contact store</a>
                    

                </div>
                
             </div>
        </div>
    )
}

export default LocationDetails