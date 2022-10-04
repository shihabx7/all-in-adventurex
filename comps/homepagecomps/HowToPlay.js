import TitleSeparator from "../util/TitleSeparator";
import { FaPlay } from "react-icons/fa"



const HowToPlay=(props)=>{

    return(
        <div className="htb relative py-16 md:py-20 lg:py-28 px-4 overflow-hidden" style={
            {
                backgroundImage :  "linear-gradient(65deg,rgba(255, 249, 235,.1),rgba(255, 249, 235,.2)),url('/assets/gridbg.jpg')"
            }}>
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
                <TitleSeparator title='HOW TO PLAY AN ESCAPE ROOM' color='golden-text' weight='font-bold'/>
                <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16">
                    <p className="text-gray-700 md:px-8">
                    Team up with your friends, family (including kids age 6+) or co-workers, select any of our 
                     {props.city && <> {props.city}</>} escape rooms and book your game.
                     While playing, use the clues and keys you find to solve the puzzles and make your escape before time runs out!
                    </p>
                </div>
                {/* How to book 3 steps */}
                <div className='htb-steps flex justify-btween mb-10 md:justify-center items-center max-w-4xl mx-auto'>
                    <div className="htb-step"> 
                        <div className="htb-icon"> 
                            <img src="/assets/svg/assemble-team.svg"></img>
                        </div>
                        <h3 className="golden-text text-3xl font-bold mt-2">1</h3>
                        <div className='htb-text text-gray-700 mt-2 mb-12 font-medium'>ASSEMBLE YOUR GAME </div>
                    </div>

                    <div className="htb-step-line"> 
                        <img className="hidden md:block" src="/assets/svg/htb-line-1.svg"></img>
                        <img className="md:hidden" src="/assets/svg/step-line-mb.svg"></img>
                    </div>
                    
                    <div className="htb-step"> 
                    <div className="htb-icon"> 
                         <img src="/assets/svg/choose-game.svg"></img>
                        </div>
                        <h3 className="golden-text text-3xl font-bold mt-2">2</h3>
                        <div className='htb-text text-gray-700 mt-2 mb-12 font-medium'>CHOOSE YOUR GAME </div>
                    </div>

                    <div className="htb-step-line"> 
                        <img className="hidden md:block" src="/assets/svg/htb-line-2.svg"></img>
                        <img className="md:hidden" src="/assets/svg/step-line-mb.svg"></img>
                    </div>

                    <div className="htb-step"> 
                    <div className="htb-icon"> 
                         <img src="/assets/svg/make-escape.svg"></img>
                        </div>
                        <h3 className="golden-text text-3xl font-bold mt-2">3</h3>
                        <div className='htb-text  text-gray-700 mt-2 mb-12 font-medium'>MAKE YOUR ESCAPE</div>
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

export default HowToPlay;