import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Button, Header } from "react-native-elements";
import Color from "../Utils/Color";

export default function AddLiterature({ navigation }) {
  const [formData, setFormData] = useState({
    title: "",
    publication: "",
    author: "",
    isbn: "",
    pages: "",
  });
  return (
    <>
      <Header
        centerComponent={{
          text: "ADD LITERATURE",
          style: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
          },
        }}
        containerStyle={styles.headerContainer}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#161616",
          padding: 15,
        }}
      >
        <ScrollView style={{ width: "100%" }}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"darkgray"}
            placeholder={"Title"}
            value={formData.title}
            onChangeText={(value) => setFormData({ ...formData, title: value })}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"darkgray"}
            placeholder={"Publication Date"}
            value={formData.publication}
            onChangeText={(value) =>
              setFormData({ ...formData, publication: value })
            }
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"darkgray"}
            placeholder={"Author Name"}
            value={formData.author}
            onChangeText={(value) =>
              setFormData({ ...formData, author: value })
            }
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"darkgray"}
            placeholder={"ISBN"}
            value={formData.isbn}
            onChangeText={(value) => setFormData({ ...formData, isbn: value })}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={"darkgray"}
            placeholder={"Pages Number"}
            value={formData.pages}
            onChangeText={(value) => setFormData({ ...formData, pages: value })}
          />
          <View
            style={{
              flexDirection: "row",
              marginVertical: 8,
              justifyContent: "center",
            }}
          >
            <Button
              title="Attache File"
              buttonStyle={{
                backgroundColor: Color.white,
                marginRight: 10,
                paddingHorizontal: 15,
              }}
              type="outline"
            />
            <Button
              title="Attache Cover"
              buttonStyle={{
                backgroundColor: Color.white,
                paddingHorizontal: 15,
              }}
              type="outline"
            />
          </View>
          <Button
            title="Add Book"
            buttonStyle={{
              marginTop: 8,
              width: "100%",
              backgroundColor: Color.primary,
            }}
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#161616",
  },
  headerContainer: {
    backgroundColor: "#161616",
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
  },
  input: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    borderRadius: 8,
    color: "black",
    fontSize: 16,
    marginVertical: 8,
  },
  containerLogin: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
