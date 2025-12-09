const formateLocationArr = (arr) => {
  // console.log(arr);
  const stateMap = new Map(); // Map to store state information
  // Iterate through the original array
  for (const item of arr) {
    const {
      id,
      stateName,
      stateCode,
      locationSlug,
      locationName,
      mall,
      storeEmail,
      managerEmail,
      fivestarId,
      bookingInfo,
      locationActivities,
    } = item;

    // If the state is not in the map, add it
    if (!stateMap.has(stateCode)) {
      stateMap.set(stateCode, {
        id: stateMap.size + 1,
        stateName,
        stateCode,
        locations: [],
      });
    }

    // Add the location to the corresponding state
    stateMap.get(stateCode).locations.push({
      id,
      locationSlug,
      locationName,
      storeEmail,
      managerEmail,
      mall,
      fivestarId,
      bookingInfo,
      locationActivities,
    });
  }

  // Convert the map values to an array
  const outArr = Array.from(stateMap.values());

  return outArr;
};
// ====================== keep activities simple
const simplifiedActivities = (arr) => {
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    let obj = {
      id: arr[i].id,
      bookingItemNo: arr[i].bookingItemNo,
      isActive: arr[i].isActive,
      activityName: arr[i].activity.data.attributes.activityName,
      activitySlug: arr[i].activity.data.attributes.activitySlug,
    };
    retArr.push(obj);
  }
  return retArr;
};
export const getLocationSlugList = (dataArr) => {
  // console.log("data get from api:" + dataArr);
  let locationArr = [];
  for (let i = 0; i < dataArr.length; i++) {
    let st = dataArr[i].attributes.locationInfo.state.split(",");
    let retObj = {
      id: dataArr[i].id,
      locationSlug: dataArr[i].attributes.slug.toString().trim(),
      locationName: dataArr[i].attributes.locationName.toString().trim(),
      storeEmail: dataArr[i].attributes.locationInfo.storeEmail,
      managerEmail: dataArr[i].attributes.locationInfo.managerEmail,
      mall: dataArr[i].attributes.locationInfo.mall,
      fivestarId: dataArr[i].attributes.locationInfo.fivestarId.trim(),
      stateName: st[0].toString().trim(),
      stateCode: st[1].toString().trim(),
      bookingInfo: dataArr[i].attributes.bookingInfo,
      locationActivities: simplifiedActivities(
        dataArr[i].attributes.locationActivities
      ),
    };
    locationArr.push(retObj);
  }
  //console.log("data after process:" + dataArr);
  return formateLocationArr(locationArr);
};

export const getEscapeGameSlugList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    if (
      listArr[i].activity.data.attributes.activityInfo.category ==
      "Escape Games"
    ) {
      let obj = {
        id: i + 1,
        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getOtherGameSlugList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].activity.data.attributes.activityInfo.category == "Others") {
      let obj = {
        id: i + 1,
        activityName: listArr[i].activity.data.attributes.activityName,
        activitySlug: listArr[i].activity.data.attributes.activitySlug,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getEventSlugList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      eventName: listArr[i].event.data.attributes.eventName,
      eventSlug: listArr[i].event.data.attributes.eventSlug,
    };
    retArr.push(obj);
  }
  return retArr;
};

export const getAllEscapeGameSlugList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].attributes.activityInfo.category == "Escape Games") {
      let obj = {
        id: i + 1,
        activityName: listArr[i].attributes.activityName,
        activitySlug: listArr[i].attributes.activitySlug,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getAllOtherGameSlugList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    if (listArr[i].attributes.activityInfo.category == "Others") {
      let obj = {
        id: i + 1,
        activityName: listArr[i].attributes.activityName,
        activitySlug: listArr[i].attributes.activitySlug,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getAllEventSlugList = (listArr) => {
  let retArr = [];
  for (let i = 0; i < listArr.length; i++) {
    let obj = {
      id: i + 1,
      eventName: listArr[i].attributes.eventName,
      eventSlug: listArr[i].attributes.eventSlug,
    };
    retArr.push(obj);
  }
  return retArr;
};
