import { getTotal } from "../AllDataList/getTotal";
import { apiSetting, apiUrl } from "../../../lib/apiSettings";

const formatSlugs = (dataArr) => {
  let formatedData = [];
  for (let i = 0; i < dataArr.length; i++) {
    let retObj = {
      id: dataArr[i].id,
      slug: dataArr[i].attributes.categorySlug,
    };
    formatedData.push(retObj);
  }
  return formatedData;
};
const getBlogCategorySlugs = async () => {
  const catReq = apiUrl + "blog-categories?populate=*&sort[1]=publishedAt:asc";
  const PostsCats = await fetch(catReq, apiSetting);
  const allCats = await PostsCats.json();

  const blogCategorySlugs = formatSlugs(allCats.data);

  // console.log(blogCategorySlugs);

  return blogCategorySlugs;
};
export default getBlogCategorySlugs;
