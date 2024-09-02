const CareersLink = (props) => {
  return (
    <ul className="site-map-link-group list-disc pl-4 md:pl-8">
      {props.careersLinkList.map((career, index) => {
        return (
          <li key={index + 1} className="my-2">
            <a
              href={"/careers/" + career.jobSlug}
              className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
            >
              {career.jobName}
            </a>
          </li>
        );
      })}
      <li className="my-2">
        <a
          href={"/careers/apply"}
          className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
        >
          Employment Application
        </a>
      </li>
    </ul>
  );
};

export default CareersLink;
