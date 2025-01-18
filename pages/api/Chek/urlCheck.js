import { locationSlugListQuery } from "../../../lib/query/navMenuQuery";
import { apiSetting, apiUrl } from "../../../lib/apiSettings";
export const getLocationSlugList = (dataArr) => {
  let locationArr = [];
  for (let i = 0; i < dataArr.length; i++) {
    locationArr.push(dataArr[i].attributes.slug.toString().trim());
  }
  return locationArr;
};
export default async function urlCheck(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  let urlSlug = body.urlSlug.toString().trim();
  let slugType = body.slugType;
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  // console.log(locationListObj.data);
  /*return res
    .status(200)
    .json({ message: "success", method: req.method, slug: urlSlug });*/
  try {
    const locationListData = getLocationSlugList(locationListObj.data);
    const isLocationSlug = locationListData.includes(urlSlug);
    return res
      .status(200)
      .json({ message: "success", isLocationSlug: isLocationSlug });
  } catch (error) {
    return res.status(500).json({ message: "server Error", error: error });
  }
}
