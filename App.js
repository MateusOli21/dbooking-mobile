import React from "react";
import { AppLoading } from "expo";
import App from "./src";

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

export default function Main() {
  const [fonstLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return <App />;
}
