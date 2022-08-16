import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"

const getDasignation=(jobname)=>{
    const v=['a','e','i','o','u']
    const fistChar=jobname.charAt(0)
    if(v.includes(fistChar)){
        return "an "+jobname
    }

    return  "a "+jobname
}
const JobDetails=(props)=>{
    

    return(
        <div className="homereview relative overflow-hidden" style={
            {
                backgroundImage :  "linear-gradient(65deg,rgba(255, 249, 235,.1),rgba(255, 249, 235,.2)),url('/assets/gridbg.jpg')"
            }}>
         {/** =======ornamental icon===== */}
            <div className="pl-or pl-or-1 absolute top-0 left-0"> 
                <img src="/assets/pl-bgi-1.png"></img>
            </div>
            <div className="htb-bg-icon htb-bg-3 absolute"><img src="/assets/Navigation.png"></img></div>
            <div className="htb-bg-icon htb-bg-2 absolute"><img src="/assets/Compas-brown.png"></img></div>
            <div className="htb-bg-icon htb-bg-4 absolute"><img src="/assets/Skull.png"></img></div>

            <div className="section-container max-w-7xl mx-auto  py-16 md:py-20 lg:py-28 relative z-30 ">
                <div className="section-row flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 ">
                    {/*==========================about the role====================== */}
                    <div className="section-col md:w-2/3 pb-8 md:pb-0 px-4">
                            <h2 className="golden-text text-3xl md:text-4xl lg:text-5xl font-os font-bold">ABOUT THE ROLE </h2>
                            <p className="text-lg md:text[20px] lg:text-[24px] text-[#464646] font-medium mt-2 md:mt-4">As {getDasignation(props.designation)}, you will:</p>
                                
                            <div className="abt-role mt-4 md:mt-6 lg:mt-8 text-lg "> 
                            {
                                    props.jobroles.map((jobrole)=>{

                                        return(
                                        <div key={jobrole.id} className="flex  lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4 justify-between">
                                                 <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[94%] lg:w-[96%] lg:text-lg">{jobrole.role}</div>
                                         </div>
                                     )
                                    })
                                } 
                                             
                             </div>
                             <div className="job-dt-bottom-link mt-6 lg:mt-8">
                                     <p className="job-note font-semibold lg:text-lg text-[#464646] mb-6 lg:mb-8">If you are interested in applying for this role, please click below to complete an employment application and submit your resume for review by our recruiting team.</p>
                                        <Link href={"/careers/apply/?job="+props.jobname}>
                                            <a className="inline-block bg-red-600 hover:bg-red-700 text-white lg:text-lg py-3 px-10 md:py-4 md:px-12 rounded-full">SUBMIT YOUR APPLICATION</a>
                                        </Link>
                                    <p className="font-thin text-[#464646] lg:text-lg mt-6 lg:mt-8">All in Adventures, LLC. is an equal opportunity employer and affirmatively seeks diversity in its workforce. 
                                        All in Adventures recruits qualified applicants and advances in employment its employees without regard to race, 
                                        color, religion, gender, sexual orientation, gender identity, gender expression, age, disability, genetic information, 
                                        ethnic or national origin, marital status, veteran status, or any other status protected by law.</p>
                             </div>
                            
                    </div>
                    {/*==========================about the role end====================== */}
                    {/*==========================KEY COMPETENCIES NEEDED,DESIRED TRAITS, REQUIREMENTS FOR CONSIDERATION====================== */}
                    <div className="section-col md:w-1/3">
                        <div className="job-side-bar bg-[#F4E6C3] px-4 py-12 md:py-12 md:px-6 lg:py-16 lg:px-8 rounded-lg">
                             {/*================== COMPETENCIES=============*/}
                                <div className="side-bar-wd">
                                    <h3 className="text-xl md:text-2xl font-os text-[#111111] ">KEY COMPETENCIES NEEDED</h3>
                                    <div className="abt-notice mt-4 md:mt-6 lg:mt-6 text-lg"> 
                                 {
                                    props.competencies.map((competency)=>{

                                        return(
                                        <div key={competency.id} className="flex  lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4 justify-between">
                                                 <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                 <div className="w-[94%] lg:text-lg">{competency.competency}</div>
                                         </div>
                                          )
                                         })
                                  } 
                                             
                                     </div>

                                </div>
                                 {/*================== COMPETENCIES end=============*/}
                                    {/*================== trait=============*/}
                                <div className="side-bar-wd mt-8 lg:mt-12">
                                    <h3 className="text-xl md:text-2xl font-os text-[#111111] ">DESIRED TRAITS</h3>
                                    <div className="abt-trait mt-4 md:mt-6 lg:mt-6 text-lg"> 
                                 {
                                    props.traits.map((trait)=>{

                                        return(
                                        <p key={trait.id} className="flex  lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4 justify-between">
                                                {trait.trait}
                                         </p>
                                          )
                                         })
                                  } 
                                             
                                     </div>

                                </div>
                                   {/*================== trait end=============*/}
                                     {/*================== trait=============*/}
                                <div className="side-bar-wd mt-8 lg:mt-12">
                                    <h3 className="text-xl md:text-2xl font-os text-[#111111] ">REQUIREMENTS FOR CONSIDERATION</h3>
                                    <div className="abt-trait mt-4 md:mt-6 lg:mt-6 text-lg"> 
                                 {
                                    props.requirements.map((req)=>{

                                        return(
                                            <div key={req.id} className="flex  lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4 justify-between">
                                                    <div className="mt-[6px] w-[20px] lg:w-[24px]"><img  src="/assets/svg/star-bullet.svg"></img></div>
                                                    <div className="w-[94%] lg:text-lg">{req.requirement}</div>
                                            </div>
                                          )
                                         })
                                  } 
                                             
                                     </div>

                                </div>
                                   {/*================== trait end=============*/}
                        </div>
                    </div>
                    {/*==========================KEY COMPETENCIES NEEDED,DESIRED TRAITS, REQUIREMENTS FOR CONSIDERATION end====================== */}
                    

                </div>
                        {/**============WANT TO JOIN OUR TEAM?====================== */}
                <div className="section-row text-center pt-20">
                  <h2 className="golden-text text-3xl md:text-3xl lg:text-4xl font-os font-bold mb-8">WANT TO JOIN OUR TEAM?</h2>
                  <Link href="/careers">
                            <a className="inline-block rounded-full border-2 border-red-700 hover:bg-red-700 text-[#111111] hover:text-white py-3 px-12">VIEW ALL JOB POSITIONS</a>         
                  </Link>
                </div>
                         {/**============WANT TO JOIN OUR TEAM?====================== */}


            </div>
        </div>
    )
}

export default JobDetails