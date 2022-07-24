import Link from "next/link";
import { FaAngleRight,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa"

const LocationListView=(props)=>{

    return (
        <div
        className="locationlist bg-[#FFF9EB]"
        > 
            <div className="location-img">
                <img src="/assets/locationlist-img.jpg"></img>
            </div>
            <div className="locationview-info py-4 px-4"> 
                <div className="location-name"> 
                    <div className="flex space-x-1 items-center text-2xl lg:text-3xl font-medium">
                        <h3 className="golden-text">Albeny, NY</h3> <p className="text-gold"><FaAngleRight/></p>
                    </div>
                    <div className="text-lg text-[#4a4a4a]">Crossgates Mall</div>
                </div>
                <div className="location-contact-info py-2 mt-2">
                        <div className="location-contact-link mb-2"> 
                            <Link href="#"> 
                                <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 ">
                                     <span className="mt-[4px] text-blue-600"><FaMapMarkerAlt/></span>
                                     <p className="hover:underline underline-offset-4"><span className="text-blue-600 font-medium">Direction: </span>1 Crossgates Mall Rd D212, Albany, NY 12203, USA </p>
                                </a>
                            </Link>
                        </div>
                        <div className="location-contact-link mb-2"> 
                            <Link href="tel:(518) 240-8243"> 
                                <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 ">
                                     <span className="mt-[4px] text-[#424242]"><FaPhoneAlt/></span>
                                     <p className="hover:underline underline-offset-4"><span className="text-[#424242] font-medium">Phone: </span>(518) 240-8243 </p>
                                </a>
                            </Link>
                        </div>
                        <div className="location-contact-link "> 
                            <Link href="mailto:Store103@Allinadventures.com"> 
                                <a className="flex space-x-2 text-[#7b7b7b] hover:text-blue-600 ">
                                     <span className="mt-[4px] text-[#424242]"><FaEnvelope/></span>
                                     <p className="hover:underline underline-offset-4"><span className="text-[#424242] font-medium">Email: </span>Store103@Allinadventures.com</p>
                                </a>
                            </Link>
                        </div>

                </div>


            </div>
            <div className="locationview-link px-4 pb-6"> 
                    <div className="flex justify-between">
                        <Link href="#">
                                <a className="w-[46%] rounded py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-center text-white fonr-medium">BOOK GAMES</a>
                         </Link>
                         <Link href="#">
                                <a className="w-[46%] rounded py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-center text-white fonr-medium">BOOK GAMES</a>
                         </Link>

                    </div>

            </div>
        </div>
    )

}
export default LocationListView;