import { Image, Text, SafeAreaView } from "react-native";

export default function Budgtes() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/imagotipo.png")}
        style={{ width: 400, height: 100 }}
      />
      <Text>Budgtes</Text>
    </SafeAreaView>
  );
}
