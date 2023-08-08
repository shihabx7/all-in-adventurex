import { getTotal } from "../AllDataList/getTotal";
import { recentBlogs, popularBlogs, homeAllBlogs } from "./getSingleBlogData";
import { getAllcatSlug } from "./getAllcatSlug";

export const getBlogHomePageData = () => {
  const blogHomePageData = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,
    virtualgameListSlug: getTotal().virtualgameSlug,
    pagemeta: {
      title: "Blogs | All In Adventures | Formerly Mystery Room",
      description:
        "We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
      keywords:
        "escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
      url: "/careers",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
    },

    pagedata: {
      pagetitle: "ALL IN ADVENTURES BLOG",
      pagesubtitle:
        "Passion led us here! We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. We love our awesome team! Join us.",
      coverimageL: "/assets/blogs/blog-bg-l.jpg",
      coverimageM: "/assets/blogs/blog-bg-m.jpg",
      totalLocations: getTotal().totalLocations,
    },

    recentblogs: recentBlogs(),
    popularblogs: popularBlogs(),
    allblogs: homeAllBlogs(),
    blogcat: [
      {
        id: "1",
        cat: "Escape Room",
        slug: "escape-room",
      },
      {
        id: "2",
        cat: "Events & Parties",
        slug: "event-and-parties",
      },
      {
        id: "3",
        cat: "Things To Do",
        slug: "thingd-to-do",
      },

      {
        id: "4",
        cat: "Tips & Tricks",
        slug: "tips-and-tricks",
      },
      {
        id: "5",
        cat: "Franchise",
        slug: "franchise",
      },
    ],
    blogcat: getAllcatSlug(),
  };

  return blogHomePageData;
};
