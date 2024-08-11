import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";

/* customizing title */
const toTitleCase = (title) => {
  const titlefres = title.replace(/-/g, " ");
  const btitle = titlefres
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" "); // breadcum title capitalize
  var bret = btitle;
  if (bret.length > 15) {
    bret = bret.substring(0, 20).trim() + "...";
  }
  return (
    <div className="bitem flex items-center">
      <span>{bret}</span>{" "}
      <span className="bsep text-gold">
        <FiChevronRight />
      </span>
    </div>
  );
};
const EventBreadCrumbs = () => {
  return (
    <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
      <Breadcrumbs
        replaceCharacterList={[{ from: "-", to: " " }]}
        listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg"
        inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700"
        activeItemClassName="inline-block text-[#212121]"
        rootLabel="home"
        transformLabel={(title) => {
          return toTitleCase(title);
        }}
      ></Breadcrumbs>
    </div>
  );
};
export default EventBreadCrumbs;
