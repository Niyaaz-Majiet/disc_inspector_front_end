import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormScreen from "./screens/form_screen";
import ScannerScreen from "./screens/scanner_dashboard";
import SplashScreen from "./screens/splash_screen";
import SummaryScreen from "./screens/summary_screen";
import ThankYou from "./screens/thank_you";
import { AppLoading } from "expo";
import { useAssets } from "expo-asset";

const Stack = createStackNavigator();

export default App = () => {
  const [assets] = useAssets([
    require("./assets/images/splash_background.jpg"),
  ]);

  if (assets) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen
            options={{ title: "PDF" }}
            name="form"
            component={FormScreen}
          />
          <Stack.Screen
            options={{ title: "SCANNER" }}
            name="scanner"
            component={ScannerScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="splash"
            component={SplashScreen}
          />
          <Stack.Screen
            options={{ title: "SUMMARY" }}
            name="summary"
            component={SummaryScreen}
          />
          <Stack.Screen
            options={{ title: "" }}
            name="thankyou"
            component={ThankYou}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
};
