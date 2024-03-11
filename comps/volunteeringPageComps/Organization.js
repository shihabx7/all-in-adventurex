import TitleSeparator from "../util/TitleSeparator";
import Link from "next/link";

const Organization = () => {
  return (
    <div className="buy-gift py-20 md:py-28 bg-black  relative overflow-hidden">
      <div className="gift-lt absolute top-0 left-0">
        <img src="/assets/gift-balon-bg.png"></img>
      </div>
      <div className="gift-rt absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-40">
        <div className="volunteering-badge mb-8 md:mb-12 lg:mb-16">
          <img
            className="mx-auto md:max-w-[600px] block"
            src="/assets/allinadventure-volunteering-organization.png"
          ></img>
        </div>
        <TitleSeparator
          title="EXAMPLES OF ORGANIZATIONS WE HELP"
          color="text-gold"
          weight="font-bold"
        />
        <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-12 lg:mb-16">
          <p className="text-gray-200 md:px-8">
            Giving our efforts to a worthy cause is a great way to help the
            community. There are many organizations we can get involved with by
            volunteering, and here are a few examples.
          </p>
        </div>
        <div className="wcp-row">
          <div className="wcp-list-container mb-4 md:mb-8 lg:mb-12 py-6 md:py-8 px-2 md:px-6 lg:py-12 lg:px-10 bg-[#080808] rounded">
            <div className="flex flex-col md:flex-row justify-between md:space-x-2 ">
              <div className="wcp-list-box w-full md:w-[47%] lg:w-[42%]">
                <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                  <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                    <img src="/assets/svg/college.svg"></img>
                  </div>
                  <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full">
                    <p className="golden-text text-lg lg:text-xl">
                      EDUCATIONAL INSTITUTIONS
                    </p>
                  </div>
                </div>
                <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                  <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                    <img src="/assets/svg/prints.svg"></img>
                  </div>
                  <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full">
                    <p className="golden-text text-lg lg:text-xl">
                      ANIMAL WELFARE ORGANIZATIONS
                    </p>
                  </div>
                </div>
                <div className="wcp-list flex items-center mb-6 md:mb-0">
                  <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                    <img src="/assets/svg/save-the-planet.svg"></img>
                  </div>
                  <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full">
                    <p className="golden-text text-lg lg:text-xl">
                      PLANET SAVING AGENCIES
                    </p>
                  </div>
                </div>
              </div>
              <div className="wcp-list-box w-full md:w-[47%] lg:w-[42%]">
                <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                  <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                    <img src="/assets/svg/healthcare.svg"></img>
                  </div>
                  <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full">
                    <p className="golden-text text-lg lg:text-xl">
                      MEDICAL ORGANIZATIONS
                    </p>
                  </div>
                </div>
                <div className="wcp-list flex items-center mb-6 md:mb-8 lg:mb-10">
                  <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden ">
                    <img src="/assets/svg/celebration.svg"></img>
                  </div>
                  <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full">
                    <p className="golden-text text-lg lg:text-xl">
                      YOUTH-FOCUSED ORGANIZATIONS
                    </p>
                  </div>
                </div>
                <div className="wcp-list flex items-center mb-0">
                  <div className="flex justify-center items-center wcp-list-icon p-4 rounded bg-golden">
                    <img src="/assets/svg/policemen.svg"></img>
                  </div>
                  <div className="wcp-list-text uppercase  py-3 md:py-4  px-4 md:px-6 lg:px-8 bg-[#111111] rounded w-full">
                    <p className="golden-text  md:text-lg lg:text-xl">
                      LOCAL LAW ENFORCEMENT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
