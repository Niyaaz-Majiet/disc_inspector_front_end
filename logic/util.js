// import RNFetchBlob from "rn-fetch-blob";
import { encodeToBase64 } from "pdf-lib";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

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
  const options = { encoding: FileSystem.EncodingType.Base64 };
  const content = await FileSystem.readAsStringAsync(path, options);
  return `data:image/jpg;base64${content}`;
};

export const downloadPDF = async () => {
  const docPath = FileSystem.documentDirectory + "LicenceDiskForm.pdf";

  let file = null;
  try {
    file = await FileSystem.downloadAsync(DEFAULT_PDF_PATH, docPath);
  } catch (e) {
    Alert.alert(
      "There was a problem downloading the pdf form. Please try again later"
    );
  }
  //Get permissions to download file to android system
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

  //Once permission granted, save the file to the Download folder
  if (status === "granted") {
    const asset = await MediaLibrary.createAssetAsync(file.uri);
    await MediaLibrary.createAlbumAsync("Download", asset, false);

    //read the file
    const pdfContent = readFile(file.uri);
    return pdfContent;
  }
};
