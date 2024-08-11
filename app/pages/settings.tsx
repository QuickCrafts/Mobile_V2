import s from "@/styles/stylesGlobal";
import { Image, Text, SafeAreaView } from "react-native";

export default function Settings() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={s.TitleText_Purple_44px}>Settings</Text>
    </SafeAreaView>
  );
}
