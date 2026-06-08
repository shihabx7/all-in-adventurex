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
import { eventDatav2 } from "../../../lib/v2/data/eventDataV2";
const getEventSlugV2 = async () => {
  let eventV2List = [];
  for (const key in eventDatav2) {
    if (eventDatav2[key].isActive) {
      let retObj = {
        id: eventDatav2[key].id,
        eventSlug: eventDatav2[key].eventSlug.toString(),
      };
      eventV2List.push(retObj);
    }
  }
  return eventV2List;
};
export default getEventSlugV2;
