import nodemailer from "nodemailer";
import { google } from "googleapis";
export default async function couponFormHandler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log('Name: ', body.fName)
  const retData = {
    Name: body.name,
    Email: body.email,
  };

  const { OAuth2 } = google.auth;

  const client_id = process.env.GS_CLIENT_ID;
  const client_secret = process.env.GS_CLIENT_SECRET;
  const redirect_uri = process.env.GS_REDIRECT_URI;
  const refreshtoken = process.env.GS_REFRESH_TOKEN;

  const oauth2Client = new OAuth2(client_id, client_secret, redirect_uri);

  oauth2Client.setCredentials({
    refresh_token: refreshtoken,
  });

  try {
    const access_token = await oauth2Client.getAccessToken();
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
    const info = await transporter.sendMail({
      from: '"AIA Coupon" <sender@allinadventures.com>',
      to: "sales@allinadventures.com",
      replyTo: retData.Email,
      bcc: "dgency.com@gmail.com,shihab.dgency@gmail.com",
      subject: `Deals and Coupon Subscriber`,
      html: `
          
          <p style="padding:8px 0px;border-bottom:1px solid #888888; color:#565656 font-size:20px; font-weight:700; max-width:600px;">Deals and Coupon</p>
                <p><strong>Name: </strong> ${retData.Name}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
          `,
    });
    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    return res.status(500).json({ data: error, success: false });
  }
  res.status(200).json({ data: retData, success: true });
}
