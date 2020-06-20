import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";

import { theme } from "./styles/global";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.primaryDark} />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
