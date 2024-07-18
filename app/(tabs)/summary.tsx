import { Image, Text, SafeAreaView } from "react-native";
import React from "react";

export default function Summary() {
  return (
    <SafeAreaView>
      <Image
        source={require("@/assets/images/imagotipo.png")}
        style={{ width: 400, height: 100 }}
      />
      <Text>Summary</Text>
    </SafeAreaView>
  );
}
