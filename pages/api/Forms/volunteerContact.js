import nodemailer from "nodemailer";
import { google } from "googleapis";

export default async function volunteerContactHandler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  const retData = {
    Name: body.fName + " " + body.lName,
    Email: body.email,
    Phone: body.phone,
    InqType: body.inqType,
    Location: body.location,
    Message: body.msg,
    StoreEmail: body.storeEmail,
    ManagerEmail: body.managerEmail,
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
      from: '"AIA Volunteer Contact" <sender@allinadventures.com>', // sender address
      to:
        "dgency.com@gmail.com," +
        retData.StoreEmail +
        "," +
        retData.ManagerEmail,
      // to:
      //  "jordan@allinadventures.com,adam@allinadventures.com," +
      //  retData.StoreEmail +
      //  "," +
      // retData.ManagerEmail,
      // list of receivers
      bcc: "shihab.dgency@gmail.com",
      // bcc: "shihab.dgency@gmail.com",
      replyTo: retData.Email,
      subject: `Volunteer Contact`,
      html: `
                <p><strong>Name: </strong> ${retData.Name}</p>
              <p><strong>Phone: </strong> ${retData.Phone}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
            <p><strong>Inquiry type: </strong> ${retData.InqType}</p>
            <p><strong>Location: </strong> ${retData.Location}</p>
            <p><strong>Message: </strong> <br> ${retData.Message}</p>
          `,
    };

    const info = await transporter.sendMail(mailOptions);
    //  console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    return res.status(500).json({ data: error, success: false });
  }
  res.status(200).json({ data: retData, success: true });
}
