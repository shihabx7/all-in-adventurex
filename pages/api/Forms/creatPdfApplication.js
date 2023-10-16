import path from "path";
import fs from "fs";
import pdf from "pdf-creator-node";
import handlebars from "handlebars";
//import pdf from html-pdf

export async function creatPdfApplication(pdfData) {
  try {
    const html = fs.readFileSync(
      path.join(process.cwd(), "pdf/pdfhtml.html"),
      "utf8"
    );
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
    var logo = fs.readFileSync(
      path.join(process.cwd(), "pdf/tik.jpg"),
      "base64"
    );
    var outpath = path.join(process.cwd(), pdfnpath);
    const options = {
      format: "A4",
      orientation: "portrait",
      border: "4mm",
      header: {
        height: "1mm",
        // contents: '<div style="text-align: center;">Header</div>',
      },
      footer: {
        height: "1mm",
      },
      childProcessOptions: {
        env: {
          OPENSSL_CONF: "/dev/null",
        },
      },
    };

    const document = {
      html: html,
      data: { info: pdfData, tik: logo, pubdate: pubdate },
      path: outpath,
      type: "pdf",
    };
    await pdf.create(document, options);
    // console.log("PDF generated successfully. PDF path:", outpath);
    return { success: true, pdfPath: outpath };
  } catch (error) {
    // console.error("Error generating PDF:", error);
    return { success: false, error: error.message };
  }
}
