import React, { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

import { LoginContext } from "../Context/Login";
import { API } from "../Config/Api";
import LiteraturesList from "../Component/LiteratureList";

export default function Collection({ navigation }) {
  const [state, dispatch] = useContext(LoginContext);
  async function refetch() {
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
  }

  return (
    <>
      <Header
        centerComponent={{
          text: "MY COLLECTION",
          style: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
          },
        }}
        containerStyle={styles.headerContainer}
      />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <LiteraturesList
            literatures={state.userData.collections_data}
            refetch={refetch}
          />
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
  headerContainer: {
    backgroundColor: "#161616",
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
  },
});
