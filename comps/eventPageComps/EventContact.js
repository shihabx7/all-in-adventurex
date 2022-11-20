import React, { useState,useEffect,useRef } from "react"
import {FiMapPin,FiChevronDown,FiClock,FiX } from "react-icons/fi"
import TitleSeparator from "../util/TitleSeparator"
const EventContact=(props)=>{
        const[showHour,setShwoHour]=useState(false)
        const [locationSelect, setLocationSelect]=useState('0')
        const [eventSelect, setEventSelect]=useState('0')
        const [nameErr,setNameErr]=useState(false)
        const [lnameErr,setLnameErr]=useState(false)
        const [emailErr,setEmailErr]=useState(false)
        const [phoneErr,setPhoneErr]=useState(false)
        const [guestErr,setGuestErr]=useState(false)
        const [timeErr,setTimeErr]=useState(false)
        const [eventErr,setEventErr]=useState(false)
        const [dateErr,setDateErr]=useState(false)
        const [locationErr,setLocationErr]=useState(false)
        const ref=useRef()
            useEffect(() => {
                  const checkIfClickedOutside = e => {
         
                   if (showHour && ref.current && !ref.current.contains(e.target)) {
                    setShwoHour(false)
                 }
            }
        
    
        document.addEventListener("mouseup", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mouseup", checkIfClickedOutside)
        }
      }, [showHour]);
        const getStAddress=(slug)=>{
                var ctArr=slug.split("-")
                var st=ctArr[ctArr.length-1].toUpperCase()

                return st
        }
        const getDirection=(address,slug,zip,city)=>{

            var addr=address.toString().split(' ').join('+')+','
            var st=slug.toString().split('-')
            var ct=city+','
            st=[st.length-1].toString().toUpperCase()
            var zp=zip+','

            var gslug=addr+'+'+ct+'+'+st+'+'+zp+'+'+'USA'
            var gUrl="https://www.google.com/maps/dir//"+gslug

            return gUrl

      }
      const getAddress=(address,slug,zip,city)=>{

   
        var scity=slug.split('-')
        var st=scity[scity.length-1].toString().toUpperCase()

        var add=address+', '+city+', '+st+' '+zip
        return add
      }
      const locState=(slug)=>{
        var scity=slug.split('-')
        var st=scity[scity.length-1].toString().toUpperCase()
        return st
      }
     
      const getLocationOptions=(locationlist)=>{
            var i=0
            var j=0
            var id=1
           var locarr=[]
            for(i=0;i<locationlist.length;i++){
               
                    for(j=0;j<locationlist[i].cities.length;j++){
                        locarr.push({"id":id,
                        "city":locationlist[i].cities[j].city+", "+locState(locationlist[i].cities[j].slug),
                        "email":locationlist[i].cities[j].email,
                        "slug":locationlist[i].cities[j].slug
                        })
                        id++
                    }        
              
            }
            console.log(locarr)
           return locarr
      }
      const locationHandleChange=(e)=>{
       
        setLocationSelect(e.target.value);
      }
      const eventHandleChange=(e)=>{
        
        setEventSelect(e.target.value);
      }
        return (
            <div  id="eventform" className="event-contact py-16 md:py-20 lg:py-28 relative overflow-hidden" style={{

                background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
                backgroundPosition:"bottom center,center center",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
                <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
                    <div className="max-w-7xl mx-auto md:px-4"> 
                     
                        <div className="section-title  text-center max-w-[800px] mx-auto  mb-8 md:mb-12 lg:mb-16 px-4">
                            <TitleSeparator title="SUBMIT YOUR INQUIRY NOW" color="golden-text" weight="font-bold"/>
                             <p className="text-gray-200 md:px-8 md:text-lg mt-8">
                             Let us help host your {props.eventname? props.eventname:"event"} at All In Adventures{props.contactdata && <span> in {props.contactdata.city+" "+getStAddress(props.contactdata.slug)}</span>}. We promise you'll love it! Please fill out the inquiry form below to reach our dedicated guest experience team. We'll be in contact within 24 hours.
                               </p>
                         </div>

                     
                        <div className="conatct-section flex flex-col md:flex-row justify-between">
                                <div className="contact-info-box pt-16 md:py-0 px-4 order-2 md:order-1 w-full md:w-[40%]">
                                      
                                         <div className="in-sec-title mb-4 md:mb-6 lg:mb-8">
                                                <h2 className="golden-text font-bold text-4xl mb-4">OUR FACILITIES</h2>
                                                <p className="text-gray-200 lg:text-lg">All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.</p>
                                        </div>
                                        <div className="event-info-list-box">

                                                <div className="event-info-list flex items-center space-x-4 py-3 px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-phone.svg"></img></span>
                                                    <span>
                                                        {
                                                            props.contactdata &&
                                                            <a className="text-[#F4E6C3] hover:text-blue-700" href={"tel:"+props.contactdata.phone}>{props.contactdata.phone}</a>

                                                        }
                                                        {
                                                            !props.contactdata &&
                                                            <a className="text-[#F4E6C3] hover:text-blue-700" href="tel:+1 844-502-5546">+1 844-502-5546 ex. 709.</a>

                                                        }
                                                       
                                                       
                                                    </span>
                                                </div>
                                                <div className="event-info-list flex items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-email.svg"></img></span>
                                                    <span>
                                                    {
                                                            props.contactdata &&
                                                            <a className="text-[#F4E6C3] hover:text-blue-700" href={"mailto:"+props.contactdata.email.toLowerCase()}>{props.contactdata.email}</a>

                                                        }
                                                        {
                                                            !props.contactdata &&
                                                            <a className="text-[#F4E6C3] hover:text-blue-700" href="email:sales@allinadventures.com">sales@allinadventures.com</a>

                                                        }
                                                        
                                                    </span>
                                                </div>
                                                {
                                                    props.contactdata &&
                                                    <div className="event-info-list flex text-[#F4E6C3]  items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                           <span className="text-[#A78849] text-[24px]"><FiMapPin/></span> <a target="_blank" href={getDirection(props.contactdata.address,props.contactdata.slug,props.contactdata.zip,props.contactdata.city)} className="text-[#F4E6C3] hover:text-blue-700"><span class="text-blue-600 font-medium">Direction: </span>{getAddress(props.contactdata.address,props.contactdata.slug,props.contactdata.zip,props.contactdata.city)}</a>
                                                    </div>
                                                }
                                                {
                                                    props.contactdata &&
                                                    <div ref={ref} className="relative event-info-list flex text-[#F4E6C3]  items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                           <span className="text-[#A78849] text-[24px]"><FiClock/></span> 
                                                           <div className="flex justify-between item-center space-x-3 md:space-x-4 hover:cursor-pointer group" onClick={()=>setShwoHour(true)}>
                                                             <p className="text-[#1B823A]">Open Hours</p> <p className="flex items-center space-x-2 group-hover:text-blue-700">View Local Time <span className="text-xl"><FiChevronDown/></span></p>
                                                            </div>

                                                            {
                                                                showHour && 
                                                                        <div className="bhour-list absolute bottom-0 right-0 shadow-md bg-[#FFF9EB] drop-shadow">
                                                                             <div className="relative p-3">  
                                                                               <div className="map-h-notice mb-2">
                                                                                   <p className="font-medium text-sm md:text-base text-[#222222]">Typical Business Hours</p>
                                                                                   <p className="text-sm text-[#464646]">Actual hours may vary occasionally</p>
                                                                                 </div>
                                                                                 <button onClick={() => setShwoHour(false)} className="closeHour p-1 bg-gold text-[#424242] absolute -top-3 -right-3"><FiX/></button>
                                                                         <table className="bhour-row table-auto border-collapse border border-[#CB9443] text-[#464646]">
                                                                         <tbody>
                                                                         <tr>  
                                                                                 <td className=" border-b border-[#CB9443] capitalize px-2 py-1 font-medium">
                                                                                              Day
                                                                                              </td>
                                                                                              <td className=" border-b border-[#CB9443] px-2 py-1 font-medium" >
                                                                                              Open
                                                                                              </td>
                                                                                              <td className=" border-b border-[#CB9443] px-2 py-1 font-medium">
                                                                                              Close
                                                                                              </td>
                                                                                             </tr>
                                                                     {
                                                                                 props.contactdata.hours.map((hours,index)=>{

                                                                                     return(

                                                                                        <tr key={index}>  
                                                                                            <td  className=" border-b border-[#CB9443] capitalize px-2 py-1">
                                                                                              {hours.day}
                                                                                              </td>
                                                                                              <td className="px-2 py-1 border-b border-[#CB9443]" >
                                                                                              {hours.open}
                                                                                              </td>
                                                                                              <td className="px-2 py-1 border-b border-[#CB9443]">
                                                                                              {hours.close}
                                                                                              </td>
                                                                                             </tr>

                                                                                        )
                                                                                 })
                                                                             }
                                                                              </tbody>
                                                                             </table>

                                                                             </div>
                                                                     </div>
                                                            }
                                                    </div>
                                                }
                                                <div className="event-info-list flex  items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-chair.svg"></img></span>
                                                    <span>
                                                        <p className="text-[#F4E6C3]">Wheelchair Accessibility</p>
                                                    </span>
                                                </div>

                                        </div>
                                        <div className="event-notice mt-4 md:mt-8"> 
                                        {
                                            props.contactdata &&
                                            <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                                                <div className="mt-[6px] -[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">{props.contactdata.entry_guid}</div>
                                             </div>

                                        }
                                             
                                             <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                                                <div className="mt-[6px] -[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</div>
                                             </div>
                                             

                                             
                                        </div>
                                </div>
                                
                                <div id="eventform-form" className="order-1 md:order-2 contact-form-box w-full md:w-[58%] lg:w-[54%]">
                                    <div className="contact-form-bg bg-[#F4E6C3] px-4 py-8 md:p-6 lg:p-8 md:rounded">
                {/*==========================================================contact form to book event======================= */}
                                        <form > 
                                         {/*======================================contact form row====================== */}
                                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your first name? *</p>
                                                        <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" style={{border: nameErr? "1px solid red":'none'}} placeholder="Your first name" required></input>
                                                        {   nameErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Only letter and space allowed</p>
                                                        }
                                                       
                                                    </div>
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your last name? *</p>
                                                        <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" style={{border: lnameErr? "1px solid red":'none'}} placeholder="Your last name" required></input>
                                                        {   lnameErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Only letter and space allowed</p>
                                                        }
                                                    </div>
                                                </div>
                                         {/*======================================contact form row====================== */}
                                         {/*======================================contact form row====================== */}
                                                <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between my-3 md:my-4 ">
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your email? *</p>
                                                        <input type="email" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your email address" required></input>
                                                        {   emailErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Invalid email adress</p>
                                                        }
                                                    </div>
                                                    <div className="form-col  w-full md:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your phone number? *</p>
                                                        <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your phone number" required></input>
                                                        {   phoneErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Invalid phone number</p>
                                                        }
                                                    </div>
                                                </div>
                                                {/*======================================contact form row====================== */}
                                               {/*======================================contact form row select event====================== */}
                                               <div className="form-row flex  flex-col space-y-3 md:flex-row  md:space-y-0 justify-between my-3 md:my-4 ">
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Select your event type: *</p>
                                                        <select type="text" className="w-full event-input  text-gray-500 border-0 md:py-3 px-4 bg-white" onChange={eventHandleChange} value={props.eventslug? props.eventslug:'0'} required>
                                                            <option  value='0'>Choose event</option>
                                                            
                                                            {
                                                                props.eventlist.map((event)=>{
                                                                    return(
                                                                        <option key={event.id} value={event.event_slug}>{event.event_name}</option>
                                                                    )
                                                                    
                                                                })
                                                            }
                                                        </select>
                                                        {   eventErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Invalid phone number</p>
                                                        }
                                                        
                                                    </div>
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Number of your guests: *</p>
                                                        <input type="text"  className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Enter number of your guests" required></input>
                                                        {   guestErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">iInvalid</p>
                                                        }
                                                    </div>
                                                </div>
                                                {/*======================================contact form row select event====================== */}
                                                {/*======================================contact form row date event====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                    <div className="form-col w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Preferred date:</p>
                                                        <input type="date"  className=" w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Enter number of your guests" required></input>
                                                        {   dateErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Please enter a date</p>
                                                        }
                                                    </div>
                                                    <div className="form-col w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Preferred time:</p>
                                                        <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" required>
                                                            <option value="0">Preferred time</option>
                                                            <option value="Morning">Morning</option>
                                                            <option value=">After Noon">Afternoon</option>
                                                            <option value="Evening">Evening</option>
                                                        </select>
                                                        {   timeErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Please choose time</p>
                                                        }
                                                    </div>
                                                </div>
                                                {/*======================================contact form row date event====================== */}
                                                {/*======================================contact form row location event====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                    <div className="form-col w-full">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Choose your location: *</p>
                                                        <select onChange={locationHandleChange} type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" value={props.contactdata? props.contactdata.slug:"0"} placeholder="Your email" required>
                                                          
                                                             <option key='0' value="0">Select your location</option>
                                                             
                                                             {
                                                             getLocationOptions(props.locationlist).map((item)=>{
                                                                var sl=false
                                                                if(item.slug=='albany-ny'){
                                                                        sl=true
                                                                }
                                                                

                                                                    return (
                                                                       
                                                                       
                                                                        <option className="text-gray-700" key={item.id} value={item.slug}>{item.city}</option>
                                                                       
                
                                                                       
                                                                    )
                                                             })}
                                                           
                                                           
                                                        </select>
                                                        {   locationErr &&
                                                                 <p className="text-red-600 mt-1 text-sm md:text-md">Please select your location</p>
                                                        }
                                                    </div>
                                                </div>
                                                {/*======================================contact form row location event====================== */}
                                                {/*======================================contact form row message event====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                    <div className="form-col w-full">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your message? </p>
                                                      
                                                        <textarea className="w-full h-[80px] md:h-[100px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                        </textarea>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row message event====================== */}
                                                <div className="form-row flex justify-center  my-4 ">
                                                   
                                                 
                                                       <button type="submit" className="text-white font-medium text-lg py-3 px-12 bg-red-600 hover:bg-red-700 rounded-full">BOOK PARTY NOW</button>
                                                   
                                               </div>
                                                {/*======================================contact form row message event====================== */}
                                        </form>
                  {/*==========================================================contact form to book event end======================= */}
                                    </div>
                                </div>
                        </div>

                    </div>
            </div>
        )

}

export default EventContact