import { FaAngleDown,FaAngleRight,FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";

const ThankYouBox=(props)=>{

    return(
        <div className="thank-sec relative bg-cover bg-black" style={
            {
                backgroundImage :  "linear-gradient(65deg,rgba(0, 0, 0,.4),rgba(0, 0, 0,.3)),url('/assets/svg/pyescape-bg.svg')"
            }}>
           <div className=" max-w-[900px] mx-auto py-20 md:py-24 lg:py-28 relative z-30">
                <div className="px-4 py-4 rounded-md thank-box">
                        <div className="thank-head text-center">
                                <h1 className="thn-title golden-text drop-shadow-lg text-5xl md:text-7xl font-extrabold font-os">THANK YOU</h1>
                                <h2 className="text-[#aaaaaa] text-lg md:text-xl mt-4">Your submission has been recieved</h2>
                                <h2 className="text-[#aaaaaa] text-lg md:text-xl mt-1">We will be in touch and contact you soon</h2>

                        </div>
                        <div className="thank-mid text-center mt-8">
                            <h3 className="text-3xl golden-text font-semibold mb-4">For more info </h3>
                            <div className="text-center text-[#aaaaaa]">
                                    <a className="block md:text-lg hover:text-[#FFEFCD]" href="tel:+18445025546"> <span className="md:text-xl">Call us :</span> <span className="underline underline-offset-4">+1(844) 502-5546</span> </a>
                                    <a className="mt-1 block md:text-lg hover:text-[#FFEFCD]" href="mail:custsvc@allinadventures.com"><span className="md:text-xl">Email us :</span > <span className="underline underline-offset-4">custsvc@allinadventures.com</span></a> 
                             </div>
                             <div className="flex justify-center space-x-4 thank-social-box mt-4"> 
                                   
                                        <a target="_blank" href="https://www.facebook.com/allinadventure/" className='text-gray-500 hover:text-gold text-4xl md:text-5xl'><FaFacebookSquare/></a>
                              
                                        <a target="_blank" href="https://www.linkedin.com/company/11547229/" className='text-gray-500 hover:text-gold text-4xl md:text-5xl'><FaLinkedin/></a>
                                   
                                        <a target="_blank" href="https://www.instagram.com/all_in_adventures/" className='text-gray-500 hover:text-gold rounded text-4xl md:text-5xl'><FaInstagramSquare/></a>
                                    
                                        <a target="_blank" href="https://twitter.com/AllinAdventure" className='text-gray-500 hover:text-gold text-4xl md:text-5xl'><FaTwitterSquare/></a>
                                    
                             </div>
                        </div>
                        <div className="thank-bottom grid grid-cols-1 md:grid-cols-3  gap-y-4 md:gap-y-0 md:gap-x-4 mt-16">
                            <a href="/activities" className="group thank-link-box relative">
                                <img src="/assets/inperson-escape-games-thanks.jpg"></img>
                                <div className="py-4 flex items-center justify-center bg-[#231800]">
                                        <p className="text-[#eeeeee] text-xl font-medium text-center group-hover:text-gold">
                                            VIEW ALL <br></br>ACTIVITIES                                            
                                        </p>
                                </div>

                            </a>
                            <a href="/events" className="group thank-link-box relative">
                                    <img src="/assets/escape-games-events-thanks.jpg"></img>
                                   
                                     <div className="py-4 flex items-center justify-center bg-[#231800]">
                                        <p className="text-[#eeeeee] text-xl font-medium text-center group-hover:text-gold">
                                             VIEW ALL <br></br>EVENTS                                              
                                        </p>
                                     </div>
                            </a>
                            <a href="/virtual-games" className="group thank-link-box relative">
                                     <img src="/assets/virtual-escape-games-thanks.jpg"></img>
                                     
                                     <div className="py-4 flex items-center justify-center bg-[#231800]">
                                        <p className="text-[#eeeeee] text-xl font-medium text-center group-hover:text-gold">
                                            VIEW ALL <br></br>VIRTUAL GAMES                                               
                                        </p>
                                     </div>
                            </a>
                        </div>
                </div>
            </div>
        </div>
       
    )
}

export default ThankYouBox