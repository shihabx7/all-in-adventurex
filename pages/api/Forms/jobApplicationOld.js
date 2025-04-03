import nodemailer from "nodemailer";
//import puppeteer from 'puppeteer';
//import path from "path";
//import fs from "fs";

//import pdf from "pdf-creator-node";
import { google } from "googleapis";
//import handlebars from "handlebars";
import { creatPdfApplication } from "./creatPdfApplication";
import { newPdfApp } from "./newPdfApp";
import { pdfPup } from "./pdfPup";
import { pdfPdfLib } from "./pdfPdfLib";

const client_id = process.env.GS_CLIENT_ID;
const client_secret = process.env.GS_CLIENT_SECRET;
const redirect_uri = process.env.GS_REDIRECT_URI;
const refreshtoken = process.env.GS_REFRESH_TOKEN;
const mailUser = process.env.MAIL_SENDER_USER;
const mailService = process.env.MAIL_SERVICE;
const mailAuthType = process.env.MAIL_AUTH_TYPE;
const mailReceiver = process.env.MAIL_RECEIVER_CAREER;
const mailReceiverBcc = process.env.MAIL_BCC;

export default async function jobApplicationHandler(req, res) {
  // Get data submitted in request's body.

  const retbody = req.body;

  //console.log("PDFDATA");
  // console.log(retbody);
  // ============================pdf file
  /* var templateHtml = fs.readFileSync(
    path.join(process.cwd(), "pdf/pdfhtml.html"),
    "utf8"
  );
  var options = {
    format: "Letter",
    orientation: "portrait",
    border: "12mm",
    header: {
      height: "4mm",
      //contents: '<div style="background:#FFF7EA;"><p style="margin:0px;">Job application form</p> <p style="margin:4px; color:#888888">'+pdt+'</p></div>'
    },
    footer: {
      height: "2mm",
      //  contents: {
      // //     first: '',
      //      2: '', // Any page number is working. 1-based index
      //      default: '', // fallback value
      //      last: ''
      //   }
    },
  };
  var logo = fs.readFileSync(path.join(process.cwd(), "pdf/tik.jpg"), "base64");
  //const bitmap = fs.readFileSync(__dirname+ "/pdf/tik.png");
  //const logo = bitmap.toString('base64');

  var dt = new Date();
  var mn = dt.getMonth() + 1;
  var pdt = mn + "_" + dt.getDate() + "_" + dt.getFullYear();
  var pubdate = mn + "-" + dt.getDate() + "-" + dt.getFullYear();
  var d = new Date();
  var fn = retbody.info1.fName.trim().split(" ").join("_");
  var ln = fn + "_" + retbody.info1.lName.trim().split(" ").join("_");
  var pdfnpath =
    "pdf/" +
    ln +
    "_" +
    pdt +
    "_" +
    d.getFullYear() +
    d.getDate() +
    d.getHours() +
    d.getMinutes() +
    d.getMilliseconds() +
    ".pdf";

  var outpath = path.join(process.cwd(), pdfnpath);
  var document = {
    html: templateHtml,
    data: {
      info: retbody,
      tik: logo,
      pubdate: pubdate,
    },
    path: outpath,
    type: "",
  };

  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
*/
  // ============================pdf file======================================

  const pdfRes = await creatPdfApplication(retbody);
  //const pdfRes = JSON.parse(pdfResResult);
  // console.log("pdfRes");
  // console.log(pdfRes);
  var emailErrors = {
    applicantErr: "",
    aiaErr: "",
    pdfErr: "Server Error. File can't be create.",
  };
  let mailsend = true;
  if (!pdfRes.success) {
    return res.status(500).json({
      data: retbody,
      success: false,
      errors: emailErrors.pdfErr,
      pdf: pdfRes,
    });
  }
  const pdfpath = pdfRes.pdfPath;

  const { OAuth2 } = google.auth;

  const oauth2Client = new OAuth2(client_id, client_secret, redirect_uri);

  oauth2Client.setCredentials({
    refresh_token: refreshtoken,
  });
  let recname = retbody.info1.fName + " " + retbody.info1.lName;
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
      from: `"AIA Job Application"<${mailUser}>"`,
      //to: "shihab.dgency@gmail.com",
      to: `${mailReceiver}`,
      //bcc: `${mailReceiverBcc}`,
      bcc: "dgency.com@gmail.com",
      subject: `Job Application - ${recname}`,
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
    });
  } catch (error) {
    emailErrors.aiaErr = error;
    mailsend = false;
  }
  // sending email to applicant=========================

  // return res.status(500).json({ data: retbody,success:false,errors:error});
  if (!mailsend) {
    emailErrors.pdfErr = "file created but mail not send";
    return res
      .status(500)
      .json({ data: retbody, success: false, errors: emailErrors });
  } else {
    res.status(200).json({
      data: {
        email: retbody.info1.email,
        name: recname,
        filepath: pdfRes.pdfPath,
      },

      success: true,
    });
  }
}
