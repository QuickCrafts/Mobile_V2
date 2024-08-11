import { StyleSheet } from "react-native";

const colors = {
  defaultBackgroundColor: "#ffffff",

  grayLight: "#f9fbff",
  grayLight2: "#dddde1",
  gray: "#6c6c79",
  black: "#34343d",
  white: "#ffffff",

  primaryMain: "#0ec8e1",
  primaryLight: "#d8f8fc",
  primaryDark: "#076a77",

  secondaryMain: "#890de0",
  secondaryDark: "#662694",
  secondaryLight: "#eac1ff",

  accentMain: "#2be002",
  accentLight: "#efffdc",
  accentDark: "#2f9418",
};

const styles = StyleSheet.create({
  defaultBackgroundColor: {
    color: colors.defaultBackgroundColor,
  },
  grayLight: {
    color: colors.grayLight,
  },
  grayLight2: {
    color: colors.grayLight2,
  },
  gray: {
    color: colors.gray,
  },
  black: {
    color: colors.black,
  },
  white: {
    color: colors.white,
  },
  primaryMain: {
    color: colors.primaryMain,
  },
  primaryLight: {
    color: colors.primaryLight,
  },
  primaryDark: {
    color: colors.primaryDark,
  },
  secondaryMain: {
    color: colors.secondaryMain,
  },
  secondaryLight: {
    color: colors.secondaryLight,
  },
  secondaryDark: {
    color: colors.secondaryDark,
  },
  accentMain: {
    color: colors.accentMain,
  },
  accentLight: {
    color: colors.accentLight,
  },
  accentDark: {
    color: colors.accentDark,
  },

  TitleBlue40px: {
    color: colors.primaryDark,
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 42,
  },
  TitlePurple40px: {
    color: colors.secondaryDark,
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 42,
  },
  TitleBlack40px: {
    color: colors.black,
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 42,
  },

  SubBlue28px: {
    color: colors.primaryDark,
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 33,
  },
  SubPurple28px: {
    color: colors.secondaryDark,
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 33,
  },
  SubBlack28px: {
    color: colors.black,
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 33,
  },

  ContentBlue18px: {
    color: colors.primaryDark,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },
  ContentPurple18px: {
    color: colors.secondaryDark,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },
  ContentBlack18px: {
    color: colors.black,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },

  MiniBlue14px: {
    color: colors.primaryDark,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },
  MiniPurple14px: {
    color: colors.secondaryDark,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },
  MiniBlack14px: {
    color: colors.black,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 24,
  },

  Text_Clicker_18px: {
    color: colors.primaryDark,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },
  Text_Clicker_18px_italic: {
    color: colors.primaryDark,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: 24,
  },
  Text_Clicker_Light_18px: {
    color: colors.primaryMain,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    textDecorationLine: "underline",
  },
});

export default styles;
