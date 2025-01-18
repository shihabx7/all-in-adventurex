import { apiSetting, apiUrl } from "../../../lib/apiSettings";
const formatSlugs = (dataArr) => {
  let formatedData = [];
  for (let i = 0; i < dataArr.length; i++) {
    let retObj = {
      id: dataArr[i].id,
      activitySlug: dataArr[i].attributes.activitySlug.toString(),
    };
    formatedData.push(retObj);
  }
  return formatedData;
};
const getActivitySlugs = async () => {
  const reqUrl =
    apiUrl + "activities?fields[0]=activitySlug&sort[0]=priority:asc";
  const getActivitySlugs = await fetch(reqUrl, apiSetting);
  const allSlugs = await getActivitySlugs.json();

  const activitiesSlug = formatSlugs(allSlugs.data);

  console.log("all activity slug", activitiesSlug);

  return activitiesSlug;
};
export default getActivitySlugs;
