
import { FiPlus,FiMinus,FiX } from "react-icons/fi";
import { useState,useEffect,useRef } from "react"

const References=(props)=>{

    const [exp,setExp]=useState(1)
    const [showDs,setShowDs]=useState(false)

    const dsref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (showDs && dsref.current && !dsref.current.contains(e.target)) {
            setShowDs(false)
          }
        }
        
    
        document.addEventListener("mouseup", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mouseup", checkIfClickedOutside)
        }
      }, [showDs]);

    return(
        
        <div onLoad={ props.setFormName('Professional  References')}>
            
            <div className="form-holedr"> 
                 {/*========================  contact form job ref =======================*/}
               
                        <p className=" text-gray-700 mt-4 pb-2">List three (3) professional references who can provide a testimonial of your character and skills - no friends, family members, etc. Note: At least one (1) of the references must be from a current or former supervisor and include their work contact information. If you have never been employed, your references should be someone such as a school leader, teacher, coach or a professional mentor.</p>
                         {/*========================  contact form job ref 1=======================*/}
                        <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md"> 
                             <div className="f-job-head flex justify-between items-center cursor-pointer" onClick={()=>{exp==1? setExp(null):setExp(1)}}> 
                                 <h3 className="md:text-xl">Reference 1*</h3> <span className="md:text-xl text-[#333105]">{exp==1? <FiMinus/>:<FiPlus/>}</span>
                            </div>
                            {
                                exp==1 &&
                                <div className="f-job-bottom mt-2 border-t border-gray-300"> 
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Company</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Company name"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Title</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Title" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Relationship</p>
                                               <select 
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Supervisor's phone number"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>
                                                        <option value="Supervisor/Boss">Supervisor/Boss</option>
                                                        <option value="Co-Worker/Peer">Co-Worker/Peer</option>
                                                        <option value="Mentor/Coach/Teacher">Mentor/Coach/Teacher</option>
                                                        <option value="Pastor">Pastor</option>
                                             
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Length of Time Known</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="2 year/ 6 month..." 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Phone Number</p>
                                               <input 
                                                   type="tel"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Phone number" 
                                                   pattern=""
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Email</p>
                                               <input 
                                                   type="email"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Email address" 
                                                   pattern=""
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                </div>
                                
                                </div>
                            }
                           
                        </div>
                        {/*========================  contact form ref 1 end =======================*/}
                         {/*========================  contact form job ref 2=======================*/}
                        <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md"> 
                             <div className="f-job-head flex justify-between items-center cursor-pointer" onClick={()=>{exp==2? setExp(null):setExp(2)}}> 
                                 <h3 className="md:text-xl">Reference 2*</h3> <span className="md:text-xl text-[#333105]">{exp==2? <FiMinus/>:<FiPlus/>}</span>
                            </div>
                            {
                                exp==2 &&
                                <div className="f-job-bottom mt-2 border-t border-gray-300"> 
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Company</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Company name"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Title</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Title" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Relationship</p>
                                               <select 
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Supervisor's phone number"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>
                                                        <option value="Supervisor/Boss">Supervisor/Boss</option>
                                                        <option value="Co-Worker/Peer">Co-Worker/Peer</option>
                                                        <option value="Mentor/Coach/Teacher">Mentor/Coach/Teacher</option>
                                                        <option value="Pastor">Pastor</option>
                                                     
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Length of Time Known</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="2 year/ 6 month..." 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Phone Number</p>
                                               <input 
                                                   type="tel"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Phone number" 
                                                   pattern=""
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Email</p>
                                               <input 
                                                   type="email"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Email address" 
                                                   pattern=""
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                </div>
                                
                                </div>
                            }
                           
                        </div>
                        {/*========================  contact form ref 2 end =======================*/}
                        {/*========================  contact form job ref 3=======================*/}
                        <div className="form-exp-box bg-[#FFF7EA] p-4 md:p-6 mt-4 shadow-md"> 
                             <div className="f-job-head flex justify-between items-center cursor-pointer" onClick={()=>{exp==3? setExp(null):setExp(3)}}> 
                                 <h3 className="md:text-xl">Reference 3*</h3> <span className="md:text-xl text-[#333105]">{exp==3? <FiMinus/>:<FiPlus/>}</span>
                            </div>
                            {
                                exp==3 &&
                                <div className="f-job-bottom mt-2 border-t border-gray-300"> 
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Name</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Name" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name *</p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Company</p>
                                               <input  type="text"
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Company name"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>

                                                    </input>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                           <div className="form-col w-full md:w-[48%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Title</p>
                                               <input 
                                                   type="text" 
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Title" 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   required>

                                                   </input>
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[48%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Relationship</p>
                                               <select 
                                                       className=" w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-red"
                                                       placeholder="Supervisor's phone number"
                                                       pattern="[a-zA-z ]{3,20}"
                                                       title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                       required>
                                                        <option value="Supervisor/Boss">Supervisor/Boss</option>
                                                        <option value="Co-Worker/Peer">Co-Worker/Peer</option>
                                                        <option value="Mentor/Coach/Teacher">Mentor/Coach/Teacher</option>
                                                        <option value="Pastor">Pastor</option>
                                                     
                                                    </select>
                                                    <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden">First name? *</p>
                                        </div>
                                </div>
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Length of Time Known</p>
                                               <input 
                                                   type="text"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="2 year/ 6 month..." 
                                                   pattern="[a-zA-z ]{3,20}"
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Phone Number</p>
                                               <input 
                                                   type="tel"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Phone number" 
                                                   pattern=""
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                        <div className="form-col w-full md:w-[31%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Email</p>
                                               <input 
                                                   type="email"
                                                   className="w-full event-input  border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent focus-green" 
                                                   placeholder="Email address" 
                                                   pattern=""
                                                   title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                   id="mn"
                                                   required/>
                                                   
                                                   <p className="mt-1 text-sm md:text-base evevt-input-label text-red-700 fErr hidden"></p>
                                        </div>
                                </div>
                                
                                </div>
                            }
                           
                        </div>
                        {/*========================  contact form ref 3 end =======================*/}
                {/*======================== contact form job ref end=======================*/}
          
                {/*========================  Other=======================*/}
               
                       
                        <div className="form-row mt-6">
                             <p className="mb-1 text-lg lg:text-xl evevt-input-label text-gray-800 font-medium border-b border-gray-400 pb-2">Disclaimer & Signature</p>
                             <div className="ds-box mt-4 relative ">
                               <p className="text-gray-700">I certify that all information I have provided on this application is true, complete and correct. I understand that any information provided by me that is found to be false, incomplete or misrepresented in any respect, will be sufficient cause to cancel further consideration of this application, or immediately discharge me from employment when discovered.</p>  
                               <span onClick={()=>{setShowDs(true)}} className="mt-2 text-blue-600 cursor-pointer hover:text-blue-800">Read more</span>
                            
                            {
                                showDs &&
                                <div ref={dsref} className="ds-full  text-[14px] sm:text-sm absolute bottom-6 text-gray-700 bg-[#FFF7EA] px-2 py-5 md:p-6 shadow-lg  md:max-w-[98%] left-0 right-0 mx-auto border border-gold">
                                <div className="ds-close relative"><span onClick={()=>{setShowDs(false)}} className="absolute top-[-20px] right-[-8px] md:top-[-24px] md:right-[-24px] text-lg md:text-xl p-1 md:p-2 bg-gold"><FiX/></span></div> 
                                    <div className="overflow-y-auto max-h-[440px] md:max-h-[600px]">
                                    <p className="text-gray-700 my-2">I certify that all information I have provided on this application is true,
                                                                         complete and correct. I understand that any information provided by me that is found to be false, incomplete
                                                                          or misrepresented in any respect, will be sufficient cause to cancel further consideration of this application,
                                                                           or immediately discharge me from employment when discovered.</p>  
                                    <p className="text-gray-700 myy-2">I expressly authorize, without reservation,
                                     All in Adventures, LLC and its representatives, employees or agents to
                                      contact and obtain information from all references (personal and professional),
                                       employers, public agencies, licensing authorities and educational institutions
                                        and to otherwise verify accuracy of all information provided by me in this
                                         application, or job interview. I hereby waive any and all rights and claims
                                          I may have against All in Adventures LLC., its agents, employees or representatives,
                                           for seeking, gathering and using such information in the employment process and all
                                                                    other persons, corporations or organizations for furnishing such information about me.</p> 
                                    <p className="text-gray-700 my-2">I understand that All in Adventures LLC. does not unlawfully discriminate in employment and no question on this application is used for purposes of limiting or excusing any applicant from consideration for employment on a basis prohibited by applicable local, 
                                            state or federal law. If employed and in consideration of my employment, I agree to conform to the rules,
                                             procedures and policies of All in Adventures. I understand that if I am hired, my employment may be conditioned
                                              on a satisfactory background check. I understand that if I am hired, my employment will be at-will. I may be transferred,
                                               reassigned, suspended or demoted and my employment may be terminated at any time with or without notice or cause.
                                                I further understand that no one has any authority to enter into any agreement of employment for
                                                 any specified period of time, or to make any agreement contrary to the foregoing other than in
                                                                writing signed by me and an authorized representative of All in Adventures LLC.</p> 
                                   <p className="text-gray-700 mt-4"><span className="font-medium text-sm md:text-base">BACKGROUND CHECKS: </span>
                                                         Employment at All in Adventures is contingent upon a background check,
                                                          which is required for all staff members. If the background check reveals
                                                           a conviction or misconduct relevant to the position, or if an individual
                                                            refuses to give consent for a background check, the individual may be disqualified
                                                             from holding the position. All in Adventures recognizes the need to conduct background
                                                              checks on employees/candidates while protecting their privacy. All in Adventure's policy
                                                               as well as state and federal laws recognizes the individual's right to privacy and prohibits
                                                                All in Adventures employees from unauthorized use or disclosure of personal information.
                                   </p> 
                                     </div>
                                </div>  
                            }
                                       
                        </div>
                        <p className="mb-1 mt-2 lg:text-lg evevt-input-label text-gray-800">By checking this box, I agree that I have read and understand the above disclaimer and effectively sign this digital application.*</p>
                        <div className="flex items-center space-x-4 ">
                                   <input type="checkbox"  id="tq"/> <label htmlFor="tq" className="text-[#222222] text-lg">I agree</label> 
                                     </div> 
                        </div>
                      
               
                {/*======================== Other end=======================*/}
               

            </div>
        </div>
    )

}

export default References