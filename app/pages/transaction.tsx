import s from "@/styles/stylesGlobal";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Transaction() {
  return (
    <SafeAreaView style={s.GeneralPage}>
      <Image
        source={require("@/assets/images/imagotipo.png")}
        style={{ width: 400, height: 100 }}
      />

      <Text style={s.TitleWhite40px}>Transaction</Text>

      <Text style={s.SubWhite28px}>Transacciones</Text>

      <Text style={s.ContentBlue18px}>Content Blue 18px</Text>
      <Text style={s.ContentPurple18px}>Content Purple 18px</Text>
      <Text style={s.ContentBlack18px}>Content Black 18px</Text>

      <Text style={s.MiniBlue14px}>Mini Blue 14px</Text>
      <Text style={s.MiniPurple14px}>Mini Purple 14px</Text>
      <Text style={s.MiniBlack14px}>Mini Black 14px</Text>
    </SafeAreaView>
  );
}
