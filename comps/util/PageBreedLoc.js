import { FiChevronRight } from "react-icons/fi";

const stXCap = (nm) => {
  let stArr = nm.split(" ");
  let nst = stArr[stArr.length - 1].toUppercase();
  stArr[stArr.length - 1] = nst;
  return stArr.join(" ");
};
const PageBreedLoc = (props) => {
  return (
    <div className="breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]">
      <div className="new-brd max-w-7xl mx-auto px-2 md:px-4 flex items-center space-x-.5">
        <a
          href={"/"}
          className="capitalize flex items-center text-[13px] leading-[1.2] rm:text-[14px] md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700"
        >
          Home
          <span className="bsep text-gold">
            <FiChevronRight />
          </span>
        </a>

        <a
          href={"/" + props.locationSlug}
          className="capitalize flex items-center text-[13px] leading-[1.2] rm:text-[14px] md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700"
        >
          {props.locationName}
        </a>
      </div>
    </div>
  );
};

export default PageBreedLoc;
