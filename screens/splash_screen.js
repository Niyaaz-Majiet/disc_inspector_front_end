import * as React from "react";
import { View, Button, Alert } from "react-native";

const SplashScreen = ({ navigation }) => {
  const navigateToScannerScreen = () => {
    Alert.alert("Scanner clicked");
    navigation.navigate("scanner");
  };

  return (
    <View>
      <Button title="Go To Scanner" onPress={() => navigateToScannerScreen()} />
    </View>
  );
};

export default SplashScreen;
