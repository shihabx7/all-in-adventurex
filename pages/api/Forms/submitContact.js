import formidable from "formidable";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { recieveEmail } from "./formProtection/recieveEmail";
import csrf from "csrf";
import {
  verifyGoogleCaptcha,
  verifyFormData,
} from "./formProtection/verifyClient";
import { checkRateLimiter } from "./formProtection/reqRateLimit";

export const config = {
  api: {
    bodyParser: false, // Turn off body parser to allow formidable stream processing
  },
};

const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB Hard Constraint Limit
const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
 console.log("Req Received...")
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
      msg,
      botMsg,
      csrfToken,
      reCaptchaToken,
    } = fields;

    // 1. Honeypot check
    if (botMsg && botMsg.length > 0) {
      return res.status(400).json({ error: "Spam activity caught." });
    }

    // 2. Validate Google reCAPTCHA Token
    try {
      const captchaVerify = await fetch(`https://google.com`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.CAPTCHA_SECRET}&response=${reCaptchaToken}`,
      });
      const captchaResult = await captchaVerify.json();

      // Note: Skip verification fallback check if keys aren't configured yet during tests
      if (process.env.CAPTCHA_SECRET && !captchaResult.success) {
        return res
          .status(400)
          .json({ error: "reCAPTCHA verification verification failed." });
      }
    } catch (captchaError) {
      console.error("Captcha API system error:", captchaError);
    }

    // 3. Optional Attachment Evaluation
    const file = files.file;
    let hasAttachment = false;
    let localFilePath = "";

    if (file && file.size > 0) {
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
        filename: file.originalFilename || "attachment.dat",
        path: localFilePath,
      });
    }

    const htmlBody = `
        <h2>New Web Form Submission</h2>
        <p><strong>Name:</strong> ${fName}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${conMethod}</p>
        <p><strong>Topic Subject:</strong> ${comSubject}</p>
        <p><strong>Booking/Order ID:</strong> ${bookingOrder || "N/A"}</p>
        <p><strong>Comments Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px;">${msg || "(Empty)"}</p>
      `;

    const finalRecipient = toEmail || "support@allinadventures.com";
    const ccRecipient = toMgrEmail || "dgency.com@gmail.com";
    const mailOptions = {
      from: '"AIA Contact" <sender@allinadventures.com>',
      to: finalRecipient,
      cc: ccRecipient,
      bcc: "support@allinadventures.com, dgency.com@gmail.com, shihab.dgency@gmail.com",
      replyTo: email,
      subject: `Corporate Contact`,
      html: htmlBody,
      attachments: emailAttachments,
    };
    const sendEmailRes = await recieveEmail(mailOptions);
    if (hasAttachment && fs.existsSync(localFilePath)) {
      try {
        fs.unlinkSync(localFilePath);
        console.log(
          `Successfully cleaned up and unlinked temp file: ${localFilePath}`,
        );
      } catch (cleanupError) {
        console.error("Failed to unlink temporary upload asset:", cleanupError);
      }
    }
    if (!sendEmailRes.success) {
      return res.status(500).json(sendEmailRes);
    }

    return res.status(200).json(sendEmailRes);

   
  });
}
/*
 try {
      // 4. Setup Transporter Configuration Details
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || '://gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const emailAttachments = [];
      if (hasAttachment) {
        emailAttachments.push({
          filename: file.originalFilename || 'attachment.dat',
          path: localFilePath,
        });
      }

      const htmlBody = `
        <h2>New Web Form Submission</h2>
        <p><strong>Name:</strong> ${fName}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${conMethod}</p>
        <p><strong>Topic Subject:</strong> ${comSubject}</p>
        <p><strong>Booking/Order ID:</strong> ${bookingOrder || 'N/A'}</p>
        <p><strong>Comments Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px;">${msg || '(Empty)'}</p>
      `;

      // 5. Send Transactional Routing Configuration
      // Fallback recipient if toEmail is missing from the location lookup payload list
      const finalRecipient = toEmail || 'default-receiver@example.com';
      const ccRecipient = toMgrEmail || '';

      await transporter.sendMail({
        from: `"Corporate Web Forms" <${process.env.EMAIL_USER}>`,
        to: finalRecipient,
        cc: ccRecipient || undefined,
        subject: `[${comSubject}] New submission from ${fName}`,
        html: htmlBody,
        attachments: emailAttachments,
      });

      return res.status(200).json({ message: 'Success' });

    } catch (mailError) {
      console.error('Mail dispatching tracking error:', mailError);
      return res.status(500).json({ error: 'Internal mail distribution error execution failure.' });
    } finally {
      // 6. CRITICAL: Absolute Clean-up execution ensures un-linking of persistent file copies
      if (hasAttachment && fs.existsSync(localFilePath)) {
        try {
          fs.unlinkSync(localFilePath);
          console.log(`Successfully cleaned up and unlinked temp file: ${localFilePath}`);
        } catch (cleanupError) {
          console.error('Failed to unlink temporary upload asset:', cleanupError);
        }
      }
    }




*/
