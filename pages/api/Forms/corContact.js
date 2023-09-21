import nodemailer from "nodemailer";
export default async function corContactHandler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log('Name: ', body.fName)
  const retData = {
    Name: body.fName + " " + body.lName,
    Email: body.email,
    Phone: body.phone,
    comSub: body.comSubject,
    mEssage: body.msg,
  };

  /* const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secureConnection: false,
        tls: {
          ciphers: 'SSLv3'
      },
        auth: {
          user: process.env.MAIL_SENDER_USER,
          pass: process.env.MAIL_SENDER_PASS
        }
      });*/

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_SENDER_USER, // Your email address
      serviceClient: process.env.CLIENT_ID,
      privateKey: process.env.PRIVATE_KEY,
      accessUrl: process.env.TOKEN_URI,
    },
  });

  try {
    await transporter.verify();

    const mailOptions = {
      from: '"Allinadventures" <sender@allinadventures.com>', // sender address
      to: "support@allinadventures.com", // list of receivers
      bcc: "dgency.com@gmail.com,shihab.dgency@gmail.com",
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
