const Availability=(props)=>{

    return(
        <div >
            
            <div className="form-holedr mt-4"> 
                      {/*========================   career objective=======================*/}
                         <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-2 md:my-4">
                                <div className="form-col w-full ">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What is your immediate career objective?*</p>
                                                
                                                    <textarea  className="w-full h-[52px] md:h-[64px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Your career objective" 
                                                    pattern="[a-zA-z0-9-.()# ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </textarea>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                        
                        </div>
                {/*======================== career objective end=======================*/}
                 {/*========================  contact form Availability Start Date*+ available to work*=======================*/}
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                         <div className="form-col w-full md:w-[48%]">
                                            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Availability Start Date*</p>
                                            <input 
                                                    type="date" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green text-[#464646]" 
                                                    placeholder=" " 
                                                    pattern="[0-9 ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required/>
                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                            </div>
                                         <div className="form-col w-full md:w-[48%] mt-2 md:mt-0">
                                             <p className=" mb-2 md:mb-1 lg:text-lg evevt-input-label text-[#111111]  ">Check those you will be available to work:*</p>
                                                <div className="form-check flex flex-col md:flex-row md:items-center space-x-0 space-y-2 md:space-y-0 w-full justify-start flex-wrap">
                                                        <div className="flex items-center  space-x-2 md:w-[48%] ">
                                                        <input type="checkbox"  id="tq"/> <label htmlFor="tq" className="text-[#464646]">Thanksgiving (week of)</label> 
                                                        </div>
                                                        <div className="flex items-center space-x-2 md:w-[48%] ">
                                                        <input type="checkbox" id="cwp"/><label htmlFor="cwp" className="text-[#464646]">Christmas (week prior)</label> 
                                                        </div>
                                                        <div className="flex items-center space-x-2 md:w-[48%] md:pt-1 ">
                                                        <input type="checkbox" id="cwo"/><label htmlFor="cwo" className="text-[#464646]">Christmas (week of)</label> 
                                                        </div>
                                                        
                                                </div>
                                             
                                             <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                         </div>
                        </div>
                {/*======================== contact form Availability Start Date*+ available to work* end=======================*/}
                {/*========================  Please indicate hours you're available to work during both day and evening (i.e. 9am - close; 6pm-10pm; or Any)*=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full bg-[#FFF9EC] p-4 md:py-8 md:px-6 my-2 md:my-4">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Please indicate hours you're available to work during both day and evening *</p>
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#565656]">(i.e. Start - Close; 9 am-12 pm; or Any)</p>
                                                    {/*======================== sunday=======================*/}
                                                    <div className="avl-work-week sunday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Sunday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== sunday end=======================*/}
                                                     {/*======================== monday=======================*/}
                                                     <div className="avl-work-week monday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Monday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== monday end=======================*/}
                                                     {/*======================== Tuesday=======================*/}
                                                     <div className="avl-work-week tuesday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Tuesday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Tuesday end=======================*/}
                                                     {/*======================== Wednesday=======================*/}
                                                    <div className="avl-work-week wednesday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Wednesday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Wednesday end=======================*/}
                                                     {/*======================== Thursday=======================*/}
                                                     <div className="avl-work-week thursday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Thursday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Thursday end=======================*/}
                                                     {/*======================== Friday=======================*/}
                                                     <div className="avl-work-week friday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Friday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Friday end=======================*/}
                                                     {/*======================== Saturday=======================*/}
                                                     <div className="avl-work-week saturday"> 
                                                            <div className="avl-row flex  justify-between items-center space-x-2 md:space-x-6 md:max-w-[800px] mt-4 ">
                                                                    <div className="avl-day text-sm md:text-xl"><p>Saturday :</p></div>
                                                                    <div className="flex justify-between items-center w-[68%] xs:w-[66%] sm:w-[78%] md:w-[80%] space-x-2 md:space-x-6 "> 
                                                                        <div className="avl-start w-[48%]"> 
                                                                             <select type="text" className=" text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                            <option value="Start"><span className="font-medium">Start</span> </option>
                                                                                            <option value="Any">Any</option>
                                                                                            <option value="9 am">9 am</option>
                                                                                            <option value="10 am">10 am</option>
                                                                                            <option value="11 am">11 am</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="2 pm">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                   
                                                                            </select>
                                                                        </div>
                                                                        <div className="w-[10px] md:w-[16px] h-[2px] md:h-[3px] bg-[#464646]"></div>
                                                                        <div className="avl-end w-[48%]"> 
                                                                             <select type="text" className="text-sm md:text-base w-full event-input text-gray-800  border-0 md:py-2 px-2 md:px-4 bg-[#F4E6C3] focus:ring-transparent focus-green"  required>
                                                                                          <option value="Close"><span className="font-medium">Close</span> </option>
                                                                                          <option value="Any">Any</option>
                                                                                            <option value="12 pm">12 pm</option>
                                                                                            <option value="1 pm">1 pm</option>
                                                                                            <option value="11 am">2 pm</option>
                                                                                            <option value="3 pm">3 pm</option>
                                                                                            <option value="4 pm">4 pm</option>
                                                                                            <option value="5 pm">5 pm</option>
                                                                                            <option value="6 pm">6 pm</option>
                                                                                            <option value="7 pm">7 pm</option>
                                                                                            <option value="8 pm">8 pm</option>
                                                                                            <option value="9 pm">9 pm</option>
                                                                                            <option value="8 pm">10 pm</option>
                                                                                        
                                                                            </select>
                                                                         </div>
                                                                    </div>
                                                            </div>

                                                    </div>
                                                     {/*======================== Saturday end=======================*/}

                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         
                </div>
                {/*======================== Please indicate hours you're available to work during both day and evening (i.e. 9am - close; 6pm-10pm; or Any)* end=======================*/}
              
                {/*========================  If offered a job, =======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full ">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">If offered a job, how long do you plan to stay?*</p>
                                                
                                                    <textarea  className="w-full event-input h-[52px] md:h-[64px]  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="..." 
                                                    pattern="[a-zA-z0-9-.()# ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </textarea>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         
                </div>
                {/*======================== contact form If offered a job, end=======================*/}
                

            </div>
        </div>
    )

}

export default Availability