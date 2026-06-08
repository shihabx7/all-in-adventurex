import { eventPageMetaV2 } from "../data/eventPageMetaV2";
import { eventPageDataV2 } from "../data/eventPageDataV2";
import { eventDatav2, partyPackageListV2,eventFaqListDefaultV2 } from "../data/eventDataV2";

export function eventMenuSlugListV2() {
  let retArr = [];
  for (const key in eventPageMetaV2) {
    if (eventDatav2[key].isActive) {
      let retObj = {
        id: key + 1,
        eventSlug: eventDatav2[key].eventSlug,
        eventName: eventDatav2[key].menuLabel,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
}

export function eventPagMeta(slug) {
  return eventPageMetaV2[slug].pageMeta;
}
export function eventPageData(slug) {
  return eventPageDataV2[slug];
}

export function eventPartyPackageList() {
  let partyPackageList = partyPackageListV2.filter(
    (partyPackage) => partyPackage.isActiveRootPage === true,
  );
  return partyPackageList;
}
