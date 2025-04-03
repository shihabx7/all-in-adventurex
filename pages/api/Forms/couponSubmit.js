import { recieveEmail } from "./formProtection/recieveEmail";
import {
  verifyGoogleCaptcha,
  verifyFormData,
} from "./formProtection/verifyClient";
import { checkRateLimiter } from "./formProtection/reqRateLimit";

const escapeHtml = (htmlStr) => {
  return htmlStr
    .replace(/&/g, "and")
    .replace(/</g, " ")
    .replace(/>/g, " ")
    .replace(/(?:\r\n|\r|\n)/g, "<br>");
};

export default async function couponFormHandler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  const name = req.body.name ? escapeHtml(req.body.name.trim()) : "";
  const email = req.body.email ? escapeHtml(req.body.email.trim()) : "";
  const botMsg = req.body.botMsg ? req.body.botMsg : "";
  const captchaToken = req.body.captchaToken ? req.body.captchaToken : "";
  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log('Name: ', body.fName)
  const retData = {
    Name: name,
    Email: email,
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
      data: name,
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
  //old

  const mailOptions = {
    from: '"AIA Coupon" <sender@allinadventures.com>',
    //to: "shihab.dgency@gmail.com",
    to: "sales@allinadventures.com",
    replyTo: email,
    bcc: "dgency.com@gmail.com",
    // bcc: "shihabx7@gmail.com",
    subject: `Deals and Coupon Subscriber`,
    html: `
          
          <p style="padding:8px 0px;border-bottom:1px solid #888888; color:#565656 font-size:20px; font-weight:700; max-width:600px;">Deals and Coupon</p>
                <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
          `,
  };

  const sendEmailRes = await recieveEmail(mailOptions);
  if (!sendEmailRes.success) {
    return res.status(500).json(sendEmailRes);
  }

  return res.status(200).json(sendEmailRes);

}
