const SectionBorderTop = () => {
  return (
    <div className="sec-divider-top w-full absolute top-0 left-0 ">
      {/*======================= boder img============== */}
      <img
        className="w-full hidden md:block"
        alt="Allinadventures decorative border top"
        src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
      ></img>
      <img
        className="w-full rotate-180 md:hidden"
        alt="Allinadventures decorative border top mobile"
        src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
      ></img>
      {/*======================= boder img end============== */}
    </div>
  );
};

export default SectionBorderTop;
