import s from "@/styles/stylesGlobal";
import React from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  return (
    <SafeAreaView style={s.Base}>
      <Text style={s.Title}>Settings</Text>
    </SafeAreaView>
  );
}
