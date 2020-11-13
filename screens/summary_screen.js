import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const SummaryScreen = ({ navigation, route }) => {
  const vehicleInfo = route.params;

  const HandleDone = () => {
    navigation.navigate("thankyou");
  };

  const handlePdfGeneration = () => {
    navigation.navigate("form", vehicleInfo);
  };

  return (
    <View style={globalStyles.summaryContainer}>
      <View style={globalStyles.summaryParagraphContainer}>
        <Text style={globalStyles.summaryHeader}>Hi Sir/Madam,</Text>
        {vehicleInfo.expired ? (
          <View>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Your {vehicleInfo.Model} {vehicleInfo.Make}{" "}
              {vehicleInfo.VehicleDescription} is not up to date. Days since
              expiration : {vehicleInfo.days * -1}
            </Text>
            {vehicleInfo.days * -1 < 21 && (
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Licesnse still valid for {21 - vehicleInfo.days * -1} days
              </Text>
            )}
            <Text></Text>
          </View>
        ) : (
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Your {vehicleInfo.Model} {vehicleInfo.Make}{" "}
            {vehicleInfo.VehicleDescription} is up to date. Days to expiration :{" "}
            {vehicleInfo.days}
          </Text>
        )}
      </View>
      <View style={globalStyles.summaryRow}>
        <TouchableOpacity
          style={globalStyles.btnCancel}
          onPress={() => handlePdfGeneration()}
        >
          <Text style={globalStyles.innerText}>GeneratePDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.btn} onPress={() => HandleDone()}>
          <Text style={globalStyles.innerTextWhite}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryScreen;
