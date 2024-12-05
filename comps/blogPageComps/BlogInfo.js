import Image from "next/image";
const BlogInfo = (props) => {
  return (
    <div className="sbl-info pb-4 pt-4 md:pt-10">
      <div className="sbl-info-up flex items-center space-x-4">
        <div className="sbl-auth-img max-w-[36px]">
          <img
            src={props.bloginfo.authimg}
            alt={props.bloginfo.authimgAlt}
          ></img>
        </div>
        <div className="sbl-auth-name flex space-x-2 items-center text-[#818181] text-[14px] md:text-[16px]">
          <p>by {props.bloginfo.authname}</p>
          <div className="mx-1 w-[3px] h-[3px] rounded-full bg-[#818181]"></div>
          <div>{props.bloginfo.lastupdate}</div>
        </div>
      </div>
      <div className="blog-item-cat flex items-center">
        {props.bloginfo.blogcategory.map((cat, index) => {
          return (
            <div key={cat.id} className=" flex items-center">
              <a
                className="text-[#CA9342] font-medium text-[14px] md:text-[16px]"
                href={"/blog/category/" + cat.slug}
              >
                {cat.name}
              </a>
              {index < props.bloginfo.blogcategory.length - 1 && (
                <div className="mx-1 w-[3px] h-[3px] rounded-full bg-[#CA9342]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BlogInfo;
