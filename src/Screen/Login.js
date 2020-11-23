import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
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

  // const handleLogin = () => {
  //     dispatch({
  //         type: "LOGIN_SUCCESS",
  //         payload: {
  //             name: "Andrea Hirata",
  //             email: "andreahirata@gmail.com",
  //             password: "123456789",
  //             gender: "Male",
  //             phone: "0813-3333-2222",
  //             address: "JL. Pegangsaan Timur, Jakarta",
  //             photoUrl:
  //                 "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1553850277/zxw7yum1w0wx0ynkhg5r.jpg",

  //         },
  //     });
  // }

  return (
    <View style={styles.container}>
      <Image
        source={require("../Assets/logo.png")}
        style={{ marginBottom: 5, width: "90%", resizeMode: "contain" }}
      />

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
      {/* {isLoading
                ? <Text style={[styles.textRegister]}>Loading ....</Text>
            :*/}
      <TouchableOpacity style={styles.containerBtnLogin} onPress={handleLogin}>
        <Text style={styles.textBtnLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerRegister}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={[styles.textRegister]}>
          <>
            Don't Have Account?{" "}
            <Text style={styles.textRegisterHere}> Register Here</Text>
          </>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: "center",
    backgroundColor: "#161616",
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 9,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#af2e1c",
  },
  textBtnLogin: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
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
