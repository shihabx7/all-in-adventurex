import nodemailer from "nodemailer";
export default async function couponFormHandler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
   // console.log('Name: ', body.fName)
    const retData={
        "Name":body.name,
        "Email":body.email,
    

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
          to: "sales@allinadventures.com",
     
          bcc:"dgency.com@gmail.com,shihab.dgency@gmail.com",
          subject: `Deals and Coupon Subscriber`,
          html: `
          
          <p style="padding:8px 0px;border-bottom:1px solid #888888; color:#565656 font-size:20px; font-weight:700; max-width:600px;">Deals and Coupon</p>
                <p><strong>Name: </strong> ${retData.Name}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
          `
        });
      } catch (error) {
        return res.status(500).json({ data: error,success:false});
      }
    res.status(200).json({ data: retData,success:true})
  }