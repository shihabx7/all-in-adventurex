import nodemailer from "nodemailer";
export default async function fransContactHandler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
   // console.log('Name: ', body.fName)
    const retData={
        "Name":body.fName+' '+body.lName,
        "Email":body.email,
        "Phone":body.phone,
        "City":body.city,
        "State":body.state,
        "Address":body.address,
        "NetWorth":body.netWorth,
        "LiqAssets":body.liqAssets,
        "visitAIA":body.visitAIA,
        "preferredstate":body.preferredstate,
        "planForVenture":body.planForVenture,
        "preferredCity1":body.fchoiceCity,
        "preferredCity2":body.schoiceCity,
        "preferredTimeFrame":body.preferredTimeFrame,
        "otherInvolvement":body.otherInvolvement,
        "opPlan":body.opPlan,
        "profExp":body.profExp,
        "urBelieve":body.urBelieve 

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
          to: "franchise@allinadventures.com",
          cc:"dgency.com@gmail.com ",
          bcc:"shihab.dgency@gmail.com",
          subject: `FRANCHISE  Contact from ${retData.Name}`,
          html: `
          
          <p style="padding:8px 0px;border-bottom:1px solid #888888; color:#565656 font-size:20px; font-weight:600; max-width:600px;">CONTACT DETAILS</p>
                <p><strong>Name: </strong> ${retData.Name}</p>
              <p><strong>Phone: </strong> ${retData.Phone}</p>
            <p><strong>Email: </strong> ${retData.Email}</p>
            <p><strong>City: </strong> ${retData.City}</p>
            <p><strong>State: </strong> ${retData.State}</p>
            <p><strong>Address: </strong> ${retData.Address}</p>
            <p style="padding:8px 0px;border-bottom:1px solid #888888;color:#565656; font-size:20px; font-weight:600; max-width:600px;">ABOUT FRANCHISE</p>
            <p><strong>Current net worth: </strong> ${retData.NetWorth}</p>
            <p><strong>Current liquid assets: </strong> ${retData.LiqAssets}</p>
            <p><strong>Plan for funding a venture of this nature: </strong> ${retData.planForVenture}</p>
          <p><strong>Visited an ALL IN ADVENTURES before: </strong> ${retData.visitAIA}</p>
          <p><strong>Preferred state to open a new venue: </strong> ${retData.preferredstate}</p>
          <p><strong>First choice city: </strong> ${retData.preferredCity1}</p>
          <p><strong>Second  choice city: </strong> ${retData.preferredCity2}</p>
          <p><strong>Preferred timeframe: </strong> ${retData.preferredTimeFrame}</p>
     
          <p><strong>Involvement with other franchisees: </strong> ${retData.otherInvolvement}</p>
          <p><strong>Operations plan: </strong> ${retData.opPlan}</p>
          <p><strong>Other professional/relevant experiences: </strong> ${retData.urBelieve}</p>
          <p><strong>What will make you a great ALL IN ADVENTURES franchisee: </strong> ${retData.urBelieve}</p>
          `
        });
      } catch (error) {
        return res.status(500).json({ data: error,success:false});
      }
    res.status(200).json({ data: retData,success:true})
  }