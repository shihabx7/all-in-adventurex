import RootNav from "../../comps/RootNav";
import RootFooter from "../../comps/RootFooter";
import PageBread from "../../comps/util/PageBread";
import { FiChevronRight } from "react-icons/fi";
import BlogPostSeo from "../../comps/blogPageComps/BlogPostSeo";
import { getBlogHomePageData } from "../api/blog/getBlogHomePageData";
import BlogGnHero from "../../comps/blogPageComps/BlogGnHero";
import BlogCat from "../../comps/blogPageComps/BlogCat";

import RecentBlogs from "../../comps/blogPageComps/RecentBlogs";
import PopularBlogs from "../../comps/blogPageComps/PopularBlogs";
import AllBlogs from "../../comps/blogPageComps/AllBlogs";
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

const Blogs = (props) => {
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
        <PageBread />

        {/* =======breadcum content and breadcum root page template======== end */}
        <BlogGnHero pagedata={props.pagedata} />

        {/* =========================================================================================main content ======== end */}
      </div>
      <div className="blog-content bg-[#FFFCEB]">
        <div className="blog-container max-w-[1170px] mx-auto px-4 pt-4 md:pt-8">
          <BlogCat blogcat={props.blogcat} />
          <RecentBlogs blogdata={props.recentblogs} />
          <PopularBlogs blogdata={props.popularblogs} />
          <AllBlogs blogdata={props.allblogs} />
        </div>
      </div>

      <RootFooter
        locationSlugList={props.locationSlugList}
        totalLocations={props.totalLocations}
      />
    </>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const DATA = await getBlogHomePageData();

  // console.log(bPageData);

  return {
    props: {
      locationSlugList: DATA.locationSlugList,
      escapeGameSlugList: DATA.escapeGameSlugList,
      otherGameSlugList: DATA.otherGameSlugList,
      eventSlugList: DATA.eventSlugList,
      totalLocations: DATA.totalLocations,

      pagedata: DATA.pagedata,
      pagemeta: DATA.pagemeta,

      recentblogs: DATA.recentblogs,
      popularblogs: DATA.popularblogs,
      allblogs: DATA.allblogs,
      blogcat: DATA.blogcat,
    },
    revalidate: 30,
  };
};
