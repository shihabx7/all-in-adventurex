
const gnNotice = {
  showNotice: true,
  source: "gn",
  text: "<p>50% OFF Online Bookings Wednesdays! Limited time. Excludes federal & school holidays.</p>",
  link: null,
  linkText: null,
  expireDate: '04-09-2025',
};

const locNotice = {
  "lawrenceville-ga": {
    showNotice: true,
    expireDate: '04-02-2025',
  },
  "raleigh-nc": {
    showNotice: true,
    expireDate: '03-26-2025',
  },

}
function hasExpDate(expdate) {
  if (!expdate || expdate == null) {
    return false
  }
  let expArr = expdate.split("-")
  let formateExp = expArr[2] + "-" + expArr[0] + "-" + expArr[1]
  const eDate = new Date(formateExp)
  const cDate = new Date()

  if (eDate >= cDate) {
    return true
  }
  return false
}
export async function navNotice(locationSlug) {

  if (!locationSlug || !locNotice[locationSlug]) {
    if (hasExpDate(gnNotice.expireDate)) {
      console.log("gn notice")
      return gnNotice
    }
    return {
      showNotice: false,

    }
  }
  if (!hasExpDate(locNotice[locationSlug].expireDate)) {
    return {
      showNotice: false,
    }
  }
  let retObj = {
    showNotice: locNotice[locationSlug].showNotice,
    text: locNotice[locationSlug].text ? locNotice[locationSlug].text : gnNotice.text,
    link: locNotice[locationSlug].link ? locNotice[locationSlug].link : gnNotice.link,
    linkText: locNotice[locationSlug].linkText ? locNotice[locationSlug].linkText : gnNotice.linkText,
    source: locationSlug,

  }
  console.log("loc notice")
  return retObj

}