const Custom404Err=()=>{

    return (
        <div className="custom-err-sec relative bg-cover" style={{background:"url('/assets/game-dt-bg.jpg')"}}>
                <div className="absolute top-0 left-0"> <img className="w-full" src="/assets/game-home-or1.jpg"></img></div>
                <div className="custom-err-box max-w-[900px] mx-auto py-16 md:py-24 px-4 lg:py-28 relative z-30">

                        <div className="cerr">
                            <h1 className="text-center text-[#231800] text-6xl md:text-8xl font-extrabold">404</h1>
                            <p className="md:text-xl text-gray-700 text-center">Ops... The page you are looking for is not exist</p>
                        </div>
                        <div className="cerr-linking mt-8">
                                <div className="mb-8">
                                    <h2 className="text-gold text-center font-os text-3xl md:text-4xl font-bold">SEE ALL GAMES AND EVENTS</h2>
                                </div>
                        <div className="thank-bottom grid grid-cols-1 md:grid-cols-3  gap-y-4 md:gap-y-0 md:gap-x-4 ">
                            <a href="/activities" className="group thank-link-box relative">
                                <img src="/assets/inperson-escape-games-thanks.jpg"></img>
                                <div className="py-4 flex items-center justify-center bg-[#231800]">
                                        <p className="text-[#eeeeee] text-xl font-medium text-center group-hover:text-gold">
                                            VIEW ALL <br></br>ACTIVITIES                                            
                                        </p>
                                </div>

                            </a>
                            <a href="/events" className="group thank-link-box relative">
                                    <img src="/assets/escape-games-events-thanks.jpg"></img>
                                   
                                     <div className="py-4 flex items-center justify-center bg-[#231800]">
                                        <p className="text-[#eeeeee] text-xl font-medium text-center group-hover:text-gold">
                                             VIEW ALL <br></br>EVENTS                                              
                                        </p>
                                     </div>
                            </a>
                            <a href="/virtual-games" className="group thank-link-box relative">
                                     <img src="/assets/virtual-escape-games-thanks.jpg"></img>
                                     
                                     <div className="py-4 flex items-center justify-center bg-[#231800]">
                                        <p className="text-[#eeeeee] text-xl font-medium text-center group-hover:text-gold">
                                            VIEW ALL <br></br>VIRTUAL GAMES                                               
                                        </p>
                                     </div>
                            </a>
                        </div>
                        </div>
                </div>
                <div className=" absolute bottom-0 left-0"> <img className="w-full" src="/assets/game-home-or2.jpg"></img></div>
        </div>
    )
}

export default Custom404Err