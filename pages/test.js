import MobileEscapeGamesHome from "../comps/mobileEscapeGames/MobileEscapeGamesHome";
const Test = (props) => {
  /* customizing breadcum */
  const toTitleCase = (title) => {
    const titlefres = title.replace(/-/g, " ");
    const btitle = titlefres
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "); // breadcum title capitalize

    return (
      <div className="bitem flex items-center">
        <span>{btitle}</span>{" "}
        <span className="bsep text-gold">
          <FiChevronRight />
        </span>
      </div>
    );
  };
  /* customizing breadcum */

  return (
    <>
      {console.log(props.states)}
      {/* =======header content======== */}

      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center relative"
      >
        {/* =======breadcum content and breadcum========  */}
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]"></div>
        {/* =======breadcum content and breadcum root page template======== end */}
        <MobileEscapeGamesHome />

        {/* =========================================================================================main content ======== end */}
      </div>
    </>
  );
};

export default Test;
