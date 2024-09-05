import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { srcPhotoQuery } from "../../../lib/query/findPhotosQuery";
import { getSrcPhotoList } from "../../../lib/dataFormation/findPhotoDataFormation";

export default async function getPrevBlogs(req, res) {
  const query = req.query;
  const { locationSlug, srcDate } = query;
  const filters =
    "find-your-photos?filters[publishDate][$eq]=" +
    srcDate +
    "&filters[location][slug][$eq]=" +
    locationSlug;
  const qerUrl = apiUrl + filters + srcPhotoQuery;
  const getResData = await fetch(qerUrl, apiSetting);
  const getResObj = await getResData.json();
  const resData = getResObj.data;
  //console.log(resData);
  if (resData.length < 1) {
    res
      .status(200)
      .json({ success: false, locationSlug: locationSlug, date: srcDate });
  } else {
    const srcPhotolist = getSrcPhotoList(resData[0].attributes.photos.data);
    res.status(200).json({
      success: true,
      locationSlug: locationSlug,
      date: srcDate,
      srcPhotolist: srcPhotolist,
    });
  }
}
