import TitleSeparator  from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { useState } from "react"

const CorContact=()=>{

    const [err,setErr]=useState(false)
    const [emptyErr,setEmptyErr]=useState(true)
    const [formErr,setFormErr]=useState({
            fNameErr:false,
            lNameErr:false,
            emailErr:false,
            phoneErr:false,
            comErr:false,
    })
    const [fieldVlue,setFieldValue]=useState({
        fName:'',
        lName:'',
        email:'',
        phone:'',
        comSubject:'',
        msg:''

    })

   
// ========================================================first name validation=================
    const checkFName=(e)=>{

        const fname=e.target.value.trim()

        const namePatt=/^[a-zA-Z ]*$/
        if(fname.length>2 && fname.length<21){
            if(!namePatt.test(fname)){
                    setErr(true)
                    setFormErr({...formErr,fNameErr:true})
                    e.target.classList.remove("focus-green")
                    e.target.classList.add("focus-red")
                    
            }
            else{
                    setErr(false)
                    setFormErr({...formErr,fNameErr:false})
                    setFieldValue({...fieldVlue,fName:fname})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
                    
            }
        }
        else{
            setErr(true)
            setFormErr({...formErr,fNameErr:true})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
        }
    }
    // ========================================================last name validation=================
    const checkLName=(e)=>{

        const lname=e.target.value.trim()

        const namePatt=/^[a-zA-Z ]*$/
        if(lname.length>2 && lname.length<21){
            if(!namePatt.test(lname)){
                    setErr(true)
                    setFormErr({...formErr,lNameErr:true})
                    e.target.classList.remove("focus-green")
                  e.target.classList.add("focus-red")
            }
            else{
                    setErr(false)
                    setFormErr({...formErr,lNameErr:false})
                    setFieldValue({...fieldVlue,lName:lname})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
            }
        }
        else{
            setErr(true)
            setFormErr({...formErr,lNameErr:true})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
            
        }
    }
    // ========================================================email validation=================

    const checkEmail=(e)=>{

        const email=e.target.value.trim()

        const emailPatt=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(email.length>2){
            if(!emailPatt.test(email)){
                    setErr(true)
                    setFormErr({...formErr,emailErr:true})
                    e.target.classList.remove("focus-green")
                  e.target.classList.add("focus-red")
            }
            else{
                    setErr(false)
                    setFormErr({...formErr,emailErr:false})
                    setFieldValue({...fieldVlue,email:email})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
            }
        }
        else{
            setErr(true)
            setFormErr({...formErr,emailErr:true})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
            
        }
    }
    // ========================================================phone validation=================

    const checkPhone=(e)=>{

        const phone=e.target.value.trim()
        const numPatt=/^[ 0-9-+/./(/)]*$/

        if(phone.length>6 && phone.length<18){
            
            if(!numPatt.test(phone)){
                    setErr(true)
                    setFormErr({...formErr,phoneErr:true})
                    e.target.classList.remove("focus-green")
                  e.target.classList.add("focus-red")
            }
            else{
                    setErr(false)
                    setFormErr({...formErr,phoneErr:false})
                    setFieldValue({...fieldVlue,phone:phone})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
            }
        }
        else{
            setErr(true)
            setFormErr({...formErr,phoneErr:true})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
            
        }
    }
    // ========================================================communication subject validation=================

    const checkComSub=(e)=>{

        const comSub=e.target.value
        

        if(comSub!='0'){
            
           
                    setErr(false)
                    setFormErr({...formErr,comErr:false})
                    setFieldValue({...fieldVlue,comSubject:comSub})
                    e.target.classList.remove("focus-red")
                    e.target.classList.add("focus-green")
            
        }
        else{
            setErr(true)
            setFormErr({...formErr,comErr:true})
            e.target.classList.remove("focus-green")
            e.target.classList.add("focus-red")
            
        }
    }

    const submitForm=(event)=>{
        event.preventDefault()
        if(!err){
            if(fieldVlue.fName!='' && fieldVlue.lName!='' && fieldVlue.email!='' && fieldVlue.phone!='' && fieldVlue.comSubject!='' && fieldVlue.comSubject!='0'){
                        console.log(fieldVlue)
            }

        }
        else{
            if(fieldVlue.fName==''){
               const fnameEl=document.getElementById('fname')
               fnameEl.classList.remove("focus-green")
               fnameEl.classList.add("focus-red")
                setFormErr({...formErr,fNameErr:ture})
            }
            if(fieldVlue.comSubject=='' || fieldVlue.comSubject=='0'){
                const consubel=document.getElementById('comsub')
                consubel.classList.remove("focus-green")
                consubel.classList.add("focus-red")
                 setFormErr({...formErr,comErr:ture})
             }
        }

    }
    return(
        
        <div className="c-contact py-16 md:py-20 lg:py-28  bg-cover bg-center" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
            <div className="section-container max-w-7xl mx-auto relative z-30">
                <div className="section-title">
                  <TitleSeparator title='SUBMIT CORPORATE INQUIRIES ONLY' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-700 md:px-8">Fill out the form below and our corporate team will be in touch shortly.</p>
                     </div>
                 </div>
                 {console.log(formErr)}
                 <div className="c-contact-box flex flex-col md:flex-row md:space-x-6 lg:space-x-12 justify-between md:px-4">
                        <div className="c-form-info md:w-[36%] lg:w-[38%] order-2 md:order-1 px-4 md:px-0 lg:px-0">
                        <h3 className="golden-text font-os font-bold mt-8 md:mt-0 text-xl lg:text-2xl mb-2 lg:mb-4">OUR FACILITIES</h3>
                        <p className="text-gray-700 lg:text-lg">All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.
                        </p>
                        <div className="c-contact-info-list mt-6 lg:mt-8 ">
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-t border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">phone</h4>
                                <a href="tel:+1 844-502-5546" className="text-lg text-[#232323] block hover:text-blue-700">+1 844-502-5546</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg uppercase">FRANCHISING</h4>
                                <a href="mailto:franchise@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">franchise@allinadventures.com</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg uppercase">SALES</h4>
                                <a href="mailto:sales@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">sales@allinadventures.com</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">CUSTOMER SERVICE</h4>
                                <a href="mail:custsvc@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">support@allinadventures.com</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">OPERATIONS</h4>
                                <a href="mailto:ops@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">ops@allinadventures.com</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">CAREERS</h4>
                                <a href="mailto:careers@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">careers@allinadventures.com</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
                                 <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg uppercase">BILLING</h4>
                                <a href="mailto:billing@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">billing@allinadventures.com</a>
                            </div>

                        </div>

                        </div>
                        {/*======================== corporate contact form=======================*/}
                        <div className="c-form-form md:w-[62%] lg:w-[60%] order-1 md:order-2">
                            <div className="bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow"> 
                                <form onSubmit={(event)=>submitForm(event)}>
                                    {/*========================  contact form row first name = last name=======================*/}
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                            <div className="form-col w-full md:w-[48%] relative">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your first name? *</p>
                                                <input 
                                                    onChange={(e)=>checkFName(e)}
                                                    type="text"
                                                    id="fname" 
                                                    name="fname"
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent" 
                                                    placeholder="Your first name" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and minimum 2 charectar."
                                                    required>

                                                    </input>
                                                    {
                                                        formErr.fNameErr &&
                                                        <p className=" mt-1  text-sm evevt-input-label text-[#E1001A] fErr ">Invalid name. Only letter and space allowed (between 3-20 character)</p>
                                                    }
                                                    
                                         </div>
                                         <div className="form-col w-full md:w-[48%] relative">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your last name? *</p>
                                                <input
                                                     onChange={(e)=>checkLName(e)}
                                                    type="text"
                                                    name="lname"
                                                    id="lname" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                                                    placeholder="Your last name"
                                                    required></input>
                                                       {
                                                        formErr.lNameErr &&
                                                        <p className=" mt-1  text-sm evevt-input-label text-[#E1001A] fErr ">Invalid name. Only letter and space allowed (min 3 character)</p>
                                                    }
                                         </div>
                                </div>
                                 {/*========================  contact form row first name = last name========================*/}
                                 {/*======================================contact form row emal+phone====================== */}
                                 <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between mt-3 md:mt-10 lg:mt-12">
                                        <div className="relative form-col w-full md:w-[48%]">
                                             <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your email? *</p>
                                             <input type="email"
                                                    name="email"
                                                    id="email" 
                                                    onChange={(e)=>checkEmail(e)} 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent" 
                                                    placeholder="Your email address"
                                                    required></input>
                                                    {
                                                        formErr.emailErr &&
                                                        <p className="mt-1 text-sm evevt-input-label text-[#E1001A] fErr ">Invalid email address</p>
                                                    }
                                         </div>
                                         <div className="form-col  w-full md:w-[48%]">
                                             <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your phone number? *</p>
                                             <input type="tel" 
                                                    onChange={(e)=>checkPhone(e)} 
                                                    name="phone"
                                                    id="phone" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" 
                                                    placeholder="Your phone number"
                                                    required></input>
                                                    {
                                                        formErr.phoneErr &&
                                                        <p className="mt-1 text-sm evevt-input-label text-[#E1001A] fErr ">Invalid Phone Number</p>
                                                    }
                                         </div>
                                     </div>
                                    {/*======================================contact form row====================== */}
                                    {/*======================================contact form row location event====================== */}
                                    <div className="form-row flex justify-between mt-3 md:mt-10 lg:mt-12 ">
                                                   
                                        <div className="form-col w-full">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Subject of your communications? *</p>
                                               <select
                                                name="comsub"
                                                id="comsub" 
                                                className="w-full event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent"
                                                 placeholder="Your email"
                                                  onChange={(e)=>checkComSub(e)} 
                                                  required>
                                                   <option value="0">I am communicating because...</option>
                                                   <option value="Morning">Party booking</option>
                                                   <option value=">After Noon">About job</option>
                                                   <option value="Evening">Other</option>
                                               </select>
                                               {
                                                        formErr.comErr &&
                                                        <p className="mt-1 text-sm evevt-input-label text-[#E1001A] fErr ">Select communications reason</p>
                                                    }
                                           </div>
                                       </div>
                                       {/*======================================contact form row location event====================== */}
                                       {/*======================================contact form row message event====================== */}
                                       <div className="form-row flex justify-between my-3 md:my-10 lg:my-12">
                                                   
                                                   <div className="form-col w-full">
                                                       <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your message? </p>
                                                     
                                                       <textarea 
                                                        name="msg"
                                                        id="msg"
                                                       className="w-full h-[110px] md:h-[180px] event-input  border-0 md:py-3 px-4 bg-white focus:ring-transparent focus-green" placeholder="Write your message here"> 

                                                       </textarea>
                                                   </div>
                                               </div>
                                               {/*======================================contact form row message event====================== */}
                                               <div className="form-row flex justify-center ">
                                                  
                                                
                                                      <button type="submit" className="text-white font-medium text-lg py-3 px-12 bg-red-600 hover:bg-red-700 rounded-full">SUBMIT</button>
                                                  
                                              </div>
                                               {/*======================================contact form button====================== */}

                                 </form>
                            </div>
                        </div>
                        {/*======================== corporate contact form=======================*/}
                 </div>
                

            </div>

        </div>
    )

}

export default CorContact