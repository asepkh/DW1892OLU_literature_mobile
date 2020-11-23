import React from "react";
import { Image } from "react-native";
import logoSource from "../Assets/logo.png";

export default function Logo(props) {
  return <Image {...props} source={logoSource} />;
}

Logo.defaultProps = {
  style: {
    width: "75%",
    resizeMode: "contain",
  },
};
