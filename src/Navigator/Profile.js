import React from "react";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import Profile from "../Screen/Profile";
import ProfileDetail from "../Screen/ProfileDetail";
import MyLiterature from "../Screen/MyLiterature";

const ProfileStack = createStackNavigator();
export default function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#161616",
          borderBottomColor: "white",
          borderBottomWidth: 1.5,
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 18,
          fontWeight: "700",
        },
        headerTitleAlign: "center",
      }}
      initialRouteName="Profile"
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "MY PROFILE" }}
      />
      <ProfileStack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{
          title: "PROFILE DETAIL",
          headerLeft: (props) => (
            <HeaderBackButton {...props} tintColor="white" />
          ),
        }}
      />
      <ProfileStack.Screen
        name="MyLiterature"
        component={MyLiterature}
        options={{
          title: "MY LITERATURE",
          headerLeft: (props) => (
            <HeaderBackButton {...props} tintColor="white" />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}
