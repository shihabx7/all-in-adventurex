
import TitleSeparator from "../util/TitleSeparator"
const EventContact=(props)=>{
        const locEmail=props.location
        return (
            <div  id="eventform" className="event-contact py-16 md:py-20 lg:py-28 relative overflow-hidden" style={{

                background:'url("/assets/svg/gift-bg.svg"), linear-gradient(65deg, rgb(0, 0, 0), rgb(0, 0, 0))',
                backgroundPosition:"bottom center,center center",
                backgroundRepeat:"no-repeat"
            }}>
                <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>
                <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
                    <div className="max-w-7xl mx-auto md:px-4"> 
                     
                        <div className="section-title  text-center max-w-[600px] mx-auto  mb-8 md:mb-12 lg:mb-16">
                            <TitleSeparator title="BOOK YOUR EVENT" color="golden-text" weight="font-bold"/>
                             <p className="text-gray-200 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                         </div>

                     
                        <div className="conatct-section flex flex-col md:flex-row justify-between">
                                <div className="contact-info-box pt-16 md:py-0 px-4 order-2 md:order-1 w-full md:w-[40%]">
                                      
                                         <div className="in-sec-title mb-4 md:mb-6 lg:mb-8">
                                                <h2 className="golden-text font-bold text-4xl mb-4">OUR FACILITIES</h2>
                                                <p className="text-gray-200 lg:text-lg">Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.</p>
                                        </div>
                                        <div className="event-info-list-box">

                                                <div className="event-info-list flex items-center space-x-4 py-3 px-6 lg:text-lg border-y-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-phone.svg"></img></span>
                                                    <span>
                                                        <a className="text-[#F4E6C3]" href="tel:+1 845-208-2919">+1 845-208-2919</a>
                                                    </span>
                                                </div>
                                                <div className="event-info-list flex items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-email.svg"></img></span>
                                                    <span>
                                                        <a className="text-[#F4E6C3]" href="email:store@allinadventures.com">store@allinadventures.com</a>
                                                    </span>
                                                </div>
                                                <div className="event-info-list flex  items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-parking.svg"></img></span>
                                                    <span>
                                                        <p className="text-[#F4E6C3]">Car Parking Available</p>
                                                    </span>
                                                </div>
                                                <div className="event-info-list flex  items-center space-x-4 py-3 px-6 lg:text-lg border-b-[1px] border-[#D2C6AA]">
                                                    <span><img src="/assets/svg/event-icon-chair.svg"></img></span>
                                                    <span>
                                                        <p className="text-[#F4E6C3]">Wheelchair Accessibility</p>
                                                    </span>
                                                </div>

                                        </div>
                                        <div className="event-notice mt-4 md:mt-8"> 
                                             
                                             <div className="flex  lg:text-lg text-[#eeeeee] mt-4 justify-between">
                                                <div className="mt-[6px] -[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">We have gone CASHLESS but accept Credit/Debit, PayPal, Venmo, Zelle, Cash App and in some locations Apple Pay and Samsung Pay.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#eeeeee] mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">Car parking facility available in our location at the mall.</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#eeeeee] mt-3  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%] font-thin">Kids and children age 7+ can play when they're accompanied by a guardian age 18+</div>
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
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What’s your first name? *</p>
                                                        <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your first name" required></input>
                                                    </div>
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What’s your last name? *</p>
                                                        <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your last name" required></input>
                                                    </div>
                                                </div>
                                         {/*======================================contact form row====================== */}
                                         {/*======================================contact form row====================== */}
                                                <div className="form-row flex flex-col space-y-3 md:flex-row md:space-y-0 justify-between my-3 md:my-4 ">
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">What’s your email? *</p>
                                                        <input type="text" className="w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your email address" required></input>
                                                    </div>
                                                    <div className="form-col  w-full md:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What’s your phone number? *</p>
                                                        <input type="text" className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Your phone number" required></input>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row====================== */}
                                               {/*======================================contact form row select event====================== */}
                                               <div className="form-row flex  flex-col space-y-3 md:flex-row  md:space-y-0 justify-between my-3 md:my-4 ">
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Select your event type:</p>
                                                        <select type="text" className="w-full event-input  text-gray-500 border-0 md:py-3 px-4 bg-white">
                                                            <option value="0"> Choose your event type</option>
                                                            <option value="Birthday Party">Birthday Party</option>
                                                            <option value="Physical Team Building Activites">Team Building</option>
                                                            <option value="Bachelorette Parties">Bachelorette Parties</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-col w-full md:w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Number of your guests:</p>
                                                        <input type="text"  className=" w-full event-input  border-0 md:py-3 px-4 bg-white" placeholder="Enter number of your guests" ></input>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row select event====================== */}
                                                {/*======================================contact form row date event====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                    <div className="form-col w-[48%]">
                                                        <p className="mb-1 lg:text-lg evevt-input-label text-[#313030]">Preferred date:</p>
                                                        <input type="date"  className=" w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Enter number of your guests" required></input>
                                                    </div>
                                                    <div className="form-col w-[48%]">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Preferred time:</p>
                                                        <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" required>
                                                            <option value="0">Select your prefereed time</option>
                                                            <option value="Morning">Morning</option>
                                                            <option value=">After Noon">After Noon</option>
                                                            <option value="Evening">Evening</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row date event====================== */}
                                                {/*======================================contact form row location event====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                    <div className="form-col w-full">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">Choose your location: *</p>
                                                        <select type="text" className="w-full event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Your email" required>
                                                            <option value="0">Select your location</option>
                                                            <option value="Morning">Albany, NY</option>
                                                            <option value=">After Noon">Middletown, NY</option>
                                                            <option value="Evening">Buffalo,NY</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {/*======================================contact form row location event====================== */}
                                                {/*======================================contact form row message event====================== */}
                                                <div className="form-row flex justify-between my-4 ">
                                                   
                                                    <div className="form-col w-full">
                                                        <p className=" mb-1 lg:text-lg evevt-input-label text-[#313030]">What’s your message? </p>
                                                      
                                                        <textarea className="w-full h-[110px] md:h-[140px] event-input text-gray-500  border-0 md:py-3 px-4 bg-white" placeholder="Write your message here"> 

                                                        </textarea>
                                                    </div>
                                                </div>
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