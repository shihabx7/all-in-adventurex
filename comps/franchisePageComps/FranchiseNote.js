import TitleSeparator from "../util/TitleSeparator"

const FranchiseNote=()=>{

    return(
        <div className="Frans-note pt-16 md:pt-20 lg:pt-28">
                <div className="">
                <div className="section-title-sep mt-4 md:mt-0">
                            <p className="text-lg text-[#938056] text-center">NOTE</p>
                            <TitleSeparator title="NOTE FROM ALL IN ADVENTURES DIRECTORS" color="golden-text" weight="font-bold"/>
                            <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                            
                 </div>
                 <div className="frans-note-box grid grid-cols-1 gap-y-4 md:gap-y-0 gap-x-0 md:grid-cols-2 md:gap-x-4">
                    <div className="frans-item p-4 lg:p-8" style={{backgroundImage:"url('/assets/frans-not-bg.jpg')"}}>
                            <div className="frans-img">
                                <img className="max-w-[100px] md:[120px] lg:max-w-[180px]" src="/assets/f-note-auth-1.png">
                                </img>
                            </div>
                            <div className="frans-text">
                                <p className="mt-8 lg:text-lg italic text-[#464646]">The people I've the great fortune to work with every 
                                    single day are the main reason for our ongoing business success. And hopefully continued…
                                    </p>
                                    <p className="mt-4 lg:text-lg italic text-[#464646]">I work alongside some of the smartest, 
                                    passionate and friendliest men and women I've ever met. I'm far from the ideal boss, 
                                    and mistakes abound, but there's something unquantifiable.
                                    </p>
                                    <p className="mt-4 lg:text-lg font-medium text-[#464646]">So to my team, and to my clients, thank you.
                                    </p>
                            </div>
                            <div className="frans-sig pt-4 md:pt-8 lg:pt-16">
                                
                                    <div className="frans-sig-img">
                                            <img className="max-w-[120px] lg:max-w-[200px]" src="/assets/frans-sig.png">
                                            </img>
                                    </div>
                                    <p className="mt-2 lg:text-lg font-medium text-[#464646]">Chetan Patel</p>
                                    <p className=" lg:text-lg italic text-[#464646]">President at All In Adventures
                                    </p>
                            </div>
                    </div>
                    <div className="frans-item p-4 lg:p-8" style={{backgroundImage:"url('/assets/frans-not-bg.jpg')"}}>
                            <div className="frans-img">
                                <img className="max-w-[100px] md:[120px] lg:max-w-[180px]" src="/assets/f-note-auth.png">
                                </img>
                            </div>
                            <div className="frans-text">
                                <p className="mt-8 lg:text-lg italic text-[#464646]">The people I've the great fortune to work with every 
                                    single day are the main reason for our ongoing business success. And hopefully continued…
                                    </p>
                                    <p className="mt-4 lg:text-lg italic text-[#464646]">I work alongside some of the smartest, 
                                    passionate and friendliest men and women I've ever met. I'm far from the ideal boss, 
                                    and mistakes abound, but there's something unquantifiable.
                                    </p>
                                    <p className="mt-4 lg:text-lg font-medium text-[#464646]">So to my team, and to my clients, thank you.
                                    </p>
                            </div>
                            <div className="frans-sig pt-4 md:pt-8 lg:pt-16">
                                
                                    <div className="frans-sig-img">
                                            <img className="max-w-[120px] lg:max-w-[200px]" src="/assets/frans-sig.png">
                                            </img>
                                    </div>
                                    <p className="mt-2 lg:text-lg font-medium text-[#464646]">John Reichel</p>
                                    <p className=" lg:text-lg italic text-[#464646]">President at All In Adventures
                                    </p>
                            </div>
                    </div>

                 </div>
                </div>
        </div>
    )

}

export default FranchiseNote