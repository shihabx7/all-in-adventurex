import { getTotal } from "../AllDataList/getTotal";
import { getCatHomeBlogs } from "./getSingleBlogData";

export const getAllcatSlug = () => {
  return blogcat;
};

const otherCat = (catslug) => {
  let catkeys = Object.keys(blogCatData);
  let otCat = [];

  for (let i = 0; i < catkeys.length; i++) {
    let catobj = {
      id: i + 1,
      cat: blogCatData[catkeys[i]].cat,
      slug: blogCatData[catkeys[i]].slug,
    };
    otCat.push(catobj);
  }
  //console.log(otCat);
  return otCat;
};
const searchCat = (catslug) => {
  let keys = Object.keys(blogCatData);
  let found = keys.includes(catslug);
  return found;
};
export const catPageData = (slug) => {
  const catData = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,
    virtualgameListSlug: getTotal().virtualgameSlug,
    pagemeta: {
      title: searchCat(slug)
        ? blogCatData[slug].cat + " Blog | All In Adventures"
        : "Blog | All In Adventures",
      description:
        "We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
      keywords:
        "escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
      url: "/blog/category/?category=" + slug,
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
    },

    pagedata: {
      pagetitle: searchCat(slug)
        ? "ALL IN ADVENTURES " + blogCatData[slug].cat + " BLOG"
        : "ALL IN ADVENTURES BLOGS",
      pagesubtitle:
        "Passion led us here! We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. We love our awesome team! Join us.",
      coverimageL: "/assets/blogs/blog-bg-l.jpg",
      coverimageM: "/assets/blogs/blog-bg-m.jpg",
      totalLocations: getTotal().totalLocations,
      catslug: slug,
      catname: blogCatData[slug].cat,
    },
    blogcat: otherCat(slug),
    catfound: searchCat(slug),
    catblog: getCatHomeBlogs(slug),
  };

  return catData;
};

const blogcat = [
  {
    id: "1",
    cat: "Escape Room",
    slug: "escape-room",
  },
  {
    id: "2",
    cat: "Events & Parties",
    slug: "events-and-parties",
  },
  {
    id: "3",
    cat: "Things to Do",
    slug: "things-to-do",
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
];

const blogCatData = {
  "escape-room": {
    id: "1",
    cat: "Escape Room",
    slug: "escape-room",
  },
  "events-and-parties": {
    id: "2",
    cat: "Events & Parties",
    slug: "events-and-parties",
  },
  "things-to-do": {
    id: "3",
    cat: "Things to Do",
    slug: "things-to-do",
  },
  "tips-and-tricks": {
    id: "4",
    cat: "Tips & Tricks",
    slug: "tips-and-tricks",
  },
  franchise: {
    id: "5",
    cat: "Franchise",
    slug: "franchise",
  },
};
