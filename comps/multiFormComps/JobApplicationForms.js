import { useState } from "react"
import ApplicantInfo from "./ApplicantInfo"
import ApplicantInfo2 from "./ApplicantInfo2" 
import Availability from "./Availability"
import Education from "./Education" 
import Experience from "./Experience"
import References from "./References" 
import Disclaimer from "./Disclaimer"


const JobApplicationForms=(props)=>{

    const [formStep, setFormStep]=useState(0) 
    const [formName,setFormName]=useState('')
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
    const getPw=()=>{
        var step=Math.floor(((formStep+1)/6)*100)

        return step
    } 

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
                <div className="job-name flex justify-between mb-4"><h3 className="font-medium text-2xl text-[#464646]">{formName}</h3><p className="font-medium text-lg text-[#464646]">Step {formStep+1} of 6</p></div>
                <div className="bg-[#cdcdcd] rounded"> 
                    <div className={"bg-golden-alt h-[4px] rounded"} style={{width:getPw()+"%"}}></div>
                </div>
            </div>
            <div className="job-form-body">
                {
                    formStep==0 && 
                    <ApplicantInfo  setFormName={setFormName}/>
                }
                {
                    formStep==1 && 
                    <ApplicantInfo2  locationlist={props.locationlist} setFormName={setFormName}/>
                }
                {
                    formStep==2 && 
                    <Availability setFormName={setFormName}/>
                }
                 {
                    formStep==3 && 
                    <Education setFormName={setFormName}/>
                }
                 {
                    formStep==4 && 
                    <Experience setFormName={setFormName}/>
                }
                {
                    formStep==5 && 
                    <References setFormName={setFormName}/>
                }

            </div>
            <div className="form-bottom flex justify-end items-center space-x-2 mt-8">
                {
                    (formStep>0 && !formErrFlag) &&
                    <button onClick={()=>{backStep()}} className="btn-back px-6 py-2 text-lg rounded bg-red-600 hover:bg-red-700 text-center text-white">BACK</button>
                } 
                 {
                    (formStep<5 && !formErrFlag) &&
                    <button onClick={()=>{nextStep()}} className="btn-back px-6 py-2 text-lg rounded bg-red-600 hover:bg-red-700 text-center text-white">NEXT</button>
                } 
              
              {
                    (formStep==5 && !formErrFlag) &&
                    <button onClick={()=>{submitForm()}} className="btn-back px-6 py-2 text-lg rounded bg-red-600 hover:bg-red-700 text-center text-white">SUBMIT</button>
                } 
              
                

            </div>

        </div>
    )

}

export default JobApplicationForms