
import {useRef} from 'react'

import { GoogleMap, LoadScript ,StandaloneSearchBox, Marker } from '@react-google-maps/api';


const mys=   [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
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
      stylers: [{ color: "#38414e" }],
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
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
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
      stylers: [{ color: "#17263c" }],
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


  
  const center ={lat:36,lng:-84}
  const position1 ={lat:40,lng:-90}
  const position2 ={lat:41,lng:-74}


const MapAuto=()=>{
    const libraries = ["drawing", "places"];

    const searchBox = useRef();
    //const onLoad = ref => this.searchBox = ref;

    const onPlacesChanged = () => {
        console.log("change");
    };
    
    return(
        

         <LoadScript id="script-loader" googleMapsApiKey="AIzaSyCYSGDPwfMMqKRb7ApqkuH3d5YsMjLiEiY" libraries={["places"]}>
                 <StandaloneSearchBox
                         //onLoad={onLoad}
                         onPlacesChanged={onPlacesChanged}
                         >
                            <input
                              type="text"
                              placeholder="Enter Zip code or Location"
                                ref={searchBox}
                              className="rounded-full text-white bg-coffee-light mx-auto block py-4 px-8 w-[460px] outline-none relative"
                            />
              </StandaloneSearchBox>

                 <GoogleMap zoom={5} center={center} mapContainerClassName="map-container mt-6 w-full h-[600px]" 
            
            options={{
              styles: mys,
              }}
             mapTypeId="hybrid"
            > 

          

    </GoogleMap>

        </LoadScript>
    )
}
export default MapAuto;



