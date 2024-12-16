const ThankYuouCareerHero = (props) => {
  return (
    <div
      className="thank-sec relative bg-cover bg-black"
      style={{
        backgroundImage:
          "linear-gradient(65deg,rgba(0, 0, 0,.4),rgba(0, 0, 0,.3)),url('/assets/svg/pyescape-bg.svg')",
      }}
    >
      <div className=" max-w-7xl mx-auto py-16 md:py-24 lg:py-28 relative z-30">
        <div className="px-4 py-4 rounded-md thank-box">
          <div className="thank-head text-center">
            <h1 className="thn-title golden-text drop-shadow-lg text-2xl rm:text-3xl sm:text-4xl md:text-[44px] lg:text-[54px] xl:text-6xl font-extrabold font-os">
              {/*props.pageData.pageTitle*/}
              PART 2: COMPLETE THE QUESTIONNAIRE
            </h1>
            <div className="text-[#aaaaaa] text-sm rm:text-md md:text-lg mt-4 mx-auto text-center max-w-[640px] lg:max-w-[700px]">
              <p className="cart-subtitle">
                Your application has been successfully submitted! To complete
                the process, click the link below to fill out the required
                questionnaire.
              </p>
              <a
                href="https://forms.gle/FaTso7Y4Yr8u2aVH8"
                target="_blank"
                className="inline-block px-8 py-3 md:px-10 lg:px-12 bg-red-600 hover:bg-red-700 text-white text-center md:text-lg rounded-full my-6"
              >
                CONTINUE TO QUESTIONNAIRE
              </a>
              <p className="cart-subtitle">
                Your application will only be reviewed after the questionnaire
                is completed. Thank you for your interest in joining our team—we
                look forward to learning more about you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYuouCareerHero;
