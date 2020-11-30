import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { useQuery } from "react-query";
import { API } from "../Config/Api";

import { LoginContext } from "../Context/Login";
import LiteraturesList from "../Component/LiteratureList";

export default function MyLiterature({ navigation }) {
  const [state] = useContext(LoginContext);

  const { isLoading, error, data: literature, refetch } = useQuery(
    `getLiteraturesByUploader?uploader=${state.userData.id}`,
    async () => await API.get(`/literatures?uploader=${state.userData.id}`)
  );

  return (
    <ScrollView>
      <View style={styles.bodyContainer}>
        {isLoading || error ? (
          <Text style={styles.textLoading}>
            {!error ? "Loading ...." : `Error: ${error}`}
          </Text>
        ) : (
          <LiteraturesList
            profile={true}
            literatures={literature.data.data}
            refetch={refetch}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 15,
  },
  textLoading: {
    color: "white",
    textAlign: "center",
  },
});
