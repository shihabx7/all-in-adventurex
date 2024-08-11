import { apiSetting, apiUrl } from "../../../lib/apiSettings";
const formatSlugs = (dataArr) => {
  let formatedData = [];
  for (let i = 0; i < dataArr.length; i++) {
    let retObj = {
      id: dataArr[i].id,
      eventSlug: dataArr[i].attributes.eventSlug.toString(),
    };
    formatedData.push(retObj);
  }
  return formatedData;
};
const getEventSlugs = async () => {
  const reqUrl = apiUrl + "events?fields[0]=eventSlug&sort[0]=priority:asc";
  const getEventSlugs = await fetch(reqUrl, apiSetting);
  const allSlugs = await getEventSlugs.json();

  const eventssSlug = formatSlugs(allSlugs.data);

  //console.log(activitiesSlug);

  return eventssSlug;
};
export default getEventSlugs;
