import MobileTitleSeparatorLeft from "./MobileTitleSeparatorLeft";
export default function PartnerOrg() {
  return (
    <div>
      <div className="section-head">
        <div className="md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1090px]">
          <MobileTitleSeparatorLeft
            title={"ORGANIZATIONS THAT CHOSE TO ESCAPE THE ORDINARY"}
          />
        </div>

        {/* ==================text=====================*/}
        <div className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-1 md:mt-2 mbl-group-text md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1080px]">
          We've brought teams, students, and staff together with engaging,
          on-site fun—right at their location. These groups turned ordinary
          events into unforgettable adventures with our mobile escape rooms!
        </div>
      </div>
      <div className="mbl-partner-logo-container pt-4 lg:pt-10 lg:pb-0">
        <div className="logo-item-box flex space-x-4 space-y-4 flex-wrap md:flex-nowrap justify-evenly md:justify-between items-center">
          <div className="logo-item">
            <img
              className="max-h-[36px] md:max-h-[48px] lg:max-h-[60px]"
              src="/assets/mobile-escape-room/patners/Apple_logo_black.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className="max-h-[20px] md:max-h-[24px] lg:max-h-[40px]"
              src="/assets/mobile-escape-room/patners/Amazon_logo.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className="max-h-[18px] md:max-h-[22px] lg:max-h-[38px]"
              src="/assets/mobile-escape-room/patners/Deloitte.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className="max-h-[24px] md:max-h-[26px] lg:max-h-[38px]"
              src="/assets/mobile-escape-room/patners/IBM_logo.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className="max-h-[42px] lg:max-h-[60px]"
              src="/assets/mobile-escape-room/patners/Dell_Logo.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className=" max-h-[30px] lg:max-h-[44px]"
              src="/assets/mobile-escape-room/patners/Syracuse_University.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className="max-h-[32px] lg:max-h-[58px]"
              src="/assets/mobile-escape-room/patners/University_of_Massachusetts.svg"
            ></img>
          </div>
          <div className="logo-item">
            <img
              className="max-h-[32px] lg:max-h-[58px]"
              src="/assets/mobile-escape-room/patners/NC_State_University.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
