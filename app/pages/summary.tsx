import React from "react";
import s from "@/styles/stylesGlobal";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Summary() {
  return (
    <SafeAreaView style={s.Base}>
      <Image
        source={require("@/assets/images/imagotipo.png")}
        style={{ width: 400, height: 100 }}
      />

      <Text style={s.Title}>Summary</Text>
    </SafeAreaView>
  );
}
