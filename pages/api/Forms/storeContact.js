import nodemailer from "nodemailer";
export default async function corContactHandler(req, res) {
   
    const body = req.body
    
    
    const retData={
        "Name":body.fName+' '+body.lName,
        "Email":body.email,
        "Phone":body.phone,
        "comSub":body.comSubject,
        "mEssage":body.msg,
        "toEmail":body.toEmail,
        "toMgrEmail":body.toMgrEmail,
        "fromCity":body.fromCity,
        "fromState":body.fromState,

    }
  
 
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
          to: retData.toEmail+","+retData.toMgrEmail,
          bcc:"dgency.com@gmail.com,shihab.dgency@gmail.com",
          subject: `Store Contact - ${retData.fromCity}, ${retData.fromState}`,
          html: `
                <p><strong>Name: </strong> ${retData.Name}</p>
              <p><strong>Phone: </strong> ${retData.Phone}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
            <p><strong>Enquiry type: </strong> ${retData.comSub}</p>
            <p><strong>Message: </strong> <br> ${retData.mEssage}</p>
          `
        });
      } catch (error) {
        return res.status(500).json({ data: error,success:false});
      }
    res.status(200).json({ data: retData,success:true})
  }