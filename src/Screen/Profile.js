import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, ListItem, Icon, Header } from "react-native-elements";
import { LoginContext } from "../Context/Login";
import Color from "../Utils/Color";

export default function Profile({ navigation }) {
  const [state, dispatch] = useContext(LoginContext);
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <View style={styles.container}>
        <ListItem
          containerStyle={styles.containerListItem}
          friction={90} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95} //
          onPress={() => navigation.navigate("ProfileDetail")}
        >
          <Avatar
            size="large"
            rounded
            source={{
              uri: state.userData.photoUrl,
            }}
            title={state.userData.fullName}
          ></Avatar>
          <ListItem.Content>
            <ListItem.Title style={styles.textListItemName}>
              {`${state.userData.fullName} (${state.userData.role})`}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.textListItemMail}>
              {state.userData.email}
            </ListItem.Subtitle>
            <ListItem.Subtitle style={styles.textListItemMail}>
              {state.userData.address}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={styles.containerListItem}
          onPress={() => navigation.navigate("MyLiterature")}
        >
          <Icon type="font-awesome" name="book" color={Color.white} />
          <ListItem.Content>
            <ListItem.Title style={styles.textListItem}>
              My Literature
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          containerStyle={styles.containerListItem}
          onPress={() => props.navigation.navigate("myDownload")}
        >
          <Icon type="feather" name="download" color={Color.white} />
          <ListItem.Content>
            <ListItem.Title style={styles.textListItem}>
              My Download
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          onPress={() => handleLogout()}
          containerStyle={styles.containerListItemEnd}
        >
          <Icon type="feather" name="log-out" color={Color.white} />
          <ListItem.Content>
            <ListItem.Title style={styles.textListItem}>Logout</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondary,
    paddingTop: 0,
    paddingBottom: 0,
  },
  containerListItem: {
    backgroundColor: Color.secondary,
    color: Color.white,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.white,
  },
  containerListItemEnd: {
    backgroundColor: Color.secondary,
    color: Color.white,
  },
  textListItem: {
    color: Color.white,
  },
  textListItemName: {
    color: Color.white,
    fontSize: 15,
    fontWeight: "700",
  },
  textListItemMail: {
    color: Color.white,
    fontSize: 11,
  },
});
