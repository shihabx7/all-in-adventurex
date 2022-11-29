import { useState } from "react"
import ApplicantInfo from "./ApplicantInfo"
import ApplicantInfo2 from "./ApplicantInfo2" 
import Availability from "./Availability"
import Education from "./Education" 
import Experience from "./Experience"
import References from "./References" 
import Disclaimer from "./Disclaimer"


const JobApplicationForms=()=>{

    const [formStep, setFormStep]=useState(0) 
    const [formErrFlag, setFormErrFlag]=useState(false)
    const [formData,setFormData]=useState({
                                         fName:'',
                                         lName:'',
                                         email:'',
                                         phone:'',
                                         dLocation:'',
    
                                           })
    const [formErr,setFormErr]=useState({
                                         fName:'',
                                         lName:'',
                                         email:'',
                                         phone:'',
                                         dLocation:'',

                                         })    

    const backStep=()=>{
        setFormStep(formStep-1)
    }
    const nextStep=()=>{
        setFormStep(formStep+1)
    }
    const submitForm=()=>{

        alert("form submition success")
    }

    return (
        <div className="job-form">
            <div className="job-form-head"> 
                
            </div>
            <div className="job-form-body">
                {
                    formStep==0 && 
                    <ApplicantInfo/>
                }
                {
                    formStep==1 && 
                    <ApplicantInfo2/>
                }
                {
                    formStep==2 && 
                    <Availability/>
                }
                 {
                    formStep==3 && 
                    <Education/>
                }
                 {
                    formStep==4 && 
                    <Experience/>
                }
                {
                    formStep==5 && 
                    <References/>
                }

            </div>
            <div className="form-bottom flex justify-end items-center space-x-2">
                {
                    (formStep>0 && !formErrFlag) &&
                    <button onClick={()=>{backStep()}} className="btn-back px-4 py-2 text-lg bg-red-600 hover:bg-red-700 text-center text-white">BACK</button>
                } 
                 {
                    (formStep<5 && !formErrFlag) &&
                    <button onClick={()=>{nextStep()}} className="btn-back px-4 py-2 text-lg bg-red-600 hover:bg-red-700 text-center text-white">NEXT</button>
                } 
              
              {
                    (formStep==5 && !formErrFlag) &&
                    <button onClick={()=>{submitForm()}} className="btn-back px-4 py-2 text-lg bg-red-600 hover:bg-red-700 text-center text-white">SUBMIT</button>
                } 
              
                

            </div>

        </div>
    )

}

export default JobApplicationForms