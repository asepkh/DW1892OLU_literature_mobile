import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image, BottomSheet, ListItem } from "react-native-elements";
import { useMutation } from "react-query";

import { LoginContext } from "../Context/Login";
import { API } from "../Config/Api";

const LiteratureCard = ({ id, title, author, year, thumbnail, navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [state] = useContext(LoginContext);

  useEffect(() => {
    if (
      state.userData.collections_data.some((collection) => collection.id === id)
    ) {
      setBookmarked(true);
    }
  }, []);

  const [collection] = useMutation(async (params) => {
    const { id, isDelete } = params;
    try {
      isDelete
        ? API.delete(`/collection/${id}`)
        : await API.post(`/collection/${id}`);

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
    } catch (error) {
      console.log(error);
    }
  });

  const addBookmark = () => {
    collection({ id, isDelete: false });
    setBookmarked(true);
  };

  const removeBookmark = () => {
    collection({ id, isDelete: true });
    setBookmarked(false);
  };

  let list;

  if (!bookmarked)
    list = [
      {
        title: "Add to My Collections",
        containerStyle: { backgroundColor: "#161616" },
        titleStyle: { color: "white" },
        onPress: () => {
          addBookmark();
          setIsVisible(false);
        },
      },
      {
        title: "Cancel",
        containerStyle: { backgroundColor: "#af2e1c" },
        titleStyle: { color: "white" },
        onPress: () => setIsVisible(false),
      },
    ];
  else
    list = [
      {
        title: "Remove from My Collections",
        containerStyle: { backgroundColor: "#161616" },
        titleStyle: { color: "white" },
        onPress: () => {
          removeBookmark();
          setIsVisible(false);
        },
      },
      {
        title: "Cancel",
        containerStyle: { backgroundColor: "#af2e1c" },
        titleStyle: { color: "white" },
        onPress: () => setIsVisible(false),
      },
    ];

  return (
    <View>
      <View style={styles.card}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.cover}
          resizeMode="contain"
          onLongPress={() => {
            setIsVisible(true);
          }}
          onPress={() => navigation.navigate("Detail", { id })}
        />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.idContainer}>
          <View style={{ flex: 3 }}>
            <Text style={styles.author}>{author}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.year}>{year}</Text>
          </View>
        </View>
      </View>
      <BottomSheet isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
  cover: {
    marginBottom: 10,
    width: "100%",
    height: 220,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 5,
  },
  idContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    color: "grey",
    fontSize: 11,
  },
  year: {
    color: "grey",
    fontSize: 11,
    textAlign: "right",
  },
});

export default LiteratureCard;
