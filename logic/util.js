// import RNFetchBlob from "rn-fetch-blob";
import { encodeToBase64 } from "pdf-lib";
import * as FileSystem from "expo-file-system";

// const PDF_PATH = `${RNFetchBlob.fs.dirs.DocumentDir}/Vehicle_Disk_Renewal_Form.pdf`;
const DEFAULT_PDF_PATH =
  "https://scriptwhizimages.s3.amazonaws.com/LicenceDiskForm.pdf";

export const savePDF = async (pdfBytes, chunkSize = 100000) =>
  console.log("Need to be implemented");
/* TODO: Figure out issue with error
    null is not an object(evaluating 'RNFetchBlobDocumentDir')
  
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
  }); */
const readFile = async (path) => {
  const content = await FileSystem.readAsStringAsync(
    path,
    FileSystem.EncodingType.Base64
  );
  return content;
};

export const fetchPDF = async (path = DEFAULT_PDF_PATH) => {
  //download file to filesystem
  const docPath =
    FileSystem.documentDirectory + "Vehicle_Disk_Renewal_Form.pdf";
  const res = await FileSystem.downloadAsync(encodeURI(path), docPath);

  //Read file and return contents
  return readFile(docPath);
};
