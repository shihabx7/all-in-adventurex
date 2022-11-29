import JobApplicationForms from "../multiFormComps/JobApplicationForms"
import TitleSeparator from "../util/TitleSeparator"
const JobApplication=()=>{

    return(
        <div className="c-contact py-16 md:py-20 lg:py-28  bg-cover bg-center" style={{backgroundImage : "url('/assets/game-dt-bg.jpg')", }}>
        <div className="section-container max-w-7xl mx-auto relative z-30">
            <div className="section-title">
              <TitleSeparator title='Employment Application' color='golden-text' weight='font-bold'/>
                <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-8 md:mb-12 lg:mb-16">
                     <p className="text-gray-700 md:px-8">Interested in joining our super engaged, guest-centric team of associates? Fill out the application form below to be considered for employment.</p>
                 </div>
             </div>
            <div className="job-form-container max-w-[960px] mx-auto bg-[#F4E6C3] py-8 px-4 lg:p-8 rounded-lg drop-shadow"> 
                <JobApplicationForms/>
            </div>
        </div>

    </div>
    )
}

export default JobApplication