const StaticLinkLeft = () => {
  return (
    <div className="left-static-map">
      <ul className="site-map-link-group list-disc">
        <li className="my-2">
          <a
            href="/"
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            Home
          </a>
        </li>
        <li className="my-2 ">
          <a
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
            href="/find-your-photo"
          >
            Find Your Photo
          </a>
        </li>
        <li className="my-2 ">
          <a
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
            href="/gift-cards"
          >
            Gift Cards
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StaticLinkLeft;
