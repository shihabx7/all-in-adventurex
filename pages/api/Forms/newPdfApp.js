const fs = require("fs");
import path from "path";
const handlebars = require("handlebars");
const pdf = require("html-pdf");
const nodemailer = require("nodemailer");

export async function newPdfApp(pdfData) {
  console.log("new pdf");
  console.log(pdfData);

  // helper
  handlebars.registerHelper("ifCond", function (v1, operator, v2, options) {
    switch (operator) {
      case "==":
        return v1 == v2 ? options.fn(this) : options.inverse(this);
      case "===":
        return v1 === v2 ? options.fn(this) : options.inverse(this);
      case "!=":
        return v1 != v2 ? options.fn(this) : options.inverse(this);
      case "!==":
        return v1 !== v2 ? options.fn(this) : options.inverse(this);
      case "<":
        return v1 < v2 ? options.fn(this) : options.inverse(this);
      case "<=":
        return v1 <= v2 ? options.fn(this) : options.inverse(this);
      case ">":
        return v1 > v2 ? options.fn(this) : options.inverse(this);
      case ">=":
        return v1 >= v2 ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  });

  //helper

  var templateHtml = fs.readFileSync(
    path.join(process.cwd(), "pdf/pdfhtml.html"),
    "utf8"
  );
  const template = handlebars.compile(templateHtml);
  var logo = fs.readFileSync(path.join(process.cwd(), "pdf/tik.jpg"), "base64");

  const options = {
    orientation: "portrait",
    format: "Letter",
    border: {
      top: "0.5in", // You can adjust the image placement by adjusting these values
      right: "0.4in",
      bottom: "0.5in",
      left: "0.4in",
    },
  };

  // file name and path
  var dt = new Date();
  var mn = dt.getMonth() + 1;
  var pdt = mn + "_" + dt.getDate() + "_" + dt.getFullYear();
  var pubdate = mn + "-" + dt.getDate() + "-" + dt.getFullYear();
  var d = new Date();
  var fileTxtname =
    pdfData.info1.fName.trim().split(" ").join("_") +
    "_" +
    pdfData.info1.lName.trim().split(" ").join("_");

  var pdfnpath =
    "pdf/" +
    fileTxtname +
    "_" +
    pdt +
    "_" +
    d.getFullYear() +
    d.getDate() +
    d.getHours() +
    d.getMinutes() +
    d.getMilliseconds() +
    ".pdf";

  var outpath = path.join(process.cwd(), pdfnpath);

  const htpData = {
    info: pdfData,
    tik: logo,
    pubdate: pubdate,
  };
  const html = template(htpData);

  return new Promise((resolve) => {
    pdf.create(html, options).toFile(outpath, function (pdfErr, res) {
      if (pdfErr) {
        resolve({ success: false, pdfPath: outpath });
      } else {
        //console.log("PDF created:", res);
        resolve({ success: true, pdfPath: outpath });
      }
    });
  });
}
