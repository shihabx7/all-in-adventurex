
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { FaAngleDown,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaGlobe } from "react-icons/fa";
const LocationMarkers = [
  {
     
    id: 1,
    name: "All in Adventure",
    position: { lat: 42.694650871225996, lng: -73.84925962422682 },
    info:{ 
        coverimg:'/assets/locationlist-img.jpg',
        riview:'630',
        b_hours:{
            open:'9am',
            close:'11pm'
        },
        city:'Albeny',
        state:'NY',
        zip:12203,
        country:'USA',
        address:'1 Crossgates Mall Rd D212',
        phone:'(518) 240-8243',
        email:'Store103@Allinadventures.com',
        web:'https://allinadventures.com/'

    }
  },
  {
    id: 2,
    name: "All in Adventure",
    position: { lat: 42.942813507176496, lng: -78.77021518594842 },
    info:{ 
        coverimg:'/assets/locationlist-img.jpg',
        riview:'200',
        b_hours:{
            open:'10am',
            close:'10pm'
        },
        city:'Buffalo',
        state:'NY',
        zip:14225,
        country:'USA',
        address:'1 Walden Galleria b108',
        phone:'(716) 216-0404',
        email:'Store108@Allinadventures.com',
        web:'https://allinadventures.com/'

    }
  },
  {
    id: 3,
    name: "All in Adventure",
    position: { lat: 41.45721266866858, lng:-74.36967048790328 },
    info:{ 
        coverimg:'/assets/locationlist-img.jpg',
        riview:'330',
        b_hours:{
            open:'9am',
            close:'11pm'
        },
        city:'Middletown',
        state:'NY',
        zip:10941,
        country:'USA',
        address:'1 Galleria Dr a211',
        phone:'(845) 2029010',
        email:'Store105@Allinadventures.com',
        web:'https://allinadventures.com/'

    }
  },
  {
    id: 4,
    name: "All in Adventure",
    position: { lat: 43.06931313933494, lng: -76.17096218865646 },
    
    info:{ 
        coverimg:'/assets/locationlist-img.jpg',
        riview:'630',
        b_hours:{
            open:'9am',
            close:'11pm'
        },
        city:'Syracuse',
        state:'NY',
        zip:13290,
        country:'USA',
        address:'9090 Destiny USA Dr',
        phone:'(518) 240-8243',
        email:'Store103@Allinadventures.com',
        web:'https://allinadventures.com/'

    }
  },

 
];

const customMapStyle=   [
    { elementType: "geometry", stylers: [{ color: "#F4F4F4" }] },
  // { elementType: "labels.text.stroke", stylers: [{ color: "#8E8E8E" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#8E8E8E" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#8E8E8E" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#CCC0A8" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#CCC0A8" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#CCC0A8" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#D6DDE8" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ]

  
function Mapwithinfo() {
  const [activeMarker, setActiveMarker] = useState(null);
  const [mapCenter,setMapCenter]=useState({lat:37,lng:-85});
  const [mapZoon,setMapZoom]=useState(4);

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

  return (
    <div className="max-w-7xl mx-auto">
      
    <GoogleMap
      onClick={() => setActiveMarker(null)}
      mapContainerClassName="map-container w-full h-[640px] md:h-[640px] mb-20"
      center={mapCenter}
      //onLoad={handleOnLoad}
      zoom={mapZoon}
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
        >
          {activeMarker === id ? (
            <InfoWindow 
            onCloseClick={() => setActiveMarker(null)}
           

            options={{
                styles: {bcackground:'#ffc00'},
            }}
            >
              <div className="map-card max-w-[320px] md:max-w-[320px] bg-[rgba(255,249,236,.4)]">
                    <div className="map-card-img  bg-[#FFF9EC]">
                        <img className="w-full" src={info.coverimg}></img>
                    </div>
                    <div className="map-card-bus py-2  text-left px-2">
                        <h2 className="map-card-name text-gold golden-text text-[18px] font-semibold">
                            <span className="uppercase">{name}</span> at <span>{info.address}</span> in<span className="capitalize">{info.city}</span> <span className="uppercase">{info.state}</span>
                        </h2>
                       <div className="flex items-center space-x-2">
                            <span className="text-[#7b7b7b] text-[16px] font-medium">5.0</span>
                            <span className="rev-star"><img src="/assets/svg/map-star.svg"></img></span>
                            <span className="rev-count text-[#7b7b7b] text-[14px] font-medium">({
                                info.riview
                            })</span>
                       </div>
                       <div className="flex items-center space-x-2 text-[16px] mt-1">
                            <span className="text-[#1B823A]">Open.</span>
                            <span className="close text-[#7b7b7b]"> Close {info.b_hours.close}</span>
                            <span className="rev-count text-[#7b7b7b] text-[18px]"><FaAngleDown/></span>
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
                                            <Link href={'mailto:'+info.email}> 
                                                <a className="text-[#7b7b7b] hover:text-blue-600">
                                                   <span className="font-medium text-[#424242]">Email: </span> {info.email}
                                                </a>
                                            </Link>
                                    </div>
                                 </div>
                                 <div className="flex space-x-2 mt-2">
                                    <div className="text-[#424242]"><FaGlobe/></div>
                                    
                                    <div className="map-info-link">
                                            
                                                <a href={info.web} className="text-[#7b7b7b] hover:text-blue-600">
                                                   <span className="font-medium text-[#424242]">Website: </span> {info.web}
                                                </a>
                                            
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
    </div>
  );
}

export default Mapwithinfo;
