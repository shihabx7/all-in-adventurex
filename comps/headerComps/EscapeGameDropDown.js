import Link from "next/link";
import { ImPlay3 } from "react-icons/im";

const EscapeGameDropDown = (props) => {
  return (
    <>
      {props.escapeGameSlugList.map((escapeGame) => {
        return (
          <div key={escapeGame.id}>
            {props.locationSlug ? (
              <a
                href={
                  "/" +
                  props.locationSlug +
                  "/activities/" +
                  escapeGame.activitySlug
                }
                className="flex items-center space-x-1 my-1"
              >
                <span className="text-gold">
                  <ImPlay3 />
                </span>
                <span className="sub-link-txt-sub">
                  {escapeGame.activityName}
                </span>
              </a>
            ) : (
              <a
                href={"/activities/" + escapeGame.activitySlug}
                className="flex items-center space-x-1 my-1"
              >
                <span className="text-gold">
                  <ImPlay3 />
                </span>
                <span className="sub-link-txt-sub">
                  {escapeGame.activitySlug == "toymakers-workshop"
                    ? "Toymakers Workshop - For Kids"
                    : escapeGame.activityName}
                </span>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default EscapeGameDropDown;
