import nodemailer from "nodemailer";
import { google } from "googleapis";

const client_id = process.env.GS_CLIENT_ID;
const client_secret = process.env.GS_CLIENT_SECRET;
const redirect_uri = process.env.GS_REDIRECT_URI;
const refreshtoken = process.env.GS_REFRESH_TOKEN;

export async function recieveEmail(mailOptions) {
  const { OAuth2 } = google.auth;
  const OAuth2Client = new OAuth2(client_id, client_secret, redirect_uri);
  OAuth2Client.setCredentials({
    refresh_token: refreshtoken,
  });

  try {
    // get Access token
    const access_token = await OAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sender@allinadventures.com",
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refreshtoken,
        accessToken: access_token,
      },
    });
    // send email
    const mailRes = await transporter.sendMail(mailOptions);
    //console.log(`Message Recieved Success: ${mailRes.messageId}`);
    return {
      success: true,
      data: { mailResponse: mailRes },
    };
  } catch (error) {
    return {
      success: false,
      data: { error: "Mail received fail", reason: error },
    };
  }
}
