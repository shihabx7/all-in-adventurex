import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { FaAngleDown,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaGlobe } from "react-icons/fa";
import { getMapStyle } from "../../pages/api/getMapStyle";

const LocationMap=()=>{

    const mapStyle= getMapStyle()
    return(
        <div> 

            <GoogleMap
                mapContainerClassName="map-container w-full h-[340px] md:h-[340px] mb-20"
                center={{lat:47,lng:-85}}
                //onLoad={handleOnLoad}
                zoom={5}
                options={{
                  styles: mapStyle,
              }}
            >

                <Marker 
                    position={{lat:47,lng:-85}}
                    title="Location Name"
                    icon={{
                      url:"/assets/svg/adventure-marker.svg",
                      scale:1
                    }}
                ></Marker>
            </GoogleMap>
        </div>
    )
}

export default LocationMap