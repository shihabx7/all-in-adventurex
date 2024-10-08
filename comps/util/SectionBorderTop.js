const SectionBorderTop = () => {
  return (
    <div className="sec-divider-top w-full absolute top-0 left-0 ">
      {/*======================= boder img============== */}
      <img
        className="w-full hidden md:block"
        src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
      ></img>
      <img
        className="w-full rotate-180 md:hidden"
        src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
      ></img>
      {/*======================= boder img end============== */}
    </div>
  );
};

export default SectionBorderTop;
