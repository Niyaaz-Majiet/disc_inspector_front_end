import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const ThankYou = ({ navigation }) => {
  const navigateToScan = () => {
    navigation.navigate("scanner");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.thankYouText}>
        {"Thank you for using Inspector Vehicle!"}
      </Text>

      <TouchableOpacity
        style={globalStyles.btn}
        onPress={() => navigateToScan()}
      >
        <Text style={globalStyles.innerTextWhite}>Scan Again?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThankYou;
