import nodemailer from "nodemailer";
//import puppeteer from 'puppeteer';
import path from 'path'
import fs from 'fs'

import pdf from 'pdf-creator-node'
//import handlebars from 'handlebars'


export default async function jobApplicationHandler(req, res) {
 
    // Get data submitted in request's body.
    var dt=new Date()
    var mn=dt.getMonth()+1
    var pdt=dt.getFullYear()+'/'+mn+'/'+dt.getDate()
    const retbody = req.body
    // ============================pdf file
    var templateHtml = fs.readFileSync(path.join(process.cwd(), 'pdf/pdfhtml.html'), 'utf8');
    var options = {
      format: "Letter",
      orientation: "portrait",
      border: "12mm",
      header: {
          height: "4mm",
          //contents: '<div style="background:#FFF7EA;"><p style="margin:0px;">Job application form</p> <p style="margin:4px; color:#888888">'+pdt+'</p></div>'
      },
      footer: {
          height: "4mm",
        //  contents: {
        // //     first: '',
        //      2: '', // Any page number is working. 1-based index
        //      default: '', // fallback value
        //      last: ''
       //   }
      }
  };
  var bitmap=fs.readFileSync(path.join(process.cwd(), 'pdf/tik.png'))
  //const bitmap = fs.readFileSync(__dirname+ "/pdf/tik.png");
const logo = bitmap.toString('base64');
 
var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
    
  var d=new Date()
  var pdfnpath='pdf/Job_Application_'+d.getFullYear()+d.getFullYear()+d.getDate()+d.getHours()+d.getMinutes()+d.getMilliseconds()+'aia.pdf'
  
 
  
  

 var outpath=path.join(process.cwd(), pdfnpath)
  var document = {
    html: templateHtml,
    data: {
      info: retbody,
      tik:logo
    },
    path: outpath,
    type: "",
  };

 
  pdf.create(document, options).then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

  // ============================pdf file======================================
  
   
    const transporter = nodemailer.createTransport({
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
      });
      

      try {
        await transporter.sendMail({
          from: "sender@allinadventures.com",
          to: "dgency.com@gmail.com",
          bcc:"shihab.dgency@gmail.com",
          subject: `Job Application from PDF`,
          html: `
                <h2><strong>Name: </strong> Pdf test </h2>
                <hr/>
              <p><strong>Company: </strong> ${retbody.refinfo.ref1.refCompany}</p>
              <p><strong>Title: </strong> ${retbody.refinfo.ref1.refTitle}</p>
              <p><strong>Relationship: </strong> ${retbody.refinfo.ref1.refRelation}</p>
              <p><strong>Length of Time Known: </strong> ${retbody.refinfo.ref1.refTimeLength}</p>
              <p><strong>Phone: </strong> ${retbody.refinfo.ref1.refPhone}</p>
              <p><strong>Email: </strong> ${retbody.refinfo.ref1.refEmail}</p>
           
          `,
          attachments: [
            {   // utf-8 string as an attachment
               path:outpath
            },
          ]
        });
      } catch (error) {
        return res.status(500).json({ data: retbody,success:false,errors:error});
      }
  
    
    res.status(200).json({ data: retbody,success:true})
  }