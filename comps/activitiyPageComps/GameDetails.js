import GameTitleSeparator from "../util/GameTitleSeparator"
import GameDtBtn from "../util/GameDtBtn"
import { ImGift } from "react-icons/im"

const GameDetails=(props)=>{

    return(
        <div className="game-details relative " style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }} > 
            <div className=" w-full absolute top-0 left-0">
                    <img className="w-full" src="/assets/game-home-or1.jpg"></img>
                 </div>
            <div className="content-container-game max-w-7xl mx-auto pt-16 md:pt-24 lg:pt-32 px-4 relative z-30"> 
            {/*=========== game story=====*/}
                <div className="game-dt-row flex flex-col md:flex-row items-center justify-between md:px-4">
                        <div className="gme-dt-col order-2 md:order-1 md:w-[49%] lg:w-[45%]"> 
                            <div className="game-dt-title">
                                <p className="md:text-lg text-[#938056] md:mb-1 uppercase">{props.activityname}</p>
                                <GameTitleSeparator title="YOUR BACK STORY" color="golden-text" weight="font-bold"></GameTitleSeparator>

                            </div>
                            <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">{props.activitydata.story}</p>
                            </div>
                            <div className="game-dt-link mt-4 md:mt-4 lg:mt-6"> 
                                    <GameDtBtn  label="I'VE READ ENOUGH! BOOK NOW" color="golden-text" weight="font-bold"/>
                            </div>
                        </div>
                        <div className="game-dt-col md:w-[49%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2"> 
                                <img src={props.activitydata.storyimg}></img>
                        </div>
                 </div>
            {/*=========== game story=====*/}
            {/*=========== game scene=====*/}
            <div className="game-dt-row flex flex-col md:flex-row items-center justify-between  md:px-4 py-12 md:py-16 lg:py-20">
                     <div className="game-dt-col md:w-[48%] lg:w-[45%]  mb-4 md:mb-0 "> 
                                <img src={props.activitydata.sceneimg}></img>
                        </div>
                        <div className="gme-dt-col md:w-[48%] lg:w-[45%]"> 
                            <div className="game-dt-title">
                            <p className="md:text-lg text-[#938056] md:mb-1 uppercase">{props.activityname}</p>
                                <GameTitleSeparator title="THE SCENE" color="golden-text" weight="font-bold"></GameTitleSeparator>

                            </div>
                            <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">{props.activitydata.scene}</p>
                            </div>
                            <div className="game-dt-link mt-4 md:mt-4 lg:mt-6"> 
                                    <GameDtBtn label="DON'T GIVE IT AWAY! BOOK NOW" />
                            </div>
                        </div>
                        
                 </div>
            {/*=========== game scene=====*/}
            {/*=========== game mission=====*/}
            <div className="game-dt-row flex flex-col md:flex-row items-center justify-between md:px-4">
                        <div className="gme-dt-col order-2 md:order-1 md:w-[48%] lg:w-[45%]"> 
                            <div className="game-dt-title">
                            <p className="md:text-lg text-[#938056] md:mb-1 uppercase">{props.activityname}</p>
                                <GameTitleSeparator title="YOUR MISSION" color="golden-text" weight="font-bold"></GameTitleSeparator>

                            </div>
                            <div className="game-dt-desc mt-4 md:mt-4 lg:mt-6">
                                <p className="text-[#464646] md:text-[18px] lg:text-[20px]">{props.activitydata.mission}</p>
                            </div>
                            <div className="game-dt-link mt-4 md:mt-4 lg:mt-6"> 
                                    <GameDtBtn  label="LET ME AT EM! BOOK NOW" />
                            </div>
                        </div>
                        <div className="game-dt-col md:w-[48%] lg:w-[45%] order-1 mb-4 md:mb-0 md:order-2"> 
                        <img src={props.activitydata.missionimg}></img>
                        </div>
                 </div>
            {/*=========== game story=====*/}
            
            </div>


        </div>
    )
}

export default GameDetails