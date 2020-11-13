import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormScreen from "./screens/form_screen";
import ScannerScreen from "./screens/scanner_dashboard";
import SplashScreen from "./screens/splash_screen";
import SummaryScreen from "./screens/summary_screen";

const Stack = createStackNavigator();

export default App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="form" component={FormScreen} />
        <Stack.Screen name="scanner" component={ScannerScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
