import React from "react";
import { View, Image } from "react-native";
import Color from "../Utils/Color";

export default function Splash({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.secondary,
      }}
    >
      <Image
        source={require("../Assets/logo.png")}
        style={{ marginBottom: 5, width: "90%", resizeMode: "contain" }}
      />
    </View>
  );
}
