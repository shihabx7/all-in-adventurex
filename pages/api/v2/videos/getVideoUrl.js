import { homePageTempData } from "../../../../lib/v2/data/homePageTempData";
import { escapeGameData } from "../../../../lib/v2/data/escapeGameTempData";
export default async function getVideoUrl(req, res) {
  const query = req.query;
  const { videoFor, slug } = query; //

  let retObj = {};
  if (videoFor == "pageHero") {
    retObj = homePageTempData.pageHeroData.heroBgVideo? homePageTempData.pageHeroData.heroBgVideo:{};
  }
   if (videoFor == "gameCard") {
    retObj = escapeGameData[slug].gameCardData.video?  escapeGameData[slug].gameCardData.video:{};;
  }
  //console.log(resData);
  if (retObj.length < 1) {
    res
      .status(200)
      .json({ success: false, data: retObj, date: srcDate });
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
