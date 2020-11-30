import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Avatar, Text, ListItem } from "react-native-elements";
import { LoginContext } from "../Context/Login";

export default function ProfileDetail({ navigation }) {
  const [state, dispatch] = useContext(LoginContext);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

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
      <View style={styles.cardFillContent}>
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
  cardContainer: {
    backgroundColor: "#252525",
    borderColor: "#151515",
    borderRadius: 30,
  },
  cardFill: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardFillContent: {
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
  containerBtnLogout: {
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 9,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "white",
  },
  textBtnLogout: {
    color: "black",
    fontWeight: "500",
    fontSize: 18,
  },
});
