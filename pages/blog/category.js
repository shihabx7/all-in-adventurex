import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FiChevronRight } from "react-icons/fi";
import Seofields from "../../comps/util/SeoFields";
import { catPageData } from "../api/blog/getAllcatSlug";
import BlogGnHero from "../../comps/blogPageComps/BlogGnHero";
import BlogCat from "../../comps/blogPageComps/BlogCat";
import BlogCards from "../../comps/blogPageComps/BlogCards";
import AllCatBlogs from "../../comps/blogPageComps/AllCatBlogs";

const blogcat = (props) => {
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

  return (
    <>
      {/* =======header content======== */}
      <Seofields meta={props.pagemeta} />
      <Homenav
        locationlist={props.locationlist}
        activitylist={props.activitylist}
        eventlist={props.eventlist}
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
          <BlogCat blogcat={props.blogcat} />
          {props.catfound && (
            <>
              <AllCatBlogs
                blogdata={props.blogdata}
                blogcat={props.pagedata.catslug}
                catname={props.pagedata.catname}
              />
            </>
          )}
          {!props.catfound && (
            <>
              <h1>Not Found</h1>
            </>
          )}
          {/* <RecentBlogs blogdata={props.recentblogs}/> */}
          {/*<PopularBlogs blogdata={props.popularblogs}/>*/}
          {/*<AllBlogs  blogdata={props.allblogs}/>*/}
        </div>
      </div>

      <Footer
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default blogcat;
export const getServerSideProps = async (context) => {
  const category = context.query.category;

  console.log(category);
  if (!category) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }
  const singlecatBlogData = await catPageData(category);
  // const bl = await getRelatedBlogs(context.params.blogSlug);

  return {
    props: {
      pagemeta: singlecatBlogData.pagemeta,
      pagedata: singlecatBlogData.pagedata,

      catfound: singlecatBlogData.catfound,
      blogdata: singlecatBlogData.catblog,
      blogcat: singlecatBlogData.blogcat,
      locationlist: singlecatBlogData.locationlist,
      activitylist: singlecatBlogData.activitylistSlug,
      eventlist: singlecatBlogData.eventlistSlug,
      // relblog: bl,
    },
  };
};
