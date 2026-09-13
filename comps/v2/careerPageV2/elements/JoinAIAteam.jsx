import Image from "next/image";
export default function JoinAIAteam({ job }) {
  return (
    <div className="join-aia-team flex flex-col lg:flex-row items-center justify-between gap-4 px-3">
      <div className="join-aia-team-img text-center md:text-left w-full lg:w-[45%] xl:w-[47%] aspect-square sm:aspect-[7/5] lg:aspect-square  relative">
        <Image
          src="/assets/career-page/join-aia-team.jpg"
          alt="join aia team"
          layout="fill"
          className="rounded-[10px]"
          objectFit="cover"
        />
      </div>
      <div className="join-aia-team-text text-center mt-5 md:mt-6 lg:mt-0 md:text-left w-full lg:w-[53%] xl:w-[47%]">
        <h2 className="text-[#CA9342] text-2xl md:text-[40px] lg:text-[2.65rem] 2xl:text-[2.875rem] leading-[1.2] font-os font-bold uppercase ">
          Join the All In Adventures Team - Your Future Starts Here!
        </h2>
        <p className="text-[#2E2E2E] mt-3.5 md:mt-5 xl:text-[1.2rem] mb-4">
          Ready to move beyond the ordinary and start a truly rewarding career?
          Do you live to connect with people, turning every interaction into a
          meaningful experience? If you are looking for a company where "grow
          with us" means actively developing your professional skills and
          finding daily satisfaction in your work environment, then we invite
          you to explore our opportunities.
        </p>
        <p className="text-[#2E2E2E] mt-1 md:mt-2   xl:text-[1.2rem] mb-4">
          If you are motivated by professional excellence and team
          collaboration, then All In Adventures is the place for you. Why settle
          for a routine job when you can take a key role in a guest-obsessed,
          hospitality-driven environment? Join a team that is not just
          delivering top-notch, interactive fun - we are crafting memorable
          guest experiences through multiple, unique live games, one exciting
          moment at a time!
        </p>
      </div>
    </div>
  );
}
