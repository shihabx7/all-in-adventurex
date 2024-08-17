import getBlogCategorySlugs from "../../api/blog/getBlogCategorySlugs";
import { getBlogCategoryData } from "../../api/blog/getBlogCategoryData";
import RootFooter from "../../../comps/RootFooter";
import RootNav from "../../../comps/RootNav";

import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";

import BlogGnHero from "../../../comps/blogPageComps/BlogGnHero";
import BlogCat from "../../../comps/blogPageComps/BlogCat";
import BlogPostSeo from "../../../comps/blogPageComps/BlogPostSeo";
import AllCatBlogs from "../../../comps/blogPageComps/AllCatBlogs";
const toTitleCase = (title) => {
  const titlefres = title.replace(/-/g, " ");
  const btitle = titlefres
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" "); // breadcum title capitalize

  return (
    <div className="bitem flex items-center">
      <span>{btitle}</span>{" "}
      <span className="bsep text-gold">
        <FiChevronRight />
      </span>
    </div>
  );
};
/* customizing breadcum */

const BlogCateory = (props) => {
  return (
    <>
      {/* =======header content======== */}
      <BlogPostSeo meta={props.pagemeta} />
      <RootNav
        locationSlugList={props.locationSlugList}
        escapeGameSlugList={props.escapeGameSlugList}
        otherGameSlugList={props.otherGameSlugList}
        eventSlugList={props.eventSlugList}
      />
      {/* =======header content ======== end */}

      {/* =========================================================================================main content ======== end */}
      <div
        id="mainContent"
        className="main-content nobtn-main-content bg-center"
        style={{ backgroundImage: "url('/assets/game-dt-bg.jpg')" }}
      >
        {/* =======breadcum content and breadcum========  */}
        <div className="breadcums  py-1 md:py-2 bg-[#fffceb]">
          <Breadcrumbs
            replaceCharacterList={[{ from: "-", to: " " }]}
            listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg"
            inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700"
            activeItemClassName="inline-block text-[#212121]"
            rootLabel="home"
            transformLabel={(title) => {
              return toTitleCase(title);
            }}
          ></Breadcrumbs>
        </div>

        {/* =======breadcum content and breadcum root page template======== end */}
        <BlogGnHero pagedata={props.pagedata} />

        {/* =========================================================================================main content ======== end */}
      </div>
      <div className="blog-content bg-[#FFFCEB]">
        <div className="blog-container max-w-[1170px] mx-auto px-4 pt-4 md:pt-8">
          <BlogCat blogcat={props.blogcat} categorySlug={props.categorySlug} />

          <AllCatBlogs
            blogdata={props.allblogs}
            categorySlug={props.categorySlug}
            categoryName={props.categoryName}
            ismoreblog={props.ismoreblog}
          />
        </div>
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};
export default BlogCateory;

export const getStaticPaths = async () => {
  const res = await getBlogCategorySlugs();

  const paths = res.map((blogCategorySlug) => {
    return {
      params: { categorySlug: blogCategorySlug.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const blogCategoryData = await getBlogCategoryData(
    context.params.categorySlug
  );

  return {
    props: {
      locationSlugList: blogCategoryData.locationSlugList,
      escapeGameSlugList: blogCategoryData.escapeGameSlugList,
      otherGameSlugList: blogCategoryData.otherGameSlugList,
      eventSlugList: blogCategoryData.eventSlugList,
      totalLocations: blogCategoryData.totalLocations,
      pagedata: blogCategoryData.pagedata,
      pagemeta: blogCategoryData.pagemeta,

      categorySlug: blogCategoryData.categorySlug,
      categoryName: blogCategoryData.categoryName,
      allblogs: blogCategoryData.allblogs,
      ismoreblog: blogCategoryData.ismoreblog,
      blogcat: blogCategoryData.blogcat,
    },
    revalidate: 12,
  };
};
