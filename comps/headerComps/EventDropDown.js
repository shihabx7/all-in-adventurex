import { ImPlay3 } from "react-icons/im";

const EventDropDown = (props) => {
  return (
    <>
      {props.eventSlugList.map((event) => {
        return (
          <div key={event.id}>
            {props.locationSlug ? (
              <a
                href={"/" + props.locationSlug + "/events/" + event.eventSlug}
                className="flex items-center space-x-1 my-1"
              >
                <span className="text-gold">
                  <ImPlay3 />
                </span>
                <span className="sub-link-txt-sub">{event.eventName}</span>
              </a>
            ) : (
              <a
                href={"/events/" + event.eventSlug}
                className="flex items-center space-x-1 my-1"
              >
                <span className="text-gold">
                  <ImPlay3 />
                </span>
                <span className="sub-link-txt-sub">{event.eventName}</span>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default EventDropDown;
