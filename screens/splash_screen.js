import React, { useEffect } from "react";
import { ImageBackground, Text } from "react-native";
const BackGroundIMG = require("../assets/images/splash_background.jpg");

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
    <ImageBackground
      source={BackGroundIMG}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></ImageBackground>
  );
};

export default SplashScreen;
