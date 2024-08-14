import TitleSeparator from "../util/TitleSeparator";
import Link from "next/dist/client/link";
import { FiChevronRight } from "react-icons/fi";

const PricingGiftCard = (props) => {
  return (
    <div className="inperson-activities-pricing relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}

      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      {/**=================inpersone escape game price section==================== */}
      <div className="section-container max-w-7xl mx-auto  pb-16 md:pb-20 lg:pb-28 relative z-30 px-[0px] rm:px-4">
        <div className="section-title px-4 mb-8">
          <TitleSeparator
            title="GIFT CARD PRICING"
            color="dark-gold"
            weight="font-bold"
          />
        </div>
        <div className="price-cl max-w-[900px] mx-auto">
          {/** ============== inperson pricing-table- ============ */}
          <table className="inperson-game-price-table w-full border-collapse border border-[#D2C6AA]">
            <thead className="bg-[#EFE4CA]">
              {/** ==============table-head============ */}
              <tr>
                <td className="border border-[#D2C6AA] p-2 md:p-3 w-[32%]">
                  <h4 className="font-medium text-xs rm:text-sm sm:text-lg md:text-[24px] text-[#000000]">
                    Options
                  </h4>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4 w-[17%]">
                  <h4 className="font-medium text-sm sm:text-lg md:text-[24px] text-[#000000]">
                    Starts
                  </h4>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4 w-[17%]">
                  <h4 className="font-medium text-xs rm:text-sm  sm:text-lg md:text-[24px] text-[#000000]">
                    Growth
                  </h4>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4 w-[17%]">
                  <h4 className="font-medium text-xs rm:text-sm  sm:text-lg md:text-[24px] text-[#000000]">
                    Generous
                  </h4>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4 w-[17%]">
                  <h4 className="font-medium text-xs rm:text-sm   sm:text-lg md:text-[24px] text-[#000000]">
                    Custom
                  </h4>
                </td>
              </tr>
              {/** ==============table-head end============ */}
            </thead>
            <tbody className="bg-[#FBF2DC]">
              {/** ==============table-row============4+ players */}
              <tr>
                <td className="border border-[#D2C6AA] w-[32%]  p-2 md:p-4">
                  <h4 className="font-medium text-xs rm:text-sm  md:text-[20px] text-[#000000]">
                    Gift Card
                  </h4>
                  <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                    (Digital redeemable card)
                  </p>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4">
                  <h4 className="font-medium text-sm  md:text-[20px] text-[#000000]">
                    $25
                  </h4>
                  <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                    Per unit
                  </p>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4">
                  <h4 className="font-medium  text-sm md:text-[20px] text-[#000000]">
                    $50
                  </h4>
                  <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                    Per unit
                  </p>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4">
                  <h4 className="font-medium text-sm  md:text-[20px] text-[#000000]">
                    $100
                  </h4>
                  <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                    Per unit
                  </p>
                </td>
                <td className="border border-[#D2C6AA]  p-2 md:p-4">
                  <h4 className="font-medium text-sm md:text-[20px] text-[#000000]">
                    $
                  </h4>
                  <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                    As you wish
                  </p>
                </td>
              </tr>
              {/** ==============table-row end============ */}
              {/** ==============table-row===========   3-4 Players */}
              <tr>
                <td className="border border-[#D2C6AA] w-[32%]  p-2 md:p-4">
                  <h4 className="font-medium text-xs rm:text-sm  md:text-[20px] text-[#000000]">
                    Gift Card Add On
                    <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                      (Physical surprise package)
                    </p>
                  </h4>
                </td>
                <td className="border border-[#D2C6AA]  p-2 md:p-4">
                  <h4 className="font-medium text-sm md:text-[20px] text-[#000000]">
                    $19.99
                  </h4>
                  <p className="text-[#222222] font-light text-xs sm:text-sm md:text-lg">
                    Per unit
                  </p>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4">
                  <h4 className="font-medium  md:text-[20px] bg-[#D2C6AA] w-[20px] h-[5px]">
                    {" "}
                  </h4>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4">
                  <h4 className="font-medium  md:text-[20px] bg-[#D2C6AA] w-[20px] h-[5px]">
                    {" "}
                  </h4>
                </td>
                <td className="border border-[#D2C6AA] p-2 md:p-4">
                  <h4 className="font-medium  md:text-[20px] bg-[#D2C6AA] w-[20px] h-[5px]">
                    {" "}
                  </h4>
                </td>
              </tr>
              {/** ==============table-row end============ */}
            </tbody>
          </table>
          {/** ============== inperson pricing-table- end============ */}
        </div>
        {/** ============== inperson pricing-notice- ============ */}
        <div className="pricing-notice max-w-[800px] px-4 mx-auto mt-4 md:mt-8">
          <div className="view-all flex justify-center">
            <a
              href="/gift-cards"
              className="flex font-medium text-lg justify-center space-x-1 items-center text-red-600 hover:text-red-700"
            >
              <span>Buy gift cards</span> <FiChevronRight />
            </a>
          </div>
        </div>
        {/** ============== inperson pricing-notice- end ============ */}
      </div>
    </div>
  );
};

export default PricingGiftCard;
