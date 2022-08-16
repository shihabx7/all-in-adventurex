import TitleSeparator from "../util/TitleSeparator"
import { FiChevronRight } from "react-icons/fi";
const Partner=()=>{

    return(
        <div className="buy-gift py-20 md:py-28  relative overflow-hidden" style={
            {
                backgroundImage :  "url('/assets/svg/gift-bg.svg'),linear-gradient(65deg,rgba(0, 0, 0,1),rgba(0, 0, 0,1))",
            }}> 
            <div className="gift-lt absolute top-0 left-0"> 
                <img src="/assets/gift-balon-bg.png"></img>
            </div>
            <div className="gift-rt absolute"> 
                <img src="/assets/Compas-brown.png"></img>
            </div>

            <div className="section-container max-w-7xl mx-auto relative z-30 px-4">
                    <div className="section-title">
                        <TitleSeparator title="IN THE MEDIA" color="golden-text" weight="font-bold" />
                        <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-100">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>

                    </div>
                <div className="partner-box">
                    {/**=====================partner-row 1----------------- */}
                    <div className="partner-row flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 justify-center ">

                        <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                            <div className="p-img min-h-[80px]">
                                <img className="mx-auto max-h-[100%]" src="/assets/partner-1.png"></img>
                            </div>
                            <div className="p-desc mt-2 text-center">
                                <p className="text-[#818181] mb-2">February 20, 2017</p>
                                <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                <span>Learn more</span><span><FiChevronRight/></span>
                                </a>
                            </div>
                        </div>
                        <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                            <div className="p-img min-h-[80px]">
                                <img className="mx-auto max-h-[100%]" src="/assets/partner-2.png"></img>
                            </div>
                            <div className="p-desc mt-2 text-center">
                                <p className="text-[#818181] mb-2">April 24, 2019</p>
                                <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                <span>Learn more</span><span><FiChevronRight/></span>
                                </a>
                            </div>
                        </div>
                        <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                            <div className="p-img min-h-[80px]">
                                <img className="mx-auto max-h-[100%]" src="/assets/partner-3.png"></img>
                            </div>
                            <div className="p-desc mt-2 text-center">
                                <p className="text-[#818181] mb-2">August 15, 2015</p>
                                <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                <span>Learn more</span><span><FiChevronRight/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                     {/**=====================partner-row----------------- */}
                     {/**=====================partner-row 2----------------- */}
                     <div className="partner-row flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 justify-center  mt-4 lg:mt-8">

                        <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                            <div className="p-img min-h-[80px]">
                                <img className="mx-auto max-h-[100%]" src="/assets/partner-4.png"></img>
                            </div>
                            <div className="p-desc mt-2 text-center">
                                <p className="text-[#818181] mb-2">Oct 29, 2019</p>
                                <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                <span>Learn more</span><span><FiChevronRight/></span>
                                </a>
                            </div>
                        </div>
                        <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                            <div className="p-img min-h-[80px]">
                                <img className="mx-auto max-h-[100%]" src="/assets/partner-5.png"></img>
                            </div>
                            <div className="p-desc mt-2 text-center">
                                <p className="text-[#818181] mb-2">September 7, 2017</p>
                                <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                <span>Learn more</span><span><FiChevronRight/></span>
                                </a>
                            </div>
                        </div>
                        <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                            <div className="p-img min-h-[80px]">
                                <img className="mx-auto max-h-[100%]" src="/assets/partner-6.png"></img>
                            </div>
                            <div className="p-desc mt-2 text-center">
                                <p className="text-[#818181] mb-2">September 11, 2017</p>
                                <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                <span>Learn more</span><span><FiChevronRight/></span>
                                </a>
                            </div>
                        </div>
                        </div>
                        {/**=====================partner-row 2 end----------------- */}
                        {/**=====================partner-row 3----------------- */}
                        <div className="partner-row flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 justify-center  mt-4 lg:mt-8">

                            <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                                <div className="p-img min-h-[80px]">
                                    <img className="mx-auto max-h-[100%]" src="/assets/partner-7.png"></img>
                                </div>
                                <div className="p-desc mt-2 text-center">
                                    <p className="text-[#818181] mb-2">March 5, 2018</p>
                                    <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                    <span>Learn more</span><span><FiChevronRight/></span>
                                    </a>
                                </div>
                            </div>
                            <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                                <div className="p-img min-h-[80px]">
                                    <img className="mx-auto max-h-[100%]" src="/assets/partner-8.png"></img>
                                </div>
                                <div className="p-desc mt-2 text-center">
                                    <p className="text-[#818181] mb-2">February 6, 2018</p>
                                    <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                    <span>Learn more</span><span><FiChevronRight/></span>
                                    </a>
                                </div>
                            </div>
                            <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                                <div className="p-img min-h-[80px]">
                                    <img className="mx-auto max-h-[100%]" src="/assets/partner-9.png"></img>
                                </div>
                                <div className="p-desc mt-2 text-center">
                                    <p className="text-[#818181] mb-2">December 17, 2017</p>
                                    <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                    <span>Learn more</span><span><FiChevronRight/></span>
                                    </a>
                                </div>
                            </div>
                            </div>
                        {/**=====================partner-row 3 end----------------- */}
                        {/**=====================partner-row 4----------------- */}
                        <div className="partner-row flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 justify-center  mt-4 lg:mt-8">

                            <div className="partner-item bg-[#111111] px-4 py-4 rounded-md md:w-1/3">
                                <div className="p-img min-h-[80px]">
                                    <img className="mx-auto max-h-[100%]" src="/assets/partner-10.png"></img>
                                </div>
                                <div className="p-desc mt-2 text-center">
                                    <p className="text-[#818181] mb-2">November 19, 2014</p>
                                    <a href="#" target="_blank" className="flex space-x-1 justify-center items-center text-red-600 text-lg">
                                    <span>Learn more</span><span><FiChevronRight/></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/**=====================partner-row 4 end----------------- */}
                     
                </div>


            </div>
        </div>
    )

}

export default Partner