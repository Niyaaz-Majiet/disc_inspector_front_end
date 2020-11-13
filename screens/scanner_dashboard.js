import React from "react";
import { View, Button } from "react-native";

const ScannerScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Go To Form" onPress={() => navigation.navigate("form")} />
    </View>
  );
};

export default ScannerScreen;
