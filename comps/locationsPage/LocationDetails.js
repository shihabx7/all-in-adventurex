import TitleSeparator from "../util/TitleSeparator"
import { useLoadScript } from "@react-google-maps/api"
import LocationMap from "./LocationMap"


const LocationDetails=()=>{

    const locationMap=()=> {
        const { isLoaded } = useLoadScript({
          googleMapsApiKey: "AIzaSyCYSGDPwfMMqKRb7ApqkuH3d5YsMjLiEiY" // Add your API key
        });
      
        return isLoaded ? <LocationMap/> : null;

        //return isLoaded ? <div className='text-white'>Map loaded</div> : null;
      }

    return(
        <div className="location-details relative"
                style={{backgroundImage:"linear-gradient(65deg, rgba(255, 249, 235, 0.1), rgba(255, 249, 235, 0.2)), url('/assets/gridbg.jpg')"}}
            > 
            <div className="max-w-7xl mx-auto py-28">
                <div className="section-title"> 
                     <TitleSeparator title='LOCATION DETAILS' color='golden-text' weight='font-bold'/>
                        <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-16">
                           <p className="text-gray-[600] md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                      </div>
                </div> 
                <div className="location-spc-map">

                    {
                        locationMap()
                    }
                    
                </div>   
                
             </div>
        </div>
    )
}

export default LocationDetails