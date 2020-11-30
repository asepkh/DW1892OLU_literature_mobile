import React, { useState, useContext } from "react";
import { Button } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";

import { useMutation } from "react-query";
import { API, setAuthToken } from "../Config/Api";
import { LoginContext } from "../Context/Login";

export default function Login({ navigation }) {
  const [state, dispatch] = useContext(LoginContext);
  const [email, setEmail] = useState("dumb@ways.id");
  const [password, setPassword] = useState("12345678");

  const [handleLogin, { isLoading, error }] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = { email, password };
      const res = await API.post("/signin", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.data,
      });

      setAuthToken(res.data.data.token);

      try {
        const resAuth = await API.get("/auth");
        dispatch({
          type: "LOAD_USER",
          payload: resAuth.data.data,
        });
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILED",
      });
      Alert.alert("", "Wrong Username Or Password", [{ text: "OK" }], {
        cancelable: true,
      });
    }
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../Assets/logo.png")}
        style={{ marginBottom: 5, width: "90%", resizeMode: "contain" }}
      />
      <ScrollView style={{ width: "100%" }}>
        <TextInput
          style={styles.input}
          placeholderTextColor="darkgray"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="darkgray"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Login"
          buttonStyle={styles.containerBtnLogin}
          onPress={handleLogin}
          loading={isLoading}
        />
        <TouchableOpacity
          style={styles.containerRegister}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.textRegister}>
            <>
              Don't Have Account?{" "}
              <Text style={styles.textRegisterHere}> Register Here</Text>
            </>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    borderRadius: 8,
    color: "black",
    marginVertical: 8,
    fontSize: 16,
  },
  containerBtnLogin: {
    width: "100%",
    marginTop: 9,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#af2e1c",
  },
  containerRegister: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textRegister: {
    fontWeight: "500",
    fontSize: 14,
    color: "#fff",
  },
  textRegisterHere: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#af2e1c",
  },
});
