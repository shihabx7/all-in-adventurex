import { FaPlay } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import Link from "next/link";
const WhatIsEscape=()=>{
    return(
        <div className="what-is-escape overflow-hidden">
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
                    <img class="w-full hidden md:block" src="/assets/vintage-paper.png"></img>
                    <img class="block md:hidden" src="/assets/vintage-paper-v.png"></img>
                    <div className="absolute what-is-container z-20 w-full h-full top-0 left-0 flex flex-col md:flex-row justify-center space-y-4 sm:space-y-8 md:space-y-0 md:justify-between items-center md:py-0 px-8 md:px-[10%]"> 
                          {/* content 1 */}
                          <div className="what-is content md:max-w-[48%] lg:max-w-[40%] text-center"> 
                            <h2 className=" text-lg md:text-xl lg:text-[24px] font-bold pb-1 md:pb-3 lg:pb-4"> WHAT IS ALL IN ADVENTURES?</h2>
                            <p className="text-sm md:text-base lg:text-lg">Once you complete your purchase you will be sent an email with the booking codes. 
                                When making your booking you can give.be sent an email with the booking codes. When making your booking.</p>
                             <div className="video-play-btn flex justify-center my-3 md:my-6 lg:my-8"> 
                                        <div className="paly-btn play-lt flex space-x-2 items-center py-3 md:py-4  px-6 md:px-6 lg:px-8 rounded font-semibold">
                                                <span className="text-lg md:text-xl lg:text-2xl"> <FaPlay/> </span>
                                                <span className="text-sm md:text-base">PLAY TEASER VIDEO</span>
                                            </div> 
                            </div>
                            <div className="view-all flex justify-center">
                                 <Link href="#"> 
                                  <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-600 hover:text-red-700"><span>LEARN MORE</span> <FaAngleRight/></a>
                                 </Link>
                          </div>

                        </div>
                        {/* content 2 */}
                        <div className="what-is what-is-2 content md:max-w-[48%] lg:max-w-[40%] text-center"> 
                            <h2 className="text-lg md:text-xl lg:text-[24px] font-bold pb-1 md:pb-3 lg:pb-4"> WHAT IS ALL IN ADVENTURES?</h2>
                            <p className="text-sm md:text-base lg:text-lg">Once you complete your purchase you will be sent an email with the booking codes. 
                                When making your booking you can give.be sent an email with the booking codes. When making your booking.</p>
                             <div className="video-play-btn flex justify-center my-3 md:my-6 lg:my-8"> 
                                        <div className="paly-btn play-rt flex space-x-2 items-center py-3 md:py-4  px-6 md:px-6 lg:px-8 rounded font-semibold">
                                                <span className="text-lg md:text-xl lg:text-2xl"> <FaPlay/> </span>
                                                <span className="text-sm md:text-base">PLAY TEASER VIDEO</span>
                                            </div> 
                            </div>
                            <div className="view-all flex justify-center">
                                 <Link href="#"> 
                                  <a className="flex lg:text-lg justify-center space-x-2 items-center text-red-600 hover:text-red-700"><span>LEARN MORE</span> <FaAngleRight/></a>
                                 </Link>
                          </div>

                        </div>
                    </div>
                 </div>
             </div> 

        </div>
    )
}

export default WhatIsEscape;