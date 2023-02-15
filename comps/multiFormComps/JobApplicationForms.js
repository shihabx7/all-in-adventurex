import { useEffect, useState } from "react"
import ApplicantInfo from "./ApplicantInfo"
import ApplicantInfo2 from "./ApplicantInfo2" 
import Availability from "./Availability"
import Education from "./Education" 
import Experience from "./Experience"
import References from "./References" 



const JobApplicationForms=(props)=>{

    const [formStep, setFormStep]=useState(0) 

    const [formName,setFormName]=useState('Applicant info 1')
    useEffect(() => {
        if(formStep==1){
            setFormName('Applicant info 2')
        }
        if(formStep==2){
            setFormName('Availability')
        }
        if(formStep==3){
            setFormName('Education')
        }
        if(formStep==4){
            setFormName('Work Experience')
        }
        if(formStep==5){
            setFormName('Professional References')
        }
        
      }, [formStep]);
    const [formErrFlag, setFormErrFlag]=useState(false)
    const [appInfo1,setAppInfo1]=useState({
                                            fName:'',
                                            lName:'',
                                            email:'',
                                            phone:'',
                                            stAdd1:'',
                                            stAdd2:'',
                                            city:'',
                                            state:'',
                                            zip:'',
                                            country:'',
                                         })
    const [appInfo2,setAppInfo2]=useState({
                                            dLocation:'',
                                            dPosition:'',
                                            dPay:'',
                                            dSchedule:'',
                                            isAge:'',
                                            isEligible:'',
                                            everWorkPast:'',
                                            workUnderOther:'',
                                            learnAboutPos:'',
                                            whatAttracted:'',
                                         })
    const [availability,setAvailability]=useState({
                                         careerObjective:'',
                                         avlStartDate:'',
                                         avlToWork:'',
                                         howLongStay:'',
                                         sunday:{
                                                 start:'',
                                                 close:'',
                                                 },
                                        monday:{
                                                 start:'',
                                                 close:'',
                                                 },
                                        tuesday:{
                                                 start:'',
                                                 close:'',
                                                },
                                        wednesday:{
                                                 start:'',
                                                 close:'',
                                                },
                                        thursday :{
                                                 start:'',
                                                 close:'',
                                                    },
                                        friday  :{
                                                 start:'',
                                                 close:'',
                                                    },
                                        saturday  :{
                                                 start:'',
                                                 close:'',
                                             },
                                         })
   const [education,setEducation]=useState({
                                             hSchoolName:'',
                                             hSchoolAttendDate:'',
                                             hSchoolGraduated:'',
                                             hSchoolDegree:'',
                                             uinName:'',
                                             uinAttendDate:'',
                                             uinGraduated:'',
                                             uinDegree:'',
                                             otherName:'',
                                             otherAttendDate:'',
                                             otherGraduated:'',
                                             otherDegree:'',
                                            })
    const [jobExp,setJobExp]=useState({
                                         isEmployed:'',
                                         skillList:'',
                                         company1:'',
                                         title1:'',
                                         spName1:'',
                                         spPhone1:'',
                                         dateOfEmployment1:'',
                                         isContact1:'',
                                         majorResponsibility1:'',
                                         reasonForLeaving1:'',
                                         company2:'',
                                         title2:'',
                                         spName2:'',
                                         spPhone2:'',
                                         dateOfEmployment2:'',
                                         isContact2:'',
                                         majorResponsibility2:'',
                                         reasonForLeaving2:'',
                                         company3:'',
                                         title3:'',
                                         spName3:'',
                                         spPhone3:'',
                                         dateOfEmployment3:'',
                                         isContact3:'',
                                         majorResponsibility3:'',
                                         reasonForLeaving3:'',
                                        })
   const [references,setReferences]=useState({
                                             refName1:'',
                                             refCompany1:'',
                                             refTitle1:'',
                                             refRelation1:'',
                                             refTimeLength1:'',
                                             refPhone1:'',
                                             refEmail1:'',

                                             refName2:'',
                                             refCompany2:'',
                                             refTitle2:'',
                                             refRelation2:'',
                                             refTimeLength2:'',
                                             refPhone2:'',
                                             refEmail2:'',

                                             refName3:'',
                                             refCompany3:'',
                                             refTitle3:'',
                                             refRelation3:'',
                                             refTimeLength3:'',
                                             refPhone3:'',
                                             refEmail3:'',
                                           })

    const [formErr,setFormErr]=useState({
                                         fName:'',
                                         lName:'',
                                         email:'',
                                         phone:'',
                                         dLocation:'',

                                         })   
    const getPw=()=>{
        var step=Math.floor(((formStep)/6)*100)

        return step
    } 

    const backStep=()=>{
        setFormStep(formStep-1)
    }
    const nextStep=()=>{
        setFormStep(formStep+1)
        console.log(appInfo1)
        console.log(formErrFlag)
    }
   
    const submitForm=()=>{

        alert("Your application has been received")
    }

    return (
        <div className="job-form">
            <div className="job-form-head"> 
                <div className="job-name flex justify-between mb-4"><h3 id="fhead" className="font-medium text-2xl text-[#464646]">{formName}</h3><p className="font-medium text-lg text-[#464646]">Step {formStep+1} of 6</p></div>
                <div className="bg-[#cdcdcd] rounded"> 
                    <div className={"bg-golden-alt h-[4px] rounded"} style={{width:getPw()+"%"}}></div>
                </div>
            </div>
            <div className="job-form-body">
                {
                    formStep==0 && 
                    <ApplicantInfo appInfo1={appInfo1} setAppInfo1={setAppInfo1} setFormErrFlag={setFormErrFlag}/>
                }
                {
                    formStep==1 && 
                    <ApplicantInfo2  locationlist={props.locationlist} appInfo2={appInfo2} setAppInfo2={setAppInfo2} setFormErrFlag={setFormErrFlag}/>
                }
                {
                    formStep==2 && 
                    <Availability availability={availability} setAvailability={setAvailability} setFormErrFlag={setFormErrFlag}/>
                }
                 {
                    formStep==3 && 
                    <Education education={education} setEducation={setEducation} setFormErrFlag={setFormErrFlag}/>
                }
                 {
                    formStep==4 && 
                    <Experience jobExp={jobExp} setJobExp={setJobExp} setFormErrFlag={setFormErrFlag}/>
                }
                {
                    formStep==5 && 
                    <References  references={references} setReferences={setReferences} setFormErrFlag={setFormErrFlag}/>
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