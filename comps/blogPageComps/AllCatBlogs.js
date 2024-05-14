import { useState, useEffect } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import NewBlogCards from "./NewBlogCards";

const AllCatBlogs = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [catId, setCatId] = useState(props.catid);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const fetchData = async () => {
    let url =
      "/api/blog/getPrevCatBlogs/?pageId=" +
      currentPage +
      "&categorySlug=" +
      props.categorySlug;
    const req = await fetch(url, { method: "GET" });
    const newBlogs = await req.json();
    //console.log(newBlogs);

    if (!newBlogs.success) {
      setIsLoadMore(false);

      return false;
    }
    if (newBlogs.success && !newBlogs.loadmore) {
      let contactedBlog = blogData.concat(newBlogs.blogs);
      setBlogData(contactedBlog);
      setIsLoadMore(false);

      return false;
    } else {
      let contactedBlog = blogData.concat(newBlogs.blogs);
      setBlogData(contactedBlog);

      setIsLoadMore(true);
      return true;
    }
  };
  const showMore = async (event) => {
    event.preventDefault();
    setisLoading(true);
    const moreblogs = await fetchData();
    if (moreblogs) {
      setCurrentPage(currentPage + 1);
    }
    setisLoading(false);
    //console.log(blogData);
  };

  return (
    <div className="bl-arc-row pb-16">
      <div className="blog-cat-title">
        <h3 className="font-medium font-os text-xl md:text-2xl xl:text-3xl text-[#38290A] uppercase">
          {props.categoryName}
        </h3>
      </div>
      <div className="all-bl-card-box mt-4 grid sm:grid-cols-2 gap-y-4 gap-x-0 sm:gap-4 md:gap-6 lg:gap-10">
        {props.blogdata.length > 0 ? (
          <>
            <NewBlogCards blogdata={props.blogdata} />
          </>
        ) : (
          "NO BLOG POST FOUND"
        )}
        {blogData.length > 0 && (
          <>
            <NewBlogCards blogdata={blogData} />
          </>
        )}
      </div>

      {isLoading && (
        <div className="text-center text-xl font-medium my-6 md:my-8 lg:my-12 text-[#101010]">
          Loading...
        </div>
      )}
      {isLoadMore && props.blogdata.length > 3 && (
        <div className="show-more-blog flex justify-center my-6 md:my-8 lg:my-12">
          <button
            className="flex space-x-1 text-red-600 hover:text-700 font-medium text-xl lg:text-xl items-center"
            onClick={showMore}
          >
            {!isLoading && (
              <>
                Load more
                <FiChevronDown />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCatBlogs;
