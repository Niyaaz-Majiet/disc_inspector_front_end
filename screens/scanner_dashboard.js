import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import BarcodeMask from "react-native-barcode-mask";

const finderWidth = 280;
const finderHeight = 230;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

const ScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (scanningResult) => {
    if (!scanned) {
      const { type, data, bounds: { origin } = {} } = scanningResult;

      const { x, y } = origin;
      if (
        x >= viewMinX &&
        y >= viewMinY &&
        x <= viewMinX + finderWidth / 2 &&
        y <= viewMinY + finderHeight / 2
      ) {
        setScanned(true);
        const processedData = data.split("%");
        const vehicleInfo = {
          RegNo: processedData[1],
          Tarre: processedData[2],
          NatisLicenseNumber: processedData[3],
          RegistrationFrequency: processedData[4],
          DiscNumber: processedData[5],
          LiscenseNumber: processedData[6],
          VehicleRegistrationNumber: processedData[7],
          VehicleDescription: processedData[8],
          Make: processedData[9],
          Model: processedData[10],
          Color: processedData[11],
          Vin: processedData[12],
          EngineNumber: processedData[13],
          ExpiryDate: processedData[14],
        };
        alert(
          `Bar code with type ${type} and data ${processedData} has been scanned!`
        );
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        type={type}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.pdf417]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: "transparent",

            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,

              alignItems: "flex-end",
            }}
            onPress={() => {
              setType(
                type === BarCodeScanner.Constants.Type.back
                  ? BarCodeScanner.Constants.Type.front
                  : BarCodeScanner.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, margin: 5, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />

        {scanned && (
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        )}
      </BarCodeScanner>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",
  },

  title: {
    fontSize: 20,

    fontWeight: "bold",
  },

  separator: {
    marginVertical: 30,

    height: 1,

    width: "80%",
  },
});

export default ScannerScreen;
