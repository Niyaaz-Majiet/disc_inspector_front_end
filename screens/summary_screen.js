import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

let vehicleData = {
  VIN: "ABC12345678900000",
  scan_plate: "ABC123GP",
  scan_manuf: "VOLKSWAGEN",
  scan_model: "POLO CLASSIC",
  scan_class: "Sedan (closed top)",
  scan_eng: "ABC000001",
  scan_date: "20180731",
  scan_type: "MVL",
  pic_url: "https://api.nptracker.co.za/images/VIN/A/ABCDEFGHI.jpg",
  manufacturer: "VOLKSWAGEN (South Africa)",
  plant: "-",
  brand: "VOLKSWAGEN",
  model: "POLO CLASSIC",
  year: "2010",
  engine_number: "-",
  TokensLeft: "123",
  checks: {
    np_tracker: "true",
    external: "lock",
    expired: "false",
    manufacturer: "true",
    model: "true",
    engine: "na",
    colour: "na",
  },
  unlock: "true",
};

//destructure  -> vehicleData

const SummaryScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.row}>
        <Text style={globalStyles.summaryLabel}>Manufacturer :</Text>
        <Text style={globalStyles.summeryDetail}>
          {vehicleData.manufacturer}
        </Text>
      </View>

      <View style={globalStyles.row}>
        <Text style={globalStyles.summaryLabel}>Brand : </Text>
        <Text style={globalStyles.summeryDetail}>{vehicleData.brand}</Text>
      </View>

      <View style={globalStyles.row}>
        <Text style={globalStyles.summaryLabel}>Model : </Text>
        <Text style={globalStyles.summeryDetail}>{vehicleData.model}</Text>
      </View>

      <View style={globalStyles.row}>
        <Text style={globalStyles.summaryLabel}>Year : </Text>
        <Text style={globalStyles.summeryDetail}>{vehicleData.year}</Text>
      </View>

      <View style={globalStyles.row}>
        <Text style={globalStyles.summaryLabel}>Expired : </Text>
        <Text style={globalStyles.summeryDetail}>
          {vehicleData.checks.expired}
        </Text>
      </View>

      <View style={globalStyles.row}>
        <Text style={globalStyles.summaryLabel}>Plate Number : </Text>
        <Text style={globalStyles.summeryDetail}>{vehicleData.scan_plate}</Text>
      </View>
    </View>
  );
};

export default SummaryScreen;
