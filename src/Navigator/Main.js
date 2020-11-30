import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text } from "react-native-elements";

import ProfileNavigator from "../Navigator/Profile";
import Home from "../Screen/Home";
import Collection from "../Screen/Collection";
import AddLiterature from "../Screen/AddLiterature";

const TabList = [
  {
    name: "Home",
    title: "Home",
    component: Home,
    icon_name: "home",
    icon_type: "font-awesome",
  },
  {
    name: "Collection",
    title: "Collection",
    component: Collection,
    icon_name: "bookmark",
    icon_type: "font-awesome",
  },
  {
    name: "AddLiterature",
    title: "Add Literature",
    title_size: 11,
    component: AddLiterature,
    icon_name: "md-add-circle",
    icon_type: "ionicon",
  },
  {
    name: "Profile",
    title: "Profile",
    component: ProfileNavigator,
    icon_name: "user-circle-o",
    icon_type: "font-awesome",
  },
];

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
        {TabList.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: ({ focused, color }) => {
                if (focused)
                  return (
                    <Text style={{ color, fontSize: tab.title_size || 12 }}>
                      {tab.title}
                    </Text>
                  );
              },
              tabBarIcon: ({ focused, color }) => (
                <Icon
                  name={tab.icon_name}
                  type={tab.icon_type}
                  color={color}
                  size={focused ? 26 : 30}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
      <StatusBar style="light" hidden={false} />
    </>
  );
}
