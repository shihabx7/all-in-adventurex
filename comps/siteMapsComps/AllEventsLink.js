const AllEventsLink = (props) => {
  return (
    <div
      className={
        props.locationSlug ? "left-static-map pl-4 md:pl-8" : "left-static-map"
      }
    >
      <ul className="site-map-link-group list-disc">
        <li className="my-2">
          <a
            href={
              props.locationSlug
                ? "/" + props.locationSlug + "/events"
                : "/events"
            }
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Events and Parties
          </a>
        </li>
      </ul>
      <ul className="site-map-link-group list-disc pl-4 md:pl-8">
        {props.eventSlugList.map((event, index) => {
          return (
            <li key={index} className="my-2">
              <a
                href={
                  props.locationSlug
                    ? "/" + props.locationSlug + "/events/" + event.eventSlug
                    : "/events/" + event.eventSlug
                }
                className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
              >
                {event.eventName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllEventsLink;
