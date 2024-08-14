import { FaAngleRight } from "react-icons/fa";

const FooterLocMenu = (props) => {
  return (
    <div className="footer-location-link-mess">
      {/*========================================= footer location column 1================ */}
      <div className="footer-loc-col-mess w-full md:w-auto">
        {props.locationSlugList.map((loc) => {
          return (
            <div key={loc.id} className="footer-loc-col-box-mess mb-4">
              <div className="footer-loc-head">
                <h3 className="text-lg md:text-xl golden-text pb-1 border-b border-dark-gold inline-block font-bold">
                  {loc.stateName}
                </h3>
              </div>
              {loc.locations.map((item) => {
                return (
                  <div key={loc.id + item.id} className="footer-loc-link-box ">
                    <a
                      href={"/locations/" + item.locationSlug}
                      className="footer-link  underline-offset-4  my-2 text-sm lg:text-base inline-block"
                    >
                      <div className="flex space-x-1 items-center">
                        <span>{item.locationName}</span>
                        <span>
                          <FaAngleRight />
                        </span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/*========================================= footer location column 1 end================ */}
    </div>
  );
};

export default FooterLocMenu;
