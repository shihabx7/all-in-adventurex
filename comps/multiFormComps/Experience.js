
import { FiPlus,FiMinus } from "react-icons/fi";
import { useState } from "react"

const Experience=(props)=>{

    const [exp,setExp]=useState(1)

    return(
        
        <div onLoad={ props.setFormName('Work Experience')}>
            
            <div className="form-holedr"> 
                 {/*========================  contact form job exp =======================*/}
               
                        <p className="md:text-lg mt-4 pb-2">List your last three (3) jobs, beginning with your current or most recent position. Include all seasonal, part-time, summer, self-employment, etc. Please ensure all dates/job files in this section are accurate.</p>
                         {/*========================  contact form job exp 1=======================*/}
                        <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md"> 
                             <div className="f-job-head flex justify-between items-center cursor-pointer" onClick={()=>{exp==1? setExp(null):setExp(1)}}> 
                                 <h3 className="md:text-xl">Job 1</h3> <span className="md:text-xl text-[#333105]">{exp==1? <FiMinus/>:<FiPlus/>}</span>
                            </div>
                            {
                                exp==1 &&
                                <div className="f-job-bottom mt-2 border-t border-gray-300"> 
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Employer' Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your employer's name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Job Title	</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Your job title"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your supervisor's name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Phone</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Supervisor's phone number"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Dates of Employment (Mo/Year)</p>
                                               <input 
                                                   type="date"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your first name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">If offer made, may we contact?</p>
                                               <select 
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Your last name"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       >
                                                           <option value="yes">Yes</option>
                                                           <option value="yes">No</option>

                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Major Responsibilities</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Reason for Leaving</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                </div>
                            }
                           
                        </div>
                        {/*========================  contact form job 1 end =======================*/}
                         {/*========================  contact form job exp 2=======================*/}
                         <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md"> 
                             <div className="f-job-head flex justify-between items-center cursor-pointer" onClick={()=>{exp==2? setExp(null):setExp(2)}}> 
                                 <h3 className="md:text-xl">Job 2</h3> <span className="md:text-xl text-[#333105]">{exp==2? <FiMinus/>:<FiPlus/>}</span>
                            </div>
                            {
                                exp==2 &&
                                <div className="f-job-bottom mt-2 border-t border-gray-300"> 
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Employer's Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your employer's Name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Job Title	</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Your job title"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your supervisor' name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Phone</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Supervisor's phone number"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Dates of Employment (Mo/Year)</p>
                                               <input 
                                                   type="date"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">If offer made, may we contact?</p>
                                               <select 
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder=""
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       >
                                                           <option value="yes">Yes</option>
                                                           <option value="yes">No</option>

                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Major Responsibilities</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Reason for Leaving</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                </div>
                            }
                           
                        </div>
                        {/*========================  contact form job 2 end =======================*/}
                        {/*========================  contact form job exp 3=======================*/}
                        <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md"> 
                             <div className="f-job-head flex justify-between items-center cursor-pointer" onClick={()=>{exp==3? setExp(null):setExp(3)}}> 
                                 <h3 className="md:text-xl">Job 3</h3> <span className="md:text-xl text-[#333105]">{exp==3? <FiMinus/>:<FiPlus/>}</span>
                            </div>
                            {
                                exp==3 &&
                                <div className="f-job-bottom mt-2 border-t border-gray-300"> 
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Employer's Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your employer's name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Job Title	</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Your job title"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Your supervisor's name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Phone</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Supervisor's phone number"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Dates of Employment (Mo/Year)</p>
                                               <input 
                                                   type="date"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">If offer made, may we contact?</p>
                                               <select 
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder=""
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       >
                                                           <option value="yes">Yes</option>
                                                           <option value="yes">No</option>

                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Major Responsibilities</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Reason for Leaving</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                </div>
                            }
                           
                        </div>
                        {/*========================  contact form job 3 end exp =======================*/}
                {/*======================== contact form job exp end=======================*/}
          
                {/*========================  Other=======================*/}
               
                       
                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between mt-6">
                                            <div className="form-col w-full md:w-[36%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Are you presently employed?*</p>
                                                <select 
                                                   
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-[#FFF7EA] focus:ring-transparent focus-green" 
                                                    placeholder="Your first name" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>
                                                            <option value="">---</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                         </div>
                                         <div className="form-col w-full md:w-[62%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">List 3 skills from your work experiences<span className="text-[14px] text-gray-600"> (separateed by comma)</span></p>
                                                <input  type="text"
                                                        className=" w-full event-input  border-0 md:py-3 px-4 bg-[#FFF7EA] focus:ring-transparent focus-red"
                                                        placeholder="Skills  that you would apply to this role"
                                                        pattern="[a-zA-z ]{3,20}"
                                                        title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                        required>

                                                     </input>
                                                     <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                         </div>
                        </div>
                      
               
                {/*======================== Other end=======================*/}
               

            </div>
        </div>
    )

}

export default Experience