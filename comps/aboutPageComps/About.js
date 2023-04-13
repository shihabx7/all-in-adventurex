

const About=()=>{

    return(
        <div className="our-mission-vission relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
        <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>

            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
                {/**===================who we are============================= */}
                <div className="abt-row flex flex-col md:flex-row justify-between items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                        <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">WHO WE ARE</h2>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-8">We've changed our name from Mystery Room to All In Adventures. Your favorite fun activity center is now more than an escape room place. Come join us to experience more entertaining activities. Now you can choose your adventures from many different themes!</p>
                        <div className="abt-notice mt-4 md:mt-6 lg:mt-8"> 
                
                                             <div className="flex  lg:text-lg text-[#464646] mt-4 justify-between">
                                                <div className="mt-[6px] -[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%]"><span className="font-medium">Escape Room:</span> Can you and your friends make it out in time? The clock is ticking!</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-2  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%]"><span className="font-medium">Game Show Room:</span> Have you always dreamed of being on a tv game show?</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-2  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%]"><span className="font-medium">Beat The Seat:</span> Can you beat the seat? Intense and challenging fun!</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-2  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%]"><span className="font-medium">Axe Throwing:</span> What's the most fun form of stress release? Yup, axe throwing wins!</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-2  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%]"><span className="font-medium">Virtual Escape Room:</span> Can you work virtually together as a team? Who can escape?</div>
                                             </div>
                                             <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-2  justify-between">
                                                <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[92%]"><span className="font-medium">Virtual Game Show Room:</span> Connect and play from anywhere! Who is going to win?</div>
                                             </div>

                                             
                        </div>
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img src="/assets/allinadventures-escape-room-who-we-are.jpg"></img>
                    </div>


                </div>
                   {/**===================who we are end============================= */}
                     {/**===================our mission============================= */}
                <div className="abt-row flex flex-col md:flex-row justify-between mt-16 md:mt-20 items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                        <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">OUR MISSION</h2>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-8">Our mission is to deepen relationships between people through creative entertainment.
                         To do so, we strive to develop and provide high-quality services in amusements, celebrations,
                          events and team-building activities throughout the United States. Our core focus is to offer
                           a comprehensive line of innovative, top-quality family-friendly escape rooms and other fun activities,
                            perfect for both kids and adults.</p>
                             <p className="text-gray-700 lg:text-lg mt-4">The business will provide an exceptional level of customer service to articulate the values of the company. The team must position the business in a clear, powerful, and memorable way in the marketplace.  By doing this we strive to build an organization with a unique spirit that makes people eager to join and conduct business with us.</p>
                       
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img src="/assets/allinadventures-escape-room-our-mission.jpg"></img>
                    </div>


                </div>
                   {/**===================our mission end============================= */}
            </div>


        </div>
    )
}

export default About