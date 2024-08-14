import { FiChevronRight } from "react-icons/fi";
const PageLink = (props) => {
  return (
    <a
      href={props.link}
      className="flex items-center justify-center space-x-1 text-red-600 hover:text-red-700 text-lg font-medium"
    >
      <span>{props.label}</span>
      <span>
        <FiChevronRight />
      </span>
    </a>
  );
};
export default PageLink;
