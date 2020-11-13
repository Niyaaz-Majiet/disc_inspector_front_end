import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { PDFDocument } from "pdf-lib";
import { savePDF, fetchPDF } from "./../logic/util";

const FormScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const populatePDF = async () => {
      const base64PDF = await fetchPDF();
      const pdfDoc = await PDFDocument.load(base64PDF);
      const form = pdfDoc.getForm();

      /* 
        Example used to test whether setting form field works as expected etc
        No need for second console log as we have not yet written to disk.
        We're shooting ourselves in the foot basically. Ignore that piece of code 
        for now 
      */
      const identityNumber = form.getTextField("Identification number");
      console.log("Identifity form result #: \n", identityNumber);
      identityNumber.setText("5372456846523645873");
      console.log(" ======= Identity # Set =======");
      console.log("Identifity form result #: \n", identityNumber);

      /* 
       * Get Vehicle Owner's  vehicle particulars and populate them with DUMMY values until we have
       * the data propagating here properly... 
       * Fields: 
        @param licenseNO - ...
        @param vehicleRegNo - ...
        @param VinNo - ...
        @param Make - ...
        @param Odometer reading - ...

       * TODO: Consider scanning owner's driver's licence in order to get owner particulars
       * use these to populate owner's particulars etc
       * Uncertain if fields will come back as text / checkbox. Trial/error
       * Assuming text at this point
       * Add input field to add odometer reading if available at the end etc
      */
      const licenceNumber = form.getTextField();
      const vehicleRegNumber = form.getTextField();
      const vinNumber = form.getTextField();
      const makeNumber = form.getTextField();
      const odometer = form.getTextField();

      licenceNumber.setText("HB10CBGP");
      vehicleRegNumber.setText("YCK099W");
      vinNumber.setText("MDHZ0000000000101010101001");
      makeNumber.setText("DATSUN");
      odometer.setText("51000");

      //convert to binary data
      const pdfContent = await pdfDoc.save();
      //Save to device storage
      try {
        await savePDF(pdfContent);
        setIsLoading(false); //bool config for spinner etc
      } catch (e) {
        console.log(`Error saving PDF file to device: `, e.message);
        setIsLoading(false);
      }
    };

    // pass args{} from summary screen here
    populatePDF();
  }, []);
  return (
    <View>
      <View>
        {isLoading && <Text>{"Downloading PDF..."}</Text>}
        {!isLoading && (
          <Text>
            {
              "Your Licence Renewal PDF has been downloaded to your documents..."
            }
          </Text>
        )}
      </View>
      {errorMsg && errorMsg.length > 0 && (
        <View>
          <Text>{`There was a problem downloading your PDF. Please try again later`}</Text>
        </View>
      )}
    </View>
  );
};

export default FormScreen;
