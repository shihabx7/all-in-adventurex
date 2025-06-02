import { recieveEmail } from "./formProtection/recieveEmail";
import {
  verifyGoogleCaptcha,
  verifyFormData,
} from "./formProtection/verifyClient";
import { checkRateLimiter } from "./formProtection/reqRateLimit";

const escapeHtml = (htmlStr) => {
  return htmlStr.replace(/&/g, "&amp;").replace(/</g, " ").replace(/>/g, " ");
  // .replace(/(?:\r\n|\r|\n)/g, "<br>");
};

export default async function fransContactHandler(req, res) {
  // Get data submitted in request's body.
  //const body = req.body;
  //console.log("Data recieve " + JSON.stringify(req.body));

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  // console.log('Name: ', body.fName)
  const fName = req.body.fName ? escapeHtml(req.body.fName.trim()) : "";
  const lName = req.body.lName ? escapeHtml(req.body.lName.trim()) : "";
  const email = req.body.email ? escapeHtml(req.body.email.trim()) : "";
  const phone = req.body.phone ? escapeHtml(req.body.phone.trim()) : "";
  const city = req.body.city ? escapeHtml(req.body.city.trim()) : "";
  const state = req.body.state ? escapeHtml(req.body.state.trim()) : "";

  const address = req.body.address ? escapeHtml(req.body.address.trim()) : "";
  const netWorth = req.body.netWorth
    ? escapeHtml(req.body.netWorth.trim())
    : "";
  const liqAssets = req.body.liqAssets
    ? escapeHtml(req.body.liqAssets.trim())
    : "";
  const visitAIA = req.body.visitAIA
    ? escapeHtml(req.body.visitAIA.trim())
    : "";

  const preferredstate = req.body.address
    ? escapeHtml(req.body.preferredstate.trim())
    : "";

  const planForVenture = req.body.planForVenture
    ? escapeHtml(req.body.planForVenture.trim())
    : "";
  const fchoiceCity = req.body.fchoiceCity
    ? escapeHtml(req.body.fchoiceCity.trim())
    : "";
  const schoiceCity = req.body.schoiceCity
    ? escapeHtml(req.body.schoiceCity.trim())
    : "";

  const preferredTimeFrame = req.body.preferredTimeFrame
    ? escapeHtml(req.body.preferredTimeFrame.trim())
    : "";
  const otherInvolvement = req.body.otherInvolvement
    ? escapeHtml(req.body.otherInvolvement.trim())
    : "";
  const opPlan = req.body.opPlan ? escapeHtml(req.body.opPlan.trim()) : "";

  const profExp = req.body.profExp ? escapeHtml(req.body.profExp.trim()) : "";
  const urBelieve = req.body.urBelieve
    ? escapeHtml(req.body.urBelieve.trim())
    : "";
  const botMsg = req.body.botMsg ? escapeHtml(req.body.botMsg.trim()) : "";
  const captchaToken = req.body.captchaToken ? req.body.captchaToken : "";
  //console.log("captcha length" + captchaToken.length);

  const retData = {
    Name: fName + " " + lName,
    Email: email,
    Phone: phone,
    City: city,
    State: state,
    Address: address,
    NetWorth: netWorth,
    LiqAssets: liqAssets,
    visitAIA: visitAIA,
    preferredstate: preferredstate,
    planForVenture: planForVenture,
    preferredCity1: fchoiceCity,
    preferredCity2: schoiceCity,
    preferredTimeFrame: preferredTimeFrame,
    otherInvolvement: otherInvolvement,
    opPlan: opPlan,
    profExp: profExp,
    urBelieve: urBelieve,
    botMsg: botMsg,
    captchaToken: captchaToken,
    reqLimitData: { remainingRequests: 0, resetAfter: 0 },
    captchaScore: "",
  };
  // =================================================check req limit
  const verifyreqLimit = await checkRateLimiter(req, res);
  // console.log(verifyreqLimit);
  if (!verifyreqLimit.success) {
    // res.setHeader("Retry-After", limitData.data.resetAfter);
    return res.status(429).json(limitData);
  }
  retData.reqLimitData = verifyreqLimit.data;
  // console.log("limit check");
  //==================== ====================== verify req method
  if (req.method !== "POST") {
    return res.status(405).json({
      data: { error: "Method Not Allowed" },
      success: false,
    });
  }
  console.log("method check");
  //==================== ==================================bot checking
  if (typeof botMsg !== "string" || botMsg.length > 0) {
    return res
      .status(403)
      .json({ data: { error: "Bot is not allowed" }, success: false });
  }
  console.log("bot check");
  //==================== =================================verify Client data
  const vDataArr = [
    {
      data: fName,
      min: 3,
      max: 24,
      type: "string",
      pattern: "name",
    },
    {
      data: lName,
      min: 3,
      max: 24,
      type: "string",
      pattern: "name",
    },
    {
      data: email,
      min: 6,
      max: 60,
      type: "string",
      pattern: "email",
    },
    {
      data: phone,
      min: 7,
      max: 16,
      type: "string",
      pattern: "phone",
    },
    {
      data: city,
      min: 2,
      max: 30,
      type: "string",
      pattern: "name",
    },
    {
      data: state,
      min: 2,
      max: 30,
      type: "string",
      pattern: "name",
    },
    {
      data: address,
      min: 3,
      max: 250,
      type: "string",
    },
    {
      data: netWorth,
      min: 3,
      max: 80,
      type: "string",
    },
    {
      data: liqAssets,
      min: 3,
      max: 80,
      type: "string",
    },
    {
      data: visitAIA,
      min: 1,
      max: 20,
      type: "string",
    },
    {
      data: preferredstate,
      min: 2,
      max: 60,
      type: "string",
      pattern: "name",
    },
    {
      data: planForVenture,
      min: 3,
      max: 80,
      type: "string",
    },
    {
      data: fchoiceCity,
      min: 3,
      max: 80,
      type: "string",
    },
    {
      data: schoiceCity,
      min: 3,
      max: 80,
      type: "string",
    },
    {
      data: preferredTimeFrame,
      min: 2,
      max: 60,
      type: "string",
    },
    {
      data: otherInvolvement,
      min: 1,
      max: 20,
      type: "string",
    },
    {
      data: opPlan,
      min: 3,
      max: 300,
      type: "string",
    },
    {
      data: profExp,
      min: 3,
      max: 300,
      type: "string",
    },
    {
      data: urBelieve,
      min: 3,
      max: 300,
      type: "string",
    },

    {
      data: captchaToken,
      min: 20,
      max: 2400,
      type: "string",
    },
  ];
  const verifyClientData = await verifyFormData(vDataArr);
  // console.log("Data valid? " + verifyClientData.isValid);
  console.log(verifyClientData);
  if (!verifyClientData.isValid) {
    return res.status(400).json({
      data: { error: "Ivalid data or captcha token. Try gain later" },
      success: false,
    });
  }
  // console.log("Data check");
  // ==========================================================Verify reCAPTCHA token from Google
  const verifyCaptcha = await verifyGoogleCaptcha(captchaToken);
  //  console.log("captcha check" + verifyCaptcha);
  if (!verifyCaptcha.isValid) {
    return res.status(400).json({
      data: { error: "Failed CAPTCHA verification" },
      success: false,
    });
  }
  retData.captchaScore = verifyCaptcha.score;
  // console.log("captcha score" + retData.captchaScore);
  // return res.status(200).json({ data: retData, success: true });

  const mailOptions = {
    from: '"AIA Franschise Contact" <sender@allinadventures.com>',
    to: "franchise@allinadventures.com",
    //to: "shihab.dgency@gmail.com",
    replyTo: email,
    bcc: "dgency.com@gmail.com,shihab.dgency@gmail.com",
    subject: `Franchise Contact`,
    html: `
          
          <p style="padding:8px 0px;border-bottom:1px solid #888888; color:#565656 font-size:20px; font-weight:600; max-width:600px;">CONTACT DETAILS</p>
                <p><strong>Name: </strong> ${fName} ${lName}</p>
              <p><strong>Phone: </strong> ${phone}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>City: </strong> ${city}</p>
            <p><strong>State: </strong> ${state}</p>
            <p><strong>Address: </strong> ${address}</p>
            <p style="padding:8px 0px;border-bottom:1px solid #888888;color:#565656; font-size:20px; font-weight:600; max-width:600px;">ABOUT FRANCHISE</p>
            <p><strong>Current net worth: </strong> ${netWorth}</p>
            <p><strong>Current liquid assets: </strong> ${liqAssets}</p>
            <p><strong>Plan for funding a venture of this nature: </strong> ${planForVenture}</p>
          <p><strong>Visited an ALL IN ADVENTURES before: </strong> ${visitAIA}</p>
          <p><strong>Preferred state to open a new venue: </strong> ${preferredstate}</p>
          <p><strong>First choice city: </strong> ${preferredCity1}</p>
          <p><strong>Second  choice city: </strong> ${preferredCity2}</p>
          <p><strong>Preferred timeframe: </strong> ${preferredTimeFrame}</p>
     
          <p><strong>Involvement with other franchisees: </strong> ${otherInvolvement}</p>
          <p><strong>Operations plan: </strong> ${opPlan}</p>
          <p><strong>Other professional/relevant experiences: </strong> ${profExp}</p>
          <p><strong>What will make you a great ALL IN ADVENTURES franchisee: </strong> ${urBelieve}</p>
          `,
  };
  const sendEmailRes = await recieveEmail(mailOptions);
  if (!sendEmailRes.success) {
    return res.status(500).json(sendEmailRes);
  }

  return res.status(200).json(sendEmailRes);
}
