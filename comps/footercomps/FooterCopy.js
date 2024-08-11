import { useState, useEffect } from "react";
const FooterCopy = (props) => {
  const [copyDtae, setCopyDate] = useState("2023");

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    setCopyDate(currentYear);
  });
  return (
    <div className="copy-text text-center py-8">
      <p className="text-[#858585] text-xs md:text-base">
        Copyright &copy; {copyDtae} by All In Adventures | All Rights Reserved
      </p>
      <div className="term-policy flex justify-center space-x-2 items-center mt-2">
        <a
          href="/privacy-policy"
          className="text-gray-600 hover:text-[#CA9342] text-xs md:text-base"
        >
          Privacy Policy
        </a>

        <div className=" text-gray-600 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-600"></span>
        </div>

        <a
          href="/terms-of-services"
          className="text-gray-600 hover:text-[#CA9342] text-xs md:text-base"
        >
          Terms of Services
        </a>
      </div>
    </div>
  );
};
export default FooterCopy;
