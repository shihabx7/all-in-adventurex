const SectionBorderBottom = () => {
  return (
    <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
      {/*======================= boder img============== */}
      <img
        className="w-full hidden md:block"
        alt="Allinadventures decorative border bottom"
        src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
      ></img>
      <img
        className="w-full  md:hidden"
        alt="Allinadventures decorative border bottom mobile"
        src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
      ></img>
      {/*======================= boder img End============== */}
    </div>
  );
};

export default SectionBorderBottom;
