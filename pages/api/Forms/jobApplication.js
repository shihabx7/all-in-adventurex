
import { recieveEmail } from "./formProtection/recieveEmail";
import { replayToJobApplicant } from "./replayToJobApplicant";
import {
  verifyGoogleCaptcha,
  verifyFormData,
} from "./formProtection/verifyClient";
import { checkRateLimiter } from "./formProtection/reqRateLimit";
import { creatPdfApplication } from "./creatPdfApplication";



const mailUser = process.env.MAIL_SENDER_USER;
const mailReceiver = process.env.MAIL_RECEIVER_CAREER;

export default async function jobApplicationHandler(req, res) {
  // Get data submitted in request's body.


  const retbody = req.body;
  const botMsg = retbody.botMsg;
  const captchaToken = retbody.captchaToken;

  const retData = {
    Name: retbody.info1.fName + " " + retbody.info1.lName,
    Email: retbody.info1.email,
    Phone: retbody.info1.phone,
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
      data: retbody.info1.fName,
      min: 3,
      max: 24,
      type: "string",
      pattern: "name",
    },
    {
      data: retbody.info1.lName,
      min: 3,
      max: 24,
      type: "string",
      pattern: "name",
    },
    {
      data: retbody.info1.email,
      min: 6,
      max: 60,
      type: "string",
      pattern: "email",
    },
    {
      data: retbody.info1.phone,
      min: 7,
      max: 16,
      type: "string",
      pattern: "phone",
    },
    {
      data: retbody.info1.stAdd1,
      min: 3,
      max: 200,
      type: "string",

    },
    {
      data: retbody.info1.city,
      min: 3,
      max: 2400,
      type: "string",
    },
    {
      data: retbody.info1.state,
      min: 2,
      max: 1000,
      type: "string",
    },
    {
      data: retbody.info1.zip,
      min: 5,
      max: 5,
      type: "string",

    },
    {
      data: retbody.info1.country,
      min: 3,
      max: 60,
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
  // ==========================================================Verify reCAPTCHA token from Google
  const verifyCaptcha = await verifyGoogleCaptcha(captchaToken);

  if (!verifyCaptcha.isValid) {
    return res.status(400).json({
      data: { error: "Failed CAPTCHA verification" },
      success: false,
    });
  }
  retData.captchaScore = verifyCaptcha.score;
  let fullName = retbody.info1.fName + " " + retbody.info1.lName;

  const pdfRes = await creatPdfApplication(retbody);
  //const pdfRes = JSON.parse(pdfResResult);
  // console.log("pdfRes");
  // console.log(pdfRes);
  /*{
    data: retbody,
    success: false,
    errors: emailErrors.pdfErr,
    pdf: pdfRes,
  }*/

  if (!pdfRes.success) {
    return res.status(500).json({
      data: { error: "Server Error. File can't be create.", submitted: retbody },
      success: false,
    });
  }
  const pdfpath = pdfRes.pdfPath;
  // old

  const mailOptions = {
    from: `"AIA Job Application"<${mailUser}>"`,
    // to: "shihab.dgency@gmail.com",
    // bcc: "shihabx7@gmail.com",
    to: `${mailReceiver}`,
    // bcc: `${mailReceiverBcc}`,
    bcc: "dgency.com@gmail.com",
    subject: `Job Application - ${fullName}`,
    html: `
              <p style="margin:4px 0px;"><strong>Name: </strong> ${retbody.info1.lName} ${retbody.info1.fName} </p>
              <p style="margin:4px 0px;"><strong>Phone: </strong> ${retbody.info1.phone} </p>
              <p style="margin:4px 0px;"><strong>Email: </strong> ${retbody.info1.email} </p>
              <p style="margin:4px 0px;"><strong>Address: </strong> ${retbody.info1.stAdd1} </p>
              <p style="margin:4px 0px;"><strong>City: </strong> ${retbody.info1.city} </p>
              <p style="margin:4px 0px;"><strong>State: </strong> ${retbody.info1.state} </p>
              <p style="margin:4px 0px;"><strong>Country: </strong> ${retbody.info1.country}</p>
              <p style="margin:4px 0px;"><strong>Career objective: </strong>${retbody.avlinfo.careerObjective}</p>
           
          `,
    attachments: [
      {
        // utf-8 string as an attachment
        path: pdfpath,
      },
    ],
  };

  const sendEmailRes = await recieveEmail(mailOptions);
  if (!sendEmailRes.success) {
    return res.status(500).json(sendEmailRes);
  }

  const replayEmailRes = await replayToJobApplicant(fullName, retbody.info1.email, pdfpath)
  if (!replayEmailRes.success) {
    return res.status(500).json(replayEmailRes);
  }

  return res.status(200).json({
    success: true,
    data: { recieveMessage: "Application has received and replay has sent", retData: retData },

  });
}
