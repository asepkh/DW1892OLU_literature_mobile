import React, { useContext, useEffect } from "react";
import { View, Image } from "react-native";
// import { LoginContext } from '../Context/Login';

export default function Splash({ navigation }) {
  // const [state] = useContext(LoginContext);
  // useEffect(() => {
  // 	setTimeout(() => {
  // 		navigation.navigate(state.isLogin ? "Home" : "Login"
  // 		);
  // 	}, 3000);
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#161616",
      }}
    >
      <Image
        source={require("../Assets/logo.png")}
        style={{ marginBottom: 5, width: "90%", resizeMode: "contain" }}
      />
    </View>
  );
}
