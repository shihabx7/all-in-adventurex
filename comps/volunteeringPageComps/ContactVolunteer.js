import { FiChevronDown,FiMapPin } from "react-icons/fi";
import GameTitleSeparator from "../util/GameTitleSeparator";
const ContactVolunteer=()=>{

    const showVolunteeringMenu=()=>{
        document.getElementById('volunteeringdloc').classList.remove('hidden')
    }

    return(
        <div className="fran-tes bg-cover" style={{backgroundImage:"url('/assets/game-dt-bg.jpg')"}}>
            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28">
                <div className="v-help flex flex-col md:flex-row justify-between items-center space-x-0 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">

                    <div className="w-full md:w-1/2">
                        <div className="text-center md:text-left">

                        
                         <div className="section-title-sep mt-4 md:mt-0 inline-block md:block mx-auto md:mx-0">
                            <p className="text-lg text-[#938056] uppercase">Volunteering</p>
                            <GameTitleSeparator title="WANT OUR HELP?" color="golden-text" weight="font-bold"/>    
                         </div>
                         </div>
                         <div className="v-gam-list mt-4 md:mt-0">
                                <ul className="star-list pl-6">
                                    <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                                    Reach out to your local All In Adventures through the store email. Find your location information by clicking "CHOOSE YOUR LOCATION"
                                    </li>
                                    <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                                    After working with the store to see if we are a right fit to help out, the store will send you the form to fill out officially requesting our help!
                                    </li>
                                    <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                                    Keep in mind, our teams are smaller so, in most cases, we will only be able to offer one or two sets of hands at any time. However, this won't stop us from going ALL IN!
                                    </li>
                                    <li className="lg:text-[20px] text-[#464646] my-3 lg:my-4">
                                    After receiving your request, our team members will then help you prepare and execute your event - anything from setup to clean up!
                                    </li>
                                </ul>

                         </div>
                    </div>
                    <div className="w-full md:w-1/2">
                            <img src="assets/allinadventur-volunteering.jpg"></img>
                    </div>

                </div>
                <div className="max-w-[640px] mx-auto text-center mt-8 md:mt-12 lg:mt-16">
                    <h2 className="mb-8 md:mb-12 golden-text text-3xl md:text-4xl font-os font-bold">CONTACT YOUR LOCAL ALL IN ADVENTURES</h2>
                    <button onClick={showVolunteeringMenu} className="rounded-full mx-auto text-center py-3 md:py-3 lg:py-4 px-4 md:px-8 lg:px-10 flex justify-between items-center space-x-8 md:space-x-12 lg:space-x-16 bg-red-600 hover:bg-red-700 text-white uppercase">
                        <div className="flex space-x-2 items-center">
                        
                             <span className="text-xl"><FiMapPin/></span>
                            <span className="lg:text-lg">CHOOSE YOUR LOCATION</span>
                        </div>
                        <div>
                            <span className="lg:text-2xl"><FiChevronDown/></span>
                            
                        </div>

                    </button>
                    <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8  text-gray-700">For more information, email the local store.</p>

                </div>

            </div>
        </div>
    )
}

export default ContactVolunteer