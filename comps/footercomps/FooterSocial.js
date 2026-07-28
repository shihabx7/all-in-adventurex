import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
//import { AiFillTikTok } from "react-icons/ai";
// href="https://twitter.com/AllinAdventure"
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const FooterSocial = (props) => {
  return (
    <div className="footeter-social-box text-center pt-8">
      <h3 className="golden-text font-xl font-bold text-center">
        FOLLOW US ON SOCIAL
      </h3>
      <div className="social-icon-list-box mt-4 flex justify-center space-x-2.5 rm:space-x-3 md:space-x-5">
        <a
          target="_blank"
          href="https://www.facebook.com/allinadventure/"
          className="w-9 h-9 flex justify-center items-center text-gray-900  text-[22px] leading-[1] bg-gray-500 hover:bg-gold  rounded-md transition-all duration-300 ease-in-out"
        >
          <FaFacebookF />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/company/11547229/"
          className="w-9 h-9 flex justify-center items-center text-gray-900  text-[22px] leading-[1] bg-gray-500 hover:bg-gold  rounded-md transition-all duration-300 ease-in-out"
        >
          <FaLinkedinIn />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/all_in_adventures/"
          className="w-9 h-9 flex justify-center items-center text-gray-900  text-[26px] leading-[1] bg-gray-500 hover:bg-gold  rounded-md transition-all duration-300 ease-in-out"
        >
          <FaInstagram />
        </a>

        <a
          target="_blank"
          href="https://x.com/AllinAdventure"
          className="w-9 h-9 flex justify-center items-center text-gray-900  text-[22px] leading-[1] bg-gray-500 hover:bg-gold  rounded-md transition-all duration-300 ease-in-out"
        >
          <FaXTwitter />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@allinadventures2557/videos"
          className="w-9 h-9 flex justify-center items-center text-gray-900  text-[26px] leading-[1] bg-gray-500 hover:bg-gold  rounded-md transition-all duration-300 ease-in-out"
        >
          <FaYoutube />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@all_in_adventures"
          className="w-9 h-9 flex justify-center items-center text-gray-900  text-[22px] leading-[1] bg-gray-500 hover:bg-gold  rounded-md transition-all duration-300 ease-in-out"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};
export default FooterSocial;
