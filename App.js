import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
import NumberScreen from "./screens/NumberScreen";
import VerificationScreen from "./screens/VerificationScreen";
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/locationscreen"
import LoginScreen from "./screens/loginscreen"
import SignupScreen from "./screens/signupscreen"
import BeverageScreen from "./screens/Beverages"; 
import ExploreScreen from "./screens/Explore";
import ProductDetail from "./screens/ProductDetail";
import FilterScreen from "./screens/FilterScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Explore">
        <Stack.Screen name="NumberScreen" component={NumberScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Beverages" component={BeverageScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
