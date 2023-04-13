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
                 <TitleSeparator title="HOW TO BECOME AN ESCAPE ROOM FRANCHISE OWNER" color="dark-gold" weight="font-bold"/>
                 <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">Here is the process to join this growing and rewarding industry by owning your own All In Adventures escape room franchise.</p>

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
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">You need to fill out this brief franchise inquiry questionnaire to get started.
                                     Our Franchise Development Manager will contact you directly to discuss your responses and answer any
                                      preliminary questions you have. This phone call typically lasts about an hour.

                                    </p>
                            </div>
                        </div>
                        }
                         {
                            showTab==2 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">LET'S GET MOVING</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">Your Franchise Development Manager walks you through All In Adventures's business model
                                     in further detail. In this stage, you will also receive, complete, and return the Franchise Disclosure Document (FDD).
                                      The FDD explains in detail what All In Adventures expect from franchisees and what you can expect from the company
                                    </p>
                            </div>
                        </div>
                        }
                        {
                            showTab==3 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">MEET THE FOUNDERS</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">Your Franchise Development Manager will coordinate phone
                                     conversations with All In Adventure's founders, John Reichel and Chetan Patel. We like to call these
                                      "validation calls." Here, you have the chance to ask questions to get direct information about the business
                                       and their first-hand experiences, giving you a clear vision of what's ahead.
                                    </p>
                            </div>
                        </div>
                        }
                        {
                            showTab==4 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">DOWN TO BUSINESS</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">When you reach this point in your journey,
                                     you'll want to clear up any lingering questions and concerns regarding your escape room franchise
                                      partnership. Our escape room Franchise Development Manager will walk you through the FDD in detail,
                                       discuss available financing options if needed, and address any remaining questions.

                                    </p>
                            </div>
                        </div>
                        }
                        {
                            showTab==5 &&
                            <div className="step-tab-item">
                            <h3 className="font-os golden-text font-bold text-2xl md:text-3xl">DISCOVERY DAY</h3>
                            <div className="tab-text mt-4 ">
                                    <p className="text-gray-700 lg:text-lg max-w-3xl">You make a visit to All In Adventures headquarter to meet the founders
                                     and executive team, tour the facility and "walk a day in the life" of an All In Adventures center. It's an honest look
                                      at what it's like to be a part of the All In Adventures family. You'll leave with the Escape Room Franchise Agreement
                                       Package containing all the required documentation to become the proud owner of an All In Adventures franchise.
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