const CorContactInfoSection = (props) => {
  return (
    <div className="location-details-v2 bg-[#FFF3D3] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px]  py-16 md:py-20 lg:py-28 3xl:py-32  relative">
      <div className="max-w-[800px] mx-auto  relative z-30 px-4">
        <div className="text-center mb-12">
          <h3 className="golden-text text-2xl uppercase md:text-[40px] lg:text-[44px] font-os font-bold mb-2 lg:mb-4">
           PHONE & EMAIL
          </h3>
          <p className="text-gray-700 lg:text-lg">
          Have a question or need help planning your visit? Use the contact form above, or reach out directly by email or phone for any other inquiries.
          </p>
        </div>
        <div className="c-form-info flex flex-col sm:flex-row sm:flex-nowrap sm:justify-between sm:space-x-2 md:space-x-3 lg:space-x-5">
          <div className="c-contact-info-list sm:w-[48%]">
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-t border-b border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">
                PHONE
              </h4>
              <a
                href={"tel:" + props.contactData.phone}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.phone}
              </a>
            </div>
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg uppercase">
                FRANCHISING
              </h4>
              <a
                href={"mailto:" + props.contactData.franchiseEmail}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.franchiseEmail}
              </a>
            </div>
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg uppercase">
                SALES
              </h4>
              <a
                href={"mailto:" + props.contactData.salesEmail}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.salesEmail}
              </a>
            </div>
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">
                CUSTOMER SERVICE
              </h4>
              <a
                href={"mailto:" + props.contactData.supportEmail}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.supportEmail}
              </a>
            </div>
          </div>
          <div className="c-contact-info-list sm:w-[48%]">
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b  sm:border-t  border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">
                OPERATIONS
              </h4>
              <a
                href={"mailto:" + props.contactData.operationEmail}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.operationEmail}
              </a>
            </div>
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg  uppercase">
                CAREERS
              </h4>
              <a
                href={"mailto:" + props.contactData.careersEmail}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.careersEmail}
              </a>
            </div>
            <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
              <h4 className="inline-block underline underline-offset-4 text-[#A78849] font-medium text-lg uppercase">
                BILLING
              </h4>
              <a
                href={"mailto:" + props.contactData.billingEmail}
                className="text-lg text-[#232323] block hover:text-red-700"
              >
                {props.contactData.billingEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorContactInfoSection;
