import Image from 'next/image'
import LocationBtn from './util/LocationBtn';

import { FaAngleDown,FaAngleRight,FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";
import Script from 'next/script'
import Link from "next/link"
import { useLoadScript } from "@react-google-maps/api";
import Mapwithinfo from './footercomps/Mapwithinfo';

const Footer=(props)=>{

    
     const FooterMap=()=> {
        const { isLoaded } = useLoadScript({
          googleMapsApiKey: "AIzaSyCYSGDPwfMMqKRb7ApqkuH3d5YsMjLiEiY" // Add your API key
        });
      
        return isLoaded ? <Mapwithinfo/> : null;
      }

    return(
        <>
        <footer className="bg-esc-black">
                <div className="max-w-7xl mx-auto px-4"> 
                    <div className="footer-info-row max-w-lg  mx-auto pt-20">
                        <div className="footer-logo text-center">
                            <img className='max-w-[120px] mx-auto' src="/assets/svg/logo.svg"></img>
                            {/* svg image will be added */}
                        </div>
                        <div className='footer-info text-center'>
                            <h3 className='golden-text pt-6 font-os font-bold text-3xl md:text-3xl lg:text-4xl'>ALL IN ADVENTURES</h3>
                            <p className='text-[#7b7b7b] md:text-lg pt-4 pb-8'>Select the number of participants, fill out the details and purchase the gift card. 
                            The details and purchase the gift card also select the number. 
                            The details and purchase the gift card.</p>
                            <div className='max-w-[400px] mx-auto'>
                            <LocationBtn borderbg='bg-red-600' borderbghover='bg-red-900' innerbg='bg-[#111111]' innerborder='border-[#111111]' innerbghover='bg-grey-200' innerborderhover='border-gray-200' color="text-white"/>

                            </div>
                            

                        </div>

                    </div>
                    {/*========================================= map  added================ */}
                    <div className='footer-map-row text-center'> 
                        <h3 className='golden-text py-8 font-os font-bold text-2xl md:text-3xl lg:text-3xl'>30 LOCATIONS IN THE US</h3>

                        <div className='footer-map'>
                          {
                            FooterMap()
                          }
                            {/* map will be added */}
                        </div>
                    
                    </div>
                    {/*========================================= map added================ */}
                    <div className='footer-location-row flex-col md:flex-row flex justify-between py-8'> 
                    {/*========================================= footer location column 1================ */}
                        <div className='footer-loc-col w-full md:w-auto'> 
                            <div className='footer-loc-col-box'> 
                                <div className='footer-loc-head'> 
                                  
                                        <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>NEW YORK</h3>
                                   
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm lg:text-base'>Albany Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Buffalo Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Middletown Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Syracuse Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Watertown Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>West Nyack Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Yorktown Heights Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                </div>
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                     <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>OHIO</h3>
                                  
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Columbus Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Mentor Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Dayton Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                </div>
                            </div>
                                
                        </div>
                    {/*========================================= footer location column 1 end================ */}
                    {/*========================================= footer location column 2================ */}
                        <div className='footer-loc-col w-full md:w-auto pt-6 md:pt-0'> 
                            <div className='footer-loc-col-box'> 
                                <div className='footer-loc-head'> 
                                    <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>MASSACHUSETTS</h3>
                                    
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Hadley Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Holyoke Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Kingston Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>N. Attleborough Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Yorktown Heights Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                </div>
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                 <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>MARYLAND</h3>
                                    
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Bowie Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>White Marsh Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                           
                                </div>
                                
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                    
                                  <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>VIRGINIA</h3>
                                  
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Roanoke Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                           
                                </div>
                                
                            </div>
                                
                        </div>
                    {/*========================================= footer location column 2 end================ */}
                    {/*========================================= footer location column 3================ */}
                        <div className='footer-loc-col w-full md:w-auto pt-6 md:pt-0'> 
                            <div className='footer-loc-col-box'> 
                                <div className='footer-loc-head'> 
                                     
                                <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>CONNECTICUT</h3>
                                    
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Milford Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Manchester Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Waterbury Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                    <Link href="#"> 
                                        <a className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold footer-link font-bold'>NORTH CAROLINA</a>
                                    </Link>
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Raleigh Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Winston Salem Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                   
                                </div>
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>TEXAS</h3>
                                   
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Austin Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                   
                                </div>
                            </div>
                                
                        </div>
                    {/*========================================= footer location column 3 end================ */}
                    {/*========================================= footer location column 4================ */}
                        <div className='footer-loc-col w-full md:w-auto pt-6 md:pt-0'> 
                            <div className='footer-loc-col-box'> 
                                <div className='footer-loc-head'> 
                                <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>NEW JERSEY</h3>
                                    
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>East Brunswick Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Rockaway Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Woodbridge Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                
                                  <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>PENNSYLVANIA</h3>
                                    
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Selinsgrove Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Bensalem Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                </div>
                                
                            </div>
                            <div className='footer-loc-col-box mt-8'> 
                                <div className='footer-loc-head'> 
                                   <h3 className='text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold'>GEORGIA</h3>
                                    
                                </div>
                                <div className='footer-loc-link-box mt-6'> 
                                    <Link href="#"> 
                                        <a className='text-gray-400 footer-link flex space-x-2 items-center my-2 text-sm  lg:text-base'>Lawrenceville Escape Room<span><FaAngleRight/></span></a>
                                    </Link>
                                    
                                    
                                </div>
                                
                            </div>
                                
                        </div>
                    {/*========================================= footer location column 4 end================ */}
                    </div>

                    {/*========================================= footer copyright row================ */}
                        <div className='footer-copy-row pt-8'> 
                            <h3 className='golden-text font-xl font-bold text-center'>USEFUL LINKS</h3>
                          {/*========================================= usefull link end================ */}
                            <div className='usefull-link-box block text-center md:flex justify-between items-center py-4 pb-0 md:py-10 lg:py-12'> 
                                <div className='usefull-link text-gray-400 inline-block pr-2 md:pr-0'> 
                                    <Link href="/about"> 
                                        <a className='text-gray-400  text-sm  lg:text-base'>About</a>
                                    </Link>
                                </div>
                                <div className='hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/faqs"> 
                                        <a className='text-gray-400 text-sm  lg:text-base '>FAQ’s</a>
                                    </Link>
                                </div>
                                <div className='hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/carrers"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Carrers</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/franchise"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Franchise</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/leader-board"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Leader Board</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/gallery"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Gallery</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/team-building"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Team Building</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/offers"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Offers</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/events"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Events</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/gift-card"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Gift Card</a>
                                    </Link>
                                </div>
                                <div className=' hidden lg:block text-gray-400 text-2xl'> 
                                    <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                </div>
                                <div className='usefull-link inline-block px-3 md:-px-0'> 
                                    <Link href="/reviews"> 
                                        <a className='text-gray-400 text-sm  lg:text-base'>Reviews</a>
                                    </Link>
                                </div>
                                
                            </div>
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
                            <Link href="#"> 
                                <a className='text-gray-500 hover:text-gold text-3xl'><FaFacebookSquare/></a>
                            </Link>
                            <Link href="#"> 
                                <a className='text-gray-500 hover:text-gold text-3xl'><FaLinkedin/></a>
                            </Link>
                            <Link href="#"> 
                                <a className='text-gray-500 hover:text-gold rounded text-3xl'><FaInstagramSquare/></a>
                            </Link>
                            <Link href="#"> 
                                <a className='text-gray-500 hover:text-gold text-3xl'><FaTwitterSquare/></a>
                            </Link>
                         </div>

                        </div>
                       {/*========================================= footer social ================ */}     
                       {/*========================================= footer copy ================ */}    
                            <div className='copy-text text-center py-8'> 
                                <p className='text-[#858585] text-xs md:text-base'> &copy;Copyright All In Adventures | All Rights Reserved.</p>
                                <div className='term-policy flex justify-center space-x-2 items-center mt-2'> 
                                    <Link href="/privacy-policy"> 
                                        <a className='text-gray-600 hover-golden text-xs md:text-base'>Privacy policy</a>
                                    </Link>
                                    <div className=' text-gray-600 text-2xl'> 
                                        <span className='block w-1 h-1 rounded-full bg-gray-600'></span>
                                     </div>
                                     <Link href="/terms-of-use"> 
                                        <a className='text-gray-600 hover-golden text-xs md:text-base'>Terms of use</a>
                                    </Link>
                                </div>
                            </div>
                       {/*========================================= footer copy ================ */}    

                        </div>

                     {/*========================================= footer copyright row================ */}

                </div>
                <div className='dgency-row py-3 bg-dgency-purple text-center text-dgency-light text-xs md:text-sm'>
                        Website designed, developed and marketed by 
                        <span className='ml-2'> 
                            <Link href="https://dgency.com"> 
                                <a>dgency.com</a>
                            </Link>
                        </span>
                 </div>

        </footer>
        <Script src="/custom.js" />
        </>
    )
}

export default Footer;