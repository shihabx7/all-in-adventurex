import nodemailer from "nodemailer";

import fs from "fs";

import { google } from "googleapis";

const client_id = process.env.GS_CLIENT_ID;
const client_secret = process.env.GS_CLIENT_SECRET;
const redirect_uri = process.env.GS_REDIRECT_URI;
const refreshtoken = process.env.GS_REFRESH_TOKEN;
const mailUser = process.env.MAIL_SENDER_USER;
const mailService = process.env.MAIL_SERVICE;
const mailAuthType = process.env.MAIL_AUTH_TYPE;

export default async function replayApplication(req, res) {
  const recpData = req.body;

  console.log(recpData);
  let mailsend = true;
  let mailErr = "";
  let flieDeletErr = false;

  const { OAuth2 } = google.auth;

  const oauth2Client = new OAuth2(client_id, client_secret, redirect_uri);

  oauth2Client.setCredentials({
    refresh_token: refreshtoken,
  });

  try {
    const access_token = await oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: mailService,
      auth: {
        type: mailAuthType,
        user: mailUser,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refreshtoken,
        accessToken: access_token,
      },
    });
    await transporter.sendMail({
      from: `"All in Adventures Carrer "<${mailUser}>"`,
      //to: "shihab.dgency@gmail.com",
      to: `${recpData.email}`,
      bcc: "dgency.com@gmail.com",
      subject: `Here's Your Job Application at All In Adventures`,
      html: `
            <p style="margin:4px 0p;x"> Dear ${recpData.name},</p>
            <p style="margin:12px 0px;">This letter is to inform you that we received your job application. We appreciate you taking the time to apply.</p>
            <p style="margin:12px 0px;">Once we have an opportunity to review the application and it aligns with one of our job openings, one of our team members will be in contact with you.</p>
            <p style="margin:12px 0px;">Thank you again for the time you invested in your application.</p>
            <p style="margin-top:16px; margin-bottom:1px;"><strong>Beth Palmer</strong> </p>
            <p style="margin-top:1px; margin-bottom:1px;">Training and Development/Onboarding Manager</p>
            <p style="margin-top:1px; margin-bottom:1px;"><a href="https://allinadventures.com">allinadventures.com</a> </p>
            <p style="margin-top:12px; margin-bottom:0px;"><a href="mailto:careers@allinadventures.com">careers@allinadventures.com</a></p>
            <p style="margin:12px 0px 0px 0px;">Please find your application attached.</p>
         
        `,
      attachments: [
        {
          // utf-8 string as an attachment
          path: recpData.filepath,
        },
      ],
    });
  } catch (error) {
    mailsend = false;
    mailErr = error;
  }
  // sending email to applicant=========================
  fs.unlink(recpData.filepath, (err) => {
    if (err) {
      //throw err;
      flieDeletErr = true;
    }

    // console.log("Delete File successfully.");
  });

  if (!mailsend) {
    return res
      .status(500)
      .json({ data: recpData, success: false, errors: mailErr });
  } else {
    res.status(200).json({
      data: recpData,

      success: true,
    });
  }
}
