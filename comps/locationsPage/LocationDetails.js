import TitleSeparator from "../util/TitleSeparator"
import { useLoadScript } from "@react-google-maps/api"
import LocationMap from "./LocationMap"
import Link from "next/link"


const LocationDetails=(props)=>{

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
            <div className="max-w-[770px] mx-auto py-28">
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
                <div className="loc-dt-table flex flex-col md:flex-row justify-between">
                        <div className="loc-dt-box md:w-[48%]"> 
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 lg:py-3 md:text-lg ">
                                <div className="loc-dt-icon w-[8%]"> 
                                    <img src="/assets/svg/event-icon-pin.svg"></img>
                                </div>
                                <div className="loc-dt-text text-[#232323]"> 
                                    <p>3681 Palisades Center Dr, West Nyack, NY 10994, United States</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-watch.svg"></img>
                                </div>
                                <div className="loc-dt-text text-[#232323] md:text-lg"> 
                                    <p>Open. Close</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-phone.svg"></img>
                                </div>
                                <div className="loc-dt-text text-[#232323] md:text-lg"> 
                                    <p>
                                    <a className="md:text-lg" href="tel:+1 845-208-2919">+1 845-208-2919</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="loc-dt-box md:w-[48%]"> 

                        <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-email.svg"></img>
                                </div>
                                <div className="loc-dt-text"> 
                                    <p>
                                        <a className="md:text-lg" href="mailto:store101@allinadventures.com">store101@allinadventures.com</a>
                                        </p>
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-parking.svg"></img>
                                </div>
                                <div className="loc-dt-text md:text-lg"> 
                                    <p>Car Parking Available</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 border-b border-[#D2C6AA] py-2 lg:py-3">
                                <div className="loc-dt-icon"> 
                                    <img src="/assets/svg/event-icon-chair.svg"></img>
                                </div>
                                <div className="loc-dt-text md:text-lg"> 
                                    <p>Wheelchair Accessibility</p>
                                </div>
                            </div>


                        </div>  

                </div>

                <div className="loc-notice mt-4 md:mt-8"> 
                                             
                                             <div className="flex  lg:text-lg text-[#424242] mt-4 justify-between">
                                                <div className="mt-[6px] -[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#424242] mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">Our store is located on the 3rd floor food court level, just across the hall from 5 Below store.</div>
                                             </div>
                                             

                                             
                </div>
                <div className="loc-cont flex justify-center mt-8">

                    <Link href="/albany-ny/contact">
                        <a className="uppercase text-lg font-medium text-white bg-red-600 py-3 px-10 rounded-full">Contact store</a>
                    </Link>

                </div>
                
             </div>
        </div>
    )
}

export default LocationDetails