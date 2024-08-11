const FooterEmbedMap = () => {
  return (
    <div className=" overflow-hidden pb-8 md:pb-10 lg:pb-12">
      <div className="space w-full h-[4px] bg-[#111111] relative z-10"> </div>
      <div className="mt-[-60px]">
        <div className="w-full h-[520px] md:h-[640px] lg:h-[720px]">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1XniDBpW7F60KkSK_e7i7VhyDf8AzfjY&ehbc=2E312F"
            width="100%"
            height="100% "
          ></iframe>
        </div>
      </div>
    </div>
  );
};
//src="https://www.google.com/maps/d/embed?mid=1XniDBpW7F60KkSK_e7i7VhyDf8AzfjY&ehbc=2E312F"

export default FooterEmbedMap;
