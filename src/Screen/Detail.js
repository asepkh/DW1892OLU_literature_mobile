import React from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Header, Text, Image } from "react-native-elements";
import { useQuery } from "react-query";
import { API } from "../Config/Api";
import { HeaderBackButton } from "@react-navigation/stack";

// import { StatusBar } from "expo-status-bar";
// import { LoginContext } from "../Context/Login";

export default function Detail({ route, navigation }) {
  const { id } = route.params;
  // const [state] = useContext(LoginContext);
  const { isLoading, error, data: literature, refetch } = useQuery(
    `getLiteraturesDetail?id=${id}`,
    async () => await API.get(`/literature/${id}`)
  );

  return (
    <>
      <Header
        centerComponent={{
          text: "LITERATURE DETAIL",
          style: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
          },
        }}
        leftComponent={(props) => (
          <HeaderBackButton
            onPress={() => navigation.goBack()}
            tintColor="white"
          />
        )}
        containerStyle={styles.headerContainer}
      />
      <ScrollView>
        <View style={styles.content}>
          {isLoading || error ? (
            <Text style={styles.textLoading}>
              {!error ? "Loading ...." : `Error: ${error}`}
            </Text>
          ) : (
            <>
              <Image
                source={{ uri: literature.data.data.thumbnailUrl }}
                style={styles.image}
                resizeMode="contain"
                PlaceholderContent={<ActivityIndicator />}
              />
              <Text style={styles.textTitle}>{literature.data.data.title}</Text>

              <Text style={styles.textDesc}>Publication</Text>
              <Text style={styles.textNote}>
                {literature.data.data.publication.substring(0, 10)}
              </Text>

              <Text style={styles.textDesc}>Author</Text>
              <Text style={styles.textNote}>{literature.data.data.author}</Text>

              <Text style={styles.textDesc}>ISBN</Text>
              <Text style={styles.textNote}>{literature.data.data.isbn}</Text>

              <Text style={styles.textDesc}>Uploaded by</Text>
              <Text style={styles.textNote}>
                {literature.data.data.uploader.fullName}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#161616",
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
  },
  image: {
    marginBottom: 10,
    width: "100%",
    height: 350,
    borderRadius: 10,
    resizeMode: "contain",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  content: {
    padding: 25,
    flexDirection: "column",
  },
  textTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    marginBottom: 20,
  },
  textDesc: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  textNote: {
    color: "white",
    marginBottom: 10,
  },
  textLoading: {
    color: "white",
    textAlign: "center",
  },
});
