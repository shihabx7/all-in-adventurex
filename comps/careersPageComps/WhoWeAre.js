const WhoWeAre = () => {
  return (
    <div className="who-we-are relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}

      <div className="section-container max-w-7xl mx-auto px-4 relative z-30 py-16 md:py-20 lg:py-28">
        {/**=====================row-1-============ */}
        <div className="abt-row flex flex-col md:flex-row justify-between ">
          <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
            <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0 uppercase">
              Join the All In Adventures Team - Your Future Starts Here!
            </h2>
            <p className="text-gray-700 lg:text-[20px] mt-4  lg:mt-8">
              Ready to move beyond the ordinary and start a truly rewarding
              career? Do you live to connect with people, turning every
              interaction into a meaningful experience? If you are looking for a
              company where "grow with us" means actively developing your
              professional skills and finding daily satisfaction in your work
              environment, then we invite you to explore our opportunities.
            </p>
            <p className="text-gray-700 lg:text-[20px] mt-4">
              If you are motivated by professional excellence and team
              collaboration, then All In Adventures is the place for you. Why
              settle for a routine job when you can take a key role in a
              guest-obsessed, hospitality-driven environment? Join a team that
              is not just delivering top-notch, interactive fun - we are
              crafting memorable guest experiences through multiple, unique live
              games, one exciting moment at a time!
            </p>
          </div>
          <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
            <img src="/assets/abt-mission.jpg"></img>
          </div>
        </div>
        {/**=====================row-1 end-============ */}
        {/**=====================row-2-============ */}
        <div className="abt-row flex flex-col md:flex-row justify-between mt-8 md:mt-12 lg:mt-16">
          <div className="abt-col md:w-[48%]">
            <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">
              WHO WE ARE
            </h2>
            <p className="text-gray-700 lg:text-[20px] mt-4  lg:mt-8">
              <strong>Our mission:</strong> To inspire genuine connection through
              unforgettable and varied entertainment experiences for everyone,
              powered by welcoming facilities, a passionate team, and a dynamic
              culture of growth that people are eager to join and engage wit
            </p>
          </div>
          <div className="abt-col md:w-[48%]">
            <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">
              WHO SHOULD APPLY
            </h2>
            <p className="text-gray-700 lg:text-[20px] mt-4  lg:mt-8">
              Are you sharp, enthusiastic, and ready to deliver 5-star service
              every time guests arrive? We are looking for highly engaged,
              guest-focused team members who excel at providing exceptional
              hospitality. If you have experience in retail, hospitality,
              events, or restaurant service and enjoy working with people, we
              encourage you to apply.
            </p>
          </div>
        </div>
        {/**=====================row-2 end-============ */}
        {/**=====================row-3-============ */}
        <div className="abt-row flex flex-col md:flex-row justify-between mt-8 md:mt-12 lg:mt-16 ">
          <div className="abt-col md:w-[48%] lg:w-[48%] order-2 md:order-1">
            <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">
              KEY COMPETENCIES NEEDED
            </h2>
            <div className="abt-notice mt-4 md:mt-6 lg:mt-8">
              <div className="flex  lg:text-lg text-[#464646] mt-4 justify-between">
                <div className="mt-[6px] w-[20px] lg:w-[24px]">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </div>
                <div className="w-[94%]">Attention to Detail</div>
              </div>
              <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                <div className="mt-[6px] w-[20px] lg:w-[24px]">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </div>
                <div className="w-[94%] ">
                  Friendliness &amp; Professionalism
                </div>
              </div>
              <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                <div className="mt-[6px] w-[20px] lg:w-[24px]">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </div>
                <div className="w-[94%] ">High Motivation</div>
              </div>
              <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                <div className="mt-[6px] w-[20px] lg:w-[24px]">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </div>
                <div className="w-[94%]">Instills Trust/ High Integrity</div>
              </div>
              <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                <div className="mt-[6px] w-[20px] lg:w-[24px]">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </div>
                <div className="w-[94%]">A Positive “All In” Attitude.</div>
              </div>
              <div className="flex  lg:text-lg text-[#464646] mt-2 lg:mt-3  justify-between">
                <div className="mt-[6px] w-[20px] lg:w-[24px]">
                  <img src="/assets/svg/star-bullet.svg"></img>
                </div>
                <div className="w-[94%]">Service &amp; Sales Orientation</div>
              </div>
            </div>
          </div>
          <div className="abt-col md:w-[48%] lg:w-[48%] order-1 md:order-2">
            <h2 className="dark-gold text-2xl md:text-3xl lg:text-4xl font-os font-bold mt-4 md:mt-0">
              DESIRED TRAITS
            </h2>
            <p className="text-gray-700 lg:text-[20px] mt-4  lg:mt-8">
              We are eager to connect with proactive individuals who are
              dedicated to providing high-quality service. If you bring a
              positive attitude, adaptability, and the vibrant energy necessary
              to expertly support our guests' needs, we want you on our team. If
              you are also motivated to learn and appreciate a company that
              encourages professional growth, we welcome you to join us and
              advance your career here.
            </p>
          </div>
        </div>
        {/**=====================row-3 end-============ */}
      </div>
    </div>
  );
};

export default WhoWeAre;
