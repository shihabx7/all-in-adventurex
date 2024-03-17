import { getALlActivityList } from "../getAllActivityList";
import { getAllEventList } from "../getAllEventList";
import { getVirtualGameSlug } from "../VirtualGames/getVirtualGameSlug";
import { getLocationsPageData } from "../getLocationsPageData";

export const totalLocation = () => {
  var locdata = getLocationsPageData().states;
  var total = 0;

  for (var i = 0; i < locdata.length; i++) {
    total = total + locdata[i].cities.length;
  }

  return total;
};
const uniqueGames = getALlActivityList().length;

export const getTotal = () => {
  const totalData = {
    totalLocations: totalLocation(),
    uniqueGames: uniqueGames,
    toalPlayerEscape: "1M+",
    totalReview: "25K+",
    locationlist: getLocationsPageData().states,
    activitylistSlug: getALlActivityList(),
    eventlistSlug: getAllEventList(),
    virtualgameSlug: getVirtualGameSlug(),
  };

  return totalData;
};

export const getLocationWithMail = () => {
  let locdataAllStates = getLocationsPageData().states;
  let retArr = [];
  for (let i = 0; i < locdataAllStates.length; i++) {
    for (let j = 0; j < locdataAllStates[i].cities.length; j++) {
      let retObj = {
        state: locdataAllStates[i].state,
        city: locdataAllStates[i].cities[j].city,
        storeEmail: locdataAllStates[i].cities[j].email,
        managrEmail: locdataAllStates[i].cities[j].mgremail,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};
