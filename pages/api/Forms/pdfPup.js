const fs = require("fs");
import path from "path";
const handlebars = require("handlebars");

const puppeteer = require("puppeteer");

export async function pdfPup(pdfData) {
  console.log("new pdf");
  console.log(pdfData);
  const templatePath = path.join(__dirname, "path/to/template.html");
  const outputPath = path.join(__dirname, "path/to/output.pdf");
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
  //path.join(process.cwd(), "../../../pdf/pdfhtml.html"),

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
  // var outpath = path.join(path.join(__dirname, pdfnpath));
  // var outpath = "../../../" + pdfnpath;

  const htpData = {
    info: pdfData,
    tik: logo,
    pubdate: pubdate,
  };

  try {
    var templateHtml = fs.readFileSync(
      path.join(process.cwd(), "pdf/pdfhtml.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(htpData);

    // Launch a headless browser
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Set the HTML content of the page
    await page.setContent(html);

    // Generate the PDF
    await page.pdf({
      path: outpath,
      format: "A4",
    });

    // Close the browser
    await browser.close();

    return { success: true, pdfPath: outpath };
  } catch (error) {
    return { success: false, pdfPath: outpath, error: error.message };
  }
}
