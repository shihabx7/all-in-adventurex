import Link from "next/link";
import TitleSeparator from "../util/TitleSeparator";
const MeetOurTeam = (props) => {
  return (
    <div className="meet-team relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}

      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      <div className="section-container max-w-7xl mx-auto px-4 pb-16 md:pb-20 lg:pb-28 relative z-30">
        <div className="section-title">
          <TitleSeparator
            title="MEET OUR ENERGETIC TEAM"
            color="dark-gold"
            weight="font-bold"
          />
          <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-700">
            We are in business for the long haul and believe we will travel
            farther as a team than we would as individuals.
          </p>
        </div>
        <div className="team-box grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {props.teamMembersList.map((member, index) => {
            return (
              <div key={index + 1} className="team-list">
                <div className="member-img">
                  <img
                    className="rounded-full max-w-[140px] md:max-w-[160px] lg:max-w-[190px] mx-auto drop-shadow-lg"
                    src={member.photo.url}
                    alt={member.photo.alt}
                  ></img>
                </div>
                <div className="member-info text-center mt-2">
                  <h3 className="md:text-[18px] lg:text-[22px] font-medium text-[#222222]">
                    {member.name}
                  </h3>
                  <p className="lg:text-lg text-[#464646]">
                    {member.designation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="join-link mt-8 lg:mt-16 text-center">
          <h2 className="dark-gold font-os font-bold text-center text-2xl md:text-3xl mb-8">
            WANT TO JOIN OUR TEAM?
          </h2>

          <a
            href="/careers"
            className="inline-block bg-red-600 hover:bg-red-700 text-white md:text-lg py-3 px-8 rounded-full"
          >
            VIEW JOB OPENINGS
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
