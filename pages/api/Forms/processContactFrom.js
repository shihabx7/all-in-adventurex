import formidable from "formidable";
import fs from "fs";
import path from "path";
import { recieveEmail } from "./formProtection/recieveEmail";
import csrf from "csrf";
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
export const config = {
  api: {
    bodyParser: false, // Turn off body parser to allow formidable stream processing
  },
};

const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB Hard Constraint Limit
const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export default async function handleContactFrom(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
  console.log("Req Received...");
  // Define isolated temporary storage paths
  const uploadDir = path.join(process.cwd(), "/tmp-attachments");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir: uploadDir,
    keepExtensions: true,
    maxFileSize: MAX_SIZE_BYTES,
  });

  //=================================================================================parse form
  form.parse(req, async (err, fields, files) => {
    if (err) {
      if (err.message && err.message.includes("maxFileSize")) {
        return res.status(400).json({
          error: "File size validation failed. Maximum limit is 2MB.",
        });
      }
      return res
        .status(500)
        .json({ error: "Failed to process multipart stream payload." });
    }

    const {
      fName,
      email,
      phone,
      conMethod,
      comSubject,
      bookingOrder,
      toEmail,
      toMgrEmail,
      locationName,
      msg,
      botMsg,
      csrfToken,
      captchaToken,
    } = fields;
    // =================================================return data store for testing
    let retData = {
      Name: fName,
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
    if (!verifyreqLimit.success) {
      return res
        .status(429)
        .json(verifyreqLimit.data || { error: "Too many requests" });
    }
    retData.reqLimitData = verifyreqLimit.data;

    //==================== ==================================bot checking

    if (botMsg != "") {
      return res.status(403).json({
        data: { error: "Bot is not allowed-" + botMsg.length },
        success: false,
      });
    }
    //==================== =================================verify Client data
    /** 
    const vDataArr = [
      {
        data: fName,
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
      */
    // ========================================================verify csrf token ===============
    /*
    if (!tokens.verify(csrfSecret, csrfToken)) {
      return res
        .status(400)
        .json({ data: { error: "Invalid csrf token" }, success: false });
    }
*/
    // ==========================================================Verify reCAPTCHA token from Google
    // console.log("captha token--");
    //console.log(captchaToken);
    const verifyCaptcha = await verifyGoogleCaptcha(captchaToken);

    if (!verifyCaptcha.isValid) {
      return res.status(400).json({
        data: { error: "Failed CAPTCHA verification" },
        success: false,
      });
    }
    retData.captchaScore = verifyCaptcha.score;

    // 3. Optional Attachment Evaluation
    const rawFile = files && files.file ? files.file : null;
    const file = Array.isArray(rawFile) ? rawFile[0] : rawFile;
    let hasAttachment = false;
    let localFilePath = "";
    let attachmentFileName = "attachment.dat";

    if (file && file.size > 0) {
      attachmentFileName =
        file.originalFilename || file.newFilename || "attachment.dat";
      console.log("filename-" + attachmentFileName);
      console.log("filesize-" + file.size);
      console.log("filepath-" + file.filepath);

      if (!ALLOWED_TYPES.includes(file.mimetype)) {
        if (fs.existsSync(file.filepath)) fs.unlinkSync(file.filepath);
        return res.status(400).json({
          error: "Invalid server file layout. Only JPG, PNG, and PDF accepted.",
        });
      }
      hasAttachment = true;
      localFilePath = file.filepath;
    }

    const emailAttachments = [];
    if (hasAttachment) {
      emailAttachments.push({
        filename: attachmentFileName,
        path: localFilePath,
      });
    }
    let cityNameArr = [];
    cityNameArr = locationName ? locationName.toString().split(",") : [];
    const cityName = cityNameArr.length > 0 ? cityNameArr[0] : "";
    const htmlBody = `
            <p><strong>Name:</strong> ${fName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Contact Method:</strong> ${conMethod}</p>
              <p><strong>Location:</strong> ${locationName}</p>
            <p><strong>Subject:</strong> ${comSubject}</p>
            <p><strong>Booking/Order ID:</strong> ${bookingOrder || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px;">${msg || "(Empty)"}</p>
          `;
    const finalRecipient = toEmail || "support@allinadventures.com";
    const ccRecipient = toMgrEmail || "dgency.com@gmail.com";

    const mailOptions = {
      from: `"AIA ${cityName} - Additional Help" <sender@allinadventures.com>`,
      to: finalRecipient,
      cc: ccRecipient,
      bcc: "support@allinadventures.com, dgency.com@gmail.com, shihab.dgency@gmail.com",
      replyTo: email,
      subject: `AIA ${cityName} - Additional Help`,
      //  subject: `AIA Contact-${cityName(locationName)} ${comSubject}`,
      html: htmlBody,
      attachments: emailAttachments,
    };

    let sendEmailRes;
    try {
      sendEmailRes = await recieveEmail(mailOptions);
      return res.status(sendEmailRes.success ? 200 : 500).json(sendEmailRes);
    } finally {
      if (hasAttachment && localFilePath && fs.existsSync(localFilePath)) {
        try {
          fs.unlinkSync(localFilePath);
          console.log(
            `Successfully cleaned up and unlinked temp file: ${localFilePath}`,
          );
        } catch (cleanupError) {
          console.error(
            "Failed to unlink temporary upload asset:",
            cleanupError,
          );
        }
      }
    }
  });
}
