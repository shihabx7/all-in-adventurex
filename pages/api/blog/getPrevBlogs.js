import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { prevBlogs } from "../../../lib/blogFormation";

export default async function getPrevBlogs(req, res) {
  const query = req.query;
  const { id } = query;
  let postOffset = 18;
  if (id > 1) {
    let ostart = id * 6;
    postOffset = postOffset + ostart;
  }

  const apifilter = "filters[isPopular][$eq]=false";
  const reqPg =
    "&pagination[start]=" +
    postOffset +
    "&pagination[limit]=7&sort[1]=publishDate:desc";

  const reqFields =
    "&fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=publishDate";
  const ftImagePop =
    "&populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=alternativeText&populate[featuredImage][fields][2]=url&populate[featuredImage][fields][3]=width&populate[featuredImage][fields][4]=height";

  const authorPop =
    "&populate[blog_author][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][0]=name&populate[blog_author][populate][blogAuthorImage][fields][1]=alternativeText&populate[blog_author][populate][blogAuthorImage][fields][2]=url&populate[blog_author][populate][blogAuthorImage][fields][3]=width&populate[blog_author][populate][blogAuthorImage][fields][4]=height";
  const reqCatPop =
    "&populate[blogCategories][fields][0]=categoryName&populate[blogCategories][fields][1]=categorySlug";

  const recentReqUrl =
    apiUrl +
    "blogs?" +
    apifilter +
    reqFields +
    ftImagePop +
    authorPop +
    reqCatPop +
    reqPg;

  const blogpostReq = await fetch(recentReqUrl, apiSetting);
  const Posts = await blogpostReq.json();
  const postData = Posts.data;
  const postMeta = Posts.meta;

  //console.log(Posts);

  let hasMoreBlogs = false;

  if (postData.length < 1) {
    res.status(404).json({ success: false });
  } else {
    if (postData.length > 4) {
      hasMoreBlogs = true;
    }
    const retPosts = prevBlogs(postData);
    res
      .status(200)
      .json({ success: true, loadmore: hasMoreBlogs, blogs: retPosts });
  }
}
