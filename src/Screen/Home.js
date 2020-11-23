import React, { useState } from "react";
import { useQuery } from "react-query";
import { View, ScrollView, StyleSheet } from "react-native";
import { Icon, Header, Input, Text } from "react-native-elements";
import { API } from "../Config/Api";
import LiteraturesList from "../Component/LiteratureList";
import Logo from "../Component/Logo";

export default function Home({ navigation }) {
  const { isLoading, error, data: literature, refetch } = useQuery(
    "getLiteratures",
    async () => await API.get("/literatures")
  );
  const [search, setSearch] = useState({
    active: false,
    keyword: "",
    keyword_press: "",
  });
  return (
    <>
      <Header
        barStyle="dark-content"
        leftComponent={
          search.active ? (
            <Input
              placeholder="Search"
              leftIcon={{
                type: "font-awesome",
                name: "search",
                color: "white",
              }}
              returnKeyType="search"
              containerStyle={styles.searchContainer}
              inputContainerStyle={styles.searchInputContainer}
              inputStyle={styles.searchInput}
              value={search.keyword}
              onChangeText={(value) => setSearch({ ...search, keyword: value })}
              onKeyPress={() =>
                setSearch({ ...search, keyword_press: search.keyword })
              }
            />
          ) : (
            <Logo style={styles.leftHeader} />
          )
        }
        rightComponent={
          <View style={styles.rightHeader}>
            <Icon
              name={search.active ? "close" : "search"}
              type="font-awesome"
              color="white"
              size={25}
              containerStyle={styles.headerContainerButton}
              onPress={() => setSearch({ ...search, active: !search.active })}
            />
            <Icon
              name="sliders"
              type="font-awesome"
              color="white"
              containerStyle={styles.headerContainerButton}
            />
          </View>
        }
        containerStyle={styles.headerContainer}
      />
      <ScrollView>
        <View style={styles.bodyContainer}>
          {isLoading ? (
            <Text style={{ color: "white", justifyContent: "center" }}>
              Loading ....
            </Text>
          ) : (
            <LiteraturesList
              literatures={literature.data.data}
              refetch={refetch}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "400%",
    marginTop: 25,
  },
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
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
  },
  leftHeader: {
    width: "250%",
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
