import nodemailer from "nodemailer";
export default async function corContactHandler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
   // console.log('Name: ', body.fName)
    const retData={
        "Name":body.fName+' '+body.lName,
        "Email":body.email,
        "Phone":body.phone,
        "comSub":body.comSubject,
        "mEssage":body.msg

    }
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
   // if (!body.first || !body.last) {
      // Sends a HTTP bad request error code
    //  return res.status(400).json({ data: 'First or last name not found' })
//}
  
    // Found the name.
    // Sends a HTTP success code
   // const transporter = nodemailer.createTransport({
   //     host: "smtp.gmail.com",
   //     port: 465,
   //     secure: true,
   //     auth: {
    //      user: 'shihab.dgency@gmail.com',
    //      pass: 'figvrianzmbiucmu'
    //    }
    //  });

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
          to: "support@allinadventures.com",
          bcc:"dgency.com@gmail.com,shihab.dgency@gmail.com",
          subject: `Corporate Contact`,
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