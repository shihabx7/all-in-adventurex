import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaGlobe } from "react-icons/fa";
import { FiChevronDown,FiX } from "react-icons/fi"

import { getMapStyleLoc } from "../../pages/api/getMapStyleLoc";

const LocationMap=(props)=>{
    const centerLat=props.position.lat+.04
    const centerLng=props.position.lng


    const[showInfo,setShowInfo]=useState(false)
    const[showMapHour,setShowMapHour]=useState(false)

    const closeInfo=()=>{
        setShowInfo(false)
        setShowMapHour(false)
      }
      const getState=(slug)=>{
        const st=slug.split('-')
        return st[st.length-1]
      }

      const getdirectionUrl =(address,city,state,zip)=>{
        var addArr=address.trim()
         addArr=addArr.toLowerCase()
        var addArrLink=addArr.split(' ').join("+")
        var directionUrl="https://www.google.com/maps/dir//"+addArrLink+",+"+city.toLowerCase()+",+"+state.toLowerCase()+"+"+zip
    
        //console.log(directionUrl)
        return directionUrl
    }
    const getStoreUrl=(city,stateCode)=>{

        const urlSlug=city+'-'+stateCode
        urlSlug=urlSlug.toLocaleLowerCase()
        console.log(urlSlug)
        return urlSlug
        
    
      }

    const mapStyle= getMapStyleLoc()
    return(
        <div> 

            <GoogleMap
                mapContainerClassName="map-container singleloc-map w-full h-[540px] md:h-[540px]"
                center={{lat:centerLat,lng:centerLng}}
                //onLoad={handleOnLoad}
                zoom={11}
                options={{
                  styles: mapStyle,
              }}
            >

                <Marker 
                    position={props.position}
                    title={props.locname}
                    icon={{
                      url:"/assets/svg/adventure-marker.svg",
                      scale:1
                    }}

                    onClick={() => setShowInfo(true)}
                >

                        {
                            showInfo &&
                            <InfoWindow
                                    onCloseClick={() => closeInfo()}
                                    options={{
                                         styles: {bcackground:'#ffc00'},
                                     }}
                            >
                                {/* =============================card info================================*/}
                                <div className="map-card max-w-[320px] md:max-w-[320px] bg-[rgba(255,249,236,.4)]">
                                            <div className="map-card-img  bg-[#FFF9EC]">
                                              <Link href={'/locations/'+getStoreUrl(props.locdetail.city,props.locdetail.state)}>
                                                <a className="block cursor-pointer"><img className="w-full" src={props.locdetail.coverimg} alt={props.locdetail.alt}></img></a>
                                              </Link>

                                            </div>
                                            <div className="map-card-bus py-2  text-left px-2">
                                                <h2 className="map-card-name text-gold golden-text text-[18px] font-semibold">
                                                    <span className="uppercase">All in Adventures</span> at <span>{props.locdetail.mall}</span> in <span className="capitalize">{props.locdetail.city}</span> <span className="uppercase">{props.locdetail.state}</span>
                                                </h2>
                                               <div className="flex items-center space-x-2">
                                                    <span className="text-[#7b7b7b] text-[16px] font-medium">5.0</span>
                                                    <span className="rev-star"><img src="/assets/svg/map-star.svg"></img></span>
                                                    <span className="rev-count text-[#7b7b7b] text-[14px] font-medium">({
                                                        props.locdetail.fivestar
                                                    })</span>
                                               </div>
                                                
                                               <div className="flex items-center space-x-3 md:space-x-4 text-[16px] mt-1 relative">
                                                    <p className="text-[#1B823A]">Open Hours </p>
                                                    {/*<span className="close text-[#7b7b7b]"> Close {info.b_hours.close}</span>*/}
                                                    <span onClick={() => setShowMapHour(true)} className="rev-count  text-[#464646] hover:text-red-700 cursor-pointer text-[15px] flex space-x-1 items-center">View Local Time <span className="text-lg"><FiChevronDown/></span></span>
                                        {/*========business hour list==========*/}
                                        
                                                     {
                                                      showMapHour &&
                                                    
                                                    <div className="bhour-list absolute top-[-180px] right-0 shadow-md bg-[#FFF9EB] ">
                                                    <div className="relative p-3">  
                                                        <div className="map-h-notice mb-2">
                                                          <p className="font-medium text-sm md:text-base text-[#222222]">Typical Business Hours</p>
                                                          <p className="text-sm text-[#464646]">Actual hours may vary occasionally</p>
                                                        </div>
                                                        <button onClick={() => setShowMapHour(false)} className="closeHour p-1 bg-gold text-[#000000] absolute -top-3 -right-0"><FiX/></button>
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
                                                    
                                                          { props.locdetail.hours.map((hours,index)=>{
                                                        
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
                                             {/*========business hour list==========*/}
                                               </div>
                                               <div className="info-link-box pt-2 text-[15px]"> 
                                                        <div className="flex space-x-2">
                                                            <div className="text-blue-600"><FaMapMarkerAlt/></div>

                                                            <div className="map-info-link">

                                                                        <a target="_blank" href={getdirectionUrl(props.locdetail.address,props.locdetail.city,getState(props.locdetail.slug),props.locdetail.zip)}  className="text-[#7b7b7b] hover:text-blue-600">
                                                                           <span className="font-medium text-blue-600">Direction: </span> {props.locdetail.address+', '+props.locdetail.city+', '+getState(props.locdetail.slug).toUpperCase()+' '+props.locdetail.zip}
                                                                        </a>

                                                            </div>
                                                         </div>
                                      
                                                         <div className="flex space-x-2 mt-2">
                                                            <div className="text-[#424242]"><FaPhoneAlt/></div>

                                                            <div className="map-info-link">
                                                                    <Link href={'tel:'+props.locdetail.phone}> 
                                                                        <a className="text-[#7b7b7b] hover:text-blue-600">
                                                                           <span className="font-medium text-[#424242]">Phone: </span> {props.locdetail.phone}
                                                                        </a>
                                                                    </Link>
                                                            </div>
                                                         </div>
                                                         <div className="flex space-x-2 mt-2">
                                                            <div className="text-[#424242]"><FaEnvelope/></div>

                                                            <div className="map-info-link">
                                                                    <Link href={'mailto:'+props.locdetail.email.toLocaleLowerCase()}> 
                                                                        <a className="text-[#7b7b7b] hover:text-blue-600">
                                                                           <span className="font-medium text-[#424242]">Email: </span> {props.locdetail.email}
                                                                        </a>
                                                                    </Link>
                                                            </div>
                                                         </div>
                                                         <div className="flex space-x-2 mt-2">
                                                            <div className="text-[#424242]"><FaGlobe/></div>

                                                            <div className="map-info-link">


                                                                    <Link href={'/locations/'+props.locdetail.slug}>
                                                                    <a  className="text-[#7b7b7b] hover:text-blue-600">
                                                                           <span className="font-medium text-[#424242]">Website :</span> Click To Visit
                                                                        </a>
                                                                    </Link>


                                                            </div>
                                                         </div>
                                      
                                               </div>
                                            </div>
                                      </div>

              {/*============================ cet card hour===========================*/}


                            </InfoWindow>
                        }
                       
                </Marker>
            </GoogleMap>
        </div>
    )
}

export default LocationMap