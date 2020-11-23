import React, { useContext, useEffect } from "react";
// import { View, Image } from 'react-native';
// import Logo from './Assets/logo.png';
// import Splash from './Screen/Splash';

import { AsyncStorage } from "@react-native-community/async-storage";
import { API, setAuthToken } from "./src/Config/Api";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainNavigator from "./src/Navigator/Main";
import AuthNavigator from "./src/Navigator/Auth";

import Splash from "./src/Screen/Splash";

import { LoginContext } from "./src/Context/Login";

const RootStack = createStackNavigator();
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      setAuthToken(token);
    }
  } catch (error) {}
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#af2e1c",
    background: "#161616",
  },
};

export default function Root(props) {
  const [state, dispatch] = useContext(LoginContext);
  getToken();

  useEffect(() => {
    async function loadUser() {
      try {
        try {
          const res = await API.get("/auth");

          dispatch({
            type: "LOAD_USER",
            payload: res.data.data,
          });
          console.log(res);
        } catch (err) {
          dispatch({
            type: "AUTH_ERROR",
          });
          console.log(err);
        }
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
        console.log(err);
      }
    }

    loadUser();
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        {state.authLoading ? (
          <RootStack.Screen name="Splash" component={Splash} />
        ) : state.loading ? (
          <RootStack.Screen name="Splash" component={Splash} />
        ) : state.isLogin ? (
          <RootStack.Screen name="MainNavigator" component={MainNavigator} />
        ) : (
          <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
