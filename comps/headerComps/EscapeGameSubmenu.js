import Link from "next/link";
import { ImPlay3 } from "react-icons/im";

const EscapeGameSubmenu = (props) => {
  //console.log(props)

  return (
    <>
      {props.locationslug && (
        <>
          {props.activitylist.map((activity) => {
            return (
              activity.category == "escapegame" && (
                <div key={activity.id}>
                  <a
                    href={
                      "/" +
                      props.locationslug +
                      "/activities/" +
                      activity.activity_slug
                    }
                    className="flex items-center space-x-1 my-1"
                  >
                    <span className="text-gold">
                      <ImPlay3 />
                    </span>
                    <span className="sub-link-txt-sub">
                      {activity.activity_slug=="toymakers-workshop"?activity.activity_name:"Toymakers Workshop - For Kids"}
                    </span>
                  </a>
                </div>
              )
            );
          })}
        </>
      )}
      {!props.locationslug && props.activitylist && (
        <>
          {props.activitylist.map((activity) => {
            return (
              activity.category == "escapegame" && (
                <div key={activity.id}>
                  <a
                    href={"/activities/" + activity.activity_slug}
                    className="flex items-center space-x-1 my-1"
                  >
                    <span className="text-gold">
                      <ImPlay3 />
                    </span>
                    <span className="sub-link-txt-sub">
                      {activity.activity_name}
                    </span>
                  </a>
                </div>
              )
            );
          })}
        </>
      )}

      {!props.locationslug && !props.activitylist && (
        <>
          <a
            href="/activities/escape-from-alcatraz"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Escape From Alcatraz</span>
          </a>

          <a
            href="/activities/treasure-island"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Treasure Island</span>
          </a>

          <a
            href="/activities/superheros-adventure"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Superhero's Adventure</span>
          </a>

          <a
            href="/activities/zombie-apocalypse"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub ">Zombie Apocalypse</span>
          </a>

          <a
            href="/activities/special-agent"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Special Agent</span>
          </a>

          <a
            href="/activities/hollywood-premiere"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Hollywood Premiere</span>
          </a>

          <a
            href="/activities/sherlocks-library"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Sherlocks Library</span>
          </a>

          <a
            href="/activities/houdinis-magic-cell"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Houdini's Magic Cell</span>
          </a>

          <a
            href="/activities/black-ops"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Black Ops</span>
          </a>

          <a
            href="/activities/lost-in-the-jungle"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Lost In The Jungle</span>
          </a>
          <a
            href="/activities/locked-in-the-lift"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Locked In The Lift</span>
          </a>

          <a
            href="/activities/wizarding-school"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Wizarding School</span>
          </a>

          <a
            href="/activities/magic-castle"
            className="flex items-center space-x-1 my-1"
          >
            <span className="text-gold">
              <ImPlay3 />
            </span>
            <span className="sub-link-txt-sub">Magic Castle</span>
          </a>
        </>
      )}
    </>
  );
};

export default EscapeGameSubmenu;
