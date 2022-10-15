import GameTitleSeparator from "./GameTitleSeparator"
const Rebranding=()=>{


    return(
        <div className="rebranding bg-[#000000] relative overflow-hidden">
            <div className="gift-lt absolute top-0 left-0"><img src="/assets/gift-balon-bg.png"></img></div>
            <div className="gift-rt absolute"><img src="/assets/Compas-brown.png"></img></div>

            <div className="sec-container max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-30">
                    <div className="sec-row flex flex-col justify-between md:items-center lg:items-start  md:flex-row md:space-y-0 md:space-x-4">
                        <div className="sec-col md:w-[55%] lg:w-[64%] order-2 md:order-1 mt-4 md:mt-0">
                             <div className="section-title-sep mt-4 md:mt-0">
                                    <p className="text-lg text-[#938056] uppercase">ANNOUNCEMENT</p>
                                     <GameTitleSeparator title="MEET YOUR FAVORITE ALL IN ADVENTURES" color="golden-text" weight="font-bold"/>    
                             </div>
                             <p className="text-[#BEBEBE] lg:text-lg mt-4  lg:mt-8">
                              Today, we're bringing all of our locations together under the name of All In Adventures.
                              In the coming months you may see the name change on your local space, but we wanted to
                               let you know that the spirit that drives us will still be the same.
                            </p>
                            <p className="text-[#BEBEBE] lg:text-lg mt-4  lg:mt-6">
                                  We started out with a desire to help people come together, to share experiences
                                 and build memories.  Initially it was with escape rooms but are growing to be so much more.
                                 We now offer many ways for you and your friend/family to get out and have fun together,
                                 to share an adventure.  And with this growth we needed a name that reflected what we had become.
                            </p>
                            <p className="text-[#BEBEBE] lg:text-lg mt-4  lg:mt-6">
                            The mission is still there, to provide you and your friends a great hands on adventure
                             that you can share together.

                            </p>
                        </div>
                        <div className="sec-col md:w-[45%] lg:w-[34%] order-1 md:order-2" >
                            <img src="/assets/rebranding-poster.jpg"></img>
                        </div>

                    </div>
            </div>

        </div>
    )
}

export default Rebranding