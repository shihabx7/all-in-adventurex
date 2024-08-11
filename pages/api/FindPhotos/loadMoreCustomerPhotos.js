import { loadMorePhotoQuery } from "../../../lib/query/findPhotosQuery";
import { apiSetting, apiUrl } from "../../../lib/apiSettings";
import { getPhotoList } from "../../../lib/findPhotoDataformation";

export default async function getPrevBlogs(req, res) {
  const query = req.query;
  const { id } = query;
  let postOffset = id * 4 + 2;

  const reqUrl =
    apiSetting +
    loadMorePhotoQuery +
    "&pagination[start]=" +
    postOffset +
    "&pagination[limit]=12&sort[1]=publishDate:desc";

  const resImage = await fetch(reqUrl, apiSetting);
  const resImageObj = await resImage.json();
  const resImageData = resImageObj.data;
  const resMeta = resImageObj.meta;
  let hasMore = false;
  //console.log(Posts);

  if (resImageData.length < 1) {
    res.status(404).json({ success: false });
  } else {
    if (resImageData.length > 11) {
      hasMore = true;
    }
    const retImageList = getPhotoList(resImageData);
    res
      .status(200)
      .json({ success: true, loadMore: hasMore, prevImageList: retImageList });
  }
}
