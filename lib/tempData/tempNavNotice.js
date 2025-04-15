
const gnNotice = {
  showNotice: true,
  source: "gn",
  text: "<p>🐣 Crack the Code This Easter! Give the gift of adventure — <a class='inline-block text-[#FCD468] hover:text-[#F2B043] font-normal underline underline-offset-2 hover:no-underline' href='/gift-cards'>shop gift cards now!</a></p>",
  link: null,
  linkText: null,
  expireDate: '04-22-2025',
};

const locNotice = {

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
  let locExpDate = locNotice[locationSlug].expireDate
  if (!locNotice[locationSlug].expireDate || locNotice[locationSlug].expireDate == undefined || locNotice[locationSlug].expireDate == null) {
    locExpDate = gnNotice.expireDate
  }
  if (!hasExpDate(locExpDate)) {
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
  // console.log("loc notice")
  return retObj

}