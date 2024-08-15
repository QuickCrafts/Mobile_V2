import React from "react";
import s from "@/styles/stylesGlobal";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Transaction() {
  return (
    <SafeAreaView style={s.Base}>
      <Text style={s.Title}>Transaction</Text>
    </SafeAreaView>
  );
}
