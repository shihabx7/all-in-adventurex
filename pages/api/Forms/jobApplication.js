import nodemailer from "nodemailer";
//import puppeteer from 'puppeteer';
import path from 'path'
import fs from 'fs'

import pdf from 'pdf-creator-node'
//import handlebars from 'handlebars'


export default async function jobApplicationHandler(req, res) {
 
    // Get data submitted in request's body.
  
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
          height: "2mm",
        //  contents: {
        // //     first: '',
        //      2: '', // Any page number is working. 1-based index
        //      default: '', // fallback value
        //      last: ''
       //   }
      }
  };
  var logo=fs.readFileSync(path.join(process.cwd(), 'pdf/tik.jpg'),'base64')
  //const bitmap = fs.readFileSync(__dirname+ "/pdf/tik.png");
//const logo = bitmap.toString('base64');
 
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
    
  var dt=new Date()
  var mn=dt.getMonth()+1
  var pdt=mn+'_'+dt.getDate()+'_'+dt.getFullYear()
  var d=new Date()
  var fn=retbody.info1.fName.trim().split(' ').join('_')
  var ln=fn+'_'+retbody.info1.lName.trim().split(' ').join('_')
  var pdfnpath='pdf/'+ln+'_'+pdt+'_'+d.getFullYear()+d.getDate()+d.getHours()+d.getMinutes()+d.getMilliseconds()+'.pdf'
  
 
  
  

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
   // console.log(res);
  })
  .catch((error) => {
   // console.error(error);
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
          //to: "shihab.dgency@gmail.com",
         to: "careers@allinadventures.com",
        bcc:"dgency.com@gmail.com,shihab.dgency@gmail.com",
          subject: `Job Application - ${retbody.info1.lName} ${retbody.info1.fName}`,
          html: `
              <p style="margin:4px 0px"><strong>Name: </strong> ${retbody.info1.lName} ${retbody.info1.fName} </p>
              <p style="margin:4px 0px"><strong>Phone: </strong> ${retbody.info1.phone} </p>
              <p style="margin:4px 0px"><strong>Email: </strong> ${retbody.info1.email} </p>
              <p style="margin:4px 0px"><strong>Address: </strong> ${retbody.info1.stAdd1} </p>
              <p style="margin:4px 0px"><strong>City: </strong> ${retbody.info1.city} </p>
              <p style="margin:4px 0px"><strong>State: </strong> ${retbody.info1.state} </p>
              <p style="margin:4px 0px"><strong>Country: </strong> ${retbody.info1.country}</p>
              <p style="margin:4px 0px"><strong>Career objective: </strong>${retbody.avlinfo.careerObjective}</p>
           
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
      fs.unlink(outpath, (err) => {
        if (err) {
            throw err;
        }
    
       // console.log("Delete File successfully.");
    });
    
    res.status(200).json({ data: retbody,success:true})
  }