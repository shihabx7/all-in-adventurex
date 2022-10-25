import Link from "next/link"
import TitleSeparator from "../util/TitleSeparator"
const MeetOurTeam=(props)=>{
    return(
        <div className="meet-team relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
                <div className="section-container max-w-7xl mx-auto px-4 pb-16 md:pb-20 lg:pb-28 relative z-30">
                    <div className="section-title">
                        <TitleSeparator title="MEET OUR ENERGETIC TEAM" color="golden-text" weight="font-bold" />
                        <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">
                             We are in business for the long haul and believe we will travel farther as a team than we would as individuals.
                        </p>

                    </div>
                    <div className="team-box grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {
                            props.team_members.map((member)=>{

                                return(
                                <div key={member.id} className="team-list">
                                    <div className="member-img">
                                         <img className="rounded-full max-w-[148px] md:max-w-[160px] lg:max-w-[190px] mx-auto drop-shadow-lg" src={member.img}></img>
                                     </div>
                                     <div className="member-info text-center">
                                        <h3 className="md:text-[18px] lg:text-[22px] font-medium text-[#222222]">{member.name}</h3>
                                            <p className="lg:text-lg text-[#464646]">{member.designation}</p>
                                     </div>
                                </div>
                                 )
                             
                            })
                        }
                        

                    </div>
                    <div className="join-link mt-8 lg:mt-16 text-center">
                        <h2 className="golden-text font-os font-bold text-center text-2xl md:text-3xl mb-8">WANT TO JOIN OUR TEAM?</h2>
                        <Link href="/careers">
                            <a className="inline-block bg-red-600 hover:bg-red-700 text-white md:text-lg py-3 px-8 rounded-full">VIEW JOB OPENINGS</a>
                        
                        </Link>

                    </div>


                </div>

            <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )
}

export default MeetOurTeam