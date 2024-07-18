import { Image, Text, SafeAreaView } from "react-native";
import React from "react";

export default function Transactions() {
  return (
    <SafeAreaView>
      <Image
        source={require("@/assets/images/imagotipo.png")}
        style={{ width: 400, height: 100 }}
      />
      <Text>Transactions</Text>
    </SafeAreaView>
  );
}
