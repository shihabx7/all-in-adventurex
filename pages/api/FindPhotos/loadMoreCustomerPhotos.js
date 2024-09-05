import { loadMorePhotoQuery } from "../../../lib/query/findPhotosQuery";

import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { getPhotoList } from "../../../lib/dataFormation/findPhotoDataFormation";

export default async function loadMoreCustomerPhotos(req, res) {
  const query = req.query;
  const { page } = query;
  let postOffset = page * 8;

  const reqUrl =
    apiUrl +
    loadMorePhotoQuery +
    "&pagination[start]=" +
    postOffset +
    "&pagination[limit]=9&sort[0]=publishDate:desc";

  const resImage = await fetch(reqUrl, apiSetting);
  const resImageObj = await resImage.json();
  const resImageData = resImageObj.data;
  const resMeta = resImageObj.meta;

  //console.log(Posts);

  if (resImageData.length < 1) {
    res.status(404).json({ success: false });
  } else {
    const retImageList = getPhotoList(resImageData);
    res.status(200).json({ success: true, prevImageList: retImageList });
  }
}
