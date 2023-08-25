import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import BlogCards from "./BlogCards";

const AllCatBlogs = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([]);
  const [success, setsuccess] = useState(0);

  const fetchData = async () => {
    let url =
      "/api/blog/getOldCatBlogs/?id=" +
      currentPage +
      "&category=" +
      props.blogcat;
    const req = await fetch(url, { method: "GET" });
    const newBlogs = await req.json();

    if (!newBlogs.success || newBlogs.blogs.length < 1) {
      return setsuccess(1);
    }
    setsuccess(2);
    let contactedata = blogData.concat(newBlogs.blogs);
    return setBlogData(contactedata);
  };
  const showMore = (event) => {
    event.preventDefault();
    fetchData();
    setCurrentPage(currentPage + 1);
    setsuccess(0);

    console.log(blogData);
  };

  return (
    <div className="bl-arc-row pb-16">
      <div className="blog-cat-title">
        <h3 className="font-medium font-os text-xl md:text-2xl xl:text-3xl text-[#232323] uppercase">
          {props.catname}
        </h3>
      </div>
      <div className="all-bl-card-box mt-4 grid sm:grid-cols-2 gap-y-4 gap-x-0 sm:gap-4 md:gap-6 lg:gap-10">
        {props.blogdata.length > 0 && (
          <>
            <BlogCards blogdata={props.blogdata} />
          </>
        )}
        {props.blogdata.length == 0 && (
          <>
            <p className="text-2xl font-medium py-10">No Blog Found</p>
          </>
        )}
      </div>

      {success != 1 && props.blogdata.length > 8 && (
        <div className="show-more-blog flex justify-center mt-8">
          <button
            className="flex space-x-1 text-red-600 hover:text-700 font-medium text-lg lg:text-xl items-center"
            onClick={showMore}
          >
            Load more
            <FiChevronDown />
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCatBlogs;
