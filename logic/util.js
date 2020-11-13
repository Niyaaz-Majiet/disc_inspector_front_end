import RNFetchBlob from "rn-fetch-blob";
import { encodeToBase64 } from "pdf-lib";
const PDF_PATH = `${RNFetchBlob.fs.dirs.DocumentDir}/Vehicle_Disk_Renewal_Form.pdf`;
const DEFAULT_PDF_PATH =
  "https://scriptwhizimages.s3.amazonaws.com/LicenceDiskForm.pdf";

export const savePDF = async (pdfBytes, chunkSize = 100000) =>
  new Promise((resolve) => {
    const writes = [];
    RNFetchBlob.fs.writeStream(PDF_PATH, "base64").then((stream) => {
      // Iterate through pdfBytes encoding chunks into base64 and writing them out
      for (let i = 0; i < pdfBytes.length; i += chunkSize) {
        const chunk = pdfBytes.subarray(i, i + chunkSize);
        writes.push(stream.write(encodeToBase64(chunk)));
      }
      stream.close();
      Promise.all(writes).then(() => resolve(PDF_PATH));
    });
  });

export const fetchPDF = async (path = DEFAULT_PDF_PATH) => {
  const res = await RNFetchBlob.config({ fileCache: false }).fetch(
    "GET",
    `${encodeURI(path)}`,
    { "Cache-Control": "no-store" }
  );
  return res.base64();
};
