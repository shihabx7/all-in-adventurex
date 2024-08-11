import { FiArrowUpRight } from "react-icons/fi";

const Dgency = (props) => {
  return (
    <div className="dgency-row pt-3 pb-2 md:py-3 bg-[#FFF7F5] text-center flex flex-col md:flex-row justify-center space-x-1 items-center">
      <p className="leading-[1.2] text-[#414141] text-[14px] md:text-[16px]">
        Website designed, developed and marketed by
      </p>

      <a
        href="https://escaperoommarketer.com"
        target="_blank"
        className=" text-[#FF492C] hover:text-[#D43C24] flex items-center"
      >
        <span className="text-[14px] md:text-[16px] leading-[1.2]">
          EscapeRoomMarketer.com
        </span>
        <span className="text-lg md:text-xl pl-[1px]">
          <FiArrowUpRight />
        </span>
      </a>
      <a
        href="https://escaperoommarketer.com"
        target="_blank"
        className="pt-[3px] md:pt-0 md:pl-2"
      >
        <img
          className="w-[95px] md:w-[120px] lg:w-[135px]"
          src="/assets/util/escaperoom-marketer-logo.svg"
        ></img>
      </a>
    </div>
  );
};
export default Dgency;
