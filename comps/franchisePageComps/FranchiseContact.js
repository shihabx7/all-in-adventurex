import TitleSeparator from "../util/TitleSeparator"

const FranchiseContactForm=()=>{

    return(
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
        <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
            <div className="section-container max-w-7xl mx-auto  py-16 md:py-20 lg:py-28 relative z-30">
                <div className="section-title px-4 mb-8">
                        <p className="textt-lg text-center text-[#938056]">LET'S GET STARTED</p>
                        <TitleSeparator title="SUBMIT THE FRANCHISE INQUIRY FORM" color="golden-text" weight="font-bold" />
                        

                 </div>
            
            <div className="frans-contact-box max-w-[1000px] mx-auto">
            <div className="contact-form-bg bg-[#F4E6C3] px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12 md:rounded">
                {/*==========================================================contact form to book event======================= */}
                                        <form > 
                 {/*======================================contact form row CHECK BOX====================== */}
                                   
                                             {/*======================================contact form row====================== */}
                                             {/**============CONTACT DETAILS===========section==================== */}
                                             <div className="frans-contact-details ">
                                                <div className="group-head my-4 pb-1 border-b border-[#855800]">
                                                    <h3 className="text-xl md:text-2xl">CONTACT DETAILS</h3>
                                                </div>
                                         {/*======================================contact form row name====================== */}
                                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                                    <div className="form-col w-full md:w-[49%] lg:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your first name? *</p>
                                                        <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your first name" required></input>
                                                    </div>
                                                    <div className="form-col w-full md:w-[49%] lg:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your last name? *</p>
                                                        <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your last name" required></input>
                                                    </div>
                                                </div>
                                         {/*======================================contact form row====================== */}
                                         {/*======================================contact form row====================== */}
                                                <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between my-3 md:my-4 ">
                                                    <div className="form-col w-full md:w-[49%] lg:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Email *</p>
                                                        <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your email address" required></input>
                                                    </div>
                                                    <div className="form-col  w-full md:w-[49%] lg:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Phone number *</p>
                                                        <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your phone number" required></input>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row====================== */}
                                               {/*======================================contact form row select event====================== */}
                                               <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                                    <div className="form-col w-full md:w-[49%] lg:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">City </p>
                                                        <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your first name" required></input>
                                                    </div>
                                                    <div className="form-col w-full md:w-[49%] lg:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">State </p>
                                                        <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" required>
                                                            <option value="0">Select</option>
                                                            <option value="New York">New York</option>
                                                            <option value="New Maxico">New Maxico</option>
                                                            <option value="Gorgia">Gorgia</option>
                                                            <option value="Ohio">Ohio</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row select event====================== */}
                                                
                                                {/*======================================contact form row address====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                    <div className="form-col w-full">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Address</p>
                                                        <input type="text"  className=" w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Address" required></input>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row address===================== */}
                                                </div>
                                                {/**============CONTACT DETAILS===========section end==================== */}
                                                
                                                 {/**============ABOUT you===========section ==================== */}
                                                <div className="fran-cont-about">
                                                <div className="group-head mt-8 md:mt-10 lg:mt-12 mb-4 pb-1 border-b border-[#855800]">
                                                    <h3 className="text-xl md:text-2xl">ABOUT YOU</h3>
                                                </div>
                                                        {/*======================================contact form row What's your current net worth?===================== */}
                                                            <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Your current net worth?</p>
                                                                    <input type="text"  className=" w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="10000" required></input>
                                                                </div>
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Your current liquid assets (investor/loaned)?</p>
                                                                    <input type="text"  className=" w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="20000" required></input>
                                                                </div>
                                                            </div>
                                                
                                                {/*======================================contact What's your current net worth?====================== */}
                                                 {/*======================================contact form row message What is your plan for funding a venture of this nature?====================== */}
                                                 <div className="form-row flex justify-between my-4 ">
                                                   
                                                   <div className="form-col w-full">
                                                       <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What is your plan for funding a venture of this nature? </p>
                                                     
                                                       <textarea className="w-full h-[100px] md:h-[120px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                       </textarea>
                                                   </div>
                                               </div>
                                               {/*======================================contact form row What is your plan for funding a venture of this nature?====================== */}
                                               
                                                {/*======================================contact form Have you visited ?===================== */}
                                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4">
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Have you visited an ALL IN ADVENTURES before?</p>
                                                                    <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white">
                                                                        <option value="0">Select</option>
                                                                        <option value="yes">Yes</option>
                                                                        <option value="no">No</option>
                                                                        
                                                                    </select>
                                                                </div>
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Your preferred state to open a new venue?</p>
                                                                    <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="State"></input>
                                                                </div>
                                                            </div>
                                                
                                                {/*======================================contact Have you visited ?====================== */}
                                                {/*======================================contact form first choice/second choice===================== */}
                                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4 ">
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Do you have a first choice city/town in mind?</p>
                                                                    <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="City/Town"></input>
                                                                </div>
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Do you have a second choice, if your first isn't available?</p>
                                                                    <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="City/Town"></input>
                                                                </div>
                                                            </div>
                                                
                                                {/*======================================contact choice/second choice====================== */}
                                                {/*======================================contact form preferred timeframe?===================== */}
                                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4">
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What is your preferred timeframe?</p>
                                                                    <input type="date" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="City/Town"></input>
                                                                </div>
                                                                <div className="form-col md:w-[49%] lg:w-[48%]">
                                                                    <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Do you have any involvement with other franchisees?</p>
                                                                    <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white">
                                                                        <option value="0">Select</option>
                                                                        <option value="yes">Yes</option>
                                                                        <option value="no">No</option>
                                                                        
                                                                    </select>
                                                                </div>
                                                            </div>
                                                
                                                {/*======================================contact Have preferred timeframe?====================== */}
                                                {/*======================================contact form row message Tell us a little about your operations plan??====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                   <div className="form-col w-full">
                                                       <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Tell us a little about your operations plan?</p>
                                                     
                                                       <textarea className="w-full h-[100px] md:h-[120px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                       </textarea>
                                                   </div>
                                               </div>
                                               {/*======================================contact form row Tell us a little about your operations plan??====================== */}
                                                {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                   <div className="form-col w-full">
                                                       <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Tell us about your other professional/relevant experiences?</p>
                                                     
                                                       <textarea className="w-full h-[100px] md:h-[120px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                       </textarea>
                                                   </div>
                                               </div>
                                               {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                                               {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                                               <div className="form-row flex justify-between my-4 ">
                                                   
                                                   <div className="form-col w-full">
                                                       <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What do you believe will make you a great ALL IN ADVENTURES franchisee?</p>
                                                     
                                                       <textarea className="w-full h-[100px] md:h-[120px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                       </textarea>
                                                   </div>
                                               </div>
                                               {/*======================================contact form row Tell us about your other professional/relevant experiences?====================== */}
                                               
                                               <div className="form-row flex justify-center  mt-8 ">
                                                  
                                                
                                                      <button type="submit" className="text-white font-medium text-lg py-3 px-12 bg-red-600 hover:bg-red-700 rounded-full">SUBMIT</button>
                                                  
                                              </div>
                                               {/*======================================contact form row message event====================== */}

                                                </div>

                                                
                                                 {/**============about you===========section end==================== */}
                                               
                                        </form>
                  {/*==========================================================contact form to book event end======================= */}
                                    </div>

                                    </div>
            </div>

        <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
    </div>

    )
    

}

export default FranchiseContactForm