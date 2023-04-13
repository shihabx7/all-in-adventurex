import Link from "next/link"
import TitleSeparator from "../util/TitleSeparator"
const OpenPosition=(props)=>{

    return(
        <div id="alljobs" className="open-positions relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>

            <div className="section-container max-w-7xl mx-auto relative z-30 pb-16 md:pb-20 lg:pb-28 px-4">
                 <div className="section-title">
                        <TitleSeparator title="BROWSE OUR OPEN POSITIONS" color="dark-gold" weight="font-bold" />
                        <p className="max-w-[800px] md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">Our mission-based culture means our work is challenging and intense, but also incredibly rewarding and fun! Does this sound epic to you? Join us.</p>

                 </div>
                 <div className="core-box-open-pos grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">

                    {
                            props.jobs.map((job)=>{

                                return (
                                    <div key={job.id} className="core-card rounded-xl bg-[#FDF0D1] p-6 lg:p-8">
                                          <h3 className="text-[#111111] font-semibold text-xl md:text-2xl lg:text-3xl ">{job.job_title}</h3>
                                          <p className="md:text[18px] lg:text-[20px] text-[#333333] mt-2 md:mt-4">{job.short_desc}
                                          </p>
                                          <div className="jop-pg-link mt-6 lg:mt-8">
                                                 
                                                          <a href={"/careers/"+job.job_slug} className="inline-block py-3 px-10 lg:py-4 lg:px-12 bg-red-600 hover:bg-red-700 text-white lg:text-lg rounded-full">LEARN MORE</a>
                                                 
                                          </div>
                                    </div>
                                )
                           
                            })
                    }
                    </div>

                
            </div>



        <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )
}

export default OpenPosition