const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET;
export async function verifyGoogleCaptcha(captchaToken) {
  const captchaVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET}&response=${captchaToken}`;
  const capRes = await fetch(captchaVerifyURL, { method: "POST" });
  const capResData = await capRes.json();
  console.log(capResData);
  if (!capResData.success || capResData.score < 0.5) {
    return { isValid: false, score: capResData.score };
  }
  return { isValid: true, score: capResData.score };
}
// string Check
const escapeHtml = (htmlStr) => {
  return htmlStr
    .replace(/&/g, "and")
    .replace(/</g, " ")
    .replace(/>/g, " ")
    .replace(/(?:\r\n|\r|\n)/g, "<br>");
};
const dataRegEx = {
  name: /^[a-zA-Z ]*$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[ 0-9-+/./(/)]*$/,
};

export async function verifyFormData(dataArr) {
  let errCount = 0;
  let errArr = [];

  dataArr.forEach((item, index) => {
    let dt = item.data;
    if (
      typeof dt !== item.type ||
      dt.length < item.min ||
      dt.length > item.max
    ) {
      errCount++;
      errArr.push({
        sl: index,
        val: dt,
        ln: dt.length,
        type: typeof dt,
        min: item.min,
        max: item.max,
        itype: item.type,
        error: "Invalid Data Type or Length",
      });
    } else {
      if (item.pattern) {
        if (!dataRegEx[item.pattern].test(dt)) {
          errCount++;
          errArr.push({ sl: index, error: "Pattern not match" });
        }
      }
    }
  });

  if (errCount > 0) {
    return { isValid: false, error: errArr };
  }
  return { isValid: true };
}
