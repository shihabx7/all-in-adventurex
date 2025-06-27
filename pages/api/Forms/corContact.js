import csrf from "csrf";
import { recieveEmail } from "./formProtection/recieveEmail";
import {
  verifyGoogleCaptcha,
  verifyFormData,
} from "./formProtection/verifyClient";
import { checkRateLimiter } from "./formProtection/reqRateLimit";

const tokens = new csrf();
const csrfSecret = process.env.CSRF_SECRET || tokens.secretSync();

const escapeHtml = (htmlStr) => {
  return htmlStr
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(?:\r\n|\r|\n)/g, "<br>");
};

export default async function corContactHandler(req, res) {
  //console.log("Incomming Body Data" + JSON.stringify(req.body));
  // Get request dody and senitize.
  const fName = req.body.fName ? escapeHtml(req.body.fName.trim()) : "";
  const lName = req.body.lName ? escapeHtml(req.body.lName.trim()) : "";
  const email = req.body.email ? escapeHtml(req.body.email.trim()) : "";
  const phone = req.body.phone ? escapeHtml(req.body.phone.trim()) : "";
  const comSubject = req.body.comSubject
    ? escapeHtml(req.body.comSubject.trim())
    : "";
  const msg = req.body.msg ? escapeHtml(req.body.msg.trim()) : "";
  const botMsg = req.body.botMsg ? escapeHtml(req.body.botMsg.trim()) : "";
  const captchaToken = req.body.captchaToken ? req.body.captchaToken : "";
  const csrfToken = req.body.csrfToken ? req.body.csrfToken : "";

  //console.log("captcha token: " + captchaToken);
  // console.log("captcha length: " + captchaToken.length);

  //console.log("Req headers " + JSON.stringify(req.headers));

  // =================================================return data store for testing

  let retData = {
    Name: fName + " " + lName,
    Email: email,
    Phone: phone,
    comSub: comSubject,
    mEssage: msg,
    botMsg: botMsg,
    reCaptchaToken: captchaToken,
    csrfToken: csrfToken,
    captchaScore: "",
    reqLimitData: { remainingRequests: 0, resetAfter: 0 },
  };

  // =================================================check req limit
  const verifyreqLimit = await checkRateLimiter(req, res);
  // console.log(verifyreqLimit);
  if (!verifyreqLimit.success) {
    // res.setHeader("Retry-After", limitData.data.resetAfter);
    return res.status(429).json(limitData);
  }
  retData.reqLimitData = verifyreqLimit.data;
  //==================== ====================== verify req method
  if (req.method !== "POST") {
    return res.status(405).json({
      data: { error: "Method Not Allowed" },
      success: false,
    });
  }
  //==================== ==================================bot checking
  if (typeof botMsg !== "string" || botMsg.length > 0) {
    return res
      .status(403)
      .json({ data: { error: "Bot is not allowed" }, success: false });
  }
  //==================== =================================verify Client data
  const vDataArr = [
    {
      data: fName,
      min: 3,
      max: 24,
      type: "string",
      pattern: "name",
    },
    {
      data: lName,
      min: 3,
      max: 24,
      type: "string",
      pattern: "name",
    },
    {
      data: email,
      min: 6,
      max: 60,
      type: "string",
      pattern: "email",
    },
    {
      data: phone,
      min: 7,
      max: 16,
      type: "string",
      pattern: "phone",
    },
    {
      data: comSubject,
      min: 3,
      max: 200,
      type: "string",
      pattern: "name",
    },
    {
      data: captchaToken,
      min: 20,
      max: 2400,
      type: "string",
    },
    {
      data: msg,
      min: 0,
      max: 1000,
      type: "string",
    },
  ];
  const verifyClientData = await verifyFormData(vDataArr);
  // console.log("Data valid? " + verifyClientData.isValid);

  if (!verifyClientData.isValid) {
    return res.status(400).json({
      data: { error: "Ivalid data or captcha token. Try gain later" },
      success: false,
    });
  }
  // ========================================================verify csrf token ===============
  if (!tokens.verify(csrfSecret, csrfToken)) {
    return res
      .status(400)
      .json({ data: { error: "Invalid csrf token" }, success: false });
  }

  // ==========================================================Verify reCAPTCHA token from Google
  const verifyCaptcha = await verifyGoogleCaptcha(captchaToken);

  if (!verifyCaptcha.isValid) {
    return res.status(400).json({
      data: { error: "Failed CAPTCHA verification" },
      success: false,
    });
  }
  retData.captchaScore = verifyCaptcha.score;
  // ===============================================================send emsil

  const mailOptions = {
    from: '"AIA Corporate Contact" <sender@allinadventures.com>', // sender address
    to: "support@allinadventures.com", // list of receivers
    //cc: "shihab.dgency@gmail.com",
    bcc: "dgency.com@gmail.com,shihab.dgency@gmail.com",
    //to: "shihab.dgency@gmail.com",
    // bcc: "dgency.com@gmail.com",
    replyTo: email,
    subject: `Corporate Contact`,
    html: `
            <p><strong>Name: </strong> ${fName} ${lName}</p>
            <p><strong>Phone: </strong> ${phone}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Subject of communication: </strong> ${comSubject}</p>
            <p><strong>Message: </strong> <br> ${msg}</p>
          `,
  };
  const sendEmailRes = await recieveEmail(mailOptions);
  if (!sendEmailRes.success) {
    return res.status(500).json(sendEmailRes);
  }

  return res.status(200).json(sendEmailRes);
}
