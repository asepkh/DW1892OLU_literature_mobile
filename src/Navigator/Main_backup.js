import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./Stack/Home";
import ProfileStack from "./Stack/Profile";
import CollectionStack from "./Stack/Collection";
import AddLiteratureStack from "./Stack/AddLiterature";
import VerificationStack from "./Stack/Verification";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        backgroundColor: "#161616",
        activeBackgroundColor: "#af2e1c",
        activeTintColor: "white",
        inactiveTintColor: "white",
        itemStyle: { marginVertical: 5 },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: "Search" }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="Profile"
        options={{ drawerLabel: "Profile" }}
        component={ProfileStack}
      />
      <Drawer.Screen
        name="Collection"
        options={{ drawerLabel: "Collection" }}
        component={CollectionStack}
      />
      <Drawer.Screen
        name="AddLiterature"
        options={{ drawerLabel: "Add Literature" }}
        component={AddLiteratureStack}
      />
      <Drawer.Screen
        name="Verification"
        options={{ drawerLabel: "Verification | Admin Page" }}
        component={VerificationStack}
      />
    </Drawer.Navigator>
  );
}
