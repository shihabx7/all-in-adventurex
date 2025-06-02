import { recieveEmail } from "./formProtection/recieveEmail";
import {
  verifyGoogleCaptcha,
  verifyFormData,
} from "./formProtection/verifyClient";
import { checkRateLimiter } from "./formProtection/reqRateLimit";

const escapeHtml = (htmlStr) => {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, " ").replace(/>/g, " ");
  // .replace(/(?:\r\n|\r|\n)/g, "<br>");
};

export default async function volunteerContactHandler(req, res) {
  // Get data submitted in request's body.
  const fName = req.body.fName ? escapeHtml(req.body.fName.trim()) : "";
  const lName = req.body.lName ? escapeHtml(req.body.lName.trim()) : "";
  const email = req.body.email ? escapeHtml(req.body.email.trim()) : "";
  const phone = req.body.phone ? escapeHtml(req.body.phone.trim()) : "";
  const inqType = req.body.inqType ? escapeHtml(req.body.inqType.trim()) : "";
  const location = req.body.location
    ? escapeHtml(req.body.location.trim())
    : "";
  const storeEmail = req.body.storeEmail
    ? escapeHtml(req.body.storeEmail.trim())
    : "";
  const managerEmail = req.body.managerEmail
    ? escapeHtml(req.body.managerEmail.trim())
    : "";
  const msg = req.body.msg ? escapeHtml(req.body.msg.trim()) : "";
  const botMsg = req.body.botMsg ? req.body.botMsg : "";
  const captchaToken = req.body.captchaToken ? req.body.captchaToken : "";

  const retData = {
    Name: fName + " " + lName,
    Email: email,
    Phone: phone,
    InqType: inqType,
    Location: location,
    Message: msg,
    StoreEmail: storeEmail,
    ManagerEmail: managerEmail,
    captchaToken: captchaToken,
    reqLimitData: { remainingRequests: 0, resetAfter: 0 },
    captchaScore: "",
  };

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
      .json({ data: { error: "Bot is not allowed" + botMsg }, success: false });
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
      data: inqType,
      min: 3,
      max: 200,
      type: "string",
    },
    {
      data: location,
      min: 3,
      max: 2400,
      type: "string",
    },
    {
      data: msg,
      min: 0,
      max: 1000,
      type: "string",
    },
    {
      data: storeEmail,
      min: 6,
      max: 60,
      type: "string",
      pattern: "email",
    },
    {
      data: managerEmail,
      min: 6,
      max: 60,
      type: "string",
      pattern: "email",
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
  // ==========================================================Verify reCAPTCHA token from Google
  const verifyCaptcha = await verifyGoogleCaptcha(captchaToken);

  if (!verifyCaptcha.isValid) {
    return res.status(400).json({
      data: { error: "Failed CAPTCHA verification" },
      success: false,
    });
  }
  retData.captchaScore = verifyCaptcha.score;

  // return res.status(200).json({ data: retData, success: true });
  ///==================old

  const mailOptions = {
    from: '"AIA Volunteer Contact" <sender@allinadventures.com>', // sender address
    to:
      "jordan@allinadventures.com,erin@allinadventures.com," +
      storeEmail +
      "," +
      managerEmail,

    // to: "shihab.dgency@gmail.com",
    //  retData.StoreEmail +
    //  "," +
    // retData.ManagerEmail,
    // list of receivers
    bcc: "dgency.com@gmail.com",
    // bcc: "shihabx7@gmail.com",
    replyTo: email,
    subject: `Volunteer Contact`,
    html: `
                <p><strong>Name: </strong> ${fName} ${lName}</p>
              <p><strong>Phone: </strong> ${phone}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Inquiry type: </strong> ${inqType}</p>
            <p><strong>Location: </strong> ${location}</p>
            <p><strong>Message: </strong> <br> ${msg}</p>
          `,
  };

  const sendEmailRes = await recieveEmail(mailOptions);
  if (!sendEmailRes.success) {
    return res.status(500).json(sendEmailRes);
  }

  return res.status(200).json(sendEmailRes);
}
