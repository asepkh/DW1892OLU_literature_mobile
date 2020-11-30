import React from "react";
import { View, Text } from "react-native";
import Color from "../Utils/Color";

export default function Verification({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.secondary,
      }}
    >
      <Text style={{ color: "white" }}>Verification Screen</Text>
    </View>
  );
}
