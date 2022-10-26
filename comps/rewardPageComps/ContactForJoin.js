import { FiChevronDown,FiMapPin } from "react-icons/fi";
import RewardsLoc from "./RewardsLoc";

const ContactForJoin=(props)=>{
    const showRewardMenu=()=>{
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('overflow-hidden')
        document.getElementById('rewardloc').classList.remove('hidden')
    }

    return(
        <>
        <div id="rewardloc" className="rewardloc z-[10000] fixed w-screen h-screen top-0 left-0 overflow-scroll hidden">

            <RewardsLoc locationlist={props.locationlist}/>
        </div>
        <div className="fran-tes bg-cover" id="ready-to-signup" style={{backgroundImage:"url('/assets/franchise-slider-bg.jpg')"}}>
            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28">
                <div className="max-w-[640px] mx-auto text-center">
                    <h2 className="mb-8 md:mb-12 golden-text text-3xl md:text-4xl font-os font-bold">READY TO SIGN UP?</h2>
                    <button onClick={showRewardMenu} className="rounded-full mx-auto text-center py-3 md:py-3 lg:py-4 px-4 md:px-8 lg:px-10 flex justify-between items-center space-x-8 md:space-x-12 lg:space-x-16 bg-red-600 hover:bg-red-700 text-white uppercase">
                        <div className="flex space-x-2 items-center">
                        
                             <span className="text-xl"><FiMapPin/></span>
                            <span className="lg:text-lg">CHOOSE YOUR LOCATION</span>
                        </div>
                        <div>
                            <span className="lg:text-2xl"><FiChevronDown/></span>
                            
                        </div>

                    </button>
                    <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8  text-gray-700">Start by selecting your location below. You'll be redirected to fivestars.com site for your selected All In Adventures location.</p>

                </div>

            </div>
        </div>
        </>
    )
}

export default ContactForJoin