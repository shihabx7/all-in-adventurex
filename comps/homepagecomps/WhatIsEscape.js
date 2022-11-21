import { FaPlay } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import Link from "next/link";
const WhatIsEscape=()=>{
    return(
        <div className="what-is-escape overflow-hidden" style={
            {
                backgroundImage :  "url('/assets/map-bg.jpg')",
            }}>
            <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-32">
                <div className="paper-back-bg relative  lg:max-w-full px-4  mx-auto">
                      {/* ===========ornamental icon=============== */}
                    <div className="or-el or-el-1 absolute top-[-10%] left-[-6%]">
                        <img src="/assets/svg/vin-hill.svg"></img>
                    </div>
                    <div className="or-el or-el-2 absolute top-[12%] left-[-10%]">
                        <img src="/assets/svg/vin-skull-bomb.svg"></img>
                    </div>
                    <div className="or-el or-el-3 absolute top-[56%] left-[-11%]">
                        <img src="/assets/svg/vin-skull-cross.svg"></img>
                    </div>
                    <div className="or-el or-el-4 absolute top-[94%] left-[-6%]">
                        <img src="/assets/svg/vin-stear.svg"></img>
                    </div>
                    <div className="or-el or-el-5 absolute top-[-4%] right-[22%]">
                        <img src="/assets/svg/vin-cross.svg"></img>
                    </div>
                    <div className="or-el or-el-6 absolute top-[12%] right-[-8%]">
                        <img src="/assets/svg/vin-drum.svg"></img>
                    </div>
                    <div className="or-el or-el-7 absolute top-[52%] right-[-6%]">
                        <img className="max-w-[24px]" src="/assets/svg/vin-cross.svg"></img>
                    </div>
                    <div className="or-el or-el-8 absolute top-[90%] right-[-4%]">
                        <img className="max-w-[24px]" src="/assets/svg/vin-light-house.svg"></img>
                    </div>
                    <div className="or-el or-el-9 absolute top-[84%] right-[12%]">
                        <img src="/assets/svg/vin-treasure.svg"></img>
                    </div>
                    <div className="or-el or-el-10 absolute top-[104%] left-[28%]">
                        <img src="/assets/svg/vin-cross.svg"></img>
                    </div>
                      {/* ===========ornamental icon end=============== */}
                    <img className="w-full hidden md:block" src="/assets/vintage-paper.png"></img>
                    <img className="block md:hidden" src="/assets/vintage-paper-v.png"></img>
                    <div className="absolute what-is-container z-20 w-full h-full top-0 left-0 flex flex-col md:flex-row justify-center space-y-4 sm:space-y-8 md:space-y-0 md:justify-between items-center md:py-0 px-8 md:px-[10%]"> 
                          {/* content 1 */}
                          <div className="what-is content md:max-w-[49%] lg:max-w-[46%] text-center"> 
                            <h2 className=" text-[20px] md:text-[24px] lg:text-[28px] font-bold pb-1 md:pb-3 lg:pb-4">ABOUT ALL IN ADVENTURES</h2>
                            <p className="text-sm md:text-[18px] lg:text-[19px] lg:leading-8 md:leading-6 md:mt-4">At All In Adventures (formerly Mystery Room), we strive to be the leader in providing an interactive and engaging adventure through exceptional guest service, game experience and value.</p>
                             <div className="video-play-btn  justify-center my-3 md:my-6 lg:my-8 hidden"> 
                                    <div className=" paly-btn play-rt flex space-x-2 items-center py-3 md:py-4  px-6 md:px-6 lg:px-8 rounded font-semibold ">
                                                <span className="text-lg md:text-xl lg:text-2xl"> <FaPlay/> </span>
                                                <span className="text-sm md:text-base">PLAY TEASER VIDEO</span>
                                            </div> 
                            </div>
                            <div className="view-all flex justify-center mt-4 md:mt-8">
                                 
                                  <a href="/about" className="flex lg:text-lg justify-center space-x-2 items-center text-red-600 hover:text-red-700"><span>Learn more</span> <FaAngleRight/></a>
                                 
                          </div>

                        </div>
                        {/* content 2 */}
                        <div className="what-is what-is-2 content md:max-w-[49%] lg:max-w-[46%] text-center"> 
                            <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold pb-1 md:pb-3 lg:pb-4">WHAT IS AN ESCAPE ROOM</h2>
                            <p className="text-sm md:text-[18px] lg:text-[19px] lg:leading-8 md:leading-6 md:mt-4">An escape room is where 2-10 players team up with their friends, family or co-workers for an adrenaline filled 50-60 minute engaging experience. They must find hidden clues, solve puzzles, crack codes and escape.</p>
                             <div className="video-play-btn  justify-center my-3 md:my-6 lg:my-8 hidden"> 
                                        <div className="paly-btn play-rt flex space-x-2 items-center py-3 md:py-4  px-6 md:px-6 lg:px-8 rounded font-semibold">
                                                <span className="text-lg md:text-xl lg:text-2xl"> <FaPlay/> </span>
                                                <span className="text-sm md:text-base">PLAY TEASER VIDEO</span>
                                            </div> 
                            </div>
                            <div className="view-all flex justify-center mt-4 md:mt-8">
                                 
                                  <a href="/what-is-an-escape-room" className="flex lg:text-lg justify-center space-x-2 items-center text-red-600 hover:text-red-700"><span>Learn more</span> <FaAngleRight/></a>
                                
                          </div>

                        </div>
                    </div>
                 </div>
             </div> 

        </div>
    )
}

export default WhatIsEscape;