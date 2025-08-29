import { apiSetting, apiUrl } from "../../../../lib/apiSettings";
import { eventTempData } from "../../../../lib/v2/data/eventTempData";
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
const formatNewEventSlugList = () => {
  let formatedData = [];
  for (let i = 0; i < eventTempData.length; i++) {
    let retObj = {
      id: i + 1,
      eventSlug: eventTempData[i].slug.toString(),
      eventName: eventTempData[i].eventName.toString(),
      menuLabel: eventTempData[i].menuLabel,
    };
    formatedData.push(retObj);
  }
  return formatedData;
};
const getRootEventSlugs = async () => {
  //  const reqUrl = apiUrl + "events?fields[0]=eventSlug&sort[0]=priority:asc";
  //const getEventSlugs = await fetch(reqUrl, apiSetting);
  //const allSlugs = await getEventSlugs.json();

  const eventssSlug = formatNewEventSlugList();

  //console.log(activitiesSlug);

  return eventssSlug;
};
export default getRootEventSlugs;
