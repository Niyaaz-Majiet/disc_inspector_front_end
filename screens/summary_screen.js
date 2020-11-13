import React from "react";
import { View, Button } from "react-native";

const SummaryScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go To Splash"
        onPress={() => navigation.navigate("splash")}
      />
    </View>
  );
};

export default SummaryScreen;
