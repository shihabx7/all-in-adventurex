import nodemailer from "nodemailer";
import { google } from "googleapis";

export default async function corContactHandler(req, res) {
  const body = req.body;

  const retData = {
    Name: body.fName + " " + body.lName,
    Email: body.email,
    Phone: body.phone,
    comSub: body.comSubject,
    mEssage: body.msg,
    toEmail: body.toEmail,
    toMgrEmail: body.toMgrEmail,
    fromCity: body.fromCity,
    fromState: body.fromState,
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

    await transporter.sendMail({
      from: `"AIA ${retData.fromCity} Store" <sender@allinadventures.com>`,
      to: retData.toEmail + "," + retData.toMgrEmail,
      replyTo: retData.Email,
      bcc: "dgency.com@gmail.com",
      subject: `Store Contact - ${retData.fromCity}, ${retData.fromState}`,
      html: `
                <p><strong>Name: </strong> ${retData.Name}</p>
              <p><strong>Phone: </strong> ${retData.Phone}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
            <p><strong>Enquiry type: </strong> ${retData.comSub}</p>
            <p><strong>Message: </strong> <br> ${retData.mEssage}</p>
          `,
    });
  } catch (error) {
    return res.status(500).json({ data: error, success: false });
  }
  res.status(200).json({ data: retData, success: true });
}
