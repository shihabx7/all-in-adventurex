import csrf from "csrf";
import Cors from "cors";

const tokens = new csrf();
const secret = process.env.CSRF_SECRET || tokens.secretSync();

export default async function getCsrfToken(req, res) {
  const token = tokens.create(secret);
  console.log("Csrf token: " + token);

  if (req.method !== "GET") {
    return res.status(400).json({ message: "Invalid request" });
    //return response;
  }

  // Initialize CSRF protection
  //const csrfProtection = csrf({ cookie: true });

  // Initialize CORS (if needed)
  const cors = Cors({
    origin: "http://localhost:3000", // Adjust for production
    credentials: true, // Allow cookies
  });
  const liveH = `X-CSRF-TOKEN=${token}; Path=/; httpOnly=true; Secure=true;`;
  const localH = `X-CSRF-TOKEN=${token}; Path=/; SameSite=None; Secure=false;`;
  //res.setHeader("Set-Cookie", localH);
  res.setHeader("Set-Cookie", liveH);

  return res.status(200).json({ csrfToken: token, success: true });
}
