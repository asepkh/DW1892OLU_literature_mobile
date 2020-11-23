import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Picker } from "@react-native-community/picker";

const Register = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../Assets/logo.png")}
        style={{ marginBottom: 5, width: "85%", resizeMode: "contain" }}
      />
      <ScrollView style={{ width: "100%" }}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"darkgray"}
          placeholder={"Name"}
          value={formData.fullName}
          onChangeText={(value) =>
            setFormData({ ...formData, fullName: value })
          }
        />

        <TextInput
          style={styles.input}
          placeholderTextColor={"darkgray"}
          placeholder={"Email"}
          keyboardType={"email-address"}
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"darkgray"}
          placeholder={"Password"}
          secureTextEntry
          value={formData.password}
          onChangeText={(value) =>
            setFormData({ ...formData, password: value })
          }
        />
        <Picker
          selectedValue={formData.gender}
          style={styles.input}
          onValueChange={(value) => setFormData({ ...formData, gender: value })}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Fem" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholderTextColor={"darkgray"}
          placeholder={"Phone"}
          value={formData.phone}
          onChangeText={(value) => setFormData({ ...formData, phone: value })}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"darkgray"}
          placeholder={"Address"}
          value={formData.address}
          onChangeText={(value) => setFormData({ ...formData, address: value })}
        />
        <TouchableOpacity
          style={styles.containerBtnLogin}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textBtnLogin}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.containerLogin}
        >
          <Text style={styles.textLogin}>
            Already have an account ?{" "}
            <Text style={styles.textLoginHere}>Click Here</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 20,
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
  containerLogin: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    fontSize: 16,
  },
  textLogin: {
    fontWeight: "500",
    fontSize: 14,
    color: "#fff",
  },
  textLoginHere: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#af2e1c",
  },
});

export default Register;
