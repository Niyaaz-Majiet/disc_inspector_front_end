// import RNFetchBlob from "rn-fetch-blob";
import { encodeToBase64 } from "pdf-lib";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

const DEFAULT_PDF_PATH =
  "https://scriptwhizimages.s3.amazonaws.com/LicenceDiskForm.pdf";
const fileOptions = {
  base64: { encoding: FileSystem.EncodingType.Base64 },
  utf8: { encoding: FileSystem.EncodingType.Base64 },
};

export const savePDF = async (pdfBytes, path, chunkSize = 100000) => {
  try {
    await FileSystem.writeAsStringAsync(path, pdfBytes, fileOptions.base64);
  } catch (e) {
    console.log(`Error saving pdf content to file: ${e.message}`);
    Alert.alert("There was a problem saving your pdf. Please try again later");
  }
};

const readFile = async (path) => {
  const content = await FileSystem.readAsStringAsync(path, fileOptions.base64);
  console.log("PDF Content : \n", JSON.stringify(content));
  return content;
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
    const pdfContent = await readFile(file.uri);
    return { filePath: file.uri, content: pdfContent };
  }
};
