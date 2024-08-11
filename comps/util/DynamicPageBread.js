import { FiChevronRight } from "react-icons/fi";

const DynamicPageBread = (props) => {
  return (
    <div className="breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]">
      <div className="new-brd max-w-7xl mx-auto px-2 md:px-4 flex items-center space-x-.5">
        <a
          href={"/locations/" + props.locationSlug}
          className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700"
        >
          {props.locationName}
          <span className="bsep text-gold">
            <FiChevronRight />
          </span>
        </a>

        {props.activitySlug ? (
          <>
            <a
              href={"/" + props.locationSlug + "/activities"}
              className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700"
            >
              Activities
              <span className="bsep text-gold">
                <FiChevronRight />
              </span>
            </a>
            <a
              href={
                "/" + props.locationSlug + "/activities/" + props.activitySlug
              }
              className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#111111] "
            >
              {props.activityName}
            </a>
          </>
        ) : (
          ""
        )}
        {props.eventSlug ? (
          <>
            <a
              href={"/" + props.locationSlug + "/events"}
              className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#6a6a6a] hover:text-red-700"
            >
              Events
              <span className="bsep text-gold">
                <FiChevronRight />
              </span>
            </a>
            <a
              href={"/" + props.locationslug + "/events/" + props.eventSlug}
              className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#111111] "
            >
              {props.eventName}
            </a>
          </>
        ) : (
          ""
        )}
        {props.activeSlug ? (
          <a
            href={"/" + props.locationSlug + "/" + props.activeSlug}
            className="capitalize flex items-center text-sm md:text-base lg:text-lg text-[#111111] "
          >
            {props.activeLabel}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DynamicPageBread;
