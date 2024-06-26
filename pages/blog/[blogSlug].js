// import data
import getBlogSlugs from "../api/blog/getBlogSlugs";
import { getSingleBlogData } from "../api/blog/getSingleBlogData";
// import header footer component

import Homenav from "../../comps/Homenav";
import Footer from "../../comps/Footer";

import BlogBreadCrumbs from "../../comps/blogPageComps/BlogBreadCrumbs";
import BlogPostSeo from "../../comps/blogPageComps/BlogPostSeo";
import SingleBlogHero from "../../comps/blogPageComps/SingleBlogHero";
import BlogInfo from "../../comps/blogPageComps/BlogInfo";
import SingleBlogContent from "../../comps/blogPageComps/SingleBlogContent";
import BlogSideBar from "../../comps/blogPageComps/BlogSideBar";
import RelatedBlogs from "../../comps/blogPageComps/RelatedBlogs";
import { useEffect, useState } from "react";

const SingleBlog = (props) => {
  const [blpadding, setBlpadding] = useState("100px");

  useEffect(() => {
    const blpadel = document.querySelector("#sbl-content");
    const ftimgheight = document.querySelector("#sbl-ftimg").offsetHeight;

    const pt = Math.floor(ftimgheight / 2) + "px";
    setBlpadding(pt);
  }, []);

  return (
    <>
      {/* =======header content======== */}
      <BlogPostSeo meta={props.pagemeta} />
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
        <BlogBreadCrumbs />

        {/* =======breadcum content and breadcum root page template======== end */}

        <SingleBlogHero
          pagedata={props.pagedata}
          facebookMeta={props.pagemeta.facebookMeta}
          twitterMeta={props.pagemeta.twitterMeta}
        />

        {/* =========================================================================================main content ======== end */}
      </div>
      {/*=========================== blog content area===================*/}
      <div className="single-blog-content-holder bg-[#FFFCEB] ">
        <div
          id="sbl-content-box"
          className="blog-container max-w-[1060px] mx-auto px-4 "
        >
          <div className="flex sbl-content flex-col md:flex-row justify-between space-x-0 space-y-2 md:space-y-0 md:space-x-8 lg:space-x-12">
            <div className="sbl-main pb-0 md:pb-12 md:border-b md:border-[#c4c4c4]">
              <BlogInfo bloginfo={props.bloginfo} />
              <SingleBlogContent
                blogdesc={props.blogdesc}
                pagedata={props.pagedata}
              />
            </div>
            <div className="sbl-sidebar pb-12 md:pb-0 border-b border-[#c4c4c4] md:border-none md:border-transparent md:h-screen md:sticky md:top-10">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </div>
      {/*===========================related blog area===================*/}
      {props.relatedblogdata && (
        <>
          <RelatedBlogs relatedblogdata={props.relatedblogdata} />
        </>
      )}

      <Footer
        locationlist={props.locationlist}
        totallocations={props.pagedata.totalLocations}
      />
    </>
  );
};

export default SingleBlog;

export const getStaticPaths = async () => {
  const res = await getBlogSlugs();

  const paths = res.map((blogslug) => {
    return {
      params: { blogSlug: blogslug.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const singleBlogData = await getSingleBlogData(context.params.blogSlug);

  return {
    props: {
      pagemeta: singleBlogData.pagemeta,
      pagedata: singleBlogData.pagedata,
      bloginfo: singleBlogData.bloginfo,
      blogdesc: singleBlogData.blogdesc,
      relatedblogdata: singleBlogData.relatedblogdata,
      locationlist: singleBlogData.locationlist,
      activitylist: singleBlogData.activitylistSlug,
      eventlist: singleBlogData.eventlistSlug,
    },
    revalidate: 30,
  };
};
