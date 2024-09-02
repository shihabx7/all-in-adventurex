const AllBlogCategoryLink = (props) => {
  return (
    <>
      <ul className="site-map-link-group list-disc pl-4 md:pl-8">
        <li className="my-2">
          <a
            href={"/blog"}
            className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
          >
            {"Category"}
          </a>
        </li>
        <ul className="site-map-link-group list-disc pl-4 md:pl-8">
          {props.blogCategoryList.map((cat, index) => {
            return (
              <li key={index + 1} className="my-2">
                <a
                  href={"/blog/category/" + cat.attributes.categorySlug}
                  className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
                >
                  {cat.attributes.categoryName}
                </a>
              </li>
            );
          })}
        </ul>
      </ul>
    </>
  );
};

export default AllBlogCategoryLink;
