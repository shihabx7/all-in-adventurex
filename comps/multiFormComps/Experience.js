
import { FiPlus,FiMinus } from "react-icons/fi";
import { useState } from "react"

const Experience=({jobExp,setJobExp,setFormErrFlag,jobPrevErr})=>{

    const [exp,setExp]=useState(1)
    const [expErr,setExpErr]=useState({
                                         isEmployedErr:false,
                                         skillListErr:false,
                                         jobErr1:{
                                                    companyName:false,
                                                     title:false,
                                                     spName:false,
                                                     spPhone:false,
                                                     dateOfEmployment:false,
                                                     isContact:false,
                                                     majorResponsibility:false,
                                                     reasonForLeaving:false,
                                                 },
                                         jobErr2:{
                                                    companyName:false,
                                                     title:false,
                                                     spName:false,
                                                     spPhone:false,
                                                     dateOfEmployment:false,
                                                     isContact:false,
                                                     majorResponsibility:false,
                                                     reasonForLeaving:false,
                                                 },
                                         jobErr3:{
                                                     companyName:false,
                                                      title:false,
                                                      spName:false,
                                                      spPhone:false,
                                                      dateOfEmployment:false,
                                                      isContact:false,
                                                      majorResponsibility:false,
                                                      reasonForLeaving:false,
                                         }
                                             
    })
    const escape=(htmlStr)=> {
        return htmlStr.replace(/&/g, "and")
              .replace(/</g, " ")
              .replace(/>/g, " ")
             // .replace(/(?:\r\n|\r|\n)/g, '<br>');
                     
     
     }
// company name validation------------------------
     const checkCompanyName=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
        const namePatt=/^[A-Za-z0-9 ]*$/ 
        if(cname.length>2 && cname.length<41){
            if(!namePatt.test(cname)){
                     setFormErrFlag(true)
                     setExpErr({...expErr,[errname]:{...expErr[errname],companyName:true}})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],companyName:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],companyName:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],companyName:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],companyName:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
       
     }
     // job title name validation------------------------
     const checkTitleName=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
        const namePatt=/^[A-Za-z0-9 ]*$/ 
        if(cname.length>2 && cname.length<41){
            if(!namePatt.test(cname)){
                     setFormErrFlag(true)
                     setExpErr({...expErr,[errname]:{...expErr[errname],title:true}})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],title:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],title:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],title:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],title:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
       

     }
     // supervisor name validation------------------------
     const checkSpName=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
        const namePatt=/^[A-Za-z0-9 ]*$/ 
        if(cname.length>2 && cname.length<41){
            if(!namePatt.test(cname)){
                     setFormErrFlag(true)
                     setExpErr({...expErr,[errname]:{...expErr[errname],spName:true}})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],spName:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],spName:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],spName:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],spName:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
       

     }
     // supervisor phone validation------------------------
     const checkSpPhone=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
        const namePatt=/^[ 0-9-+/./(/)]*$/ 
        if(cname.length>6 && cname.length<19){
            if(!namePatt.test(cname)){
                     setFormErrFlag(true)
                     setExpErr({...expErr,[errname]:{...expErr[errname],spPhone:true}})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],spPhone:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],spPhone:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],spPhone:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],spPhone:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
     
     }
       // Date Of Employment validation------------------------
     const checkDateOfEmployment=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
      //  const namePatt=/^[0-9-+/./(/)]*$/ 
       // const namePatt= /^(\d{1,2})\/(\d{4})(.*)/
       /* if(!namePatt.test(cname)){
                     setFormErrFlag(true)
                     setExpErr({...expErr,[errname]:{...expErr[errname],dateOfEmployment:true}})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }*/
        if(cname.length>2 && cname.length<21){
            
        
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],dateOfEmployment:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],dateOfEmployment:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
         
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],dateOfEmployment:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],dateOfEmployment:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
        console.log(cname)
        console.log(job)
        console.log(jobExp)
        console.log(expErr)

     }
     // Date Of is contact validation------------------------
     const checkIsContact=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
       // const namePatt=/^[0-9-+/./(/)]*$/ 
        if(cname.length>0 ){
           
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],isContact:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],isContact:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
           
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],isContact:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],isContact:cname}})
            e.target.classList.remove("focus-red")
            e.target.classList.add("focus-green")
        }
     }
     // Date Of is major res validation------------------------
     const checkMajorResponsibility=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
      //  const namePatt=/^[A-Za-z0-9 ]*$/ 
        if(cname.length>2 && cname.length<141){
           
            
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],majorResponsibility:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],majorResponsibility:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],majorResponsibility:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],majorResponsibility:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
       
     }
          // reason for leaving validation------------------------
     const checkReasonForLeaving=(e,job)=>{
        const cname=escape(e.target.value)
        const jobname='job'+job
        const errname='jobErr'+job
      //  const namePatt=/^[A-Za-z0-9 ]*$/ 
        if(cname.length>2 && cname.length<141){
           
            
                setFormErrFlag(false)
                setExpErr({...expErr,[errname]:{...expErr[errname],reasonForLeaving:false}})
                setJobExp({...jobExp,[jobname]:{...jobExp[jobname],reasonForLeaving:cname}})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,[errname]:{...expErr[errname],reasonForLeaving:true}})
            setJobExp({...jobExp,[jobname]:{...jobExp[jobname],reasonForLeaving:cname}})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }

     }
     // is employed validation------------------------
     const checkIsEmployed=(e)=>{
        const cname=escape(e.target.value)
        
        if(cname!='' ){
           
                     setFormErrFlag(false)
                     setExpErr({...expErr,isEmployedErr:false})
                     setJobExp({...jobExp,isEmployed:cname})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
           
        }
       
        else{
                setFormErrFlag(true)
                setExpErr({...expErr,isEmployedErr:true})
                setJobExp({...jobExp,isEmployed:cname})
            e.target.classList.remove("focus-green")
             e.target.classList.add("focus-red")
        }
        console.log(jobExp)
     }
     // checckskill validation------------------------
     const checkSkillList=(e)=>{
        const cname=escape(e.target.value)
       
       
        if(cname.length>2){
           
                setFormErrFlag(false)
                setExpErr({...expErr,skillListErr:false})
                setJobExp({...jobExp,skillList:cname})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
           
        }
       
        else{
          setFormErrFlag(true)
          setExpErr({...expErr,skillListErr:true})
          setJobExp({...jobExp,skillList:cname})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }

     }

    return(
        
        <div>
            
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
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Company Name</p>
                                               <input 
                                                   type="text" 
                                                   defaultValue={jobExp.job1.companyName}
                                                    onChange={(e)=>checkCompanyName(e,1)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.companyName>5? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.companyName=='')?"focus-red":"")}
                                                   
                                                   placeholder="Your company name" 
                                                   >

                                                   </input>
                                                   {
                                                            (expErr.jobErr1.companyName && jobExp.job1.companyName.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.companyName=='') && !expErr.jobErr1.companyName) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                                    
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Job Title	</p>
                                               <input  type="text"
                                                       defaultValue={jobExp.job1.title}
                                                       onChange={(e)=>checkTitleName(e,1)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.title>5? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.title=='')?"focus-red":"")}
                                                       placeholder="Your job title"
                                                      >

                                                    </input>
                                                    {
                                                            (expErr.jobErr1.title && jobExp.job1.title.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.title=='') && !expErr.jobErr1.title) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                        </div>
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Name</p>
                                               <input 
                                                   type="text" 
                                                   defaultValue={jobExp.job1.spName}
                                                   onChange={(e)=>checkSpName(e,1)}
                                                   className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.spName>5? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.spName=='')?"focus-red":"")}
                                                   placeholder="Your supervisor's name" 
                                                   
                                                   >

                                                   </input>
                                                   {
                                                            (expErr.jobErr1.spName && jobExp.job1.spName.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 3-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.spName=='') && !expErr.jobErr1.spName) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Phone</p>
                                               <input  type="text"
                                                       defaultValue={jobExp.job1.spPhone}
                                                       onChange={(e)=>checkSpPhone(e,1)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.spPhone>5? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.spName=='')?"focus-red":"")}
                                                       placeholder="Supervisor's phone number"
                                                       >

                                                    </input>
                                                    {
                                                            (expErr.jobErr1.spPhone && jobExp.job1.spPhone.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid phone number</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.spPhone=='') && !expErr.jobErr1.spPhone) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                        </div>
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Dates of Employment (Mo/Year)</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job1.dateOfEmployment}
                                                    onChange={(e)=>checkDateOfEmployment(e,1)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.dateOfEmployment>0? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.dateOfEmployment=='')?"focus-red":"")}
                                                   placeholder="02/2000" 
                                                   />
                                                   
                                                   {
                                                            (expErr.jobErr1.dateOfEmployment && jobExp.job1.dateOfEmployment.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid date formate</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.dateOfEmployment=='') && !expErr.jobErr1.dateOfEmployment) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">If offer made, may we contact?</p>
                                               <select 
                                                       defaultValue={jobExp.job1.isContact}
                                                       onChange={(e)=>checkIsContact(e,1)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.isContact>0? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.isContact=='')?"focus-red":"")}
                                                       placeholder="Your last name"
                                                       
                                                       >    
                                                            <option value="">...</option>
                                                           <option value="yes">Yes</option>
                                                           <option value="yes">No</option>

                                                    </select>
                                                    {
                                                            (expErr.jobErr1.isContact && jobExp.job1.isContact=='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select one option</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.isContact=='') && !expErr.jobErr1.isContact) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                        </div>
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Major Responsibilities</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job1.majorResponsibility}
                                                    onChange={(e)=>checkMajorResponsibility(e,1)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.majorResponsibility>5? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.majorResponsibility.length<5)?"focus-red":"")}
                                                    />
                                                   
                                                   {
                                                            (expErr.jobErr1.majorResponsibility && jobExp.job1.majorResponsibility!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.majorResponsibility=='') && !expErr.jobErr1.majorResponsibility) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Reason for Leaving</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job1.reasonForLeaving}
                                                    onChange={(e)=>checkReasonForLeaving(e,1)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job1.majorResponsibility>2? "focus-green ":"")+((jobPrevErr.jobErr1 && jobExp.job1.majorResponsibility.length<2)?"focus-red":"")}/>
                                                    {
                                                            (expErr.jobErr1.reasonForLeaving && jobExp.job1.reasonForLeaving!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr1 && jobExp.job1.reasonForLeaving=='') && !expErr.jobErr1.reasonForLeaving) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
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
                                <div className={"f-job-bottom mt-2 border-t border-gray-300 "+(jobPrevErr.jobErr2==true?"focus-red":'')}> 
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Company Name</p>
                                               <input 
                                                   type="text" 
                                                   defaultValue={jobExp.job2.companyName}
                                                    onChange={(e)=>checkCompanyName(e,2)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.companyName>5? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.companyName=='')?"focus-red":"")}
                                                   
                                                   placeholder="Your company name" 
                                                   >

                                                   </input>
                                                   {
                                                            (expErr.jobErr2.companyName && jobExp.job2.companyName.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.companyName=='') && !expErr.jobErr2.companyName) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                                    
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Job Title	</p>
                                               <input  type="text"
                                                       defaultValue={jobExp.job2.title}
                                                       onChange={(e)=>checkTitleName(e,2)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.title>5? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.title=='')?"focus-red":"")}
                                                       placeholder="Your job title"
                                                      >

                                                    </input>
                                                    {
                                                            (expErr.jobErr2.title && jobExp.job2.title.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.title=='') && !expErr.jobErr2.title) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                        </div>
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Name</p>
                                               <input 
                                                   type="text" 
                                                   defaultValue={jobExp.job2.spName}
                                                   onChange={(e)=>checkSpName(e,2)}
                                                   className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.spName>5? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.spName=='')?"focus-red":"")}
                                                   placeholder="Your supervisor's name" 
                                                   
                                                   >

                                                   </input>
                                                   {
                                                            (expErr.jobErr2.spName && jobExp.job2.spName.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 3-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.spName=='') && !expErr.jobErr2.spName) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Phone</p>
                                               <input  type="text"
                                                       defaultValue={jobExp.job2.spPhone}
                                                       onChange={(e)=>checkSpPhone(e,2)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.spPhone>5? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.spName=='')?"focus-red":"")}
                                                       placeholder="Supervisor's phone number"
                                                       >

                                                    </input>
                                                    {
                                                            (expErr.jobErr2.spPhone && jobExp.job2.spPhone.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid phone number</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.spPhone=='') && !expErr.jobErr2.spPhone) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                        </div>
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Dates of Employment (Mo/Year)</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job2.dateOfEmployment}
                                                    onChange={(e)=>checkDateOfEmployment(e,2)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.dateOfEmployment>0? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.dateOfEmployment=='')?"focus-red":"")}
                                                   placeholder="02/2000" 
                                                   />
                                                   
                                                   {
                                                            (expErr.jobErr2.dateOfEmployment && jobExp.job2.dateOfEmployment.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid date formate</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.dateOfEmployment=='') && !expErr.jobErr2.dateOfEmployment) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">If offer made, may we contact?</p>
                                               <select 
                                                       defaultValue={jobExp.job2.isContact}
                                                       onChange={(e)=>checkIsContact(e,2)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.isContact>0? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.isContact=='')?"focus-red":"")}
                                                       
                                                       >    
                                                            <option value="">...</option>
                                                           <option value="yes">Yes</option>
                                                           <option value="yes">No</option>

                                                    </select>
                                                    {
                                                            (expErr.jobErr2.isContact && jobExp.job2.isContact=='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select one option</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.isContact=='') && !expErr.jobErr2.isContact) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                        </div>
                                        <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Major Responsibilities</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job2.majorResponsibility}
                                                    onChange={(e)=>checkMajorResponsibility(e,2)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.majorResponsibility>5? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.majorResponsibility.length<5)?"focus-red":"")}
                                                    />
                                                   
                                                   {
                                                            (expErr.jobErr2.majorResponsibility && jobExp.job2.majorResponsibility!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.majorResponsibility=='') && !expErr.jobErr2.majorResponsibility) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Reason for Leaving</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job2.reasonForLeaving}
                                                    onChange={(e)=>checkReasonForLeaving(e,2)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.majorResponsibility>2? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.majorResponsibility.length<2)?"focus-red":"")}/>
                                                    {
                                                            (expErr.jobErr2.reasonForLeaving && jobExp.job2.reasonForLeaving!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }
                                                   
                                                    {
                                                        ((jobPrevErr.jobErr2 && jobExp.job2.reasonForLeaving=='') && !expErr.jobErr2.reasonForLeaving) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
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
                                <div className={"f-job-bottom mt-2 border-t border-gray-300 "+(jobPrevErr.jobErr3==true?"focus-red":'')}> 
                                     <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Company Name</p>
                                               <input 
                                                   type="text" 
                                                   defaultValue={jobExp.job3.companyName}
                                                    onChange={(e)=>checkCompanyName(e,3)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job3.companyName>5? "focus-green ":"")+((jobPrevErr.jobErr3 && jobExp.job3.companyName=='')?"focus-red":"")}

                                                   placeholder="Your company name" 
                                                   >
                                                
                                                   </input>
                                                   {
                                                            (expErr.jobErr3.companyName && jobExp.job3.companyName.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }

                                                    {
                                                        ((jobPrevErr.jobErr3 && jobExp.job3.companyName=='') && !expErr.jobErr3.companyName) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Job Title	</p>
                                               <input  type="text"
                                                       defaultValue={jobExp.job3.title}
                                                       onChange={(e)=>checkTitleName(e,3)}
                                                       className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job3.title>5? "focus-green ":"")+((jobPrevErr.jobErr3 && jobExp.job3.title=='')?"focus-red":"")}
                                                       placeholder="Your job title"
                                                      >
                                                    
                                                    </input>
                                                    {
                                                            (expErr.jobErr3.title && jobExp.job3.title.length>0 ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }

                                                    {
                                                        ((jobPrevErr.jobErr3 && jobExp.job3.title=='') && !expErr.jobErr3.title) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                            </div>
                                     </div>
                                     <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                         <div className="form-col w-full md:w-[49%]">
                                             <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Name</p>
                                             <input 
                                                 type="text" 
                                                 defaultValue={jobExp.job3.spName}
                                                 onChange={(e)=>checkSpName(e,3)}
                                                 className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job3.spName>5? "focus-green ":"")+((jobPrevErr.jobErr3 && jobExp.job3.spName=='')?"focus-red":"")}
                                                 placeholder="Your supervisor's name" 
                                                        
                                                 >
                                                
                                                 </input>
                                                 {
                                                          (expErr.jobErr3.spName && jobExp.job3.spName.length>0 ) &&
                                                          <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 3-40 character)</p>
                                                  }
                                                 
                                                  {
                                                      ((jobPrevErr.jobErr3 && jobExp.job3.spName=='') && !expErr.jobErr3.spName) &&
                                                      <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                  }
                                         </div>
                                         <div className="form-col w-full md:w-[49%]">
                                            <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Supervisor's Phone</p>
                                            <input  type="text"
                                                    defaultValue={jobExp.job3.spPhone}
                                                    onChange={(e)=>checkSpPhone(e,3)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job3.spPhone>5? "focus-green ":"")+((jobPrevErr.jobErr3 && jobExp.job3.spName=='')?"focus-red":"")}
                                                    placeholder="Supervisor's phone number"
                                                    >

                                                 </input>
                                                 {
                                                         (expErr.jobErr3.spPhone && jobExp.job3.spPhone.length>0 ) &&
                                                         <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid phone number</p>
                                                 }

                                                 {
                                                     ((jobPrevErr.jobErr3 && jobExp.job3.spPhone=='') && !expErr.jobErr3.spPhone) &&
                                                     <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                 }
                                         </div>
                                     </div>
                                     <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                                   <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Dates of Employment (Mo/Year)</p>
                                                   <input 
                                                       type="text"
                                                       defaultValue={jobExp.job3.dateOfEmployment}
                                                        onChange={(e)=>checkDateOfEmployment(e,3)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job3.dateOfEmployment>0? "focus-green ":"")+((jobPrevErr.jobErr3 && jobExp.job3.dateOfEmployment=='')?"focus-red":"")}
                                                       placeholder="02/1999" 
                                                       />

                                                       {
                                                                (expErr.jobErr3.dateOfEmployment && jobExp.job3.dateOfEmployment.length>0 ) &&
                                                                <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Invalid date formate</p>
                                                        }

                                                        {
                                                            ((jobPrevErr.jobErr3 && jobExp.job3.dateOfEmployment=='') && !expErr.jobErr3.dateOfEmployment) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                        }
                                            </div>
                                             <div className="form-col w-full md:w-[49%]">
                                       <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">If offer made, may we contact?</p>
                                       <select 
                                               defaultValue={jobExp.job3.isContact}
                                               onChange={(e)=>checkIsContact(e,2)}
                                               className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.isContact>0? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.isContact=='')?"focus-red":"")}
                                               
                                               >    
                                                    <option value="">...</option>
                                                   <option value="yes">Yes</option>
                                                   <option value="yes">No</option>

                                            </select>
                                            {
                                                    (expErr.jobErr3.isContact && jobExp.job3.isContact=='' ) &&
                                                    <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select one option</p>
                                            }
                                           
                                            {
                                                ((jobPrevErr.jobErr3 && jobExp.job3.isContact=='') && !expErr.jobErr3.isContact) &&
                                                <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                            }
                                            </div>
                                     </div>
                                     <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between my-3">
                                            <div className="form-col w-full md:w-[49%]">
                                       <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Major Responsibilities</p>
                                       <input 
                                           type="text"
                                           defaultValue={jobExp.job3.majorResponsibility}
                                            onChange={(e)=>checkMajorResponsibility(e,2)}
                                            className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job2.majorResponsibility>5? "focus-green ":"")+((jobPrevErr.jobErr2 && jobExp.job2.majorResponsibility.length<5)?"focus-red":"")}
                                            />
                                           
                                           {
                                                    (expErr.jobErr3.majorResponsibility && jobExp.job3.majorResponsibility!='' ) &&
                                                    <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                            }
                                           
                                            {
                                                ((jobPrevErr.jobErr3 && jobExp.job2.majorResponsibility=='') && !expErr.jobErr3.majorResponsibility) &&
                                                <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                            }
                                            </div>
                                            <div className="form-col w-full md:w-[49%]">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">Reason for Leaving</p>
                                               <input 
                                                   type="text"
                                                   defaultValue={jobExp.job3.reasonForLeaving}
                                                    onChange={(e)=>checkReasonForLeaving(e,3)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#F4E6C3] focus:ring-transparent "+ (jobExp.job3.majorResponsibility>2? "focus-green ":"")+((jobPrevErr.jobErr3 && jobExp.job3.majorResponsibility.length<2)?"focus-red":"")}/>
                                                    {
                                                            (expErr.jobErr3.reasonForLeaving && jobExp.job3.reasonForLeaving!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 6-40 character)</p>
                                                    }

                                                    {
                                                        ((jobPrevErr.jobErr3 && jobExp.job3.reasonForLeaving=='') && !expErr.jobErr3.reasonForLeaving) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
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
                                                <p className="mb-1 lg:text-lg evevt-input-label text-gray-800">Are you presently employed? *</p>
                                                <select 
                                                   
                                                    defaultValue={jobExp.isEmployed}
                                                    onChange={(e)=>checkIsEmployed(e)}
                                                    className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#FFF7EA] focus:ring-transparent "+ (jobExp.isEmployed!=''? "focus-green ":"")+((jobPrevErr.jobAllErr || expErr.isEmployedErr)?"focus-red":"")}
                                                    >
                                                            <option value="">---</option>
                                                            <option value="Yes">Yes</option>
                                                            <option value="No">No</option>
                                                    </select>
                                                    {
                                                            expErr.isEmployedErr && 
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select if you are employed or not</p>
                                                    }

                                                    {
                                                        (jobPrevErr.jobAllErr && !expErr.isEmployedErr) &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Select if you are employed or not</p>
                                                    }
                                        </div>
                                         <div className="form-col w-full md:w-[62%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-gray-800">List 3 skills from your work experiences<span className="text-[14px] text-gray-600"> (separateed by comma)</span></p>
                                                <input  type="text"
                                                        defaultValue={jobExp.skillList}
                                                        onChange={(e)=>checkSkillList(e)}
                                                        className={"w-full max-h-[68px] event-input border-0 md:py-3 px-4 bg-[#FFF7EA] focus:ring-transparent "+ (jobExp.skillList!=''? "focus-green ":"")+(jobPrevErr.skillListErr?"focus-red":"")}
                                                        >

                                                     </input>
                                                     {
                                                            (expErr.skillListErr && jobExp.skillList.length!='' ) &&
                                                            <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">Only letter, number and space allowed (between 3-40 character)</p>
                                                    }

                                                    {
                                                        (jobPrevErr.skillListErr && jobExp.skillList=='') &&
                                                        <p className="cor-form-err mt-1 evevt-input-label text-[#E1001A] fErr text-xs md:text-sm">This field must not be empty</p>
                                                    }
                                         </div>
                        </div>
                      
               
                {/*======================== Other end=======================*/}
               

            </div>
        </div>
    )

}

export default Experience