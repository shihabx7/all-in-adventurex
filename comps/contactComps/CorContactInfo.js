const CorContactInfo = (props) => {
  return (
    <div className="c-form-info">
      <h3 className="golden-text font-os font-bold mt-8 md:mt-0 text-xl lg:text-2xl mb-2 lg:mb-4">
        OUR FACILITIES
      </h3>
      <p className="text-gray-700 lg:text-lg">
        All escape rooms are completely private - for your players only! We
        provide an entire party with the opportunity to celebrate in a fun and
        unique way. Come join us to create exciting memories with your group.
      </p>
      <div className="c-contact-info-list mt-6 lg:mt-8 ">
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
        <div className="c-contact-item pl-2 md:pl-6 lg:pl-8 py-2 lg:py-3 border-b border-[#D2C6AA]">
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
  );
};

export default CorContactInfo;
