import rateLimit from "express-rate-limit";
//import { rateLimit } from "express-rate-limit";
/*
const getIP = (req) => {
  const clientIp =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.connection?.remoteAddress ||
    "127.0.0.1";
  console.log("Client ip " + clientIp);
  return clientIp;
};

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 5, // Limit each IP to 5 requests per window
  keyGenerator: (req) => getIP(req), // Use extracted IP
  message: { error: "Too many requests, please try again later." },
  standardHeaders: "draft-8",
  legacyHeaders: false,
});
*/
const getIP = (req) => {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.connection?.remoteAddress ||
    "127.0.0.1"
  );
};

// Configure rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // reset after  min
  //max: 5,
  limit: 8, // Limit each IP to 2 requests per window
  keyGenerator: (req) => getIP(req),
  message: { error: "Too many requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) => {
    const remainingRequests = res.getHeader("RateLimit-Remaining") || 0;
    const resetAfter =
      res.getHeader("RateLimit-Reset") || Math.ceil(limiter.windowMs / 1000);
    const resetRemMin = Math.ceil(resetAfter / 60);

    res.status(429).json({
      success: false,
      data: {
        remainingRequests: remainingRequests,
        resetAfter: resetRemMin,
        error: "Too many requests. Retry again after " + resetRemMin + "min",
      },
    });
  },
});
export async function checkRateLimiter(req, res) {
  console.log("Rate limit checking...");

  return new Promise((resolve) => {
    limiter(req, res, () => {
      // Extract rate limit headers
      const remainingReq = res.getHeader("RateLimit-Remaining");
      const resetAfter =
        res.getHeader("RateLimit-Reset") || Math.ceil(limiter.windowMs / 1000);
      const resetRemMin = Math.ceil(resetAfter / 60);
      console.log("RateLimit Remaining.." + JSON.stringify(remainingReq));

      resolve({
        success: true,
        data: {
          remainingRequests: remainingReq,
          resetAfter: resetRemMin,
        },
      });
    });
  });
}
//old limiter
export async function setRateLimiterold(req, res) {
  // console.log("Rate limit checking...");
  // let retObj = {};
  try {
    limiter(req, res, async () => {
      const remainingReq = res.getHeader("RateLimit-Remaining");
      //   console.log("RateLimit Remaining.." + JSON.stringify(remReq));
      const resetAfter =
        res.getHeader("RateLimit-Reset") || Math.ceil(limiter.windowMs / 1000);
      const resetRemMin = Math.ceil(resetAfter / 60);
      return {
        success: true,
        data: {
          remainingRequests: remainingReq,
          resetAfter: resetRemMin,
        },
      };
    });
  } catch (error) {
    const resetAfter =
      res.getHeader("RateLimit-Reset") || Math.ceil(limiter.windowMs / 1000);
    const resetRemMin = Math.ceil(resetAfter / 60);
    return {
      success: false,
      data: {
        remainingRequests: res.getHeader("RateLimit-Remaining") || 0,
        resetAfter: resetRemMin,
        error: "Too many requests. Retry again after " + resetRemMin + "min",
      },
    };
  }
}
