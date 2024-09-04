const JobTraits = (props) => {
  return (
    <div className="job-traits">
      <h3 className="text-xl md:text-2xl font-os text-[#111111] ">
        DESIRED TRAITS
      </h3>
      <div className="abt-trait mt-4 md:mt-6 lg:mt-6 text-lg">
        <div
          className="lg:text-lg text-[#464646] mt-3 md:mt-3 lg:mt-4"
          dangerouslySetInnerHTML={{ __html: props.desiredTraits }}
        ></div>
      </div>
    </div>
  );
};

export default JobTraits;
