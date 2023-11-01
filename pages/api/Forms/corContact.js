import nodemailer from "nodemailer";
import { google } from "googleapis";

export default async function corContactHandler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  const retData = {
    Name: body.fName + " " + body.lName,
    Email: body.email,
    Phone: body.phone,
    comSub: body.comSubject,
    mEssage: body.msg,
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
    const mailOptions = {
      from: '"AIA Corporate Contact" <sender@allinadventures.com>', // sender address
      to: "support@allinadventures.com", // list of receivers
      bcc: "dgency.com@gmail.com",
      replyTo: retData.Email,
      subject: `Corporate Contact`,
      html: `
                <p><strong>Name: </strong> ${retData.Name}</p>
              <p><strong>Phone: </strong> ${retData.Phone}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
            <p><strong>Subject of communication: </strong> ${retData.comSub}</p>
            <p><strong>Message: </strong> <br> ${retData.mEssage}</p>
          `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    return res.status(500).json({ data: error, success: false });
  }
  res.status(200).json({ data: retData, success: true });
}
