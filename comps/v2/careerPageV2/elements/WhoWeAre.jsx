export default function WhoWeAre({ job }) {
  return (
    <div className="career-about-row flex flex-col md:flex-row items-stretch justify-between gap-4">
      <div className="w-full md:w-[49%] lg:w-[48%] xl:w-[47%] bg-[#211906] rounded-[10px] px-4 py-6 sm:p-6 md:p-7 xl:p-10">
        <h2 className="text-gold text-[2rem] font-bold mb-2 lg:mb-3">Who We Are</h2>
        <p className="lg:text-lg xl:text-[1.2rem] text-[#C5C5C5]">
          Our mission: To inspire genuine connection through unforgettable and
          varied entertainment experiences for everyone, powered by welcoming
          facilities, a passionate team, and a dynamic culture of growth that
          people are eager to join and engage with.
        </p>
      </div>
      <div className="w-full md:w-[49%] lg:w-[48%] xl:w-[47%] bg-[#211906] rounded-[10px] px-4 py-6 sm:p-6 md:p-7 xl:p-10">
        <h2 className="text-gold text-[2rem] font-bold mb-2 lg:mb-3">
          Who Should Apply
        </h2>
        <p className="lg:text-lg xl:text-[1.2rem] text-[#C5C5C5]">
          Are you sharp, enthusiastic, and ready to deliver 5-star service every
          time guests arrive? We are looking for highly engaged, guest-focused
          team members who excel at providing exceptional hospitality. If you
          have experience in retail, hospitality, events, or restaurant service
          and enjoy working with people, we encourage you to apply.
        </p>
      </div>
    </div>
  );
}
