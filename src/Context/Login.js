import React, { createContext, useReducer } from "react";
import { AsyncStorage } from "@react-native-community/async-storage";
export const LoginContext = createContext();
const initialState = {
  isLogin: false,
  userData: null,
  loading: false,
  authLoading: true,
};

const setToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
    setAuthToken(token);
  } catch (error) {}
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("token");
  } catch (error) {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      setToken(action.payload.token);
      return {
        ...state,
        isLogin: true,
        userData: action.payload,
        loading: true,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLogin: false,
        userData: null,
        loading: false,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        isLogin: false,
        userData: null,
        loading: false,
        authLoading: false,
      };
    case "LOAD_USER":
      return {
        ...state,
        isLogin: true,
        userData: action.payload,
        loading: false,
        authLoading: false,
      };
    case "REGISTER":
      return {
        ...state,
      };
    case "LOGOUT":
      removeToken();
      return {
        ...state,
        isLogin: false,
        userData: null,
        loading: false,
      };
    default:
      throw new Error();
  }
};

export default function LoginContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={[state, dispatch]}>
      {props.children}
    </LoginContext.Provider>
  );
}
