/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CameraContainer from "./components/CameraContainer";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ListScreen from "./components/ListScreen";
import DietScreen from "./components/DietScreen";

import {
  yellowGreen,
  chestnut,
  sapGreen,
  lincolnGreen,
  darkGreen,
} from "./Colors";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: lincolnGreen,
            },
            headerTintColor: yellowGreen,
            headerTitleStyle: {
              fontFamily: "san-serif",
              fontStyle: "italic",
              fontWeight: "bold",
              color: yellowGreen,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Scan a barcode!" component={CameraContainer} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Diet" component={DietScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default App;
