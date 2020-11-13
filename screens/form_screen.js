import React from "react";
import { View, Button } from "react-native";

const FormScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go To Summary"
        onPress={() => -navigation.navigate("summary")}
      />
    </View>
  );
};

export default FormScreen;
