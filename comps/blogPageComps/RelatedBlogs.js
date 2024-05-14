import NewBlogCards from "./NewBlogCards";
const RelatedBlogs = (props) => {
  return (
    <div id="related-blog" className="bg-[#FFFCEB] ">
      <div className="max-w-[1060px] mx-auto px-4 pt-10 pb-16 md:py-16">
        <div className="blog-cat-title">
          <h3 className="font-medium font-os  text-2xl lg:3xl text-[#4E4D4B] uppercase">
            More Blog Posts Like This
          </h3>
        </div>
        <div className="all-bl-card-box mt-4 grid sm:grid-cols-2 gap-y-4 gap-x-0 sm:gap-4 md:gap-6 lg:gap-10">
          <NewBlogCards blogdata={props.relatedblogdata} />
        </div>
      </div>
    </div>
  );
};
export default RelatedBlogs;
