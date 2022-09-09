import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import Link from "next/link";
import { FaAngleDown,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaGlobe } from "react-icons/fa";
import { getMapStyle } from "../../pages/api/getMapStyle";

const LocationMap=(props)=>{

    const mapStyle= getMapStyle()
    return(
        <div> 

            <GoogleMap
                mapContainerClassName="map-container w-full h-[340px] md:h-[340px] mb-8"
                center={props.position}
                //onLoad={handleOnLoad}
                zoom={5}
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
                ></Marker>
            </GoogleMap>
        </div>
    )
}

export default LocationMap