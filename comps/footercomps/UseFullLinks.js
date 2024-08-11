import Link from "next/link";
const UseFullLinks = (props) => {
  return (
    <>
      {" "}
      <h3 className="golden-text text-2xl font-bold text-center">
        USEFUL LINKS
      </h3>
      <div className="usefull-link-box block text-center md:flex flex-wrap  space-x-2 md:space-x-3 lg:space-x-4 justify-center items-center py-4 pb-0 md:py-6 lg:py-8">
        {/*===========all locations===============*/}
        <div className="usefull-link  inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          <a href="/locations" className="text-gray-400  text-sm  lg:text-base">
            All Locations
          </a>
        </div>
        <div className="hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========all Escape Games===============*/}
        <div className="usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          {props.locationSlug ? (
            <a
              href={"/" + props.locationSlug + "/activities"}
              className="text-gray-400 text-sm  lg:text-base"
            >
              Escape Games
            </a>
          ) : (
            <a
              href="/activities"
              className="text-gray-400 text-sm  lg:text-base"
            >
              Escape Games
            </a>
          )}
        </div>
        <div className="hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========all events===============*/}
        <div className="usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          {props.locationSlug ? (
            <a
              href={"/" + props.locationSlug + "/events"}
              className="text-gray-400 text-sm  lg:text-base"
            >
              Events and Parites
            </a>
          ) : (
            <a href="/events" className="text-gray-400 text-sm  lg:text-base">
              Events and Parties
            </a>
          )}
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========all Other Games===============*/}
        <div className="usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          {props.locationSlug ? (
            <a
              href={
                "/" + props.locationSlug + "/activities#others-physical-games"
              }
              className="text-gray-400 text-sm  lg:text-base"
            >
              Others Games
            </a>
          ) : (
            <a
              href="/activities#others-physical-games"
              className="text-gray-400 text-sm  lg:text-base"
            >
              Other Games
            </a>
          )}
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*=========== gift cards page===============*/}
        <div className="usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          {props.locationSlug ? (
            <a
              href={"/" + props.locationSlug + "/gift-cards"}
              className="text-gray-400 text-sm  lg:text-base"
            >
              Gift Cards
            </a>
          ) : (
            <a
              href="/gift-cards"
              className="text-gray-400 text-sm  lg:text-base"
            >
              Gift Cards
            </a>
          )}
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*=========== testimonials page===============*/}
        <div className="usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          <a
            href="/testimonials"
            className="text-gray-400 text-sm  lg:text-base"
          >
            Testimonials
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*=========== gallery page===============*/}
        <div className="usefull-link inline-block px-3 md:px-0 py-1 md:py-2 lg:py-2">
          <a href="/gallery" className="text-gray-400 text-sm  lg:text-base">
            Gallery
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========Rewards Program===============*/}

        {/*===========Pricing===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/pricing" className="text-gray-400 text-sm  lg:text-base">
            Pricing
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*=========== Deals and Coupons===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a
            href="/deals-coupons"
            className="text-gray-400 text-sm  lg:text-base"
          >
            Deals and Coupons
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========Blog===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/blog" className="text-gray-400 text-sm  lg:text-base">
            Blog
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========FAQs===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/faqs" className="text-gray-400 text-sm  lg:text-base">
            FAQs
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========  Covid-19===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/covid-19" className="text-gray-400 text-sm  lg:text-base">
            Covid-19
          </a>
        </div>

        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========  About===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/about" className="text-gray-400 text-sm  lg:text-base">
            About
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========  Rebranding===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a
            href="/mystery-room-rebranding"
            className="text-gray-400 text-sm  lg:text-base"
          >
            Rebranding
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========   What is an Escape Room===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a
            href="/what-is-an-escape-room"
            className="text-gray-400 text-sm  lg:text-base"
          >
            What is an Escape Room
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========   Careers===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/careers" className="text-gray-400 text-sm  lg:text-base">
            Careers
          </a>
        </div>

        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========   Franchise===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a href="/franchise" className="text-gray-400 text-sm  lg:text-base">
            Franchise
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========   Volunteering===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a
            href="/volunteering"
            className="text-gray-400 text-sm  lg:text-base"
          >
            Volunteering
          </a>
        </div>
        <div className=" hidden lg:block text-gray-400 text-2xl">
          <span className="block w-1 h-1 rounded-full bg-gray-400"></span>
        </div>
        {/*===========   Corporate Contact===============*/}
        <div className="usefull-link inline-block px-3 md:px-0  py-1 md:py-2 lg:py-2">
          <a
            href="/corporate-contact"
            className="text-gray-400 text-sm  lg:text-base"
          >
            Corporate Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default UseFullLinks;
