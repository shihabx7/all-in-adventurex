const AllEscapeRoomsLink = (props) => {
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
                ? "/" + props.locationSlug + "/activities"
                : "/activities"
            }
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Escape Rooms
          </a>
        </li>
      </ul>
      <ul className="site-map-link-group list-disc pl-4 md:pl-8">
        {props.escapeGameSlugList.map((game, index) => {
          return (
            <li key={index} className="my-2">
              <a
                href={
                  props.locationSlug
                    ? "/" +
                      props.locationSlug +
                      "/activities/" +
                      game.activitySlug
                    : "/activities/" + game.activitySlug
                }
                className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
              >
                {game.activityName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllEscapeRoomsLink;
