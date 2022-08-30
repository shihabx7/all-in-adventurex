
import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { FaAngleDown,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaGlobe } from "react-icons/fa";
import { getMapStyle } from "../../pages/api/getMapStyle";
import { getMapData } from "../../pages/api/getMapData";
import { FiChevronDown,FiX } from "react-icons/fi"



function MapwithInfo() {
  
const LocationMarkers =getMapData()

const customMapStyle=  getMapStyle()

 
const [shwoHour,setShwoHour]=useState(null)
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapCenter,setMapCenter]=useState({lat:40,lng:-82});
  const [mapZoom,setMapZoom]=useState(5.5);

  useEffect(() => {
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

console.log(w)
        if(w<640){
          setMapZoom(4.6)
          setMapCenter({lat:39,lng:-78}) 
        }
  });

  const handleActiveMarker = (marker,position) => {
    if (marker === activeMarker) {
      return;
    }
   
    setActiveMarker(marker);
  
    //setMapCenter(position);
    
  };
  
const getdirectionUrl =(address,city,state,zip)=>{
    var addArr=address.trim()
     addArr=addArr.toLowerCase()
    var addArrLink=addArr.split(' ').join("+")
    var directionUrl="https://www.google.com/maps/dir//"+addArrLink+",+"+city.toLowerCase()+",+"+state.toLowerCase()+"+"+zip

    console.log(directionUrl)
    return directionUrl
}

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    LocationMarkers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const closeInfo=()=>{
    setActiveMarker(null)
    setShwoHour(null)
  }
  const getStoreUrl=(city,stateCode)=>{

    const urlSlug=city+'-'+stateCode
    urlSlug=urlSlug.toLocaleLowerCase()
    console.log(urlSlug)
    return urlSlug
    

  }
 
  return (
  
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      mapContainerClassName="map-container w-full h-[640px] md:h-[640px] mb-20"
      center={mapCenter}
      //onLoad={handleOnLoad}
      zoom={mapZoom}
      options={{
        styles: customMapStyle,
    }}
    mapTypeId="hybrid"
    >
      {LocationMarkers.map(({ id, name, position,info }) => (
        <Marker
          key={id}
          position={position}
          icon={{
            url:"/assets/svg/adventure-marker.svg",
            scale:1
          }}
          onClick={() => handleActiveMarker(id,position)}
          title={info.city+' '+info.state}
        >
          {activeMarker === id ? (
            <InfoWindow 
            onCloseClick={() => closeInfo()}
           

            options={{
                styles: {bcackground:'#ffc00'},
            }}
            >
              <div className="map-card max-w-[320px] md:max-w-[320px] bg-[rgba(255,249,236,.4)]">
                    <div className="map-card-img  bg-[#FFF9EC]">
                      <Link href={'/locations/'+getStoreUrl(info.city,info.state)}>
                        <a className="block cursor-pointer"><img className="w-full" src={info.coverimg} alt={info.alt}></img></a>
                      </Link>
                        
                    </div>
                    <div className="map-card-bus py-2  text-left px-2">
                        <h2 className="map-card-name text-gold golden-text text-[18px] font-semibold">
                            <span className="uppercase">{name}</span> at <span>{info.mall}</span> in <span className="capitalize">{info.city}</span> <span className="uppercase">{info.state}</span>
                        </h2>
                       <div className="flex items-center space-x-2">
                            <span className="text-[#7b7b7b] text-[16px] font-medium">5.0</span>
                            <span className="rev-star"><img src="/assets/svg/map-star.svg"></img></span>
                            <span className="rev-count text-[#7b7b7b] text-[14px] font-medium">({
                                info.riview
                            })</span>
                       </div>
                       
                       <div className="flex items-center space-x-3 md:space-x-4 text-[16px] mt-1 relative">
                            <p className="text-[#1B823A]">Open Hours </p>
                            {/*<span className="close text-[#7b7b7b]"> Close {info.b_hours.close}</span>*/}
                            <span onClick={() => setShwoHour(info.city)} className="rev-count  text-[#464646] hover:text-red-700 cursor-pointer text-[15px] flex space-x-1 items-center">View Local Time <span className="text-lg"><FiChevronDown/></span></span>
                {/*========business hour list==========*/}
                {
                  console.log(info.closeday)
                }
                             {
                              shwoHour==info.city &&
                           
                            <div className="bhour-list absolute top-[-180px] right-0 shadow-md bg-[#FFF9EB] ">
                            <div className="relative p-3">  
                                <div className="map-h-notice mb-2">
                                  <p className="font-medium text-sm md:text-base text-[#222222]">Typical Business Hours</p>
                                  <p className="text-sm text-[#464646]">Actual hours may vary occasionally</p>
                                </div>
                                <button onClick={() => setShwoHour(null)} className="closeHour p-1 bg-gold text-[#000000] absolute -top-3 -right-0"><FiX/></button>
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
                        
                                  { info.b_hours.map((hours,index)=>{

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
                       
                                                <a target="_blank" href={getdirectionUrl(info.address,info.city,info.state,info.zip)} key={id} className="text-[#7b7b7b] hover:text-blue-600">
                                                   <span className="font-medium text-blue-600">Direction: </span> {info.address+', '+info.city+', '+info.state+' '+info.zip+', '+info.country}
                                                </a>
                                           
                                    </div>
                                 </div>

                                 <div className="flex space-x-2 mt-2">
                                    <div className="text-[#424242]"><FaPhoneAlt/></div>
                                    
                                    <div className="map-info-link">
                                            <Link href={'tel:'+info.phone}> 
                                                <a className="text-[#7b7b7b] hover:text-blue-600">
                                                   <span className="font-medium text-[#424242]">Phone: </span> {info.phone}
                                                </a>
                                            </Link>
                                    </div>
                                 </div>
                                 <div className="flex space-x-2 mt-2">
                                    <div className="text-[#424242]"><FaEnvelope/></div>
                                    
                                    <div className="map-info-link">
                                            <Link href={'mailto:'+info.email.toLocaleLowerCase()}> 
                                                <a className="text-[#7b7b7b] hover:text-blue-600">
                                                   <span className="font-medium text-[#424242]">Email: </span> {info.email}
                                                </a>
                                            </Link>
                                    </div>
                                 </div>
                                 <div className="flex space-x-2 mt-2">
                                    <div className="text-[#424242]"><FaGlobe/></div>
                                    
                                    <div className="map-info-link">
                                            
                                           
                                            <Link href={'/locations/'+getStoreUrl(info.city,info.state)}>
                                            <a  className="text-[#7b7b7b] hover:text-blue-600">
                                                   <span className="font-medium text-[#424242]">Website :</span> Click To Visit
                                                </a>
                                            </Link>
                                                
                                            
                                    </div>
                                 </div>

                       </div>
                    </div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
    
  );
}

export default MapwithInfo;
