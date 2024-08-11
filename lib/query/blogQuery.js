const recentBlogFilter = "filters[isPopular][$eq]=false";
const popularBlogFilter = "filters[isPopular][$eq]=true";

const recentPgReq =
  "&pagination[page]=1&pagination[pageSize]=6&sort[1]=publishDate:desc";
const popularPgReq =
  "&pagination[page]=1&pagination[pageSize]=4&sort[1]=publishDate:desc";

const reqFieldsReq =
  "&fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=publishDate";
const ftImageReq =
  "&populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=url&populate[featuredImage][fields][3]=width&populate[featuredImage][fields][4]=height";

const authorReq =
  "&populate[blog_author][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][1]=alternativeText&populate[blog_author][populate][blogAuthorImage][fields][2]=url&populate[blog_author][populate][blogAuthorImage][fields][3]=width&populate[blog_author][populate][blogAuthorImage][fields][4]=height";
const categoryReq =
  "&populate[blogCategories][fields][0]=categoryName&populate[blogCategories][fields][1]=categorySlug";

export const recentBlogQuery =
  "blogs?" +
  recentBlogFilter +
  reqFieldsReq +
  ftImageReq +
  authorReq +
  categoryReq +
  recentPgReq;

export const popularBlogQuery =
  "blogs?" +
  popularBlogFilter +
  reqFieldsReq +
  ftImageReq +
  authorReq +
  categoryReq +
  popularPgReq;

export const blogCategoryListQuery =
  "blog-categories?populate=*&sort[1]=publishedAt:asc";

// single blog query

const blogFields =
  "&fields[0]=title&fields[1]=slug&fields[2]=publishDate&fields[3]=excerpt&fields[4]=title&fields[5]=content";
const blogFtImage =
  "&populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=url&populate[featuredImage][fields][3]=width&populate[featuredImage][fields][4]=height";
const blogAuthor =
  "&populate[blog_author][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][1]=alternativeText&populate[blog_author][populate][blogAuthorImage][fields][2]=url&populate[blog_author][populate][blogAuthorImage][fields][3]=width&populate[blog_author][populate][blogAuthorImage][fields][4]=height";
const blogCategories =
  "&populate[blogCategories][fields][0]=categoryName&populate[blogCategories][fields][1]=categorySlug";
const blogSeo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";
export const singleBlogQuery =
  blogFields + blogFtImage + blogAuthor + blogCategories + blogSeo;
export const relatedBlogQuery =
  blogFields + blogFtImage + blogAuthor + blogCategories;
