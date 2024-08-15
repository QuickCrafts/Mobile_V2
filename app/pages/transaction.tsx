import React from "react";
import { Image, Text, SafeAreaView } from "react-native";

export default function Transaction() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/imagotipo.png")}
        style={{ width: 400, height: 100 }}
      />
      <Text>Transaction</Text>
    </SafeAreaView>
  );
}
