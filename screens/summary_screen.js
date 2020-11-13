import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const SummaryScreen = ({ navigation, route }) => {
  const vehicleInfo = route.params;

  const HandleDone = () => {};

  const handlePdfGeneration = () => {};

  return (
    <View style={globalStyles.container}>
      <View>
        {vehicleInfo.expired ? (
          <Text style={globalStyles.summaryLabel}>
            Hi Sir/Madam, Your {vehicleInfo.Model} {vehicleInfo.Make}{" "}
            {vehicleInfo.VehicleDescription} is not up to date. Days since
            expiration : {vehicleInfo.days * -1}
          </Text>
        ) : (
          <Text style={globalStyles.summaryLabel}>
            Hi Sir/Madam, Your {vehicleInfo.Model} {vehicleInfo.Make}{" "}
            {vehicleInfo.VehicleDescription} is up to date. Days to expiration :{" "}
            {vehicleInfo.days}
          </Text>
        )}
      </View>
      <Button onPress={() => HandleDone()}>Done</Button>
      <Button onPress={() => handlePdfGeneration()}>Done</Button>
    </View>
  );
};

export default SummaryScreen;
