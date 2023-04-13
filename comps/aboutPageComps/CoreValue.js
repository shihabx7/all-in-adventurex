import TitleSeparator from "../util/TitleSeparator"

const CoreValue=()=>{


    return(
        <div className="core-value bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
                <div className="section-container max-w-7xl mx-auto pb-16 md:pb-20 lg:pb-28 px-4">
                    <div className="section-title">
                        <TitleSeparator title="Core Value" color="dark-gold" weight="font-bold" />
                        <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">
                            Our core value is we strive to be the leader in providing an interactive and
                            engaging adventure through exceptional
                              guest service and amazing game experience. Following are additional values that are important to us and core to our business..
                        </p>

                    </div>
                    <div className="core-box grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="core-card rounded-lg bg-[#FDF0D1] p-6 lg:p-8">
                                <p className="text-[#938056]">#CORE VALUE</p>
                                <h3 className="dark-gold font-os font-bold text-xl md:text-2xl lg:text-3xl ">BUILDING FOR EVERYONE</h3>
                                <p className="lg:text-lg text-gray-700 mt-2 md:mt-4">Escape rooms have become super popular over the last couple of years.
                                 We've built all our facilities perfect for all ages and skill levels. People from all different ages and backgrounds have
                                  found themselves enjoying the thrill and challenge of trying to escape one or more of our rooms.
                                </p>
                        </div>
                        <div className="core-card rounded-lg bg-[#FDF0D1] p-6 lg:p-8">
                                <p className="text-[#938056]">#CORE VALUE</p>
                                <h3 className="dark-gold font-os font-bold text-xl md:text-2xl lg:text-3xl ">DIFFERENT AND MULTIPLE THEMES</h3>
                                <p className="lg:text-lg text-gray-700 mt-2 md:mt-4">Most of our facilities offer 8 - 10 different types of escape room themes.
                                 The game themes range from Black Ops and Zombie Apocalypse to Escape from Alcatraz and Super Hero.
                                  Pick the room of your choice or try your best to break out of them all.
                                </p>
                        </div>
                        <div className="core-card rounded-lg bg-[#FDF0D1] p-6 lg:p-8 ">
                                <p className="text-[#938056]">#CORE VALUE</p>
                                <h3 className="dark-gold font-os font-bold text-xl md:text-2xl lg:text-3xl ">OPEN CONCEPT AND FRIENDLY STAFF</h3>
                                <p className="lg:text-lg text-gray-700 mt-2 md:mt-4">We pride ourselves on offering open-air, clean, spacious, well-maintained facilities. We hope you enjoy your time with our friendly escape room attendants who are there for support when you need it.
                                </p>
                        </div>
                        <div className="core-card rounded-lg bg-[#FDF0D1] p-6 lg:p-8 ">
                                <p className="text-[#938056]">#CORE VALUE</p>
                                <h3 className="dark-gold font-os font-bold text-xl md:text-2xl lg:text-3xl ">GROW OR DIE</h3>
                                <p className="lg:text-lg text-gray-700 mt-2 md:mt-4">We are a relatively young company,
                                 but are growing at warp speed! What started out as a single escape room venture in Georgia
                                  has rapidly expanded to over 26 locations in 11 different states. We believe either
                                   we grow or we die! Here we're growing fast.
                                </p>
                        </div>
                        

                    </div>
                </div>
        </div>
    )

}

export default CoreValue