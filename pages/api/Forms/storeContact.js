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
        "toMgrEmail":body.toMgrEmail

    }
  
 
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secureConnection: false,
      tls: {
        ciphers: 'SSLv3'
    },
      auth: {
        user: 'sender@allinadventures.com',
        pass: 'DgencyAIA@2023'
      }
    });

      try {
        await transporter.sendMail({
          from: retData.Email,
          to: retData.toEmail+","+retData.toMgrEmail,
          cc:"dgency.com@gmail.com ",
          bcc:"shihab.dgency@gmail.com",
          subject: `Store Contact from ${retData.Name}`,
          html: `
                <p><strong>Name: </strong> ${retData.Name}</p>
              <p><strong>Phone: </strong> ${retData.Phone}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
            <p><strong>Subject of communication: </strong> ${retData.comSub}</p>
            <p><strong>Message: </strong> <br> ${retData.mEssage}</p>
          `
        });
      } catch (error) {
        return res.status(500).json({ data: error,success:false});
      }
    res.status(200).json({ data: retData,success:true})
  }