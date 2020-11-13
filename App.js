import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormScreen from "./screens/form_screen";
import ScannerScreen from "./screens/scanner_dashboard";
import SplashScreen from "./screens/splash_screen";
import SummaryScreen from "./screens/summary_screen";
import ThankYou from "./screens/thank_you";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="form" component={FormScreen} />
        <Stack.Screen name="scanner" component={ScannerScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="summary" component={SummaryScreen} />
        <Stack.Screen name="thankyou" component={ThankYou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
