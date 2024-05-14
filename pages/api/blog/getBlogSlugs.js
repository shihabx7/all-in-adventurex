import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { prevBlogs } from "../../../lib/blogFormation";
const formatSlugs = (dataArr) => {
  let formatedData = [];
  for (let i = 0; i < dataArr.length; i++) {
    let retObj = {
      id: dataArr[i].id,
      slug: dataArr[i].attributes.slug,
      title: dataArr[i].attributes.title,
    };
    formatedData.push(retObj);
  }
  return formatedData;
};
const getBlogSlugs = async () => {
  const reqUrl =
    apiUrl + "blogs?fields[0]=title&fields[1]=slug&sort[1]=publishDate:desc";
  const getblogSlugs = await fetch(reqUrl, apiSetting);
  const allSlugs = await getblogSlugs.json();

  const blogSlugs = formatSlugs(allSlugs.data);

  // console.log(blogSlugs);

  return blogSlugs;
};
export default getBlogSlugs;
