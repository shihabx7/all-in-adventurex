import TitleSeparator from "../util/TitleSeparator";
import { FaPlay } from "react-icons/fa"



const Howtobook=()=>{

    return(
        <div className="htb relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden">
            <div className="htb-bg-icon htb-bg-1 absolute">
                <img src="/assets/calendar.png"></img>
            </div>
            <div className="htb-bg-icon htb-bg-2 absolute">
                <img src="/assets/Compas-brown.png"></img>
            </div>
            <div className="htb-bg-icon htb-bg-3 absolute">
              <img src="/assets/Navigation.png"></img>
            </div>
            <div className="htb-bg-icon htb-bg-4 absolute">
                 <img src="/assets/Skull.png"></img>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="hbt-container pt-4 md:pt-16 relative z-20">
                <TitleSeparator title='HOW TO BOOK AN ADVENTURE' color='golden-text' weight='font-bold'/>
                <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-16">
                    <p className="text-gray-700 md:px-8">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                </div>
                {/* How to book 3 steps */}
                <div className='htb-steps flex justify-center items-center max-w-4xl mx-auto'>
                    <div className="htb-step"> 
                        <div className="htb-icon"> 
                         <img src="/assets/svg/choose-location.svg"></img>
                        </div>
                        <h3 className="golden-text text-3xl font-bold mt-2">1</h3>
                        <div className='htb-text text-gray-700 mt-2 mb-12 font-medium'>CHOOSE LOCATION </div>
                    </div>

                    <div className="htb-step-line"> 
                        <img src="/assets/svg/htb-line-1.svg"></img>
                    </div>
                    
                    <div className="htb-step"> 
                    <div className="htb-icon"> 
                         <img src="/assets/svg/select-game.svg"></img>
                        </div>
                        <h3 className="golden-text text-3xl font-bold mt-2">2</h3>
                        <div className='htb-text text-gray-700 mt-2 mb-12 font-medium'>SELECT YOUR GAME </div>
                    </div>

                    <div className="htb-step-line"> 
                    <img src="/assets/svg/htb-line-2.svg"></img>
                    </div>

                    <div className="htb-step"> 
                    <div className="htb-icon"> 
                         <img src="/assets/svg/pick-date.svg"></img>
                        </div>
                        <h3 className="golden-text text-3xl font-bold mt-2">3</h3>
                        <div className='htb-text  text-gray-700 mt-2 mb-12 font-medium'>PICK <br/>DATE &amp; TIME </div>
                    </div>
                </div>
                {/* How to book 3 steps  end*/}
                <div className="video-play-btn flex justify-center mt-4 mb-4 md:mb-12"> 
                    <div className="paly-btn flex space-x-2 items-center py-4 px-8 rounded font-semibold">
                            <span className="text-2xl"> <FaPlay/> </span>
                            <span>PLAY TEASER VIDEO</span>
                        </div> 
                </div>
                </div>    
             </div>

        </div>
    )
}

export default Howtobook;