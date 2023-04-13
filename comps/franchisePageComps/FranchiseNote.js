import TitleSeparator from "../util/TitleSeparator"

const FranchiseNote=()=>{

    return(
        <div className="Frans-note pt-16 md:pt-20 lg:pt-28">
                <div className="">
                <div className="section-title-sep mt-4 md:mt-0 mb-8">
                           
                            <TitleSeparator title="MESSAGE FROM THE FOUNDER AND PRESIDENT" color="dark-gold" weight="font-bold"/>
                            
                            
                 </div>
                 <div className="frans-note-box grid grid-cols-1 gap-y-4 md:gap-y-0 gap-x-0 md:grid-cols-2 md:gap-x-4">
                 <div className="frans-item p-4 lg:p-8" style={{backgroundImage:"url('/assets/frans-not-bg.jpg')"}}>
                            <div className="frans-img">
                                <img className="max-w-[100px] md:[120px] lg:max-w-[180px]" src="/assets/f-note-auth.png">
                                </img>
                            </div>
                            <div className="frans-text">
                                <p className="mt-8 lg:text-lg italic text-[#464646]">
                                With my family in mind, I founded All In Adventures with the goal of creating a business where families can come together for good old family fun. Our business has grown from strictly Mystery Rooms to now a complete offering of entertainment experiences for everyone. My vision couldn't have come true if it wasn't for our loyal customers and the incredible team that we have at All In Adventures.
                                    </p>
                                    <p className="mt-4 lg:text-lg italic text-[#464646]">My sincere thanks to all of our customers that have gotten us to where we are today, and to all of our employees that are working to help us reach where we want to go tomorrow.
                                    </p>
                                    
                            </div>
                            <div className="frans-sig pt-4 md:pt-8 lg:pt-16">
                                
                                    <div className="frans-sig-img">
                                            
                                    </div>
                                    <p className="mt-2 lg:text-lg font-medium text-[#464646]">John Reichel</p>
                                    <p className=" lg:text-lg italic text-[#464646]">Founder/CEO, All In Adventures
                                    </p>
                            </div>
                    </div>
                    <div className="frans-item p-4 lg:p-8" style={{backgroundImage:"url('/assets/frans-not-bg.jpg')"}}>
                            <div className="frans-img">
                                <img className="max-w-[100px] md:[120px] lg:max-w-[180px]" src="/assets/f-note-auth-1.png">
                                </img>
                            </div>
                            <div className="frans-text">
                                <p className="mt-8 lg:text-lg italic text-[#464646]">We strive every day to continually improve all aspects of our business and provide an entertaining experience to all customers. This means our work is never done. I am proud to be working alongside a group of people that are passionate and dedicated to this same mindset.
                                    </p>
                                    <p className="mt-4 lg:text-lg italic text-[#464646]">Thank you to our team and our customers for providing us this opportunity.
                                    </p>
                                   
                            </div>
                            <div className="frans-sig pt-4 md:pt-8 lg:pt-16">
                                
                                    <div className="frans-sig-img">
                                         
                                            
                                    </div>
                                    <p className="mt-2 lg:text-lg font-medium text-[#464646]">Chetan Patel</p>
                                    <p className=" lg:text-lg italic text-[#464646]">President, All In Adventures
                                    </p>
                            </div>
                    </div>
                    

                 </div>
                </div>
        </div>
    )

}

export default FranchiseNote