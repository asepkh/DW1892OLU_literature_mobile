import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

import Root from "./Root";
import LoginContextProvider from "./src/Context/Login";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <LoginContextProvider>
      <Root />
      <StatusBar style="light" hidden={false} />
    </LoginContextProvider>
  );
}
