import Image from 'next/image'
import LocationBtn from './util/LocationBtn';

import { FaAngleDown,FaAngleRight,FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";
import Script from 'next/script'
import Link from "next/link"
import { useLoadScript } from "@react-google-maps/api"
import MapwithInfo from './footercomps/MapwithInfo'
import { FiExternalLink } from "react-icons/fi";
import UseFullLinks from './footercomps/UseFullLinks';
import FooterLocationsLink from './footercomps/FooterLocationsLink';
import FooterLocationsLinkX from './footercomps/FooterLocationsLinkX';



const Footer=(props)=>{

    
     const FooterMap=()=> {
        const { isLoaded } = useLoadScript({
          googleMapsApiKey: "AIzaSyCYSGDPwfMMqKRb7ApqkuH3d5YsMjLiEiY" // Add 
        });
      
        return isLoaded ? <MapwithInfo/> : null;

        //return isLoaded ? <div className='text-white'>Map loaded</div> : null;
      }

    return(
        <>
        <footer className="bg-esc-black">
                <div className="max-w-7xl mx-auto px-4"> 
                    <div className="footer-info-row max-w-[850px]  mx-auto pt-20">
                        <div className="footer-logo text-center">
                            <img className='max-w-[120px] mx-auto' src="/assets/svg/logo.svg"></img>
                            {/* svg image will be added */}
                        </div>
                        <div className='footer-info text-center'>
                            <h3 className='golden-text pt-6 font-os font-bold text-3xl md:text-3xl lg:text-4xl'>ALL IN ADVENTURES</h3>
                            <p className='text-gray-300 md:text-lg pt-4'>All In Adventures (formerly Mystery Room) 
                                        is one of the pioneers in bringing escape rooms to the United States
                                        and now operates in {props.totallocations? props.totallocations:"26"} locations. Established in 2014 and a registered
                                        franchise brand since 2020, All In Adventures has gained vast industry experience through our popular Escape Room, Game Show Room, Beat the Seat, and Axe Throwing games.</p>
                                        <p className='text-gray-300 md:text-lg pt-4 pb-8'>We're your one-stop shop for any private event. 
                                        We have you covered for birthday parties, team building, corporate events, holiday parties, 
                                        bachelor or bachelorette parties… and so much more!</p>
                            <div className='max-w-[400px] mx-auto'>
                            <LocationBtn location={props.location} borderbg='bg-red-600' borderbghover='bg-red-900' innerbg='bg-[#111111]' innerborder='border-[#111111]' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-white"/>

                            </div>
                            

                        </div>

                    </div>
                    {/*========================================= map  added================ */}
                    <div className='footer-map-row text-center'> 
                        <h3 className='golden-text py-8 font-os font-bold text-2xl md:text-3xl lg:text-3xl'>{props.totallocations? props.totallocations:"25"} LOCATIONS IN THE U.S.</h3>

                        <div className='footer-map'>
                          {
                            FooterMap()
                          }
                            {/* map will be added */}
                        </div>
                    
                    </div>
                    {/*========================================= map added================ */}
                    
                          {
                            
                            props.locationlist &&
                            <FooterLocationsLink locationlist={props.locationlist}/>
                          }
                          {
                            !props.locationlist &&
                            <div className='footer-location-row flex-col md:flex-row flex justify-between py-8'> 
                                 <FooterLocationsLinkX/>
                            </div>
                          }
                            
                   

                    {/*========================================= footer copyright row================ */}
                        <div className='footer-copy-row pt-8'> 
                            
                          {/*========================================= usefull link end================ */}
                          {
                            props.locationslug &&
                            <UseFullLinks locationslug={props.locationslug}/>
                          }
                          {
                            !props.locationslug &&
                            <UseFullLinks/>
                          }
                           
                    {/*========================================= usefull link end================ */}
                            <div className='hidden adv-btn border-btn rounded-full mx-auto max-w-xs bg-dark-red hover:bg-golden-alt'> 
                                <div className='footer-btn justify-center  bg-esc-black flex space-x-3 shrink rounded-full text-white p-3 items-center hover:shadow-md'> 
                                     <span className="text-xs font-medium md:text-base">CONTACT US</span>
                                </div>
                            </div>
                       {/*========================================= footer social ================ */}
                        <div className='footeter-social-box text-center pt-8'> 
                          <h3 className='golden-text font-xl font-bold text-center'>FOLLOW US ON SOCIAL</h3>
                         <div className='social-icon-list-box mt-4 flex justify-center space-x-3 md:space-x-6'>
                         <a target="_blank" href="https://www.facebook.com/allinadventure/" className='text-gray-500 hover:text-gold text-4xl'><FaFacebookSquare/></a>
                              
                              <a target="_blank" href="https://www.linkedin.com/company/11547229/" className='text-gray-500 hover:text-gold text-4xl'><FaLinkedin/></a>
                         
                              <a target="_blank" href="https://www.instagram.com/all_in_adventures/" className='text-gray-500 hover:text-gold rounded text-4xl'><FaInstagramSquare/></a>
                          
                              <a target="_blank" href="https://twitter.com/AllinAdventure" className='text-gray-500 hover:text-gold text-4xl'><FaTwitterSquare/></a>
                         </div>

                        </div>
                       {/*========================================= footer social ================ */}     
                       {/*========================================= footer copy ================ */}    
                            <div className='copy-text text-center py-8'> 
                                <p className='text-[#858585] text-xs md:text-base'> &copy; Copyright All In Adventures | All Rights Reserved.</p>
                                <div className='term-policy flex justify-center space-x-2 items-center mt-2'> 
                                    <Link href="/privacy-policy"> 
                                        <a className='text-gray-600 hover-golden text-xs md:text-base'>Privacy policy</a>
                                    </Link>
                                    <div className=' text-gray-600 text-2xl'> 
                                        <span className='block w-1 h-1 rounded-full bg-gray-600'></span>
                                     </div>
                                     <Link href="/terms-and-conditions"> 
                                        <a className='text-gray-600 hover-golden text-xs md:text-base'>Terms of use</a>
                                    </Link>
                                </div>
                            </div>
                       {/*========================================= footer copy ================ */}    

                        </div>

                     {/*========================================= footer copyright row================ */}

                </div>
                <div className='dgency-row py-3 bg-dgency-purple text-center text-dgency-light text-xs md:text-sm flex justify-center space-x-1 items-center'>
                       <p>Website designed, developed and marketed by</p>
                       
                    
                    <a href="https://dgency.com/" target="_blank" className='dgency-copy text-gray-50 flex space-x-2 items-center'><span>Dgency.com</span> <span className='md:text-lg'><FiExternalLink/></span></a>
                          
                       
                 </div>

        </footer>
        <Script src="/custom.js" />
        </>
    )
}

export default Footer;