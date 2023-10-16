const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");
import path from "path";
const handlebars = require("handlebars");
const fs = require("fs").promises;
const fontkit = require("fontkit");

export async function pdfPdfLib(pdfData) {
  //console.log("new pdf");
  //console.log(pdfData);

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

  var logo = fs.readFile(path.join(process.cwd(), "pdf/tik.jpg"), "base64");

  // file name and path
  var dt = new Date();
  var mn = dt.getMonth() + 1;
  var pdt = mn + "_" + dt.getDate() + "_" + dt.getFullYear();
  var pubdate = mn + "-" + dt.getDate() + "-" + dt.getFullYear();
  var d = new Date();
  //var fileTxtname =
  /*pdfData.info1.fName.trim().split(" ").join("_") +
    "_" +
    pdfData.info1.lName.trim().split(" ").join("_"); */

  var pdfnpath =
    "pdf/" +
    "aia" +
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
    var templateHtml = await fs.readFile(
      path.join(process.cwd(), "pdf/pdfhtml.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(htpData);

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    pdfDoc.registerFontkit(fontkit);

    // Create a page with A4 dimensions (8.27 x 11.69 inches)
    const page = pdfDoc.addPage([595.276, 841.89]); // 1 inch = 72 units
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const fontSize = 16;
    const fontColor = rgb(1, 1, 1);

    // Set a 0.5-inch margin on all sides
    const margin = 36; // 0.5 inch in PDF units (1 inch = 72 unit
    const { width, height } = page.getSize();
    page.drawText(html, {
      x: margin,
      y: height - margin - 16, // Adjust the y-coordinate for text placement
      size: 16,
      color: rgb(0, 0, 0),
    });

    // Save the PDF to a file
    const pdfBytes = await pdfDoc.save();
    await fs.writeFile(outpath, pdfBytes);

    return { success: true, pdfPath: outpath };
  } catch (error) {
    return { success: false, pdfPath: outpath, error: error.message };
  }
}
