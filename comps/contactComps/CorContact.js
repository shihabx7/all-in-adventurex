import TitleSeparator  from "../util/TitleSeparator"
import Link from "next/dist/client/link"

const CorContact=()=>{

    return(
        <div className="c-contact py-16 md:py-20 lg:py-28  bg-cover bg-center" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
            <div className="section-container max-w-7xl mx-auto relative z-30">
                <div className="section-title">
                  <TitleSeparator title='SUBMIT CORPORATE INQUIRIES ONLY' color='golden-text' weight='font-bold'/>
                    <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                         <p className="text-gray-700 md:px-8">Fill out the form below and our corporate team will be in touch shortly.</p>
                     </div>
                 </div>
                 <div className="c-contact-box flex flex-col md:flex-row md:space-x-6 lg:space-x-12 justify-between">
                        <div className="c-form-info md:w-[44%] lg:w-[38%] order-2 md:order-1 px-4 lg:px-0">
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
                                <a href="mail:custsvc@allinadventures.com" className="text-lg text-[#232323] block hover:text-blue-700">custsvc@allinadventures.com</a>
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
                        <div className="c-form-form md:w-[56%] lg:w-[60%] order-1 md:order-2">
                            <div className="bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow"> 
                                <form onSubmit={()=>handleSubmit()}>
                                    {/*========================  contact form row=======================*/}
                                <div className="form-row flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between ">
                                            <div className="form-col w-full md:w-[48%]">
                                                <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your first name? *</p>
                                                <input 
                                                    type="text" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white" 
                                                    placeholder="Your first name" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required>

                                                    </input>
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
                                             <input type="email" 
                                                    className="w-full event-input  border-0 md:py-3 px-4 bg-white" 
                                                    placeholder="Your email address" 
                                                    pattern="[a-zA-z ]{3,20}"
                                                    title="Name should be alphabets (a to z) and 3 to 20 charecter."
                                                    required></input>
                                         </div>
                                         <div className="form-col  w-full md:w-[48%]">
                                             <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What's your phone number? *</p>
                                             <input type="text" 
                                                    className=" w-full event-input  border-0 md:py-3 px-4 bg-white" 
                                                    placeholder="Your phone number" 
                                                    pattern="[+-0-9 ]{7,14}"
                                                    title="phone number should number (0 to 9)."
                                                    required></input>
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