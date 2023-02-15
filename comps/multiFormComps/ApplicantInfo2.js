const ApplicantInfo2=(props)=>{

    
    return(
        <div>
            
            <div className="form-holedr"> 
                 {/*========================  contact form row LOCATION + Position Desired*=======================*/}
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                         <div className="form-col w-full md:w-[48%]">
                                            <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Select Desired Location*</p>
                                            
                                               <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"  required>
                                                {
                                                
                                                    props.locationlist.map((item,index)=>{

                                                        return(
                                                            item.cities.map((itm)=>{
                                                                return(
                                                                    <option key={index+itm.id} value={itm.city+", "+item.state}>
                                                                    {itm.city}, {item.state}
                                                                  </option>
                                                                )
                                                               

                                                            })
                                                           
                                                        )
                                                        
                                                    })
                                                }

                                                
                                               </select>
                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                            </div>
                                         <div className="form-col w-full md:w-[48%]">
                                             <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Position Desired*</p>
                                            
                                             <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green"  required>
                                         
                                                                 <option value="Associate">
                                                                 Associate
                                                               </option>
                                                               <option value="Associate">
                                                               Team Lead
                                                               </option>
                                                               <option value="Associate">
                                                               Assistant Manager
                                                               </option>
                                                               <option value="Associate">
                                                               Store Manager
                                                               </option>
                                                               <option value="Associate">
                                                               Area Store Manager
                                                               </option>
                                                               <option value="Associate">
                                                               Regional Store Manager
                                                               </option>
                                             </select>
                                             <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Phone *</p>
                                         </div>
                        </div>
                {/*======================== contact form row LOCATION + Position Desired* end=======================*/}
                {/*========================  contact form row pay range + d schedule=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Desired ($) Pay</p>
                                                <input 
                                                    type="number"
                                                    min="0"
                                                    
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder=" " 
                                                    pattern="[0-9 ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    >

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Desired Schedule (i.e. FT/PT)*</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="..."
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Desired Schedule (i.e. FT/PT)*</p>
                                         </div>
                </div>
                {/*======================== pay range + d schedule end=======================*/}
                {/*========================   18+?    + eligible   2=======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-4">
                                            <div className="form-col w-full md:w-[48%]">
                                             <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Are you 18 years of age or older?*</p>
                                            <div className="flex space-x-8 items-center mt-2 md:mt-4"> 
                                                <div className="flex space-x-3 items-center"> 
                                                  <input
                                                       type="radio"
                                                       name="isAge"
                                                       value="Yes"
                                                        id="age-yes"
                                                        className="th-radio"
                                                     /> 
                                                    
                                                     <label htmlFor="age-yes">Yes</label>
                                                     </div>
                                                    <div className="flex space-x-3 items-center"> 
                                                             <input
                                                              type="radio"
                                                              name="isAge"
                                                              value="No"
                                                              id="age-no"
                                                              className="th-radio"
                                                            />
                                                     <label htmlFor="age-no">No</label>
                                                     </div>  
                                            </div>
                                                    
                                                
                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                             <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Are you eligible to work in the US?*</p>
                                                <div className="flex space-x-8 items-center  mt-2 md:mt-4"> 
                                                <div className="flex space-x-3 items-center"> 
                                                  <input
                                                       type="radio"
                                                       name="isEligible"
                                                       value="Yes"
                                                        id="el-yes"
                                                        className="th-radio"
                                                     /> 
                                                    
                                                     <label for="el-yes">Yes</label>
                                                     </div>
                                                    <div className="flex space-x-3 items-center"> 
                                                             <input
                                                              type="radio"
                                                              name="isEligible"
                                                              value="No"
                                                              id="el-no"
                                                              className="th-radio"
                                                            />
                                                     <label for="el-no">No</label>
                                                     </div>  
                                                </div>
                                                    
                                                
                                                <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                </div>
                {/*======================== 18+?    + eligible end=======================*/}
                {/*========================  Have you ever worked for All In Adventures =======================*/}
                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full ">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Have you ever worked for All In Adventures, Escape the Mystery Room, or Mystery Room in the past? </p>
                                                
                                                    <textarea  className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="If yes, where/when?" 
                                                    pattern="[a-zA-z0-9-.()# ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    >

                                                    </textarea>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         
                </div>
                {/*======================== contact form Have you ever worked for All In Adventures end=======================*/}
                 {/*========================  Have you ever worked under any other names? =======================*/}
                 <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                      <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Have you ever worked under any other names?</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="If so, list other name(s)."
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Desired Schedule (i.e. FT/PT)*</p>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">How did you learn about the position?</p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-red"
                                                        placeholder="Friend / Social media / others..."
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">Desired Schedule (i.e. FT/PT)*</p>
                                         </div>
                </div>
                {/*======================== contact form Have you ever worked under any other names? end=======================*/}
                 {/*========================  Have you ever worked for All In Adventures =======================*/}
                 <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full ">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What attracted you to the company? </p>
                                                
                                                    <textarea  className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="..." 
                                                    pattern="[a-zA-z0-9-.()# ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    >

                                                    </textarea>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">email *</p>
                                         </div>
                                         
                </div>
                {/*======================== contact form Have you ever worked for All In Adventures end=======================*/}

            </div>
        </div>
    )

}

export default ApplicantInfo2

