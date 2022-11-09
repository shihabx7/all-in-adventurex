import TitleSeparator  from "../util/TitleSeparator"
import Link from "next/dist/client/link"
import { FiChevronDown,FiX } from "react-icons/fi"
import { useState } from "react"

const StoreContact=(props)=>{

    const[showHour,setShowHours]=useState(false)

    const TitleAddress=(slug)=>{
        var stt=slug.split('-')
        var stts=stt[stt.length-1].toString()
        var ctt=stt.slice(0,-1).join(' ')

        return ctt+' '+stts
    }

    const getDirection=(address,slug,city,zip)=>{
            var addr=address.toString().split(' ').join('+')
            var stl=slug.split('-')
            stl=stl[stl.length-1].toString()

            const gUrl="https://www.google.com/maps/dir//"+addr+',+'+city+',+'+stl+'+'+zip+"+"+"USA"

            return  gUrl

    }
    const getAddress=(address,slug,city,zip)=>{
        
            var st=slug.split('-')
            st=st[st.length-1].toString()
            st=st.toUpperCase()

            return address+', '+city+', '+st+' '+zip+' United States'
    }

    return(
        <div className="c-contact py-16 md:py-20 lg:py-28  bg-cover bg-center" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
            <div className="section-container max-w-7xl mx-auto relative z-30">
                <div className="section-title">
                  <TitleSeparator title={"INQUIRE TO "+TitleAddress(props.contactdata.slug)+" STORE"} color='golden-text' weight='font-bold'/>
                    <div className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-700 md:px-8">Fill out the form below and we will be in touch shortly.</p>
                     </div>
                 </div>
                 <div className="c-contact-box flex flex-col md:flex-row md:space-x-6 lg:space-x-12 justify-between">
                        <div className="c-form-info md:w-[44%] lg:w-[38%] order-2 md:order-1 px-4 lg:px-0">
                        <h3 className="golden-text font-os font-bold mt-8 md:mt-0 text-2xl lg:text-3xl mb-2 lg:mb-4 uppercase">OUR FACILITIES</h3>
                        <p className="text-gray-700 lg:text-lg">All escape rooms are completely private - for your players only! We provide an entire party with the opportunity to celebrate in a fun and unique way. Come join us to create exciting memories with your group.
                        </p>
                        <div className="c-contact-info-list mt-6 lg:mt-8 ">
                        <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4">
                            <img src="/assets/svg/event-icon-phone.svg"></img>
                            <a  href={"tel:"+props.contactdata.phone} className="lg:text-lg text-[#232323] block hover:text-blue-700 max-w-[300px]">{props.contactdata.phone}</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4">
                                  <img src="/assets/svg/event-icon-email.svg"></img>
                                <a href={"mailto:"+props.contactdata.email.toLowerCase()} className="lg:text-lg text-[#232323] block hover:text-blue-700">{props.contactdata.email}</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-t border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4">
                                <img src="/assets/svg/event-icon-pin.svg"></img>
                                <a target="_blank" href={getDirection(props.contactdata.address,props.contactdata.slug,props.contactdata.city,props.contactdata.zip)} className="lg:text-lg text-[#232323] block hover:text-blue-700 max-w-[300px]">{getAddress(props.contactdata.address,props.contactdata.slug,props.contactdata.city,props.contactdata.zip)}</a>
                            </div>
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4 relative">
                                <img src="/assets/svg/event-icon-watch.svg"></img>
                                <div className="flex items-center space-x-2 lg:text-lg group cursor-pointer" onClick={()=>{setShowHours(true)}}> 
                                    <p className="text-[#1B823A]">Open Hours</p>
                                    <p className="flex items-center space-x-2 group-hover:text-blue-700">View Local Time <span><FiChevronDown/></span> </p>
                                </div>
                                {
                                    showHour && 
                                            <div className="bhour-list absolute top-[-10px] right-0 shadow-md bg-[#FFF9EB] drop-shadow">
                                                 <div className="relative p-3">  
                                                   <div className="map-h-notice mb-2">
                                                       <p className="font-medium text-sm md:text-base text-[#222222]">Typical Business Hours</p>
                                                       <p className="text-sm text-[#464646]">Actual hours may vary occasionally</p>
                                                     </div>
                                                     <button onClick={() => setShowHours(false)} className="closeHour p-1 bg-gold text-[#424242] absolute -top-3 -right-3"><FiX/></button>
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
                            
                            
                            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA] flex items-center space-x-3 lg:space-x-4">
                                <img src="/assets/svg/event-icon-chair.svg"></img>
                                <p  className="lg:text-lg text-[#232323]">Wheelchair Accessibility</p>
                            </div>
                           

                        </div>
                        <div className="mt-8"> 
                        <p className="text-[#464646] mb-4">{props.contactdata.entry_guid}</p>
                        <p className="text-[#464646]">We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</p>
                        </div>
                                  
                        </div>
                        {/*======================== corporate contact form=======================*/}
                        <div className="c-form-form md:w-[56%] lg:w-[60%] order-1 md:order-2">
                            <div className="bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow"> 
                                <form>
                                    {/*========================  contact form row=======================*/}
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your first name? *</p>
                                                <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your first name" required></input>
                                         </div>
                                         <div className="form-col w-full md:w-[48%]">
                                                <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your last name? *</p>
                                                <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your last name" required></input>
                                         </div>
                                </div>
                                 {/*========================  contact form row=======================*/}
                                 {/*======================================contact form row====================== */}
                                 <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between my-3 md:my-10 lg:my-12">
                                        <div className="form-col w-full md:w-[48%]">
                                             <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your email? *</p>
                                             <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your email address" required></input>
                                         </div>
                                         <div className="form-col  w-full md:w-[48%]">
                                             <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your phone number? *</p>
                                             <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your phone number" required></input>
                                         </div>
                                     </div>
                                    {/*======================================contact form row====================== */}
                                    {/*======================================contact form row location event====================== */}
                                    <div className="form-row flex justify-between my-3 md:my-10 lg:my-12 ">
                                                   
                                        <div className="form-col w-full">
                                               <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Subject of your communications? *</p>
                                               <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Your email" required>
                                                   <option value="0">I am communicating because...</option>
                                                   <option value="Morning">Party booking</option>
                                                   <option value=">After Noon">About job</option>
                                                   <option value="Evening">Other</option>
                                               </select>
                                           </div>
                                       </div>
                                       {/*======================================contact form row location event====================== */}
                                       {/*======================================contact form row message event====================== */}
                                       <div className="form-row flex justify-between my-3 md:my-10 lg:my-12">
                                                   
                                                   <div className="form-col w-full">
                                                       <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your message? </p>
                                                     
                                                       <textarea className="w-full h-[110px] md:h-[180px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                       </textarea>
                                                   </div>
                                               </div>
                                               {/*======================================contact form row message event====================== */}
                                               <div className="form-row flex justify-center ">
                                                  
                                                
                                                      <button type="submit" className="text-white font-medium text-lg py-3 px-12 bg-red-600 hover:bg-red-700 rounded-full">BOOK PARTY NOW</button>
                                                  
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

export default StoreContact