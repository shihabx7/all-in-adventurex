import path from "path";
import fs from "fs";
import pdf from "pdf-creator-node";
import handlebars from "handlebars";
//import pdf from html-pdf

export async function creatPdfApplication(pdfData) {
  var templateHtml = fs.readFileSync(
    path.join(process.cwd(), "pdf/pdfhtml.html"),
    "utf8"
  );
  var options = {
    format: "Letter",
    orientation: "portrait",
    border: "12mm",
    header: {
      height: "4mm",
      //contents: '<div style="background:#FFF7EA;"><p style="margin:0px;">Job application form</p> <p style="margin:4px; color:#888888">'+pdt+'</p></div>'
    },
    footer: {
      height: "2mm",
      //  contents: {
      // //     first: '',
      //      2: '', // Any page number is working. 1-based index
      //      default: '', // fallback value
      //      last: ''
      //   }
    },
  };
  var logo = fs.readFileSync(path.join(process.cwd(), "pdf/tik.jpg"), "base64");

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
  var document = {
    html: templateHtml,
    data: {
      info: pdfData,
      tik: logo,
      pubdate: pubdate,
    },
    path: outpath,
    type: "",
  };
  let retData = {
    pdfpath: "",
    success: false,
  };

  const pdfc = pdf.create(document, options);
  /*
    .then((res) => {
      //console.log(res);
      retData.pdfpath = outpath;
      retData.success = true;
      retData.msg = res;
    })
    .catch((error) => {
      retData.pdfpath = outpath;
      retData.success = false;
      retData.msg = error;
      //console.error(error);
    }); */
  if (!pdfc) {
    retData.pdfpath = outpath;
    retData.success = false;
  } else {
    retData.pdfpath = outpath;
    retData.success = true;
  }

  return retData;
}
