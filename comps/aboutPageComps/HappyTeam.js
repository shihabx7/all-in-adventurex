
import TitleSeparator from "../util/TitleSeparator"
const HappyTeam=()=>{

    return(
        <div className="happy-team" style={{backgroundImage :  "url('/assets/happy-bg.jpg')"}}>

            <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 ">
            <div className="section-title">
                        <TitleSeparator title="TRUSTED BY 30,000+ HAPPY TEAMS" color="golden-text" weight="font-bold" />
                        <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>

             </div>
             <div className="happy-team-logo-box flex items-center justify-center space-x-4 md:space-y-0 md:space-x-6 lg:space-x-12">
                    <div className="happy-team-logo-img w-1/2 md:w-auto"><img src="/assets/google.png"></img></div>
                    <div className="happy-team-logo-img w-1/2 md:w-auto"><img src="/assets/unicef.png"></img></div>
                    <div className="happy-team-logo-img w-1/2 md:w-auto"><img src="/assets/handm.png"></img></div>
                    <div className="happy-team-logo-img w-1/2 md:w-auto"><img src="/assets/pepsi.png"></img></div>
                    <div className="happy-team-logo-img w-1/2 md:w-auto"><img src="/assets/walmart.png"></img></div>
             </div>

            </div>

        </div>
    )
}

export default HappyTeam