import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const FooterSocial = (props) => {
  return (
    <div className="footeter-social-box text-center pt-8">
      <h3 className="golden-text font-xl font-bold text-center">
        FOLLOW US ON SOCIAL
      </h3>
      <div className="social-icon-list-box mt-4 flex justify-center space-x-3 md:space-x-6">
        <a
          target="_blank"
          href="https://www.facebook.com/allinadventure/"
          className="text-gray-500 hover:text-gold text-4xl"
        >
          <FaFacebookSquare />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/company/11547229/"
          className="text-gray-500 hover:text-gold text-4xl"
        >
          <FaLinkedin />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/all_in_adventures/"
          className="text-gray-500 hover:text-gold rounded text-4xl"
        >
          <FaInstagramSquare />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/AllinAdventure"
          className="text-gray-500 hover:text-gold text-4xl"
        >
          <FaTwitterSquare />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@allinadventures2557/videos"
          className="text-gray-500 hover:text-gold text-4xl"
        >
          <FaYoutubeSquare />
        </a>
      </div>
    </div>
  );
};
export default FooterSocial;
