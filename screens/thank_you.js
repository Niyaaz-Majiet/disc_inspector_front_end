import React from "react";
import { View, Button, Text } from "react-native";

const ThankYou = ({ navigation }) => {
  const navigateToScan = () => {
    navigation.navigate("scanner");
  };

  return (
    <View>
      <Text>{"Thank you for using Inspector Vehicle!"}</Text>
      <Button title="Scan Again?" onPress={() => navigateToScan()} />
    </View>
  );
};

export default ThankYou;
