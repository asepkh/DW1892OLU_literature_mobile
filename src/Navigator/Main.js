import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-elements";

import Home from "../Screen/Home";
import Profile from "../Screen/Profile";
import Collection from "../Screen/Collection";
import AddLiterature from "../Screen/AddLiterature";
// import Verification from "../Screen/Verification";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveBackgroundColor: "#161616",
          activeBackgroundColor: "#161616",
          activeTintColor: "white",
          inactiveTintColor: "white",
          style: {
            borderTopWidth: 1,
            borderTopColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({ focused, color }) => {
              if (focused)
                return <Text style={{ color, fontSize: 12 }}>Home</Text>;
            },
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name="home"
                type="font-awesome"
                color={color}
                size={focused ? 24 : 30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Collection"
          component={Collection}
          options={{
            tabBarLabel: ({ focused, color }) => {
              if (focused)
                return <Text style={{ color, fontSize: 12 }}>Collection</Text>;
            },
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name="bookmark"
                type="font-awesome"
                color={color}
                size={focused ? 26 : 30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddLiterature"
          component={AddLiterature}
          options={{
            tabBarLabel: ({ focused, color }) => {
              if (focused)
                return (
                  <Text style={{ color, fontSize: 12 }}>Add Literature</Text>
                );
            },
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name="book"
                type="font-awesome"
                color={color}
                size={focused ? 26 : 30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({ focused, color }) => {
              if (focused)
                return <Text style={{ color, fontSize: 12 }}>Profile</Text>;
            },
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name="user-circle-o"
                type="font-awesome"
                color={color}
                size={focused ? 26 : 30}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" hidden={false} />
    </>
  );
}
