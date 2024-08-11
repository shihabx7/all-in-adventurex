import Link from "next/link";
import { ImPlay3 } from "react-icons/im";

const OtherGameDropDown = (props) => {
  return (
    <>
      {props.otherGameSlugList.map((otherGame) => {
        return (
          <div key={otherGame.id}>
            {props.locationSlug ? (
              <a
                href={
                  "/" +
                  props.locationSlug +
                  "/activities/" +
                  otherGame.activitySlug
                }
                className="flex items-center space-x-1 my-1"
              >
                <span className="text-gold">
                  <ImPlay3 />
                </span>
                <span className="sub-link-txt-sub">
                  {otherGame.activityName}
                </span>
              </a>
            ) : (
              <a
                href={"/activities/" + otherGame.activitySlug}
                className="flex items-center space-x-1 my-1"
              >
                <span className="text-gold">
                  <ImPlay3 />
                </span>
                <span className="sub-link-txt-sub">
                  {otherGame.activityName}
                </span>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default OtherGameDropDown;
