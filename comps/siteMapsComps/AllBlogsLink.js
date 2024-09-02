const AllBlogsLink = (props) => {
  return (
    <ul className="site-map-link-group list-disc pl-4 md:pl-8">
      {props.blogLinkList.map((blog, index) => {
        return (
          <li key={index + 1} className="my-2">
            <a
              href={"/blog/" + blog.attributes.slug}
              className="site-link text-[#1a1a1a] hover:text-red-700 md:text-lg xl:text-xl"
            >
              {blog.attributes.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default AllBlogsLink;
