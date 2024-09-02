import AllEscapeRoomsLink from "./AllEscapeRoomsLink";
import AllOtherGamesLink from "./AllOtherGamesLink";
import AllEventsLink from "./AllEventsLink";
const AllLocationsLink = (props) => {
  return (
    <div className="left-static-map">
      <ul className="site-map-link-group list-disc">
        <li className="my-2">
          <a
            href="/locations"
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl font-medium"
          >
            Locations
          </a>
        </li>
      </ul>
      <ul className="site-map-link-group-2 list-disc pl-4 md:pl-8">
        {props.siteMapLocationsList.map((location, index) => {
          return (
            <div key={index}>
              <li className="my-2">
                <a
                  href={"/locations/" + location.locationSlug}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  {location.locationName}
                </a>
              </li>
              <ul className="site-map-link-group-2 list-disc pl-4 md:pl-8">
                <li className="my-2">
                  <a
                    href={"/" + location.locationSlug + "/gift-cards"}
                    className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                  >
                    Gift Cards
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href={"/" + location.locationSlug + "/contact-store"}
                    className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                  >
                    Contact Store
                  </a>
                </li>
              </ul>
              {location.escapeGameSlugList.hasGames ? (
                <AllEscapeRoomsLink
                  locationSlug={location.locationSlug}
                  escapeGameSlugList={location.escapeGameSlugList.gameList}
                />
              ) : (
                <></>
              )}
              {location.otherGameSlugList.hasGames ? (
                <AllOtherGamesLink
                  locationSlug={location.locationSlug}
                  otherGameSlugList={location.otherGameSlugList.gameList}
                />
              ) : (
                <></>
              )}
              <AllEventsLink
                locationSlug={location.locationSlug}
                eventSlugList={location.eventSlugList}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AllLocationsLink;
