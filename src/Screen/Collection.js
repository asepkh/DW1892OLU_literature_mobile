import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

import { LoginContext } from "../Context/Login";
import LiteraturesList from "../Component/LiteratureList";
import Logo from "../Component/Logo";

export default function Collection({ navigation }) {
  const [state] = useContext(LoginContext);
  return (
    <>
      <Header
        barStyle="dark-content"
        centerComponent={<Logo style={styles.centerHeader} />}
        containerStyle={styles.headerContainer}
      />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <LiteraturesList literatures={state.userData.collections_data} />
        </View>
      </ScrollView>
      <StatusBar style="light" hidden={false} />
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    margin: 15,
  },
  searchInput: {
    paddingLeft: 10,
    color: "white",
  },
  searchInputContainer: {
    borderBottomWidth: 0,
  },
  headerContainer: {
    backgroundColor: "#161616",
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
  },
  centerHeader: {
    width: "80%",
    resizeMode: "contain",
    marginBottom: 10,
    marginLeft: 5,
  },
  rightHeader: {
    flexDirection: "row",
  },
  headerContainerButton: {
    marginLeft: 10,
    width: 40,
  },
});
