import { apiSetting, apiUrl } from "../../../lib/apiSettings";
const formatSlugs = (dataArr) => {
  let formatedData = [];
  for (let i = 0; i < dataArr.length; i++) {
    let retObj = {
      id: i + 1,
      locationSlug: dataArr[i].attributes.slug.toString(),
    };
    formatedData.push(retObj);
  }
  return formatedData;
};
export const getLocationSlugUrl = async () => {
  const reqUrl = apiUrl + "locations?fields[0]=slug&sort[0]=priority:asc";
  const res = await fetch(reqUrl, apiSetting);
  const resObj = await res.json();

  const locationSlugsArr = formatSlugs(resObj.data);

  //console.log(reqUrl);

  return locationSlugsArr;
};
