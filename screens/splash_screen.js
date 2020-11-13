import React, { useEffect } from "react";
import { View, Text } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "scanner" }],
      });
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Splash Screen !!!</Text>
    </View>
  );
};

export default SplashScreen;
