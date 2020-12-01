import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Avatar, Text } from "react-native-elements";
import { LoginContext } from "../Context/Login";

export default function ProfileDetail({ navigation }) {
  const [state, dispatch] = useContext(LoginContext);

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        containerStyle={{ borderColor: "white", borderWidth: 2 }}
        source={{
          uri: state.userData.photoUrl,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.textDesc}>Email</Text>
        <Text style={styles.textNote}>{state.userData.email}</Text>
        <Card.Divider />
        <Text style={styles.textDesc}>Phone</Text>
        <Text style={styles.textNote}>{state.userData.phone}</Text>
        <Card.Divider />
        <Text style={styles.textDesc}>Name</Text>
        <Text style={styles.textNote}>{state.userData.fullName}</Text>
        <Card.Divider />
        <Text style={styles.textDesc}>Gender</Text>
        <Text style={styles.textNote}>{state.userData.gender}</Text>
        <Card.Divider />
        <Text style={styles.textDesc}>Address</Text>
        <Text style={styles.textNote}>{state.userData.address}</Text>
        <Card.Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  content: {
    marginTop: 15,
    flexDirection: "column",
  },
  textDesc: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  textNote: {
    color: "white",
  },
});
