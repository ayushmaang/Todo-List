import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootComponent from "./nav/RootComponent";

export default function App() {
  return (
    <NavigationContainer>
      <RootComponent />
    </NavigationContainer>
  );
}
