import { apiSetting } from "../apiSettings";
import { locationSlugListQuery } from "../query/navMenuQuery";
import { getLocationSlugList } from "../menuDataFormation";

export async function fetchLocationListData() {
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  if (!locationListRes.ok) {
    throw new Error("Failed to fetch location data");
  }
  const locationListObj = await locationListRes.json();
  return getLocationSlugList(locationListObj.data);

  //return locData;
}
