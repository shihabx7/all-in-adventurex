import { useState } from "react"
import TitleSeparator from "../util/TitleSeparator"

const BusinessTab=()=>{

    const[showTab,setShowTab]=useState(1)

    const changeTab=(id,e)=>{
            setShowTab(id)
            
            
    }


    return(
        <div className="five-step-tab pt-16 md:pt-20">
            <div className="section-title">
                 <p className="text-lg text-[#938056] text-center">5-STEPS</p>
                 <TitleSeparator title="BECOME A FRANCHISE BUSINESS OWNER" color="golden-text" weight="font-bold"/>
                 <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>

            </div>
            <div className="section-container tab-container">
                {/**================================ tab navigation================== */}
                <div className="step-tab-nav relative w-full h-[9px] md:h-[12px] bg-[#F4E6C3]">
                    <div className="tabnav-box w-full absolute top-[-10px] flex justify-evenly">
                        <button onClick={(e) =>changeTab(1,e)} className={ (showTab==1? "bg-golden tab-btn-shadow":"bg-[#7B7B7B]")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#D6D6D6] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                1
                        </button>
                        <button onClick={() =>changeTab(2)} className={ (showTab==2? "bg-golden tab-btn-shadow":"bg-[#7B7B7B]")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#D6D6D6] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                2
                        </button>
                        <button onClick={() =>changeTab(3)} className={ (showTab==3? "bg-golden tab-btn-shadow":"bg-[#7B7B7B]")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#D6D6D6] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                3
                        </button>
                        <button onClick={() =>changeTab(4)} className={ (showTab==4? "bg-golden tab-btn-shadow":"bg-[#7B7B7B]")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#D6D6D6] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                4
                        </button>
                        <button onClick={() =>changeTab(5)} className={ (showTab==5? "bg-golden tab-btn-shadow":"bg-[#7B7B7B]")+" w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full  cursor-pointer  hover:bg-golden focus:bg-golden focus:tab-btn-shadow text-[#D6D6D6] text-center text-lg md:text-xl font-medium leading-[28px] md:leading-[32px]"}>
                                5
                        </button>
                    </div>

                </div>
                {/**================================ tab navigation end================== */}
                {/**================================ tab description================== */}
                    <div className="step-tab-content-box mt-8 md:mt-12 lg:mt-16">
                        {
                            showTab==1 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">WE GET TO KNOW YOU</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">After a brief questionnaire (completed in advance), 
                                    you'll be assigned a Franchise Development Manager who will contact you directly 
                                    by phone to discuss your responses and answer any preliminary questions you have. 
                                    These calls typically last about an hour.
                                    </p>
                            </div>
                        </div>
                        }
                         {
                            showTab==2 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">WE GET TO KNOW YOU 2</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">After a brief questionnaire (completed in advance), 
                                    you'll be assigned a Franchise Development Manager who will contact you directly 
                                    by phone to discuss your responses and answer any preliminary questions you have. 
                                    These calls typically last about an hour.
                                    </p>
                            </div>
                        </div>
                        }
                        {
                            showTab==3 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">WE GET TO KNOW YOU 3</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">After a brief questionnaire (completed in advance), 
                                    you'll be assigned a Franchise Development Manager who will contact you directly 
                                    by phone to discuss your responses and answer any preliminary questions you have. 
                                    These calls typically last about an hour.
                                    </p>
                            </div>
                        </div>
                        }
                        {
                            showTab==4 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">WE GET TO KNOW YOU 4</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">After a brief questionnaire (completed in advance), 
                                    you'll be assigned a Franchise Development Manager who will contact you directly 
                                    by phone to discuss your responses and answer any preliminary questions you have. 
                                    These calls typically last about an hour.
                                    </p>
                            </div>
                        </div>
                        }
                        {
                            showTab==5 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">WE GET TO KNOW YOU 5</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">After a brief questionnaire (completed in advance), 
                                    you'll be assigned a Franchise Development Manager who will contact you directly 
                                    by phone to discuss your responses and answer any preliminary questions you have. 
                                    These calls typically last about an hour.
                                    </p>
                            </div>
                        </div>
                        }
                        
                    </div>
                {/**================================ tab description end================== */}

            </div>

        </div>
    )
}

export default BusinessTab