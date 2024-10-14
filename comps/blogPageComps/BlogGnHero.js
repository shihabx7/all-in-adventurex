import LocationBtn from "../util/LocationBtn";

const BlogGnHero = (props) => {
  return (
    <div
      className="bl-hero"
      style={{
        background: "url('" + props.pagedata.coverimageL + "')",
      }}
    >
      <div className="home-hero-holder ">
        <div className="max-w-7xl  mx-auto px-4 pt-16 pb-16 md:py-20 lg:py-24 relative z-20">
          <div className="page-benar-info">
            <h1 className="text-[#38290A] font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8 font-os uppercase max-w-[1000px] mx-auto">
              {props.pagedata.pagetitle}
            </h1>
            <div className="max-w-md mx-auto mt-4 md:mt-8 ">
              {/*============location search btn==========*/}
              <LocationBtn
                borderbg="bg-red-600"
                borderbghover="bg-red-900"
                innerbg="bg-white"
                innerborder="border-white"
                innerbghover="bg-grey-200"
                innerborderhover="border-gray-200"
                color="text-black"
              />
              {/*============location search btn==========*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGnHero;
