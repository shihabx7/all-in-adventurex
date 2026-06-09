//import Breadcrumbs from "nextjs-breadcrumbs";
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

export default function EventRooTPageBread(props) {
  return (
    <div className="event-breadcums py-1.5 md:py-2 bg-[#fffceb]">
      <nav className="" aria-label="breadcrumbs">
        <ol className="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-[.75rem] leading-[1.3] rm:text-[.85rem] md:text-base ">
          <li className="inline-block text-[#5a5a5a] hover:text-red-700">
            <a href="/">
              <div className="bitem flex items-center">
                <span>Home</span>{" "}
                <span className="bsep text-[#CB9442]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="inline-block text-[#5a5a5a] hover:text-red-700">
            <a href="/events">
              <div className="bitem flex items-center">
                <span>Events</span>{" "}
                <span className="bsep text-[#CB9442]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="inline-block text-[#191919]">
            <a href="/events/team-building">
              <div className="bitem flex items-center">
                <span>{props.labelText}</span>{" "}
                <span className="bsep text-[#CB9442]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
