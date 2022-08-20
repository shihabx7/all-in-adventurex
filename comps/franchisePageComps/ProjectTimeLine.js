import TitleSeparator from "../util/TitleSeparator"
import { useState } from "react"
const ProjectTimeLine=()=>{
    const[showTab,setShowTab]=useState(1)

    const changeTab=(id,e)=>{
            setShowTab(id)
            
            
    }

    return(
        <div className="fran-tes bg-cover" style={{backgroundImage:"url('/assets/franchise-six-step-bg.jpg')"}}>
            
            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28">
                    <div className="section-title">
                         <p className="text-lg text-[#938056] text-center">6-STEPS</p>
                         <TitleSeparator title="GENERAL PROJECT TIMELINE" color="golden-text" weight="font-bold"/>
                         <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>

                    </div>
                    <div className="section-container tab-container">
                {/**================================ tab navigation================== */}
                <div className="step-tab-nav relative w-full h-[9px] md:h-[12px] bg-[#7b7b7b]">
                    <div className="tabnav-box w-full absolute top-[-10px] flex justify-evenly">
                        <button onClick={(e) =>changeTab(1,e)} className={ (showTab==1? "bg-golden tab-btn-shadow":"bg-coffee-light")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#eeeeee] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                1
                        </button>
                        <button onClick={() =>changeTab(2)} className={ (showTab==2? "bg-golden tab-btn-shadow":"bg-coffee-light")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#eeeeee] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                2
                        </button>
                        <button onClick={() =>changeTab(3)} className={ (showTab==3? "bg-golden tab-btn-shadow":"bg-coffee-light")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#eeeeee] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                3
                        </button>
                        <button onClick={() =>changeTab(4)} className={ (showTab==4? "bg-golden tab-btn-shadow":"bg-coffee-light")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#eeeeee] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                4
                        </button>
                        <button onClick={() =>changeTab(5)} className={ (showTab==5? "bg-golden tab-btn-shadow":"bg-coffee-light")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#eeeeee] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                5
                        </button>
                        <button onClick={() =>changeTab(6)} className={ (showTab==6? "bg-golden tab-btn-shadow":"bg-coffee-light")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#eeeeee] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                6
                        </button>
                    </div>

                </div>
                {/**================================ tab navigation end================== */}
                {/**================================ tab description================== */}
                    <div className="step-tab-content-box mt-8 md:mt-12 lg:mt-16">
                        {
                            showTab==1 &&
                            <div className="step-tab-item flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between" >
                                <div className="md:w-[54%] lg:w-[60%] order-2 md:order-1 mt-4 md:mt-0">
                                    <p className="lg:text-lg text-[#938056]">4-10 WEEKS</p> 
                                    <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">FUNDING AND SITE SELECTION</h3>
                                    <div className="tab-text mt-4 md:mt-6 lg:mt-8 ">
                                       <ul className="star-list pl-6 lg:text-lg">
                                            <li className="my-3 lg:my-4 text-[#464646]">Market research</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Setting the project budget</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Creating a business plan</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Franchise negotiation and signing the franchise agreement</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Secure funding for the project</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Contacting local realtors</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Toring properties</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Sign the lease agreement</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="md:w-[44%] lg:w-[38%] order-1 md:order-2"> 
                                    <img className="max-w-[200px] lg:max-w-[260px] mx-auto" src="/assets/frans-step-1.png"></img>
                                </div>
                            </div>
                        }
                         {
                            showTab==2 &&
                            <div className="step-tab-item flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between" >
                                <div className="md:w-[54%] lg:w-[60%] order-2 md:order-1 mt-4 md:mt-0">
                                    <p className="lg:text-lg text-[#938056]">4-10 WEEKS</p> 
                                    <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">FUNDING AND SITE SELECTION</h3>
                                    <div className="tab-text mt-4 md:mt-6 lg:mt-8 ">
                                       <ul className="star-list pl-6 lg:text-lg">
                                            <li className="my-3 lg:my-4 text-[#464646]">Market research</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Setting the project budget</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Creating a business plan</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Franchise negotiation and signing the franchise agreement</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Secure funding for the project</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Contacting local realtors</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Toring properties</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Sign the lease agreement</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="md:w-[44%] lg:w-[38%] order-1 md:order-2"> 
                                    <img className="max-w-[200px] lg:max-w-[260px] mx-auto" src="/assets/frans-step-1.png"></img>
                                </div>
                            </div>
                        }
                        {
                            showTab==3 &&
                            <div className="step-tab-item flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between" >
                                <div className="md:w-[54%] lg:w-[60%] order-2 md:order-1 mt-4 md:mt-0">
                                    <p className="lg:text-lg text-[#938056]">4-10 WEEKS</p> 
                                    <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">FUNDING AND SITE SELECTION</h3>
                                    <div className="tab-text mt-4 md:mt-6 lg:mt-8 ">
                                       <ul className="star-list pl-6 lg:text-lg">
                                            <li className="my-3 lg:my-4 text-[#464646]">Market research</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Setting the project budget</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Creating a business plan</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Franchise negotiation and signing the franchise agreement</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Secure funding for the project</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Contacting local realtors</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Toring properties</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Sign the lease agreement</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="md:w-[44%] lg:w-[38%] order-1 md:order-2"> 
                                    <img className="max-w-[200px] lg:max-w-[260px] mx-auto" src="/assets/frans-step-1.png"></img>
                                </div>
                            </div>
                        }
                        {
                            showTab==4 &&
                            <div className="step-tab-item flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between" >
                                <div className="md:w-[54%] lg:w-[60%] order-2 md:order-1 mt-4 md:mt-0">
                                    <p className="lg:text-lg text-[#938056]">4-10 WEEKS</p> 
                                    <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">FUNDING AND SITE SELECTION</h3>
                                    <div className="tab-text mt-4 md:mt-6 lg:mt-8 ">
                                       <ul className="star-list pl-6 lg:text-lg">
                                            <li className="my-3 lg:my-4 text-[#464646]">Market research</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Setting the project budget</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Creating a business plan</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Franchise negotiation and signing the franchise agreement</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Secure funding for the project</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Contacting local realtors</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Toring properties</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Sign the lease agreement</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="md:w-[44%] lg:w-[38%] order-1 md:order-2"> 
                                    <img className="max-w-[200px] lg:max-w-[260px] mx-auto" src="/assets/frans-step-1.png"></img>
                                </div>
                            </div>
                        }
                        {
                            showTab==5 &&
                            <div className="step-tab-item flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between" >
                                <div className="md:w-[54%] lg:w-[60%] order-2 md:order-1 mt-4 md:mt-0">
                                    <p className="lg:text-lg text-[#938056]">4-10 WEEKS</p> 
                                    <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">FUNDING AND SITE SELECTION</h3>
                                    <div className="tab-text mt-4 md:mt-6 lg:mt-8 ">
                                       <ul className="star-list pl-6 lg:text-lg">
                                            <li className="my-3 lg:my-4 text-[#464646]">Market research</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Setting the project budget</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Creating a business plan</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Franchise negotiation and signing the franchise agreement</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Secure funding for the project</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Contacting local realtors</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Toring properties</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Sign the lease agreement</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="md:w-[44%] lg:w-[38%] order-1 md:order-2"> 
                                    <img className="max-w-[200px] lg:max-w-[260px] mx-auto" src="/assets/frans-step-1.png"></img>
                                </div>
                            </div>
                        }
                        {
                            showTab==6 &&
                            <div className="step-tab-item flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between" >
                                <div className="md:w-[54%] lg:w-[60%] order-2 md:order-1 mt-4 md:mt-0">
                                    <p className="lg:text-lg text-[#938056]">4-10 WEEKS</p> 
                                    <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">FUNDING AND SITE SELECTION</h3>
                                    <div className="tab-text mt-4 md:mt-6 lg:mt-8 ">
                                       <ul className="star-list pl-6 lg:text-lg">
                                            <li className="my-3 lg:my-4 text-[#464646]">Market research</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Setting the project budget</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Creating a business plan</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Franchise negotiation and signing the franchise agreement</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Secure funding for the project</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Contacting local realtors</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Toring properties</li>
                                            <li className="my-3 lg:my-4 text-[#464646]">Sign the lease agreement</li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="md:w-[44%] lg:w-[38%] order-1 md:order-2"> 
                                    <img className="max-w-[200px] lg:max-w-[260px] mx-auto" src="/assets/frans-step-1.png"></img>
                                </div>
                            </div>
                        }
                        
                        
                    </div>
                {/**================================ tab description end================== */}

            </div>

            </div>

        </div>
    )

}

export default ProjectTimeLine